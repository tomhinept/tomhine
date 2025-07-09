"use client"

import { useState } from "react"
import { Button } from "@/components/custom-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import type { SignupData } from "@/app/signup/page"

interface GoalsMotivationStepProps {
  data: SignupData
  updateData: (data: Partial<SignupData>) => void
  onNext: () => void
  onPrev: () => void
}

export default function GoalsMotivationStep({ data, updateData, onNext, onPrev }: GoalsMotivationStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (field: keyof SignupData, value: string) => {
    updateData({ [field]: value })
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleCheckboxChange = (field: keyof SignupData, checked: boolean) => {
    updateData({ [field]: checked })
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // Remove all required field validations - make everything optional for testing
    // if (!data.successDefinition.trim()) newErrors.successDefinition = "Please define what success means to you"
    // if (!data.dreamGoals.trim()) newErrors.dreamGoals = "Please describe your dream goals"
    // if (!data.mainObstacles.trim()) newErrors.mainObstacles = "Please identify your main obstacles"
    // if (!data.commitmentLevel) newErrors.commitmentLevel = "Please rate your commitment level"

    // Check if at least one goal type is selected
    // const hasGoalSelected =
    //   data.bodyCompositionGoals ||
    //   data.strengthPerformanceGoals ||
    //   data.sportsPerformanceGoals ||
    //   data.lifestyleGoals ||
    //   data.educationGoals

    // if (!hasGoalSelected) {
    //   newErrors.goals = "Please select at least one goal type"
    // }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateForm()) {
      onNext()
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="bg-white/10 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white text-2xl">Goals & Motivation</CardTitle>
          <CardDescription className="text-gray-400">
            Help us understand what you want to achieve and what drives you
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Success Definition */}
          <div>
            <Label htmlFor="successDefinition" className="text-white">
              How would you personally determine whether or not the next 12 weeks had been a success?
            </Label>
            <Textarea
              id="successDefinition"
              value={data.successDefinition}
              onChange={(e) => handleInputChange("successDefinition", e.target.value)}
              className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
              placeholder="What specific outcomes would make you feel successful?"
              rows={3}
            />
            {errors.successDefinition && <p className="text-red-400 text-sm mt-1">{errors.successDefinition}</p>}
          </div>

          {/* Goal Types */}
          <div>
            <Label className="text-white">What are your primary goals? (Select all that apply)</Label>
            <div className="mt-3 space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="bodyComposition"
                  checked={data.bodyCompositionGoals}
                  onCheckedChange={(checked) => handleCheckboxChange("bodyCompositionGoals", checked as boolean)}
                  className="border-2 border-white data-[state=checked]:bg-white data-[state=checked]:text-black"
                />
                <Label htmlFor="bodyComposition" className="text-white">
                  Improving Body Composition - Losing Fat and/or Building Muscle
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="strengthPerformance"
                  checked={data.strengthPerformanceGoals}
                  onCheckedChange={(checked) => handleCheckboxChange("strengthPerformanceGoals", checked as boolean)}
                  className="border-2 border-white data-[state=checked]:bg-white data-[state=checked]:text-black"
                />
                <Label htmlFor="strengthPerformance" className="text-white">
                  Increasing Strength and/or Improving Gym Performance
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="sportsPerformance"
                  checked={data.sportsPerformanceGoals}
                  onCheckedChange={(checked) => handleCheckboxChange("sportsPerformanceGoals", checked as boolean)}
                  className="border-2 border-white data-[state=checked]:bg-white data-[state=checked]:text-black"
                />
                <Label htmlFor="sportsPerformance" className="text-white">
                  Sports-Specific Performance
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="lifestyle"
                  checked={data.lifestyleGoals}
                  onCheckedChange={(checked) => handleCheckboxChange("lifestyleGoals", checked as boolean)}
                  className="border-2 border-white data-[state=checked]:bg-white data-[state=checked]:text-black"
                />
                <Label htmlFor="lifestyle" className="text-white">
                  Improving Lifestyle & Habits
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="education"
                  checked={data.educationGoals}
                  onCheckedChange={(checked) => handleCheckboxChange("educationGoals", checked as boolean)}
                  className="border-2 border-white data-[state=checked]:bg-white data-[state=checked]:text-black"
                />
                <Label htmlFor="education" className="text-white">
                  Learning About Fitness & Nutrition
                </Label>
              </div>
            </div>
            {errors.goals && <p className="text-red-400 text-sm mt-1">{errors.goals}</p>}
          </div>

          {/* Dream Goals */}
          <div>
            <Label htmlFor="dreamGoals" className="text-white">
              If there were no obstacles or limitations, and you could wave a magic wand, what would you like to achieve
              in the next 12 weeks and beyond?
            </Label>
            <Textarea
              id="dreamGoals"
              value={data.dreamGoals}
              onChange={(e) => handleInputChange("dreamGoals", e.target.value)}
              className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
              placeholder="Dream big! What would your ideal transformation look like?"
              rows={4}
            />
            {errors.dreamGoals && <p className="text-red-400 text-sm mt-1">{errors.dreamGoals}</p>}
          </div>

          {/* Main Obstacles */}
          <div>
            <Label htmlFor="mainObstacles" className="text-white">
              What has been the main thing holding you back from achieving these goals already?
            </Label>
            <Textarea
              id="mainObstacles"
              value={data.mainObstacles}
              onChange={(e) => handleInputChange("mainObstacles", e.target.value)}
              className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
              placeholder="Be honest about what's been preventing your success"
              rows={3}
            />
            {errors.mainObstacles && <p className="text-red-400 text-sm mt-1">{errors.mainObstacles}</p>}
          </div>

          {/* Commitment Level */}
          <div>
            <Label htmlFor="commitmentLevel" className="text-white">
              On a scale of 1-10, how ready are you to truly commit to finally achieving these goals?
            </Label>
            <Select onValueChange={(value) => handleInputChange("commitmentLevel", value)}>
              <SelectTrigger className="bg-white/10 border-gray-600 text-white">
                <SelectValue placeholder="Rate your commitment 1-10" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 - Not ready at all</SelectItem>
                <SelectItem value="2">2 - Slightly ready</SelectItem>
                <SelectItem value="3">3 - Somewhat ready</SelectItem>
                <SelectItem value="4">4 - Moderately ready</SelectItem>
                <SelectItem value="5">5 - Ready</SelectItem>
                <SelectItem value="6">6 - Quite ready</SelectItem>
                <SelectItem value="7">7 - Very ready</SelectItem>
                <SelectItem value="8">8 - Extremely ready</SelectItem>
                <SelectItem value="9">9 - Completely ready</SelectItem>
                <SelectItem value="10">10 - Absolutely committed</SelectItem>
              </SelectContent>
            </Select>
            {errors.commitmentLevel && <p className="text-red-400 text-sm mt-1">{errors.commitmentLevel}</p>}
          </div>

          {/* Improvement Needs */}
          <div>
            <Label htmlFor="improvementNeeds" className="text-white">
              What would you need to make this score a 9 or a 10?
            </Label>
            <Textarea
              id="improvementNeeds"
              value={data.improvementNeeds}
              onChange={(e) => handleInputChange("improvementNeeds", e.target.value)}
              className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
              placeholder="What support, resources, or changes would increase your commitment?"
              rows={3}
            />
          </div>

          {/* Additional Information */}
          <div>
            <Label htmlFor="additionalInfo" className="text-white">
              Is there anything else which you would like to share or make me aware of?
            </Label>
            <Textarea
              id="additionalInfo"
              value={data.additionalInfo}
              onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
              className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
              placeholder="Any other information that would help us create the perfect program for you"
              rows={3}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <Button onClick={onPrev} variant="outline" className="flex-1">
              Back
            </Button>
            <Button onClick={handleNext} className="flex-1">
              Continue to Health Forms
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
