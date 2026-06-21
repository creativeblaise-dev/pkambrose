import { useState } from "react"
import { useScrollSpy } from "../../hooks/useScrollSpy"
import { cn } from "../../lib/utils"

const navLinks = [
  { id: "home", label: "Home" },
  { id: "bio", label: "Bio" },
  { id: "gallery", label: "Gallery" },
  { id: "tour-dates", label: "Tour Dates" },
  { id: "equipment", label: "Equipment" },
  { id: "shop", label: "Shop" },
  { id: "contact", label: "Contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useScrollSpy(navLinks.map((l) => l.id))

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMobileOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md  border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-15 flex items-center justify-between h-16">
        <button
          onClick={() => scrollTo("home")}
          className="font-serif text-[40px] font-semibold text-heading tracking-tight"
        >
          PK<span className="text-gold">Ambrose</span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className={cn(
                  "text-md font-medium transition-colors duration-200",
                  activeId === link.id ? "text-gold" : "text-body hover:text-heading"
                )}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "w-5 h-0.5 bg-heading transition-transform duration-200",
              mobileOpen && "rotate-45 translate-y-2"
            )}
          />
          <span
            className={cn(
              "w-5 h-0.5 bg-heading transition-opacity duration-200",
              mobileOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "w-5 h-0.5 bg-heading transition-transform duration-200",
              mobileOpen && "-rotate-45 -translate-y-2"
            )}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background-alt border-b border-border">
          <ul className="flex flex-col items-center py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200",
                    activeId === link.id ? "text-gold" : "text-body hover:text-heading"
                  )}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
