import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/custom-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  const services = [
    {
      id: "lean-athlete",
      title: "The Lean Athlete Program (Worldwide)",
      description:
        "My signature online coaching program for people who want to get lean, strong and athletic. 100% results-focused, fully personalised and designed entirely to fit around your work and personal commitments.",
      features: [
        "Fully personalised training program",
        "Custom nutrition plan and guidance",
        "Weekly check-ins and program adjustments",
        "24/7 support via WhatsApp",
        "Body composition tracking and analysis",
        "Lifestyle optimization strategies",
        "Access to exclusive client resources",
      ],
    },
    {
      id: "personal-training",
      title: "Personal Training (Singapore)",
      description:
        "Premium Personal Training services for those based in Singapore who want to work with me in-person.",
      features: [
        "One-on-one training sessions",
        "Personalized workout programs",
        "Form correction and technique coaching",
        "Nutrition guidance and meal planning",
        "Progress tracking and assessments",
        "Flexible scheduling options",
      ],
      callout: {
        text: "Limited availability",
        subtext: "Waitlist available",
      },
    },
  ]

  // Updated Calendly link
  const calendlyLink = "https://calendly.com/tomhinept/leanathleteprogram"

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />

      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16">
          <div className="text-center mb-8 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1e90ff] mb-4">Services</h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Choose the coaching approach that fits your lifestyle and goals. All programs are designed to deliver
              sustainable results that last.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-16 justify-center max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="bg-[#1e90ff]/5 border-gray-300 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-[#1e90ff] text-lg sm:text-xl">{service.title}</CardTitle>
                      {service.callout && (
                        <div className="mt-2">
                          <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full">
                            {service.callout.text}
                          </span>
                          <p className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full ml-2">
                            {service.callout.subtext}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 text-sm sm:text-base mt-3">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-700 flex items-start text-sm sm:text-base">
                        <span className="text-green-600 mr-2 mt-0.5">✓</span>
                        <span className="flex-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-[#1e90ff]/5 rounded-lg p-6 sm:p-8 text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-[#1e90ff] mb-4">
              Ready to Start Your Transformation?
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Book a free consultation call to discuss your goals and find the perfect program for you.
            </p>
            <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg">
                Book Free Consultation
              </Button>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
