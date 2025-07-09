"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/custom-button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import type { SignupData } from "@/app/signup/page"

interface CompletionStepProps {
  data: SignupData
  selectedService: any
}

export default function CompletionStep({ data, selectedService }: CompletionStepProps) {
  const [submitting, setSubmitting] = useState(true)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const submitData = async () => {
      try {
        // Simulate submission process
        await new Promise((resolve) => setTimeout(resolve, 2000))

        // For demo purposes, always succeed
        console.log("Signup completed:", data)
        setSubmitted(true)
      } catch (err) {
        setError("Network error. Please contact support.")
      } finally {
        setSubmitting(false)
      }
    }

    submitData()
  }, [data])

  if (submitting) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="bg-white border-gray-300">
          <CardContent className="p-12 text-center">
            <div className="animate-spin w-12 h-12 border-4 border-[#1e90ff] border-t-transparent rounded-full mx-auto mb-6"></div>
            <h2 className="text-2xl font-semibold text-[#1e90ff] mb-4">Completing Your Registration...</h2>
            <p className="text-gray-600">Please wait while we process your information.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="bg-white border-gray-300">
          <CardContent className="p-12 text-center">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-[#1e90ff] mb-4">Registration Error</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <a href="mailto:tom@tomhine.com">
              <Button>Contact Support</Button>
            </a>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="bg-white border-gray-300">
        <CardContent className="p-12 text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h2 className="text-3xl font-semibold text-[#1e90ff] mb-4">Welcome to Your Transformation Journey!</h2>
          <p className="text-gray-600 mb-8">
            Congratulations! Your registration for <strong className="text-[#1e90ff]">{selectedService.title}</strong>{" "}
            is complete.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
            <h3 className="text-[#1e90ff] text-lg font-semibold mb-4">What happens next?</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start space-x-3">
                <span className="text-green-500 font-bold">1.</span>
                <p>You'll receive a confirmation email with your program details within the next hour</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-500 font-bold">2.</span>
                <p>Tom will personally review your information and health forms</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-500 font-bold">3.</span>
                <p>You'll be contacted within 24 hours to schedule your initial consultation</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-500 font-bold">4.</span>
                <p>Your personalized training and nutrition plan will be created</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-500 font-bold">5.</span>
                <p>
                  Begin your transformation journey on your preferred start date:{" "}
                  <strong className="text-[#1e90ff]">{data.startDate}</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="text-left">
                <p className="text-blue-800 font-medium">Important Reminder</p>
                <p className="text-blue-600 text-sm">
                  Please check your email (including spam folder) for important program information and next steps.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">Questions? Contact Tom directly:</p>
            <div className="flex justify-center space-x-6 text-sm">
              <a href="mailto:tom@tomhine.com" className="text-[#1e90ff] hover:text-[#1c7ed6]">
                tom@tomhine.com
              </a>
              <a href="tel:+6590695032" className="text-[#1e90ff] hover:text-[#1c7ed6]">
                +65 9069 5032
              </a>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <Link href="/">
              <Button size="lg" className="w-full">
                Return to Home
              </Button>
            </Link>
            <div className="flex justify-center space-x-6">
              <a href="https://linkedin.com" className="text-[#1e90ff] hover:text-[#1c7ed6] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://instagram.com" className="text-pink-500 hover:text-pink-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.014 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.926 3.708 13.775 3.708 12.478s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.213c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.404c-.315 0-.612-.123-.833-.344-.221-.221-.344-.518-.344-.833 0-.315.123-.612.344-.833.221-.221.518-.344.833-.344s.612.123.833.344c.221.221.344.518.344.833 0 .315-.123.612-.344.833-.221.221-.518.344-.833.344z" />
                </svg>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
