import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/custom-button"
import { ArrowLeft, HelpCircle } from "lucide-react"
import Link from "next/link"

export default function LeanAthleteFAQsPage() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />

      <main className="pt-40 pb-16">
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex items-center mb-6">
            <Link
              href="/leanathlete"
              className="flex items-center text-[#1e90ff] hover:text-[#1c7ed6] transition-colors mr-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Lean Athlete Program
            </Link>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-500/20 border border-yellow-400 rounded-full mb-6">
              <HelpCircle className="w-5 h-5 text-yellow-600 mr-2" />
              <span className="text-yellow-700 font-medium">Frequently Asked Questions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-[#1e90ff] mb-4">Lean Athlete Program FAQs</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to the most common questions about The Lean Athlete Program
            </p>
          </div>
        </div>

        {/* Embedded Google Doc */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://docs.google.com/document/d/e/2PACX-1vSSDnxlO8QedVU4-y972KJ27OHxR-jPTcGrGEdxKGaMF15JryhZdUittg2dv3D2bz3kOUROjs3D_8iL/pub?embedded=true"
              className="w-full h-[800px] border-0"
              title="Lean Athlete Program FAQs"
              loading="lazy"
              style={{
                display: "block",
                margin: "0 auto",
                textAlign: "center",
              }}
            />
          </div>

          {/* Fallback message in case iframe doesn't load */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Having trouble viewing the FAQs? You can also view them directly on Google Docs.
            </p>
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vSSDnxlO8QedVU4-y972KJ27OHxR-jPTcGrGEdxKGaMF15JryhZdUittg2dv3D2bz3kOUROjs3D_8iL/pub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#1e90ff] hover:text-[#1c7ed6] transition-colors"
            >
              Open FAQs in New Tab
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="bg-gradient-to-r from-[#1e90ff]/10 to-green-500/10 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-[#1e90ff] mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-6">
              Book a free consultation call to get personalized answers about The Lean Athlete Program
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://calendly.com/tomhinept/leanathleteprogram" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="px-8 py-3 text-lg">
                  Book Free Consultation
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg bg-transparent">
                  Send a Message
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
