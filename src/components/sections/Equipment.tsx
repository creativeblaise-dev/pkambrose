import { Section } from "../layout/Section"
import { equipment } from "../../data/equipment"

export function Equipment() {
  return (
    <Section id="equipment" alt>
      <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3 text-center">
        Gear
      </p>
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-heading mb-10 text-center">
        Equipment
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipment.map((item) => (
          <div
            key={item.name}
            className="bg-background-card p-6 rounded-sm border border-border hover:border-gold/50 transition-colors duration-200"
          >
            {/* Replace with real image */}
            <div className="aspect-video bg-background rounded-sm mb-4 flex items-center justify-center">
              <span className="text-body/40 text-sm">{item.name}</span>
            </div>
            <h3 className="font-medium text-heading">{item.name}</h3>
            {item.brand && <p className="text-sm text-gold">{item.brand}</p>}
            {item.description && (
              <p className="text-sm text-body mt-2">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
