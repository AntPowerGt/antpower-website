import * as React from "react"
import { Check } from 'lucide-react'

import { cn } from "@/lib/utils"

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <label className="flex items-center">
        <input
          type="checkbox"
          className="sr-only"
          ref={ref}
          {...props}
        />
        <div
          className={cn(
            "h-4 w-4 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            props.checked ? "bg-primary text-primary-foreground" : "bg-background",
            className
          )}
        >
          {props.checked && (
            <Check className="h-3 w-3 text-current" />
          )}
        </div>
        {label && <span className="ml-2 text-sm">{label}</span>}
      </label>
    )
  }
)

Checkbox.displayName = "Checkbox"

export { Checkbox }