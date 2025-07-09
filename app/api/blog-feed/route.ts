import { NextResponse } from "next/server"
import type { BlogPost, BlogFeedResponse } from "@/types/blog"

// Helper function to strip HTML tags
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&[^;]+;/g, " ")
    .trim()
}

// Enhanced function to extract first image from HTML content
function extractFirstImage(html: string): string | undefined {
  if (!html) return undefined

  // Try multiple patterns for different image formats
  const imagePatterns = [
    // Standard img tag with src
    /<img[^>]+src=["']([^"']+)["'][^>]*>/i,
    // Img tag with data-src (lazy loading)
    /<img[^>]+data-src=["']([^"']+)["'][^>]*>/i,
    // Figure with img
    /<figure[^>]*>[\s\S]*?<img[^>]+src=["']([^"']+)["'][^>]*>[\s\S]*?<\/figure>/i,
    // Picture element
    /<picture[^>]*>[\s\S]*?<img[^>]+src=["']([^"']+)["'][^>]*>[\s\S]*?<\/picture>/i,
    // Any src attribute in quotes
    /src=["']([^"']*\.(jpg|jpeg|png|gif|webp)[^"']*)["']/i,
    // Substack specific patterns
    /<img[^>]+src=["']([^"']*substackcdn[^"']*)["'][^>]*>/i,
  ]

  for (const pattern of imagePatterns) {
    const match = html.match(pattern)
    if (match && match[1]) {
      let imageUrl = match[1].trim()

      // Clean up the URL
      if (imageUrl.startsWith("//")) {
        imageUrl = "https:" + imageUrl
      } else if (imageUrl.startsWith("/")) {
        imageUrl = "https://substackcdn.com" + imageUrl
      }

      // Validate it's a proper image URL
      if (imageUrl.match(/\.(jpg|jpeg|png|gif|webp)(\?.*)?$/i) || imageUrl.includes("substackcdn")) {
        return imageUrl
      }
    }
  }

  return undefined
}

// Helper function to calculate reading time (assuming 200 words per minute)
function calculateReadingTime(text: string): number {
  const words = text.split(/\s+/).length
  const minutes = Math.ceil(words / 200)
  return Math.max(1, minutes)
}

// Helper function to truncate text
function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength).replace(/\s+\S*$/, "") + "..."
}

// Helper function to parse XML (simple RSS parser)
function parseRSSFeed(xmlText: string): BlogPost[] {
  const posts: BlogPost[] = []

  try {
    // Extract items using regex (simple approach for RSS)
    const itemRegex = /<item>([\s\S]*?)<\/item>/gi
    const items = xmlText.match(itemRegex) || []

    console.log(`Found ${items.length} items in RSS feed`)

    items.forEach((item, index) => {
      try {
        // Extract title
        const titleMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/i) || item.match(/<title>(.*?)<\/title>/i)
        const title = titleMatch ? titleMatch[1].trim() : `Post ${index + 1}`

        // Extract link
        const linkMatch = item.match(/<link>(.*?)<\/link>/i)
        const link = linkMatch ? linkMatch[1].trim() : ""

        // Extract description/content - try multiple fields
        const descMatch =
          item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/i) ||
          item.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/i) ||
          item.match(/<description>([\s\S]*?)<\/description>/i) ||
          item.match(/<content:encoded>([\s\S]*?)<\/content:encoded>/i)

        const rawDescription = descMatch ? descMatch[1] : ""

        // Also try to get content from other fields
        const contentMatch = item.match(/<content><!\[CDATA\[([\s\S]*?)\]\]><\/content>/i)
        const fullContent = contentMatch ? contentMatch[1] : rawDescription

        // Extract publication date
        const pubDateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/i)
        const pubDate = pubDateMatch ? pubDateMatch[1].trim() : new Date().toISOString()

        // Extract featured image from both description and content
        let featuredImage = extractFirstImage(rawDescription)
        if (!featuredImage && fullContent !== rawDescription) {
          featuredImage = extractFirstImage(fullContent)
        }

        // Also check for enclosure tags (podcast/media)
        if (!featuredImage) {
          const enclosureMatch = item.match(/<enclosure[^>]+url=["']([^"']+)["'][^>]*type=["']image\/[^"']*["'][^>]*>/i)
          if (enclosureMatch) {
            featuredImage = enclosureMatch[1]
          }
        }

        // Clean description
        const cleanDescription = stripHtml(rawDescription)
        const truncatedDescription = truncateText(cleanDescription, 200)

        // Calculate reading time
        const readingTime = calculateReadingTime(cleanDescription)

        // Create unique ID
        const id = `post-${index}-${Date.now()}`

        if (title && link) {
          const post: BlogPost = {
            id,
            title,
            link,
            description: truncatedDescription,
            pubDate,
            featuredImage,
            readingTime,
          }

          console.log(`Post ${index + 1}: "${title}" - Image: ${featuredImage ? "Found" : "Not found"}`)

          posts.push(post)
        }
      } catch (error) {
        console.error(`Error parsing post ${index}:`, error)
      }
    })
  } catch (error) {
    console.error("Error parsing RSS feed:", error)
  }

  return posts
}

export async function GET() {
  try {
    const rssUrl = "https://tomhinept.substack.com/feed"

    console.log("Fetching RSS feed from:", rssUrl)

    const response = await fetch(rssUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; Blog Reader/1.0)",
        Accept: "application/rss+xml, application/xml, text/xml",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
      // Add timeout and error handling
      signal: AbortSignal.timeout(10000), // 10 second timeout
    })

    if (!response.ok) {
      console.error(`RSS fetch failed with status: ${response.status}`)
      throw new Error(`Failed to fetch RSS feed: ${response.status} ${response.statusText}`)
    }

    const xmlText = await response.text()
    console.log("RSS feed length:", xmlText.length)

    if (!xmlText || xmlText.length === 0) {
      throw new Error("Empty RSS feed received")
    }

    // Log a sample of the XML to see the structure
    const sampleLength = Math.min(1000, xmlText.length)
    console.log("RSS feed sample:", xmlText.substring(0, sampleLength))

    const posts = parseRSSFeed(xmlText)

    console.log(`Successfully parsed ${posts.length} posts`)

    const result: BlogFeedResponse = {
      posts: posts.slice(0, 12), // Limit to 12 most recent posts
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error("Error fetching blog feed:", error)

    // Return mock data as fallback when RSS feed fails
    const mockPosts: BlogPost[] = [
      {
        id: "mock-1",
        title: "The Science of Body Transformation",
        link: "https://tomhinept.substack.com",
        description:
          "Understanding the fundamental principles behind successful body transformation and how to apply them to your fitness journey.",
        pubDate: new Date().toISOString(),
        readingTime: 5,
      },
      {
        id: "mock-2",
        title: "Nutrition Strategies for Busy Professionals",
        link: "https://tomhinept.substack.com",
        description:
          "Practical nutrition tips and meal planning strategies designed specifically for high-performing professionals with demanding schedules.",
        pubDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        readingTime: 7,
      },
      {
        id: "mock-3",
        title: "Building Sustainable Training Habits",
        link: "https://tomhinept.substack.com",
        description:
          "How to create and maintain consistent training routines that fit into your lifestyle and deliver long-term results.",
        pubDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
        readingTime: 6,
      },
    ]

    const fallbackResult: BlogFeedResponse = {
      posts: mockPosts,
      error: "Unable to load latest posts. Showing sample content.",
    }

    // Return fallback data instead of error status
    return NextResponse.json(fallbackResult)
  }
}
