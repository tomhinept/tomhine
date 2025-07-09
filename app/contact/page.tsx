"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/custom-button"
import { Calendar, MessageCircle, X } from "lucide-react"
import Script from "next/script"
import { useState, useEffect } from "react"

export default function ContactPage() {
  const [showFormPopup, setShowFormPopup] = useState(false)

  const handleCalendlyClick = () => {
    try {
      if (typeof window !== "undefined" && (window as any).Calendly) {
        ;(window as any).Calendly.initPopupWidget({
          url: "https://calendly.com/tomhinept/leanathleteprogram",
        })
      } else {
        window.open("https://calendly.com/tomhinept/leanathleteprogram", "_blank")
      }
    } catch (error) {
      console.error("Error opening Calendly:", error)
      window.open("https://calendly.com/tomhinept/leanathleteprogram", "_blank")
    }
  }

  const handleMessageClick = () => {
    setShowFormPopup(true)
  }

  const closeFormPopup = () => {
    setShowFormPopup(false)
  }

  // Handle escape key to close popup
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowFormPopup(false)
      }
    }

    if (showFormPopup) {
      document.addEventListener("keydown", handleEscape)
      // Prevent body scroll when popup is open
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [showFormPopup])

  // Load Jotform when popup opens
  useEffect(() => {
    if (showFormPopup) {
      // Clear any existing form content
      const container = document.getElementById("jotform-container")
      if (container) {
        container.innerHTML = ""
      }

      // Create and load the Jotform script
      const script = document.createElement("script")
      script.type = "text/javascript"
      script.src = "https://form.jotform.com/jsform/251889131143053"
      script.async = true

      // Append to the container or head
      if (container) {
        container.appendChild(script)
      } else {
        document.head.appendChild(script)
      }

      // Cleanup function
      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script)
        }
      }
    }
  }, [showFormPopup])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-40 pb-8">
        {/* Page Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e90ff] mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to get started or have additional questions? Let's discuss next steps.
          </p>
        </div>

        {/* Two Options Section */}
        <section className="max-w-6xl mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Book Free Consultation */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-[#1e90ff] rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Book Free Consultation</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Schedule a 30-minute strategy session to discuss your fitness goals and how I can help you achieve them.
              </p>
              <Button size="lg" className="px-8 py-3 text-lg mb-4" onClick={handleCalendlyClick}>
                Book Now
              </Button>
              <p className="text-sm text-gray-500">Available times shown in your timezone</p>
            </div>

            {/* Send a Message */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-[#1e90ff] rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Send a Message</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Have questions or want to learn more? Fill out the form below and I'll get back to you within 24 hours.
              </p>
              <Button size="lg" className="px-8 py-3 text-lg" onClick={handleMessageClick}>
                Send Message
              </Button>
              <p className="text-sm text-gray-500 mt-2">Secure contact form</p>
            </div>
          </div>
        </section>

        {/* Form Popup Overlay */}
        {showFormPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
              {/* Close Button */}
              <button
                onClick={closeFormPopup}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                aria-label="Close form"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>

              {/* Jotform Container */}
              <div className="p-6 pt-12 overflow-y-auto max-h-[calc(90vh-60px)]">
                <div id="jotform-container" className="min-h-[400px]">
                  {/* Loading message */}
                  <div className="flex items-center justify-center h-32">
                    <div className="text-gray-500">Loading form...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Scripts */}
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />

      <Footer />
    </div>
  )
}
