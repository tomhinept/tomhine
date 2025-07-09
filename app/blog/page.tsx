import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import { Calendar, ExternalLink } from "lucide-react"
import type { BlogPost } from "@/types/blog"

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    // For build time, return mock data to avoid localhost fetch issues
    if (process.env.NODE_ENV === "production" && !process.env.VERCEL_URL) {
      return getMockPosts()
    }

    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

    const response = await fetch(`${baseUrl}/api/blog-feed`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    })

    if (!response.ok) {
      console.error("Blog API response not ok:", response.status)
      return getMockPosts()
    }

    const data = await response.json()
    console.log("Blog API response:", data)

    // Return posts from API or fallback to mock
    return data.posts || getMockPosts()
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return getMockPosts()
  }
}

function getMockPosts(): BlogPost[] {
  return [
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
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e90ff] mb-6">Blog & Insights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Expert advice on fitness, nutrition, and performance
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Featured Image */}
              {post.featuredImage && (
                <div className="aspect-video relative bg-gray-200">
                  <Image
                    src={post.featuredImage || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      // Hide image if it fails to load
                      e.currentTarget.style.display = "none"
                    }}
                  />
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(post.pubDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h2>

                <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>

                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#1e90ff] font-semibold hover:text-blue-600 transition-colors"
                >
                  Read Full Article
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
