"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/custom-button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/results", label: "Results" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
  ]

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-28 sm:h-32">
          <Link href="/" className="absolute left-4 sm:left-6 flex items-center" onClick={closeMobileMenu}>
            <Image
              src="/images/tom-hine-latest-logo.png"
              alt="Tom Hine - Body Transformation & Performance Coach"
              width={220}
              height={88}
              className="h-26 w-auto sm:h-30 max-w-[220px] object-contain"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex">
            <div className="bg-[#354646] rounded-lg px-6 py-2 flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-base font-medium transition-colors hover:text-gray-300 ${
                    pathname === item.href ? "text-white" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Contact - Positioned on the right */}
          <div className="hidden md:flex items-center space-x-4 absolute right-4 sm:right-6">
            <Link href="/contact">
              <Button size="sm" className="text-base">
                Get In Touch
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden absolute right-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-sm border-t border-gray-800 shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`block px-3 py-3 text-base font-medium transition-colors hover:text-gray-300 rounded-md ${
                    pathname === item.href ? "text-white bg-gray-800" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Contact */}
              <div className="px-3 py-3 border-t border-gray-700 mt-4">
                <Link href="/contact" onClick={closeMobileMenu}>
                  <Button size="sm" className="w-full py-3">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
