"use client"

import { useState } from "react"
import { Button } from "@/components/custom-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { SignupData } from "@/app/signup/page"

interface HealthFormsStepProps {
  data: SignupData
  updateData: (data: Partial<SignupData>) => void
  onNext: () => void
  onPrev: () => void
}

const parqQuestions = [
  {
    id: "heartCondition",
    question:
      "Has your doctor ever said that you have a heart condition and/or that you should only do physical activity recommended by a doctor?",
  },
  {
    id: "chestPainActivity",
    question: "Do you feel pain in your chest when you do physical activity?",
  },
  {
    id: "chestPainRest",
    question: "In the past month, have you had chest pain when you were not doing physical activity?",
  },
  {
    id: "dizziness",
    question: "Do you lose your balance because of dizziness or do you ever lose consciousness?",
  },
  {
    id: "boneJointMuscle",
    question:
      "Have you ever been told by a doctor that you have bone, joint, or muscle problems that could be made worse by physical activity?",
  },
  {
    id: "diagnosedIllness",
    question: "Do you have a diagnosed illness that could be made worse by physical activity?",
  },
  {
    id: "bloodPressureMeds",
    question: "Is your doctor currently prescribing medication for your blood pressure or heart condition?",
  },
  {
    id: "otherReason",
    question: "Do you know of any other reason why you should not do physical activity?",
  },
]

