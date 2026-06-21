import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Section } from "../layout/Section"

const galleryImages = [
  { id: 1, src: "/images/gallery/photo-1479660095429-2cf4e1360472.jpg", alt: "Live performance" },
  { id: 2, src: "/images/gallery/evening-view-downtown-dubai-with-burj-khalifa_887552-24770.avif", alt: "Dubai skyline" },
  { id: 3, src: "/images/gallery/cape-town-from-above-by-sharonang-pixa.jpg", alt: "Cape Town" },
  { id: 4, src: "/images/gallery/BURJ-KHALIFA-DUBAI-CITY-VIEW-NIGHT-1991-1100PX.jpg", alt: "Burj Khalifa night" },
  { id: 5, src: "/images/gallery/skyline-london.webp", alt: "London skyline" },
]

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null)
  const selectedImage = selected !== null ? galleryImages.find((img) => img.id === selected) : null

  return (
    <Section id="gallery" alt>
      <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3 text-center">
        Portfolio
      </p>
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-heading mb-10 text-center">
        Gallery
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {galleryImages.map((img, i) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <button
              onClick={() => setSelected(img.id)}
              className="aspect-square w-full rounded-lg overflow-hidden group relative"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end justify-start p-3">
                <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {img.alt}
                </span>
              </div>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-white/60 hover:text-white text-3xl transition-colors z-10"
            >
              &times;
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
