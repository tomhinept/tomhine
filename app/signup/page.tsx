"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import BasicInfoStep from "@/components/signup/basic-info-step"
import TrainingInfoStep from "@/components/signup/training-info-step"
import NutritionLifestyleStep from "@/components/signup/nutrition-lifestyle-step"
import GoalsMotivationStep from "@/components/signup/goals-motivation-step"
import HealthFormsStep from "@/components/signup/health-forms-step"
import PaymentStep from "@/components/signup/payment-step"
import CompletionStep from "@/components/signup/completion-step"

export interface SignupData {
  // Basic Info
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  gender: string
  genderOther: string
  startDate: string

  // Training Info
  currentHeight: string
  currentWeight: string
  emergencyContactName: string
  emergencyContactPhone: string
  emergencyContactRelation: string
  exerciseHistory: string
  enjoyedExercises: string
  dislikedExercises: string
  weightTrainingExperience: string
  gymAccess: string
  medicalConditions: string
  currentMedications: string
  previousInjuries: string

  // Nutrition & Lifestyle
  dietaryRestrictions: string
  allergies: string
  disorderedEatingHistory: string
  nutritionChallenges: string
  favouriteFoods: string
  leastFavouriteFoods: string
  homeCookedMeals: string
  currentSupplements: string
  workLocation: string
  workingHours: string
  workEatingRequirements: string
  travelFrequency: string
  alcoholFrequency: string
  smokingStatus: string
  sleepQuality: string
  stressLevels: string

  // Goals & Motivation
  successDefinition: string
  bodyCompositionGoals: boolean
  strengthPerformanceGoals: boolean
  sportsPerformanceGoals: boolean
  lifestyleGoals: boolean
  educationGoals: boolean
  dreamGoals: string
  mainObstacles: string
  commitmentLevel: string
  improvementNeeds: string
  additionalInfo: string

  // Health Forms
  parqAnswers: Record<string, boolean>
  parqDetails: string
  fitnessAgreementSigned: boolean
  liabilityWaiverSigned: boolean
  termsConditionsSigned: boolean

  // Payment
  paymentCompleted: boolean
  stripePaymentIntentId: string
}

const initialData: SignupData = {
  // Basic Info
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  gender: "",
  genderOther: "",
  startDate: "",

  // Training Info
  currentHeight: "",
  currentWeight: "",
  emergencyContactName: "",
  emergencyContactPhone: "",
  emergencyContactRelation: "",
  exerciseHistory: "",
  enjoyedExercises: "",
  dislikedExercises: "",
  weightTrainingExperience: "",
  gymAccess: "",
  medicalConditions: "",
  currentMedications: "",
  previousInjuries: "",

  // Nutrition & Lifestyle
  dietaryRestrictions: "",
  allergies: "",
  disorderedEatingHistory: "",
  nutritionChallenges: "",
  favouriteFoods: "",
  leastFavouriteFoods: "",
  homeCookedMeals: "",
  currentSupplements: "",
  workLocation: "",
  workingHours: "",
  workEatingRequirements: "",
  travelFrequency: "",
  alcoholFrequency: "",
  smokingStatus: "",
  sleepQuality: "",
  stressLevels: "",

  // Goals & Motivation
  successDefinition: "",
  bodyCompositionGoals: false,
  strengthPerformanceGoals: false,
  sportsPerformanceGoals: false,
  lifestyleGoals: false,
  educationGoals: false,
  dreamGoals: "",
  mainObstacles: "",
  commitmentLevel: "",
  improvementNeeds: "",
  additionalInfo: "",

  // Health Forms
  parqAnswers: {},
  parqDetails: "",
  fitnessAgreementSigned: false,
  liabilityWaiverSigned: false,
  termsConditionsSigned: false,

  // Payment
  paymentCompleted: false,
  stripePaymentIntentId: "",
}

const selectedService = {
  title: "The Lean Athlete Program",
  description: "Comprehensive online coaching program for body transformation",
  priceDisplay: "$497/month",
  price: 497,
  features: [
    "Fully personalised training program",
    "Custom nutrition plan and guidance",
    "Weekly check-ins and program adjustments",
    "24/7 support via WhatsApp",
    "Body composition tracking and analysis",
  ],
}

export default function SignupPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [data, setData] = useState<SignupData>(initialData)

  const updateData = (newData: Partial<SignupData>) => {
    setData((prev) => ({ ...prev, ...newData }))
  }

  const nextStep = () => setCurrentStep((prev) => prev + 1)
  const prevStep = () => setCurrentStep((prev) => prev - 1)

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <BasicInfoStep data={data} updateData={updateData} onNext={nextStep} selectedService={selectedService} />
      case 2:
        return (
          <PaymentStep
            data={data}
            updateData={updateData}
            onNext={nextStep}
            onPrev={prevStep}
            selectedService={selectedService}
          />
        )
      case 3:
        return <TrainingInfoStep data={data} updateData={updateData} onNext={nextStep} onPrev={prevStep} />
      case 4:
        return <NutritionLifestyleStep data={data} updateData={updateData} onNext={nextStep} onPrev={prevStep} />
      case 5:
        return <GoalsMotivationStep data={data} updateData={updateData} onNext={nextStep} onPrev={prevStep} />
      case 6:
        return <HealthFormsStep data={data} updateData={updateData} onNext={nextStep} onPrev={prevStep} />
      case 7:
        return <CompletionStep data={data} selectedService={selectedService} />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <Navigation />

      <div className="pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1e90ff] mb-6">Sign Up</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your life? Complete the application below to get started with your personalized
              coaching program.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-center mb-4">
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5, 6, 7].map((step) => (
                  <div
                    key={step}
                    className={`w-3 h-3 rounded-full ${step <= currentStep ? "bg-green-500" : "bg-gray-600"}`}
                  />
                ))}
              </div>
            </div>
            <p className="text-center text-gray-400">Step {currentStep} of 7</p>
          </div>

          {/* Step Content */}
          {renderStep()}
        </div>
      </div>

      <Footer />
    </div>
  )
}
