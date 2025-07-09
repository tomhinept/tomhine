import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/custom-button"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  // Updated Calendly link
  const calendlyLink = "https://calendly.com/tomhinept/leanathleteprogram"

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />

      {/* Hero Banner Section - Full Image Below Nav */}
      <section className="relative">
        <div className="w-full mt-28 sm:mt-32">
          <Image
            src="/images/new-hero-image.jpg"
            alt="Tom Hine celebrating success with a transformed client in professional gym setting"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </section>

      {/* Elite Results Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold italic text-[#354646]">
              "Elite Results. Real Life Coaching."
            </h2>
          </div>

          {/* Transformation Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="aspect-square relative bg-gray-200 rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src="/images/transformations/kit-transformation.png"
                alt="Kit's body transformation - before and after coaching with Tom Hine"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="aspect-square relative bg-gray-200 rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src="/images/transformations/amy-transformation.jpg"
                alt="Amy's body transformation - before and after coaching with Tom Hine"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="aspect-square relative bg-gray-200 rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src="/images/transformations/thibault-transformation.jpg"
                alt="Thibault's body transformation - before and after coaching with Tom Hine"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="aspect-square relative bg-gray-200 rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src="/images/transformations/christina-transformation.jpg"
                alt="Christina's body transformation - before and after coaching with Tom Hine"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="aspect-square relative bg-gray-200 rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src="/images/transformations/sam-transformation.jpg"
                alt="Sam's body transformation - before and after coaching with Tom Hine"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pt-6 pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Title - Only visible on mobile */}
          <h2 className="text-2xl font-bold text-[#1e90ff] mb-6 lg:hidden">WHO AM I?</h2>

          <div className="grid lg:grid-cols-2 gap-2 lg:gap-16 items-start">
            {/* Left Column - Profile Image */}
            <div>
              <div className="aspect-[4/5] relative bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/images/tom-profile-headshot.jpg"
                  alt="Tom Hine - Professional headshot of body transformation coach"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              {/* Desktop Title - Only visible on desktop */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e90ff] mb-6 hidden lg:block">
                WHO AM I?
              </h2>

              {/* Value Proposition - All same font size */}
              <div className="space-y-6 text-gray-800">
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed font-bold">
                  I'm Tom Hine — a Body Transformation & Performance Coach helping driven professionals with demanding
                  lives reclaim the lean, athletic physique they once had — and get their edge back.
                </p>

                <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                  With over a decade of experience and a proven track record of client transformations, I've developed
                  tried-and-tested systems designed to get you <em>lean</em>, <em>strong</em>, and <em>athletic</em> —
                  while fitting seamlessly around your career, family, and lifestyle.
                </p>

                <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                  My structured, no-fluff approach combines intelligent training, performance-focused nutrition, and
                  real-world accountability — giving you the clarity, momentum, and support to rediscover your peak
                  physical potential and perform at your best, no matter how busy you are.
                </p>

                <p className="text-base sm:text-lg lg:text-xl text-[#1e90ff] font-bold leading-relaxed">
                  Finally ready to look, feel, and perform like an athlete again?
                </p>
              </div>

              {/* Call to Action */}
              <div className="space-y-6">
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                  Learn how we can work together, or get in touch below.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link href="/services">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium"
                    >
                      My Services
                    </Button>
                  </Link>

                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium"
                    >
                      Get In Touch
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#1e90ff]">10+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#1e90ff]">500+</div>
              <div className="text-gray-700">Clients Coached</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#1e90ff]">100%</div>
              <div className="text-gray-700">Results-Driven</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/services" className="group">
              <div className="bg-[#1e90ff]/5 rounded-lg p-6 hover:bg-[#1e90ff]/10 transition-colors">
                <h3 className="text-xl font-semibold text-[#1e90ff] mb-2">Services</h3>
                <p className="text-gray-600 text-sm">How you can work with me</p>
              </div>
            </Link>

            <Link href="/results" className="group">
              <div className="bg-[#1e90ff]/5 rounded-lg p-6 hover:bg-[#1e90ff]/10 transition-colors">
                <h3 className="text-xl font-semibold text-[#1e90ff] mb-2">Results</h3>
                <p className="text-gray-600 text-sm">Real client transformations</p>
              </div>
            </Link>

            <Link href="/about" className="group">
              <div className="bg-[#1e90ff]/5 rounded-lg p-6 hover:bg-[#1e90ff]/10 transition-colors">
                <h3 className="text-xl font-semibold text-[#1e90ff] mb-2">About Tom</h3>
                <p className="text-gray-600 text-sm">Learn more about me</p>
              </div>
            </Link>

            <Link href="/blog" className="group">
              <div className="bg-[#1e90ff]/5 rounded-lg p-6 hover:bg-[#1e90ff]/10 transition-colors">
                <h3 className="text-xl font-semibold text-[#1e90ff] mb-2">Blog</h3>
                <p className="text-gray-600 text-sm">Expert insights & tips</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
