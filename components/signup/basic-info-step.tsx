"use client"

import { useState } from "react"
import { Button } from "@/components/custom-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type { SignupData } from "@/app/signup/page"

interface BasicInfoStepProps {
  data: SignupData
  updateData: (data: Partial<SignupData>) => void
  onNext: () => void
  selectedService: any
}

export default function BasicInfoStep({ data, updateData, onNext, selectedService }: BasicInfoStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (field: keyof SignupData, value: string) => {
    updateData({ [field]: value })
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // Remove all required field validations - make everything optional for testing
    // if (!data.firstName.trim()) newErrors.firstName = "First name is required"
    // if (!data.lastName.trim()) newErrors.lastName = "Last name is required"
    // if (!data.email.trim()) newErrors.email = "Email is required"
    // if (!data.phone.trim()) newErrors.phone = "Phone number is required"
    // if (!data.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required"
    // if (!data.gender) newErrors.gender = "Please select how you identify"
    // if (data.gender === "other" && !data.genderOther.trim()) {
    //   newErrors.genderOther = "Please specify"
    // }
    // if (!data.startDate) newErrors.startDate = "Start date is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateForm()) {
      onNext()
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
      {/* Service Details */}
      <Card className="bg-white/10 border-gray-700 backdrop-blur-sm order-2 lg:order-1">
        <CardHeader>
          <CardTitle className="text-white text-xl sm:text-2xl">{selectedService.title}</CardTitle>
          <CardDescription className="text-gray-400 text-base sm:text-lg">
            {selectedService.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-white font-semibold text-lg sm:text-xl">{selectedService.priceDisplay}</div>
            <ul className="space-y-2">
              {selectedService.features.map((feature: string, index: number) => (
                <li key={index} className="text-gray-300 flex items-start text-sm sm:text-base">
                  <span className="text-green-400 mr-2 mt-0.5">✓</span>
                  <span className="flex-1">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Basic Info Form */}
      <Card className="bg-white/10 border-gray-700 backdrop-blur-sm order-1 lg:order-2">
        <CardHeader>
          <CardTitle className="text-white text-xl sm:text-2xl">Personal Information</CardTitle>
          <CardDescription className="text-gray-400">Tell us about yourself to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-white">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  value={data.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
                />
                {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <Label htmlFor="lastName" className="text-white">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  value={data.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
                />
                {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-white">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={data.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <Label htmlFor="phone" className="text-white">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={data.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
              />
              {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <Label htmlFor="dateOfBirth" className="text-white">
                Date of Birth
              </Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={data.dateOfBirth}
                onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
              />
              {errors.dateOfBirth && <p className="text-red-400 text-sm mt-1">{errors.dateOfBirth}</p>}
            </div>

            <div>
              <Label className="text-white">How do you identify?</Label>
              <RadioGroup
                value={data.gender}
                onValueChange={(value) => handleInputChange("gender", value)}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="male"
                    id="male"
                    className="border-2 border-white text-white data-[state=checked]:bg-white data-[state=checked]:text-black data-[state=checked]:border-white"
                  />
                  <Label htmlFor="male" className="text-white">
                    Male
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="female"
                    id="female"
                    className="border-2 border-white text-white data-[state=checked]:bg-white data-[state=checked]:text-black data-[state=checked]:border-white"
                  />
                  <Label htmlFor="female" className="text-white">
                    Female
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="non-binary"
                    id="non-binary"
                    className="border-2 border-white text-white data-[state=checked]:bg-white data-[state=checked]:text-black data-[state=checked]:border-white"
                  />
                  <Label htmlFor="non-binary" className="text-white">
                    Non-binary
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="prefer-not-to-say"
                    id="prefer-not-to-say"
                    className="border-2 border-white text-white data-[state=checked]:bg-white data-[state=checked]:text-black data-[state=checked]:border-white"
                  />
                  <Label htmlFor="prefer-not-to-say" className="text-white">
                    Prefer not to say
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="other"
                    id="other"
                    className="border-2 border-white text-white data-[state=checked]:bg-white data-[state=checked]:text-black data-[state=checked]:border-white"
                  />
                  <Label htmlFor="other" className="text-white">
                    Other
                  </Label>
                </div>
              </RadioGroup>
              {errors.gender && <p className="text-red-400 text-sm mt-1">{errors.gender}</p>}

              {data.gender === "other" && (
                <div className="mt-2">
                  <Input
                    placeholder="Please specify"
                    value={data.genderOther}
                    onChange={(e) => handleInputChange("genderOther", e.target.value)}
                    className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
                  />
                  {errors.genderOther && <p className="text-red-400 text-sm mt-1">{errors.genderOther}</p>}
                </div>
              )}
            </div>

            <div>
              <Label htmlFor="startDate" className="text-white">
                Preferred Start Date
              </Label>
              <Input
                id="startDate"
                type="date"
                value={data.startDate}
                onChange={(e) => handleInputChange("startDate", e.target.value)}
                className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
              />
              {errors.startDate && <p className="text-red-400 text-sm mt-1">{errors.startDate}</p>}
            </div>

            <Button onClick={handleNext} className="w-full">
              Continue to Payment
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
