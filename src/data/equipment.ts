export interface Equipment {
  name: string
  brand: string
  type: "bass" | "amp" | "pedal" | "accessory"
  description?: string
}

export const equipment: Equipment[] = [
  { name: "Coming Soon", brand: "", type: "bass", description: "Equipment details will be updated soon." },
]
