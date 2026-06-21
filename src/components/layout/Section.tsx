import type { ReactNode } from "react"
import { cn } from "../../lib/utils"
import { ScrollReveal } from "../ui/ScrollReveal"

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
  alt?: boolean
}

export function Section({ id, children, className, alt = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-20 px-6 md:px-12 lg:px-20", alt && "bg-background-alt", className)}
    >
      <ScrollReveal>
        <div className="max-w-6xl mx-auto">{children}</div>
      </ScrollReveal>
    </section>
  )
}
