import { cn } from "../../lib/utils"
import type { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: "primary" | "outline"
  className?: string
  onClick?: () => void
}

export function Button({ children, href, variant = "primary", className, onClick }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 font-medium transition-colors duration-200 rounded-sm"

  const variants = {
    primary: "bg-gold text-background font-medium hover:bg-gold-hover",
    outline: "border border-gold text-gold hover:bg-gold hover:text-background",
  }

  const classes = cn(base, variants[variant], className)

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
