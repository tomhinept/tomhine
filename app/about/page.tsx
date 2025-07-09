import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e90ff] mb-8 text-center">About Me</h1>
        </div>

        {/* Tom's Image */}
        <div className="flex justify-center mb-12">
          <Image
            src="/images/tom-collage.jpg"
            alt="Tom Hine collage showing personal life, fitness results, and client training sessions"
            width={600}
            height={600}
            className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* About Content */}
        <div className="prose prose-lg max-w-none">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              I'm Tom Hine - a Body Transformation & Performance Coach originally from Scotland UK, and based in
              Singapore for the last 10 years.
            </p>

            <p className="text-lg">
              Since 2014 I have been helping busy, high-performing professionals transform their lives by optimising
              their physique, lifestyle and performance through my results-driven coaching programs.
            </p>

            <p className="text-lg">I haven't always been a full-time coach though.</p>

            <p className="text-lg">
              Up until 2019 I also had a successful corporate career in the financial industry, during which time I
              experienced first-hand the challenges of maintaining a lean, athletic physique while juggling a hectic
              business schedule.
            </p>

            <p className="text-lg">
              I am also a proud father who fully understands the demands that parenthood can place on our lives -
              particularly when it comes to staying in shape and performing at your best.
            </p>

            <p className="text-lg">
              As a coach I have accumulated over 10,000 hours of in-person gym floor coaching experience - originally
              working with industry leader Ultimate Performance, before launching my own coaching business which has
              been running successfully since 2022.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
