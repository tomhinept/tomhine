import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/custom-button"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-center gap-8 mb-8">
          {/* Left Section - Let's Connect */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-sm font-semibold text-white mb-3">LET'S CONNECT</h4>
            <div className="flex space-x-3">
              {/* Instagram */}
              <a
                href="https://instagram.com/tomhinept"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/tomhine"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#0077b5] rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Center Section - Quick Links */}
          <div className="flex flex-col items-center">
            <h4 className="text-sm font-semibold text-white mb-3">QUICK LINKS</h4>
            <div className="flex flex-wrap justify-center gap-1 text-gray-300 text-sm">
              <Link href="/" className="hover:text-white transition-colors px-2">
                HOME
              </Link>
              <span className="text-gray-500">|</span>
              <Link href="/results" className="hover:text-white transition-colors px-2">
                RESULTS
              </Link>
              <span className="text-gray-500">|</span>
              <Link href="/services" className="hover:text-white transition-colors px-2">
                SERVICES
              </Link>
              <span className="text-gray-500">|</span>
              <Link href="/about" className="hover:text-white transition-colors px-2">
                ABOUT
              </Link>
              <span className="text-gray-500">|</span>
              <Link href="/blog" className="hover:text-white transition-colors px-2">
                BLOG
              </Link>
            </div>
          </div>

          {/* Right Section - Get In Touch Button */}
          <div className="flex flex-col items-center lg:items-end">
            <Link href="/contact">
              <Button className="bg-[#1e90ff] hover:bg-[#1c7ed6] text-white px-4 py-2 rounded-md font-medium text-sm">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom Section - Logo and Copyright */}
        <div className="border-t border-gray-700 pt-6 flex flex-col items-center gap-4">
          <div className="flex items-center">
            <Image
              src="/images/th-logo-footer.png"
              alt="Tom Hine Logo"
              width={60}
              height={60}
              className="h-14 w-auto"
            />
          </div>
          <div className="text-gray-400 text-xs text-center">©2025 | Tom Hine | All Rights Reserved</div>
        </div>
      </div>
    </footer>
  )
}
