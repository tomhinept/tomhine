"use client"

import { useState } from "react"
import { Button } from "@/components/custom-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { SignupData } from "@/app/signup/page"

interface NutritionLifestyleStepProps {
  data: SignupData
  updateData: (data: Partial<SignupData>) => void
  onNext: () => void
  onPrev: () => void
}

export default function NutritionLifestyleStep({ data, updateData, onNext, onPrev }: NutritionLifestyleStepProps) {
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
    // if (!data.homeCookedMeals) newErrors.homeCookedMeals = "Please specify how many meals are home-cooked"
    // if (!data.workLocation.trim()) newErrors.workLocation = "Work location is required"
    // if (!data.workingHours.trim()) newErrors.workingHours = "Working hours information is required"
    // if (!data.travelFrequency) newErrors.travelFrequency = "Travel frequency is required"
    // if (!data.alcoholFrequency) newErrors.alcoholFrequency = "Alcohol frequency is required"
    // if (!data.smokingStatus) newErrors.smokingStatus = "Smoking status is required"
    // if (!data.sleepQuality) newErrors.sleepQuality = "Sleep quality rating is required"
    // if (!data.stressLevels) newErrors.stressLevels = "Stress level rating is required"

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
          <CardTitle className="text-white text-2xl">Nutrition & Lifestyle</CardTitle>
          <CardDescription className="text-gray-400">
            Help us understand your dietary habits and lifestyle factors
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Nutrition Information */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Nutrition Information</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="dietaryRestrictions" className="text-white">
                  Do you have any dietary restrictions?
                </Label>
                <Textarea
                  id="dietaryRestrictions"
                  value={data.dietaryRestrictions}
                  onChange={(e) => handleInputChange("dietaryRestrictions", e.target.value)}
                  className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
                  placeholder="e.g., vegetarian, vegan, gluten-free, etc."
                  rows={2}
                />
              </div>

              <div>
                <Label htmlFor="allergies" className="text-white">
                  Do you have any allergies?
                </Label>
                <Textarea
                  id="allergies"
                  value={data.allergies}
                  onChange={(e) => handleInputChange("allergies", e.target.value)}
                  className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
                  placeholder="List any food allergies or intolerances"
                  rows={2}
                />
              </div>

              <div>
                <Label htmlFor="disorderedEatingHistory" className="text-white">
                  Do you have any history of disordered eating?
                </Label>
                <Textarea
                  id="disorderedEatingHistory"
                  value={data.disorderedEatingHistory}
                  onChange={(e) => handleInputChange("disorderedEatingHistory", e.target.value)}
                  className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
                  placeholder="This information helps us provide appropriate guidance"
                  rows={2}
                />
              </div>

              <div>
                <Label htmlFor="nutritionChallenges" className="text-white">
                  What are your biggest challenges when it comes to nutrition?
                </Label>
                <Textarea
                  id="nutritionChallenges"
                  value={data.nutritionChallenges}
                  onChange={(e) => handleInputChange("nutritionChallenges", e.target.value)}
                  className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
                  placeholder="e.g., time constraints, cravings, meal prep, etc."
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="favouriteFoods" className="text-white">
                  What are your favourite types of food?
                </Label>
                <Textarea
                  id="favouriteFoods"
                  value={data.favouriteFoods}
                  onChange={(e) => handleInputChange("favouriteFoods", e.target.value)}
                  className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
                  placeholder="Foods you enjoy and would like to include in your plan"
                  rows={2}
                />
              </div>

              <div>
                <Label htmlFor="leastFavouriteFoods" className="text-white">
                  What are your least favourite types of food?
                </Label>
                <Textarea
                  id="leastFavouriteFoods"
                  value={data.leastFavouriteFoods}
                  onChange={(e) => handleInputChange("leastFavouriteFoods", e.target.value)}
                  className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
                  placeholder="Foods you dislike or want to avoid"
                  rows={2}
                />
              </div>

              <div>
                <Label htmlFor="homeCookedMeals" className="text-white">
                  How many of your meals are usually prepared at home/home-cooked?
                </Label>
                <Select onValueChange={(value) => handleInputChange("homeCookedMeals", value)}>
                  <SelectTrigger className="bg-white/10 border-gray-600 text-white">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All meals (90-100%)</SelectItem>
                    <SelectItem value="most">Most meals (70-90%)</SelectItem>
                    <SelectItem value="half">About half (50-70%)</SelectItem>
                    <SelectItem value="some">Some meals (30-50%)</SelectItem>
                    <SelectItem value="few">Few meals (10-30%)</SelectItem>
                    <SelectItem value="none">Rarely/never (0-10%)</SelectItem>
                  </SelectContent>
                </Select>
                {errors.homeCookedMeals && <p className="text-red-400 text-sm mt-1">{errors.homeCookedMeals}</p>}
              </div>

              <div>
                <Label htmlFor="currentSupplements" className="text-white">
                  Are you currently taking any supplements?
                </Label>
                <Textarea
                  id="currentSupplements"
                  value={data.currentSupplements}
                  onChange={(e) => handleInputChange("currentSupplements", e.target.value)}
                  className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
                  placeholder="List any supplements, vitamins, or protein powders you take"
                  rows={2}
                />
              </div>
            </div>
          </div>

          {/* Work & Lifestyle */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Work & Lifestyle</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="workLocation" className="text-white">
                  Where do you usually work?
                </Label>
                <Input
                  id="workLocation"
                  value={data.workLocation}
                  onChange={(e) => handleInputChange("workLocation", e.target.value)}
                  className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
                  placeholder="e.g., office, home, travel, construction site, etc."
                />
                {errors.workLocation && <p className="text-red-400 text-sm mt-1">{errors.workLocation}</p>}
              </div>

              <div>
                <Label htmlFor="workingHours" className="text-white">
                  What are your typical working hours?
                </Label>
                <Input
                  id="workingHours"
                  value={data.workingHours}
                  onChange={(e) => handleInputChange("workingHours", e.target.value)}
                  className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
                  placeholder="e.g., 9am-5pm, shift work, irregular hours, etc."
                />
                {errors.workingHours && <p className="text-red-400 text-sm mt-1">{errors.workingHours}</p>}
              </div>

              <div>
                <Label htmlFor="workEatingRequirements" className="text-white">
                  Does your job require you to eat or drink out a lot?
                </Label>
                <Textarea
                  id="workEatingRequirements"
                  value={data.workEatingRequirements}
                  onChange={(e) => handleInputChange("workEatingRequirements", e.target.value)}
                  className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
                  placeholder="Business meals, client entertainment, limited food options, etc."
                  rows={2}
                />
              </div>

              <div>
                <Label htmlFor="travelFrequency" className="text-white">
                  How frequently do you travel (for work or personal trips)?
                </Label>
                <Select onValueChange={(value) => handleInputChange("travelFrequency", value)}>
                  <SelectTrigger className="bg-white/10 border-gray-600 text-white">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="never">Never/rarely</SelectItem>
                    <SelectItem value="monthly">Once a month</SelectItem>
                    <SelectItem value="bi-weekly">Every 2 weeks</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="multiple-weekly">Multiple times per week</SelectItem>
                    <SelectItem value="constantly">Constantly traveling</SelectItem>
                  </SelectContent>
                </Select>
                {errors.travelFrequency && <p className="text-red-400 text-sm mt-1">{errors.travelFrequency}</p>}
              </div>
            </div>
          </div>

          {/* Health & Habits */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Health & Habits</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="alcoholFrequency" className="text-white">
                  How many times per week do you drink alcohol?
                </Label>
                <Select onValueChange={(value) => handleInputChange("alcoholFrequency", value)}>
                  <SelectTrigger className="bg-white/10 border-gray-600 text-white">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="never">Never</SelectItem>
                    <SelectItem value="rarely">Rarely (special occasions)</SelectItem>
                    <SelectItem value="1-2">1-2 times per week</SelectItem>
                    <SelectItem value="3-4">3-4 times per week</SelectItem>
                    <SelectItem value="5-6">5-6 times per week</SelectItem>
                    <SelectItem value="daily">Daily</SelectItem>
                  </SelectContent>
                </Select>
                {errors.alcoholFrequency && <p className="text-red-400 text-sm mt-1">{errors.alcoholFrequency}</p>}
              </div>

              <div>
                <Label htmlFor="smokingStatus" className="text-white">
                  Are you a smoker?
                </Label>
                <Select onValueChange={(value) => handleInputChange("smokingStatus", value)}>
                  <SelectTrigger className="bg-white/10 border-gray-600 text-white">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="never">Never smoked</SelectItem>
                    <SelectItem value="former">Former smoker</SelectItem>
                    <SelectItem value="occasional">Occasional smoker</SelectItem>
                    <SelectItem value="regular">Regular smoker</SelectItem>
                  </SelectContent>
                </Select>
                {errors.smokingStatus && <p className="text-red-400 text-sm mt-1">{errors.smokingStatus}</p>}
              </div>

              <div>
                <Label htmlFor="sleepQuality" className="text-white">
                  How would you rate your sleep overall (quality and duration)?
                </Label>
                <Select onValueChange={(value) => handleInputChange("sleepQuality", value)}>
                  <SelectTrigger className="bg-white/10 border-gray-600 text-white">
                    <SelectValue placeholder="Rate 1-10" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 - Very poor</SelectItem>
                    <SelectItem value="2">2 - Poor</SelectItem>
                    <SelectItem value="3">3 - Below average</SelectItem>
                    <SelectItem value="4">4 - Fair</SelectItem>
                    <SelectItem value="5">5 - Average</SelectItem>
                    <SelectItem value="6">6 - Above average</SelectItem>
                    <SelectItem value="7">7 - Good</SelectItem>
                    <SelectItem value="8">8 - Very good</SelectItem>
                    <SelectItem value="9">9 - Excellent</SelectItem>
                    <SelectItem value="10">10 - Perfect</SelectItem>
                  </SelectContent>
                </Select>
                {errors.sleepQuality && <p className="text-red-400 text-sm mt-1">{errors.sleepQuality}</p>}
              </div>

              <div>
                <Label htmlFor="stressLevels" className="text-white">
                  How would you rate your overall stress levels?
                </Label>
                <Select onValueChange={(value) => handleInputChange("stressLevels", value)}>
                  <SelectTrigger className="bg-white/10 border-gray-600 text-white">
                    <SelectValue placeholder="Rate 1-10" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 - No stress</SelectItem>
                    <SelectItem value="2">2 - Very low</SelectItem>
                    <SelectItem value="3">3 - Low</SelectItem>
                    <SelectItem value="4">4 - Mild</SelectItem>
                    <SelectItem value="5">5 - Moderate</SelectItem>
                    <SelectItem value="6">6 - Moderate-high</SelectItem>
                    <SelectItem value="7">7 - High</SelectItem>
                    <SelectItem value="8">8 - Very high</SelectItem>
                    <SelectItem value="9">9 - Extremely high</SelectItem>
                    <SelectItem value="10">10 - Overwhelming</SelectItem>
                  </SelectContent>
                </Select>
                {errors.stressLevels && <p className="text-red-400 text-sm mt-1">{errors.stressLevels}</p>}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <Button onClick={onPrev} variant="outline" className="flex-1">
              Back
            </Button>
            <Button onClick={handleNext} className="flex-1">
              Continue to Goals & Motivation
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
