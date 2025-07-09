"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/custom-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    // Simulate login process
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // For demo purposes, accept any email/password
    if (email && password) {
      setMessage("Login successful! Redirecting...")
      setTimeout(() => {
        router.push("/")
      }, 1000)
    } else {
      setMessage("Please enter both email and password")
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-[#1e90ff] font-bold text-4xl">
            TH
          </Link>
          <p className="text-gray-600 mt-2">Elite Body Transformation</p>
        </div>

        <Card className="bg-white border-gray-300">
          <CardHeader>
            <CardTitle className="text-[#1e90ff] text-center text-xl sm:text-2xl">Welcome Back</CardTitle>
            <CardDescription className="text-gray-600 text-center text-sm sm:text-base">
              Sign in to access your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-gray-300 text-gray-900 placeholder:text-gray-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-gray-300 text-gray-900 placeholder:text-gray-500"
                  placeholder="Your password"
                  required
                />
              </div>

              {message && (
                <div
                  className={`text-sm p-3 rounded ${
                    message.includes("successful") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  }`}
                >
                  {message}
                </div>
              )}

              <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <div className="text-center">
              <Link href="/" className="text-sm text-gray-600 hover:text-[#1e90ff]">
                ← Back to Home
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
