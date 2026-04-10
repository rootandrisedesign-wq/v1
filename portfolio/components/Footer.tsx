'use client'

import Link from 'next/link'
import { Linkedin, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Logo & Tagline */}
          <div>
            <h3 className="font-heading text-xl font-bold text-accent mb-2">TK</h3>
            <p className="text-text-dim text-sm">
              Creating meaningful experiences through design
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="#work" className="block text-text-dim hover:text-accent transition-colors text-sm">
                Work
              </Link>
              <Link href="#about" className="block text-text-dim hover:text-accent transition-colors text-sm">
                About
              </Link>
              <Link href="#contact" className="block text-text-dim hover:text-accent transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Column 3: Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-dim hover:text-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-dim hover:text-accent transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:hello@tulayakorn.com"
                className="text-text-dim hover:text-accent transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-text-dim text-sm pt-8 border-t border-border">
          © {currentYear} Tulayakorn. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
