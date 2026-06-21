import { useState } from "react"
import { motion } from "framer-motion"
import { Section } from "../layout/Section"

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you! Your message has been noted.")
    setForm({ name: "", email: "", message: "" })
  }

  return (
    <Section id="contact" alt>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Guitar Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden md:flex justify-center"
        >
          <img
            src="/images/guitar.png"
            alt="Electric bass guitar"
            className="w-72 lg:w-80 drop-shadow-2xl"
          />
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
            Get in Touch
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-heading mb-2">
            Contact
          </h2>
          <p className="text-body mb-8 text-sm">
            For bookings, collaborations, or just to say hello.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-heading mb-1.5">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full px-4 py-3 bg-background-card border border-border rounded-lg text-heading placeholder:text-body/30 focus:outline-none focus:border-gold/50 transition-colors text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-heading mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-background-card border border-border rounded-lg text-heading placeholder:text-body/30 focus:outline-none focus:border-gold/50 transition-colors text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-heading mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 bg-background-card border border-border rounded-lg text-heading placeholder:text-body/30 focus:outline-none focus:border-gold/50 transition-colors text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gold text-background font-semibold rounded-lg hover:bg-gold-hover transition-colors duration-200 text-sm"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  )
}
