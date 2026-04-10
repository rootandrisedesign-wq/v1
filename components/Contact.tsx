'use client'

import ScrollReveal from './ScrollReveal'
import { Mail, Linkedin, Instagram } from 'lucide-react'
import { Parallax } from '@/components/ParallaxProvider'

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 px-4 lg:px-8 pb-28">
      <div className="max-w-7xl mx-auto">
        <Parallax depth={0.35}>
          <ScrollReveal>
            <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-toy-bubble mb-8 leading-[0.95]">
              Let&rsquo;s work
              <br />
              together!
            </h2>
          </ScrollReveal>
        </Parallax>

        <ScrollReveal delay={0.08}>
          <p className="text-lg sm:text-xl font-semibold text-toy-ink mb-10 max-w-xl leading-relaxed">
            Have a project in mind? Let&rsquo;s chat.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <a
            href="mailto:hello@tulayakorn.com"
            className="inline-block text-xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-toy-ink hover:text-accent-blue transition-colors duration-toy mb-14 break-all sm:break-normal"
          >
            hello@tulayakorn.com
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.18}>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 rounded-full border border-toy-ink/12 bg-white text-toy-ink shadow-lift hover:shadow-toy-hover hover:-translate-y-0.5 transition-all duration-toy ease-toy"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} strokeWidth={2} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 rounded-full border border-toy-ink/12 bg-toy-pink/85 text-toy-ink shadow-lift hover:shadow-toy-hover hover:-translate-y-0.5 transition-all duration-toy ease-toy"
              aria-label="Instagram"
            >
              <Instagram size={22} strokeWidth={2} />
            </a>
            <a
              href="mailto:hello@tulayakorn.com"
              className="flex items-center justify-center w-14 h-14 rounded-full border border-toy-ink/12 bg-toy-yellow/90 text-toy-ink shadow-lift hover:shadow-toy-hover hover:-translate-y-0.5 transition-all duration-toy ease-toy"
              aria-label="Email"
            >
              <Mail size={22} strokeWidth={2} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
