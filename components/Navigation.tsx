'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 md:px-4 md:pt-4">
      <div className="max-w-7xl mx-auto rounded-bubble border border-toy-ink/15 bg-white/75 backdrop-blur-xl shadow-lift overflow-hidden ring-1 ring-white/60">
        <div className="playful-rainbow-bar opacity-80" />
        <div className="flex justify-between items-center h-14 md:h-16 px-4 sm:px-6">
          <Link
            href="/"
            className="font-heading text-xl font-bold text-toy-ink bg-gradient-to-br from-toy-yellow/90 to-amber-200/80 px-4 py-1.5 rounded-full border border-toy-ink/12 shadow-toy hover:shadow-toy-hover transition-all duration-toy ease-toy"
          >
            TK
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-toy-ink font-semibold text-sm px-4 py-2 rounded-full bg-white/90 border border-sky-300/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_2px_8px_rgba(14,165,233,0.08)] hover:border-sky-400/40 hover:shadow-toy-hover transition-all duration-toy ease-toy"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-full border border-toy-ink/15 bg-gradient-to-br from-toy-candy/90 to-toy-pink/80 text-white shadow-toy"
            aria-expanded={isOpen}
            aria-label="Menu"
          >
            {isOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 26 }}
            className="md:hidden mt-2 mx-auto max-w-7xl rounded-3xl border border-toy-ink/12 bg-white/90 backdrop-blur-lg shadow-lift overflow-hidden ring-1 ring-white/50"
          >
            <div className="playful-rainbow-bar" />
            <div className="px-4 py-5 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-center font-bold text-toy-ink py-3 rounded-2xl bg-gradient-to-r from-toy-mint/40 to-toy-lime/30 border border-toy-ink/10 shadow-toy"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
