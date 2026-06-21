import { Navbar } from "./components/layout/Navbar"
import { Footer } from "./components/layout/Footer"
import { Hero } from "./components/sections/Hero"
import { Bio } from "./components/sections/Bio"
import { Gallery } from "./components/sections/Gallery"
import { TourDates } from "./components/sections/TourDates"
import { Equipment } from "./components/sections/Equipment"
import { Shop } from "./components/sections/Shop"
import { Contact } from "./components/sections/Contact"

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Bio />
      <Gallery />
      <TourDates />
      <Equipment />
      <Shop />
      <Contact />
      <Footer />
    </div>
  )
}
