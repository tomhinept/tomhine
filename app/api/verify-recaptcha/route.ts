import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json()

    if (!token) {
      return NextResponse.json({ error: "No reCAPTCHA token provided" }, { status: 400 })
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY
    if (!secretKey) {
      console.warn("RECAPTCHA_SECRET_KEY not configured, skipping verification")
      return NextResponse.json({ success: true, score: 1.0 })
    }

    // Verify the token with Google
    const verifyResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${token}`,
    })

    const verifyData = await verifyResponse.json()

    if (verifyData.success) {
      // For reCAPTCHA v3, check the score (0.0 to 1.0, higher is better)
      const score = verifyData.score || 0
      const threshold = 0.5 // Adjust this threshold as needed

      if (score >= threshold) {
        return NextResponse.json({
          success: true,
          score: score,
          action: verifyData.action,
        })
      } else {
        return NextResponse.json(
          {
            error: "reCAPTCHA verification failed - low score",
            score: score,
          },
          { status: 400 },
        )
      }
    } else {
      return NextResponse.json(
        {
          error: "reCAPTCHA verification failed",
          details: verifyData["error-codes"],
        },
        { status: 400 },
      )
    }
  } catch (error) {
    console.error("reCAPTCHA verification error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
