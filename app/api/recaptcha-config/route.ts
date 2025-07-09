import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Use server-only environment variable (no NEXT_PUBLIC_ prefix)
    const siteKey = process.env.RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Test key as fallback

    return NextResponse.json({
      siteKey: siteKey,
    })
  } catch (error) {
    console.error("Error getting reCAPTCHA config:", error)
    return NextResponse.json({ error: "Failed to get reCAPTCHA configuration" }, { status: 500 })
  }
}
