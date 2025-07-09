import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Tom Hine - Body Transformation & Performance Coach",
  description:
    "Elite body transformation and performance coach helping driven professionals to supercharge their lives.",
  icons: {
    icon: [
      { url: "/favicon-new.png", sizes: "any" },
      { url: "/favicon-new.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-new.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon-new.png", sizes: "180x180", type: "image/png" }],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Primary favicon - new rounded design */}
        <link rel="icon" href="/favicon-new.png" sizes="any" />

        {/* PNG favicons for better quality */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-new.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-new.png" />

        {/* Apple touch icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-new.png" />

        {/* Additional meta for favicon */}
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>
        {children}

        {/* Mailchimp Popup Script - exactly as provided */}
        <script
          id="mcjs"
          dangerouslySetInnerHTML={{
            __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/08db2dfe47b639c538cb463f8/903ca3af86046ae3024cb592e.js");`,
          }}
        />
      </body>
    </html>
  )
}
