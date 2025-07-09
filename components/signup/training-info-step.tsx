"use client"

import { useState } from "react"
import { Button } from "@/components/custom-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { SignupData } from "@/app/signup/page"

interface TrainingInfoStepProps {
  data: SignupData
  updateData: (data: Partial<SignupData>) => void
  onNext: () => void
  onPrev: () => void
}

export default function TrainingInfoStep({ data, updateData, onNext, onPrev }: TrainingInfoStepProps) {
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
    // if (!data.currentHeight.trim()) newErrors.currentHeight = "Height is required"
    // if (!data.currentWeight.trim()) newErrors.currentWeight = "Current weight is required"
    // if (!data.emergencyContactName.trim()) newErrors.emergencyContactName = "Emergency contact name is required"
    // if (!data.emergencyContactPhone.trim()) newErrors.emergencyContactPhone = "Emergency contact phone is required"
    // if (!data.emergencyContactRelation.trim()) newErrors.emergencyContactRelation = "Relationship is required"
    // if (!data.exerciseHistory.trim()) newErrors.exerciseHistory = "Exercise history is required"
    // if (!data.weightTrainingExperience) newErrors.weightTrainingExperience = "Weight training experience is required"
    // if (!data.gymAccess) newErrors.gymAccess = "Gym access information is required"

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
          <CardTitle className="text-white text-2xl">Physical & Training Information</CardTitle>
          <CardDescription className="text-gray-400">
            Help us understand your physical background and training experience
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Physical Information */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Physical Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="currentHeight" className="text-white">
                  Current Height (cm)
                </Label>
                <Input
                  id="currentHeight"
                  type="number"
                  value={data.currentHeight}
                  onChange={(e) => handleInputChange("currentHeight", e.target.value)}
                  className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
                  placeholder="175"
                />
                {errors.currentHeight && <p className="text-red-400 text-sm mt-1">{errors.currentHeight}</p>}
              </div>
              <div>
                <Label htmlFor="currentWeight" className="text-white">
                  Current Body Weight (kg)
                </Label>
                <Input
                  id="currentWeight"
                  type="number"
                  value={data.currentWeight}
                  onChange={(e) => handleInputChange("currentWeight", e.target.value)}
                  className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
                  placeholder="70"
                />
                {errors.currentWeight && <p className="text-red-400 text-sm mt-1">{errors.currentWeight}</p>}
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Emergency Contact</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="emergencyContactName" className="text-white">
                  Full Name
                </Label>
                <Input
                  id="emergencyContactName"
                  value={data.emergencyContactName}
                  onChange={(e) => handleInputChange("emergencyContactName", e.target.value)}
                  className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
                />
                {errors.emergencyContactName && (
                  <p className="text-red-400 text-sm mt-1">{errors.emergencyContactName}</p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="emergencyContactPhone" className="text-white">
                    Phone Number
                  </Label>
                  <Input
                    id="emergencyContactPhone"
                    type="tel"
                    value={data.emergencyContactPhone}
                    onChange={(e) => handleInputChange("emergencyContactPhone", e.target.value)}
                    className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
                  />
                  {errors.emergencyContactPhone && (
                    <p className="text-red-400 text-sm mt-1">{errors.emergencyContactPhone}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="emergencyContactRelation" className="text-white">
                    Relationship
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("emergencyContactRelation", value)}>
                    <SelectTrigger className="bg-white/10 border-gray-600 text-white">
                      <SelectValue placeholder="Select relationship" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="spouse">Spouse</SelectItem>
                      <SelectItem value="parent">Parent</SelectItem>
                      <SelectItem value="sibling">Sibling</SelectItem>
                      <SelectItem value="child">Child</SelectItem>
                      <SelectItem value="friend">Friend</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.emergencyContactRelation && (
                    <p className="text-red-400 text-sm mt-1">{errors.emergencyContactRelation}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Exercise & Training Background */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Exercise & Training Background</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="exerciseHistory" className="text-white">
                  Please briefly describe your current exercise/training habits and history
                </Label>
                <Textarea
                  id="exerciseHistory"
                  value={data.exerciseHistory}
                  onChange={(e) => handleInputChange("exerciseHistory", e.target.value)}
                  className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
                  placeholder="Describe your current routine, how long you've been training, etc."
                  rows={3}
                />
                {errors.exerciseHistory && <p className="text-red-400 text-sm mt-1">{errors.exerciseHistory}</p>}
              </div>

              <div>
                <Label htmlFor="enjoyedExercises" className="text-white">
                  Are there any types of training, sport or exercise which you particularly enjoy?
                </Label>
                <Textarea
                  id="enjoyedExercises"
                  value={data.enjoyedExercises}
                  onChange={(e) => handleInputChange("enjoyedExercises", e.target.value)}
                  className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
                  placeholder="e.g., running, swimming, yoga, weightlifting, etc."
                  rows={2}
                />
              </div>

              <div>
                <Label htmlFor="dislikedExercises" className="text-white">
                  Are there any types of training, sport or exercise which you particularly dislike?
                </Label>
                <Textarea
                  id="dislikedExercises"
                  value={data.dislikedExercises}
                  onChange={(e) => handleInputChange("dislikedExercises", e.target.value)}
                  className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
                  placeholder="Any exercises you want to avoid?"
                  rows={2}
                />
              </div>

              <div>
                <Label htmlFor="weightTrainingExperience" className="text-white">
                  How would you describe your level of experience lifting weights/resistance training?
                </Label>
                <Select onValueChange={(value) => handleInputChange("weightTrainingExperience", value)}>
                  <SelectTrigger className="bg-white/10 border-gray-600 text-white">
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="complete-beginner">Complete beginner (never lifted weights)</SelectItem>
                    <SelectItem value="beginner">Beginner (less than 6 months)</SelectItem>
                    <SelectItem value="novice">Novice (6 months - 1 year)</SelectItem>
                    <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                    <SelectItem value="advanced">Advanced (3+ years)</SelectItem>
                    <SelectItem value="expert">Expert (5+ years)</SelectItem>
                  </SelectContent>
                </Select>
                {errors.weightTrainingExperience && (
                  <p className="text-red-400 text-sm mt-1">{errors.weightTrainingExperience}</p>
                )}
              </div>

              <div>
                <Label htmlFor="gymAccess" className="text-white">
                  What type of gym do you have access to?
                </Label>
                <Select onValueChange={(value) => handleInputChange("gymAccess", value)}>
                  <SelectTrigger className="bg-white/10 border-gray-600 text-white">
                    <SelectValue placeholder="Select gym type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="commercial-gym">Commercial gym (full equipment)</SelectItem>
                    <SelectItem value="home-gym-full">Home gym (full equipment)</SelectItem>
                    <SelectItem value="home-gym-basic">Home gym (basic equipment)</SelectItem>
                    <SelectItem value="hotel-gym">Hotel/apartment gym</SelectItem>
                    <SelectItem value="bodyweight-only">Bodyweight only (no equipment)</SelectItem>
                    <SelectItem value="outdoor-park">Outdoor/park facilities</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.gymAccess && <p className="text-red-400 text-sm mt-1">{errors.gymAccess}</p>}
              </div>
            </div>
          </div>

          {/* Medical Information */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Medical Information</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="medicalConditions" className="text-white">
                  Do you have current or previous injuries or medical conditions which may affect your ability to
                  participate in the program?
                </Label>
                <Textarea
                  id="medicalConditions"
                  value={data.medicalConditions}
                  onChange={(e) => handleInputChange("medicalConditions", e.target.value)}
                  className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
                  placeholder="List any medical conditions, injuries, or health concerns we need to consider"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="currentMedications" className="text-white">
                  Current Medications
                </Label>
                <Textarea
                  id="currentMedications"
                  value={data.currentMedications}
                  onChange={(e) => handleInputChange("currentMedications", e.target.value)}
                  className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
                  placeholder="List any medications you're currently taking"
                  rows={2}
                />
              </div>

              <div>
                <Label htmlFor="previousInjuries" className="text-white">
                  Previous Injuries
                </Label>
                <Textarea
                  id="previousInjuries"
                  value={data.previousInjuries}
                  onChange={(e) => handleInputChange("previousInjuries", e.target.value)}
                  className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
                  placeholder="List any previous injuries or physical limitations"
                  rows={2}
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <Button onClick={onPrev} variant="outline" className="flex-1">
              Back
            </Button>
            <Button onClick={handleNext} className="flex-1">
              Continue to Nutrition & Lifestyle
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
