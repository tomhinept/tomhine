import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/custom-button"
import { Check, X, Target, Trophy, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LeanAthletePage() {
  const calendlyLink = "https://calendly.com/tomhinept/leanathleteprogram"

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-40 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/hero-tom-client.png" alt="Athletic training background" fill className="object-cover" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Trophy Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-yellow-500/20 border border-yellow-400 rounded-full mb-8">
              <Trophy className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-yellow-400 font-medium">The Lean Athlete Program</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Get Lean, Strong, and Athletic —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                in Just 12 Weeks
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 mb-4 font-light italic">
              Where aesthetics meet performance.
            </p>

            <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              An elite online coaching program to help you transform your body, improve your performance, and train like
              an athlete — with a plan built around your life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white border-0"
                >
                  Start Your Transformation →
                </Button>
              </a>
              <Link href="#what-is-it">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Is It Section */}
      <section id="what-is-it" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e90ff] mb-6">What Is The Lean Athlete Program?</h2>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The Lean Athlete Program is a 12-week online coaching program designed to transform your body and
              supercharge your performance.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Finally achieve that lean, athletic physique you've been striving for — while setting new personal bests
              on the track, road, pitch, or wherever you compete.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              This is a program for people who want to look, feel and perform like an athlete, while learning the skills
              to maintain those results and keep progressing for life.
            </p>

            <h3 className="text-2xl font-bold text-[#1e90ff] mb-8">What you can expect to achieve:</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-[#1e90ff]" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Get Lean</h4>
              <p className="text-gray-600">Lose at least 10% body fat and reveal that lean, athletic physique</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Get Strong</h4>
              <p className="text-gray-600">Build functional strength that translates into real-world performance</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Trophy className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Get Athletic</h4>
              <p className="text-gray-600">Improve your speed, stamina, agility and conditioning to smash your PBs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is It For Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Who It's For */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-[#1e90ff]">Who Is It For?</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    People who want to look lean and athletic while also performing at their best
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Amateur sportspeople, recreational athletes, runners, Hyrox/triathlon enthusiasts
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Individuals with gym experience who are comfortable training independently
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Self-motivated people ready to follow a structured plan</p>
                </div>
              </div>
            </div>

            {/* Who It's NOT For */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <X className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-[#1e90ff]">Who Is It NOT For?</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Complete beginners with no gym experience</p>
                </div>
                <div className="flex items-start space-x-3">
                  <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">People only interested in bodybuilding or "bulking up"</p>
                </div>
                <div className="flex items-start space-x-3">
                  <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Anyone looking for a quick fix without putting in the work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e90ff]/5 to-green-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e90ff] mb-6">What's Included?</h2>
            <p className="text-xl text-gray-600">Everything you need for a complete transformation</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#1e90ff] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Full 12-Week Online Coaching Program</h3>
                      <p className="text-gray-600 text-sm">100% supported by Tom</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Fully Individualised Plans</h3>
                      <p className="text-gray-600 text-sm">Training, Nutrition & Performance Plans tailored to you</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Detailed Progress Tracking</h3>
                      <p className="text-gray-600 text-sm">Weekly Check-ins to monitor your transformation</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Mindset & Lifestyle Coaching</h3>
                      <p className="text-gray-600 text-sm">Mental strategies for lasting success</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Training App & Tools</h3>
                      <p className="text-gray-600 text-sm">Access to Performance Tracking Tools</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Educational Content</h3>
                      <p className="text-gray-600 text-sm">Support long-term progress and knowledge</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">The Lean Athlete Community</h3>
                      <p className="text-gray-600 text-sm">Private group for support and accountability</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <Trophy className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Guaranteed Results</h3>
                      <p className="text-gray-600 text-sm">Or continued coaching until you get them</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e90ff] mb-6">Join Hundreds of Successful Athletes</h2>
            <p className="text-xl text-gray-600">Real transformations from real people</p>
          </div>

          {/* Transformation Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            <div className="aspect-square relative bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/transformations/kit-transformation.png"
                alt="Kit's transformation"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-square relative bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/transformations/amy-transformation.jpg"
                alt="Amy's transformation"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-square relative bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/transformations/thibault-transformation.jpg"
                alt="Thibault's transformation"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-square relative bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/transformations/christina-transformation.jpg"
                alt="Christina's transformation"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-square relative bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/transformations/sam-transformation.jpg"
                alt="Sam's transformation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center">
            <Link href="/results">
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg bg-transparent">
                See More Results →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Become a Lean Athlete?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join the program that's helped hundreds of people achieve their best physique and performance.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">12</div>
                <div className="text-gray-300">Weeks to Transform</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-gray-300">Personalized Coaching</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">∞</div>
                <div className="text-gray-300">Results Guaranteed</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="px-12 py-4 text-xl font-semibold bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white border-0"
              >
                Start Your Transformation Today
              </Button>
            </a>
            <p className="text-gray-400 text-sm">Book your free consultation • No commitment required</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