export default function HealthFormsStep({ data, updateData, onNext, onPrev }: HealthFormsStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleParqAnswer = (questionId: string, answer: boolean) => {
    const newAnswers = { ...data.parqAnswers, [questionId]: answer }
    updateData({ parqAnswers: newAnswers })
  }

  const handleCheckboxChange = (field: keyof SignupData, checked: boolean) => {
    updateData({ [field]: checked })
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // Remove all required field validations - make everything optional for testing
    // Check if all PARQ questions are answered
    // const answeredQuestions = Object.keys(data.parqAnswers).length
    // if (answeredQuestions < parqQuestions.length) {
    //   newErrors.parq = "Please answer all health screening questions"
    // }

    // Check if any "YES" answers have details
    // const hasYesAnswers = Object.values(data.parqAnswers).some((answer) => answer === true)
    // if (hasYesAnswers && !data.parqDetails.trim()) {
    //   newErrors.parqDetails = "Please provide details for any 'YES' answers"
    // }

    // if (!data.fitnessAgreementSigned) {
    //   newErrors.fitnessAgreement = "You must agree to the fitness participation agreement"
    // }

    // if (!data.liabilityWaiverSigned) {
    //   newErrors.liabilityWaiver = "You must sign the liability waiver"
    // }

    // if (!data.termsConditionsSigned) {
    //   newErrors.termsConditions = "You must agree to the terms and conditions"
    // }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateForm()) {
      onNext()
    }
  }

  const hasYesAnswers = Object.values(data.parqAnswers).some((answer) => answer === true)

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-8">
        {/* PARQ Questionnaire */}
        <Card className="bg-white/10 border-gray-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Physical Activity Readiness Questionnaire (PARQ)</CardTitle>
            <CardDescription className="text-gray-400">
              Please answer these health screening questions honestly
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {parqQuestions.map((q, index) => (
              <div key={q.id} className="space-y-3">
                <p className="text-white font-medium">
                  {index + 1}. {q.question}
                </p>
                <div className="flex space-x-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={`${q.id}-yes`}
                      checked={data.parqAnswers[q.id] === true}
                      onCheckedChange={() => handleParqAnswer(q.id, true)}
                      className="border-2 border-white data-[state=checked]:bg-white data-[state=checked]:text-black"
                    />
                    <Label htmlFor={`${q.id}-yes`} className="text-white">
                      YES
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={`${q.id}-no`}
                      checked={data.parqAnswers[q.id] === false}
                      onCheckedChange={() => handleParqAnswer(q.id, false)}
                      className="border-2 border-white data-[state=checked]:bg-white data-[state=checked]:text-black"
                    />
                    <Label htmlFor={`${q.id}-no`} className="text-white">
                      NO
                    </Label>
                  </div>
                </div>
              </div>
            ))}

            {errors.parq && <p className="text-red-400 text-sm">{errors.parq}</p>}

            {hasYesAnswers && (
              <div className="mt-6">
                <Label htmlFor="parqDetails" className="text-white">
                  Please provide further details for any "YES" answers
                </Label>
                <Textarea
                  id="parqDetails"
                  value={data.parqDetails}
                  onChange={(e) => updateData({ parqDetails: e.target.value })}
                  className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400 mt-2"
                  placeholder="Provide details about your health conditions..."
                />
                {errors.parqDetails && <p className="text-red-400 text-sm mt-1">{errors.parqDetails}</p>}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Legal Agreements */}
        <Card className="bg-white/10 border-gray-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Legal Agreements</CardTitle>
            <CardDescription className="text-gray-400">
              Please read and agree to the following documents
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Fitness Participation Agreement */}
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-white text-lg font-semibold mb-4">Fitness Participation Agreement</h3>
              <div className="bg-gray-800 rounded p-4 max-h-40 overflow-y-auto text-sm text-gray-300 mb-4">
                <p className="mb-2">
                  I have voluntarily chosen to participate in fitness activities (Personal Training, Online Coaching or
                  otherwise) organised by The Company.
                </p>
                <p className="mb-2">
                  I have answered the questions above to the best of my ability and affirm that my physical condition is
                  good and I have no known conditions that would prevent me from participation.
                </p>
                <p className="mb-2">
                  I acknowledge that participation is at my own pace and comfort level and that I may discontinue my
                  participation at any time.
                </p>
                <p className="mb-2">
                  Furthermore, I agree to self-determine my exertion through good judgement and to discontinue any
                  activity that exceeds my personal limitations.
                </p>
                <p>
                  I understand that by signing this agreement I hereby waive and release The Company, its Board Members,
                  staff, and all relevant employees in any way from liabilities or demands as a result of injury, loss,
                  or adverse health conditions as a result of my participation.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="fitnessAgreement"
                  checked={data.fitnessAgreementSigned}
                  onCheckedChange={(checked) => handleCheckboxChange("fitnessAgreementSigned", checked as boolean)}
                  className="border-2 border-white data-[state=checked]:bg-white data-[state=checked]:text-black"
                />
                <Label htmlFor="fitnessAgreement" className="text-white">
                  I agree to the Fitness Participation Agreement
                </Label>
              </div>
              {errors.fitnessAgreement && <p className="text-red-400 text-sm mt-1">{errors.fitnessAgreement}</p>}
            </div>

            {/* Liability Waiver */}
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-white text-lg font-semibold mb-4">Waiver & Release of Liability</h3>
              <div className="bg-gray-800 rounded p-4 max-h-40 overflow-y-auto text-sm text-gray-300 mb-4">
                <p className="mb-2">
                  I am voluntarily participating in physical exercise that can be strenuous and subject to risk of
                  serious injury during "The Activity".
                </p>
                <p className="mb-2">
                  I agree that participating in physical exercise sessions or personal training activities is at my own
                  risk. I recognise that exercise is not without some risk to the musculoskeletal system and
                  cardiorespiratory system.
                </p>
                <p className="mb-2">
                  I hereby release and forever discharge The Company from any physical or psychological injury that I
                  may suffer as a direct result of my participation in the aforementioned Activity.
                </p>
                <p>
                  I further agree to indemnify, defend and hold harmless the Releasees against any and all claims, suits
                  or actions of any kind whatsoever for liability, damages, compensation or otherwise brought by me or
                  anyone on my behalf.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="liabilityWaiver"
                  checked={data.liabilityWaiverSigned}
                  onCheckedChange={(checked) => handleCheckboxChange("liabilityWaiverSigned", checked as boolean)}
                  className="border-2 border-white data-[state=checked]:bg-white data-[state=checked]:text-black"
                />
                <Label htmlFor="liabilityWaiver" className="text-white">
                  I agree to the Waiver & Release of Liability
                </Label>
              </div>
              {errors.liabilityWaiver && <p className="text-red-400 text-sm mt-1">{errors.liabilityWaiver}</p>}
            </div>

            {/* Terms & Conditions */}
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-white text-lg font-semibold mb-4">Terms & Conditions</h3>
              <div className="bg-gray-800 rounded p-4 max-h-40 overflow-y-auto text-sm text-gray-300 mb-4">
                <p className="mb-2">
                  This document sets out the terms and conditions which apply when you decide to purchase any services
                  from SG Fitness Services Pte Ltd, also operating as Tom Hine Personal Training ("The Company").
                </p>
                <p className="mb-2">
                  The services that we offer involve lifting, pushing and pulling heavy weights and your own bodyweight,
                  as well as other strenuous exercises.
                </p>
                <p className="mb-2">
                  While we take all reasonable precautions to ensure that our Services are delivered to applicable
                  standards of health and safety, our Services carry an inherent risk of minor and serious physical
                  injury.
                </p>
                <p>
                  You must keep us up to date about your Health Issues during the Services and consult a competent,
                  qualified doctor before you start using our Services.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="termsConditions"
                  checked={data.termsConditionsSigned}
                  onCheckedChange={(checked) => handleCheckboxChange("termsConditionsSigned", checked as boolean)}
                  className="border-2 border-white data-[state=checked]:bg-white data-[state=checked]:text-black"
                />
                <Label htmlFor="termsConditions" className="text-white">
                  I agree to the Terms & Conditions
                </Label>
              </div>
              {errors.termsConditions && <p className="text-red-400 text-sm mt-1">{errors.termsConditions}</p>}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <Button onClick={onPrev} variant="outline" className="flex-1">
            Back
          </Button>
          <Button onClick={handleNext} className="flex-1">
            Complete Registration
          </Button>
        </div>
      </div>
    </div>
  )
}
