import { SocialIcons } from "../ui/SocialIcons"

export function Footer() {
  return (
    <footer className="bg-background-alt border-t border-border text-body py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-serif text-lg font-semibold text-heading">
            Pk<span className="text-gold">Ambrose</span>
          </p>
          <p className="text-sm text-body mt-1">
            Bass Player & Musical Director — London
          </p>
        </div>

        <SocialIcons variant="light" />

        <p className="text-sm text-body/60">
          &copy; {new Date().getFullYear()} Pk Ambrose Music. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
