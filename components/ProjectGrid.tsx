'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { projects } from '@/lib/projects'
import ScrollReveal from './ScrollReveal'
import { Parallax } from '@/components/ParallaxProvider'

export default function ProjectGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section id="work" className="relative py-20 lg:py-28 px-4 lg:px-8 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 toy-grid-floor opacity-20" />
      <div className="relative max-w-7xl mx-auto z-10">
        <div className="playful-rainbow-bar max-w-md mb-10 rounded-full opacity-75" />
        <ScrollReveal>
          <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold text-toy-bubble-soft mb-4 leading-none">
            Selected
            <br />
            Work
          </h2>
          <p className="inline-flex items-center gap-2 text-toy-ink font-semibold text-sm mb-16 bg-toy-pink/80 px-4 py-2 rounded-full border border-toy-ink/12 shadow-lift">
            <span className="w-1.5 h-1.5 rounded-full bg-toy-red animate-pulse" />
            {projects.length} projects
          </p>
        </ScrollReveal>

        <div className="space-y-20 lg:space-y-24">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.06}>
              <Parallax depth={index % 2 === 0 ? 0.25 : 0.45}>
                <Link
                  href={`#${project.id}`}
                  className="group block"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div
                      className={`relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/50 bg-white/35 backdrop-blur-md shadow-toy-lg p-1.5 ring-1 ring-toy-ink/8 ${
                        index % 2 === 1 ? 'lg:order-2' : ''
                      }`}
                    >
                      <motion.div
                        className="relative w-full h-full rounded-3xl overflow-hidden"
                        animate={{
                          scale: hoveredId === project.id ? 1.025 : 1,
                          rotate: hoveredId === project.id ? (index % 2 === 0 ? -0.6 : 0.6) : 0,
                        }}
                        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                      >
                        <div
                          className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${
                            index % 3 === 0
                              ? 'from-toy-yellow/95 to-toy-orange/90'
                              : index % 3 === 1
                                ? 'from-toy-mint/95 to-toy-blue/80'
                                : 'from-toy-pink/90 to-toy-red/80'
                          }`}
                        >
                          <span className="text-white font-heading font-bold text-2xl md:text-3xl drop-shadow-md text-center px-4">
                            {project.title}
                          </span>
                        </div>
                        <div className="absolute inset-0 rounded-3xl pointer-events-none shadow-[inset_0_0_48px_rgba(255,255,255,0.25)]" />
                      </motion.div>
                    </div>

                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <p className="text-[11px] font-bold text-toy-ink/80 mb-2 tracking-[0.18em] uppercase">
                        {project.category} · {project.year}
                      </p>
                      <h3 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-toy-ink mb-5 group-hover:text-accent-blue transition-colors duration-toy tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-base text-toy-ink/82 font-medium mb-6 leading-relaxed max-w-lg">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 rounded-full text-xs font-semibold text-toy-ink/85 bg-white/80 border border-toy-ink/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_2px_6px_rgba(66,32,6,0.06)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </Parallax>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
