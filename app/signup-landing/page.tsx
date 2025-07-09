import Navigation from "@/components/navigation"
import { Button } from "@/components/custom-button"
import Link from "next/link"
import Image from "next/image"

export default function SignupLandingPage() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0">
          <Image src="/images/hero-bg.png" alt="Transformation background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center text-white max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-green-600/20 border border-green-400 rounded-full mb-6">
              <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-green-400 font-medium">Ready to Transform</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-wider mb-6 hero-text">
            YOUR TRANSFORMATION
            <br />
            <span className="text-green-400">STARTS NOW</span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-light mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed">
            You've made the decision. You've spoken with Tom.
            <br />
            <strong className="text-white">Now it's time to make it happen.</strong>
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8 mb-8 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-green-400">This Is Your Moment</h2>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              The conversation is over. The excuses are behind you. You're here because you're ready to commit to the
              transformation that will change everything. Let's capture all the details we need to create your
              personalized program and get you started on the journey to becoming the best version of yourself.
            </p>
          </div>

          <div className="space-y-6">
            <Link href="/signup?excited=true">
              <Button
                size="lg"
                className="px-12 py-4 text-xl font-semibold bg-green-600 hover:bg-green-700 text-white border-green-600"
              >
                START MY TRANSFORMATION
              </Button>
            </Link>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-400">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Takes 2-3 minutes</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Secure & confidential</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Instant program creation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-[#1e90ff] mb-4">What Happens After You Sign Up</h2>
            <p className="text-xl text-gray-600">Your transformation journey mapped out</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1e90ff] mb-4">Immediate Confirmation</h3>
              <p className="text-gray-600">
                You'll receive instant confirmation and a detailed welcome email with your next steps within the hour.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1e90ff] mb-4">Personal Review</h3>
              <p className="text-gray-600">
                Tom personally reviews your intake within 24 hours and begins crafting your custom transformation plan.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1e90ff] mb-4">Program Launch</h3>
              <p className="text-gray-600">
                Your personalized program launches on your chosen start date with full support and guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial/Motivation Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gray-50 rounded-lg p-8 sm:p-12">
            <blockquote className="text-2xl sm:text-3xl font-light text-[#1e90ff] mb-6 italic">
              "The best time to plant a tree was 20 years ago. The second best time is now."
            </blockquote>
            <p className="text-xl text-gray-600 mb-8">
              You've already taken the hardest step by deciding to change. Now let's make it happen.
            </p>
            <Link href="/signup?excited=true">
              <Button
                size="lg"
                className="px-10 py-3 text-lg bg-green-600 hover:bg-green-700 text-white border-green-600"
              >
                I'M READY TO START
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-[#1e90ff] py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-2 text-sm sm:text-base">tom@tomhine.com</p>
          <p className="text-xs sm:text-sm text-gray-600">©2023 by Tom Hine. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
