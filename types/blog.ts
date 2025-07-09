export interface BlogPost {
  id: string
  title: string
  link: string
  description: string
  pubDate: string
  featuredImage?: string
  readingTime: number
}

export interface BlogFeedResponse {
  posts: BlogPost[]
  error?: string
}
