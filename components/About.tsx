'use client'

import ScrollReveal from './ScrollReveal'
import { Parallax } from '@/components/ParallaxProvider'

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 lg:py-28 px-4 lg:px-8 border-y border-toy-ink/10 bg-white/25 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]"
    >
      <div className="pointer-events-none absolute inset-0 toy-grid-floor opacity-15" />
      <div className="relative max-w-7xl mx-auto z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <Parallax depth={0.3}>
            <ScrollReveal>
              <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold text-toy-bubble-soft sticky top-28 leading-none">
                About
              </h2>
            </ScrollReveal>
          </Parallax>

          <div className="space-y-8">
            <ScrollReveal delay={0.1}>
              <p className="text-xl sm:text-2xl leading-relaxed font-semibold text-toy-ink bg-white/65 rounded-3xl border border-toy-ink/10 p-6 shadow-lift">
                I&rsquo;m a creative director and designer based in Bangkok,
                passionate about meaningful experiences and inclusive communities.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-base text-toy-ink/85 font-medium leading-relaxed border-l border-sky-400/60 pl-5">
                Currently shipping <strong>Vimaan</strong> and <strong>Greentein</strong> — apps,
                brands, and communities with depth, not just decoration.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.28}>
              <div className="pt-1">
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-toy-ink/65 mb-4">
                  Focus
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Product Design', 'Brand Strategy', 'Community', 'Sustainable Design'].map(
                    (skill) => (
                      <div
                        key={skill}
                        className="rounded-2xl border border-toy-ink/10 bg-toy-mint/40 px-4 py-3 text-sm font-semibold text-toy-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_4px_12px_rgba(66,32,6,0.06)]"
                      >
                        {skill}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
