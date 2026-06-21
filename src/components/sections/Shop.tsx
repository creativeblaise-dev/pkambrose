import { Section } from "../layout/Section"

export function Shop() {
  return (
    <Section id="shop">
      <div className="text-center py-10">
        <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
          Merchandise
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-heading mb-4">
          Shop
        </h2>
        <p className="text-body max-w-md mx-auto mb-8">
          Exclusive merch and music coming soon. Stay tuned for updates.
        </p>
        <div className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gold text-gold rounded-sm font-medium">
          Coming Soon
        </div>
      </div>
    </Section>
  )
}
