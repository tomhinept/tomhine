"use client"

import { useState } from "react"
import { Button } from "@/components/custom-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { SignupData } from "@/app/signup/page"

interface PaymentStepProps {
  data: SignupData
  updateData: (data: Partial<SignupData>) => void
  onNext: () => void
  onPrev: () => void
  selectedService: any
}

export default function PaymentStep({ data, updateData, onNext, onPrev, selectedService }: PaymentStepProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handlePayment = async () => {
    setLoading(true)
    setError("")

    try {
      // For corporate services, skip payment
      if (selectedService.price === 0) {
        updateData({ paymentCompleted: true })
        onNext()
        return
      }

      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // For demo purposes, always succeed
      updateData({
        paymentCompleted: true,
        stripePaymentIntentId: `demo_${Math.random().toString(36).substr(2, 9)}`,
      })
      onNext()
      setLoading(false)
    } catch (err) {
      setError("Payment failed. Please try again.")
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="bg-white border-gray-300">
        <CardHeader>
          <CardTitle className="text-[#1e90ff] text-2xl">Secure Payment</CardTitle>
          <CardDescription className="text-gray-600">Complete your payment to secure your spot</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Order Summary */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-[#1e90ff] text-lg font-semibold mb-4">Order Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-gray-700">
                <span>{selectedService.title}</span>
                <span>{selectedService.priceDisplay}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>
                  Customer: {data.firstName} {data.lastName}
                </span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Email: {data.email}</span>
              </div>
              <hr className="border-gray-300 my-4" />
              <div className="flex justify-between text-[#1e90ff] font-semibold text-lg">
                <span>Total</span>
                <span>{selectedService.priceDisplay}</span>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          {selectedService.price > 0 ? (
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-[#1e90ff] text-lg font-semibold mb-4">Payment Information</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    <div>
                      <p className="text-blue-800 font-medium">Secure Payment Processing</p>
                      <p className="text-blue-600 text-sm">Your payment information is encrypted and secure</p>
                    </div>
                  </div>
                </div>

                {/* Demo Payment Form */}
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <svg
                    className="w-12 h-12 text-gray-400 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                  <p className="text-gray-600 font-medium">Demo Payment Form</p>
                  <p className="text-gray-500 text-sm">Payment processing would be integrated here</p>
                </div>

                {error && <div className="bg-red-100 text-red-700 p-3 rounded">{error}</div>}
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-[#1e90ff] text-lg font-semibold mb-4">Corporate Service</h3>
              <p className="text-gray-700">
                This is a corporate service. Payment will be handled separately through our sales team.
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <Button onClick={onPrev} variant="outline" className="flex-1">
              Back
            </Button>
            <Button onClick={handlePayment} disabled={loading} className="flex-1">
              {loading ? "Processing..." : selectedService.price > 0 ? "Complete Payment" : "Continue"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
