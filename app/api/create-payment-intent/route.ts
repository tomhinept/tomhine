// 🛑 Stripe temporarily disabled for deployment
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  return NextResponse.json({ message: "Stripe temporarily disabled for deploy" }, { status: 200 })
}
