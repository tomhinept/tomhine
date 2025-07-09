import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      firstName,
      lastName,
      email,
      phone,
      age,
      fitnessLevel,
      goals,
      previousExperience,
      timeCommitment,
      startDate,
      additionalInfo,
      agreeToTerms,
      agreeToMarketing,
      serviceType,
      serviceName,
    } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !agreeToTerms) {
      return NextResponse.json({ error: "Please fill in all required fields" }, { status: 400 })
    }

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // For demo purposes, we'll just log the data and return success
    console.log("Signup data received:", {
      firstName,
      lastName,
      email,
      phone,
      serviceType,
      serviceName,
    })

    // In a real application, you would:
    // - Save to database
    // - Send confirmation email
    // - Integrate with CRM
    // - Set up payment processing

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully",
      data: {
        firstName,
        lastName,
        email,
        serviceType,
        serviceName,
      },
    })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
