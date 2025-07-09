import type React from "react"
import { Button as ShadcnButton } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ComponentProps<typeof ShadcnButton> {
  children: React.ReactNode
}

export function Button({ children, className, variant = "default", ...props }: ButtonProps) {
  // Custom styling to ensure text visibility - all buttons get #1e90ff bg with white text
  const buttonStyles = cn("bg-[#1e90ff] text-white border-[#1e90ff] hover:bg-[#1c7ed6] hover:text-white", className)

  return (
    <ShadcnButton variant={variant} className={buttonStyles} {...props}>
      {children}
    </ShadcnButton>
  )
}
