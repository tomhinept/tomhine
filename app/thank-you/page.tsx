import Navigation from "@/components/navigation"
import { Button } from "@/components/custom-button"
import Link from "next/link"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />

      <div className="pt-24">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-6xl font-light text-[#1e90ff] mb-4">Thank You!</h1>
              <p className="text-xl text-gray-600 mb-8">
                Your transformation application has been submitted successfully.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 mb-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-[#1e90ff] mb-4">What happens next?</h2>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">1.</span>
                  <p>We'll review your application within 24 hours</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">2.</span>
                  <p>Tom will personally reach out to schedule your free consultation call</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">3.</span>
                  <p>We'll discuss your goals and create a personalized transformation plan</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">4.</span>
                  <p>Begin your transformation journey with expert guidance</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600">In the meantime, follow us on social media for daily tips and motivation!</p>
              <div className="flex justify-center space-x-6">
                <a href="https://linkedin.com" className="text-[#1e90ff] hover:text-[#1c7ed6] transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://instagram.com" className="text-pink-500 hover:text-pink-400 transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.014 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.926 3.708 13.775 3.708 12.478s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.213c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.404c-.315 0-.612-.123-.833-.344-.221-.221-.344-.518-.344-.833 0-.315.123-.612.344-.833.221-.221.518-.344.833-.344s.612.123.833.344c.221.221.344.518.344.833 0 .315-.123.612-.344.833-.221.221-.518.344-.833.344z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-12">
              <Link href="/">
                <Button size="lg" className="px-8 py-3 text-lg">
                  Return to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
