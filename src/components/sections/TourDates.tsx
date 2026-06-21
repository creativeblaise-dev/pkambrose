import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { tourDates } from "../../data/tourDates"

const INITIAL_COUNT = 6

function TourCard({ show, index }: { show: (typeof tourDates)[0]; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        layout: { type: "spring", stiffness: 400, damping: 30 },
        opacity: { duration: 0.3 },
        y: { duration: 0.4, delay: index * 0.05 },
        scale: { duration: 0.3 },
      }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative bg-[#1C1C1E] rounded-xl border border-white/6 overflow-hidden cursor-default"
    >
      {/* Subtle gold glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-gold/[0.03] via-transparent to-transparent pointer-events-none" />

      {/* Top accent line */}
      <div className="h-0.5 w-full bg-linear-to-r from-transparent via-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative flex items-stretch">
        {/* Date block */}
        <div className="flex flex-col items-center justify-center px-5 py-5 min-w-21.25 border-r border-white/6 group-hover:border-gold/10 transition-colors duration-300">
          <span className="text-[10px] font-bold tracking-[0.25em] text-gold uppercase">
            {show.month}
          </span>
          <span className="text-4xl font-bold text-white leading-none mt-1 tracking-tight">
            {show.day}
          </span>
          <span className="text-[10px] text-white/30 font-medium mt-1">
            {show.year}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center px-5 py-4">
          <span className="font-semibold text-white text-[20px] leading-snug group-hover:text-gold transition-colors duration-300">
            {show.venue}
          </span>
          <span className="text-sm text-white/50 mt-1">{show.city}</span>
          <div className="flex items-center gap-2 mt-2">
            <img src={show.flagImg} alt={show.country} className="w-6 h-5 rounded-xs  object-cover" />
            <span className="text-xs text-white/40 font-medium">{show.country}</span>
            <span className="text-[15px] font-semibold tracking-widest uppercase text-gold/70 ml-1">
              {show.band}
            </span>
          </div>
        </div>

        {/* Ticket / Info */}
        <div className="flex items-center pr-5">
          {show.ticketUrl ? (
            <a
              href={show.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-semibold tracking-wide uppercase text-gold border border-gold/30 rounded-full px-3 py-1.5 hover:bg-gold hover:text-background transition-all duration-200"
            >
              Tickets
            </a>
          ) : (
            <span className="text-[11px] font-medium tracking-wide uppercase text-white/20 border border-white/10 rounded-full px-3 py-1.5">
              Soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function TourDates() {
  const [showAll, setShowAll] = useState(false)
  const upcoming = tourDates.filter((d) => d.status === "upcoming")
  const visible = showAll ? upcoming : upcoming.slice(0, INITIAL_COUNT)
  const hasMore = upcoming.length > INITIAL_COUNT

  return (
    <section id="tour-dates" className="relative py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        // style={{ backgroundImage: "url('/images/tour-bg.png')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/65" />
      <div className="absolute inset-0 bg-linear-to-b from-background/30 via-background/70 to-background/90" />

      <div className="relative z-10 max-w-6xl mx-auto">
      <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3 text-center">
        On Stage
      </p>
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-10 text-center">
        Tour Dates
      </h2>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AnimatePresence initial={false}>
          {visible.map((show, i) => (
            <TourCard key={`${show.date}-${show.venue}`} show={show} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      {hasMore && (
        <motion.div layout className="flex justify-center mt-10">
          <motion.button
            layout
            onClick={() => setShowAll(!showAll)}
            className="group relative px-8 py-3.5 border border-gold/30 text-gold rounded-full font-medium text-sm tracking-wide hover:border-gold transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              {showAll ? (
                <>
                  Show Less
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  Load More Shows
                  <span className="text-gold/50">({upcoming.length - INITIAL_COUNT})</span>
                  <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-gold/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.button>
        </motion.div>
      )}
      </div>
    </section>
  )
}
