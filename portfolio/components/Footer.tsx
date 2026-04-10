'use client'

import Link from 'next/link'
import { Linkedin, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-toy-ink/10 py-14 md:py-16 px-4 bg-gradient-to-b from-sky-200/35 via-white/20 to-yellow-100/40 backdrop-blur-[2px]">
      <div className="playful-rainbow-bar max-w-lg mx-auto mb-10 opacity-80" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">
          <div>
            <h3 className="font-heading text-2xl font-bold text-toy-ink mb-3 inline-block bg-toy-yellow/85 px-3 py-1 rounded-xl border border-toy-ink/12 shadow-lift">
              TK
            </h3>
            <p className="text-toy-ink font-medium text-sm leading-relaxed max-w-xs">
              Meaningful experiences through design — playful surface, dimensional craft.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xs tracking-[0.15em] uppercase text-toy-ink/70 mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              <Link
                href="#work"
                className="block font-semibold text-toy-ink/85 hover:text-accent-blue transition-colors text-sm"
              >
                Work
              </Link>
              <Link
                href="#about"
                className="block font-semibold text-toy-ink/85 hover:text-accent-blue transition-colors text-sm"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="block font-semibold text-toy-ink/85 hover:text-accent-blue transition-colors text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xs tracking-[0.15em] uppercase text-toy-ink/70 mb-4">
              Connect
            </h4>
            <div className="flex gap-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-white border border-toy-ink/12 text-toy-ink shadow-lift hover:-translate-y-0.5 hover:shadow-toy-hover transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} strokeWidth={2} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-toy-pink/80 border border-toy-ink/12 text-toy-ink shadow-lift hover:-translate-y-0.5 hover:shadow-toy-hover transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} strokeWidth={2} />
              </a>
              <a
                href="mailto:hello@tulayakorn.com"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-toy-mint/70 border border-toy-ink/12 text-toy-ink shadow-lift hover:-translate-y-0.5 hover:shadow-toy-hover transition-all"
                aria-label="Email"
              >
                <Mail size={18} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-toy-ink/70 font-semibold text-xs pt-8 border-t border-toy-ink/10">
          © {currentYear} Tulayakorn
        </div>
      </div>
    </footer>
  )
}
