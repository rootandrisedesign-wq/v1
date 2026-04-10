'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown } from 'lucide-react'
import { Parallax } from '@/components/ParallaxProvider'

const stickerVariants = {
  a: {
    className: 'hidden sm:block absolute -left-4 top-[12%] w-24 md:w-32 z-20 shadow-lift rotate-[-8deg]',
    src: '/playful-cube.png',
    delay: 0.2,
  },
  b: {
    className: 'hidden md:block absolute -right-6 top-[8%] w-28 lg:w-36 z-20 shadow-lift rotate-[10deg]',
    src: '/playful-summer.png',
    delay: 0.35,
  },
  c: {
    className: 'hidden lg:block absolute right-[8%] bottom-[18%] w-24 z-20 rotate-[6deg]',
    src: '/playful-zhixing.png',
    delay: 0.5,
  },
} as const

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-14 px-4 lg:px-10 pt-28 pb-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 toy-grid-floor opacity-25" />

      <div className="pointer-events-none absolute top-24 right-[12%] text-4xl opacity-50 animate-float">
        🌈
      </div>
      <div className="pointer-events-none absolute bottom-32 left-[18%] text-2xl opacity-55 animate-float-slow">
        ✨
      </div>

      <div className="relative z-10 max-w-7xl w-full lg:flex lg:items-center lg:justify-between lg:gap-10">
        <Parallax depth={0.4} className="flex-1 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 70, damping: 17 }}
          >
            <p className="inline-flex items-center gap-2 text-toy-ink font-semibold text-xs md:text-sm mb-5 tracking-wide uppercase bg-white/85 px-4 py-2 rounded-full border border-toy-ink/12 shadow-lift">
              <span className="text-base leading-none">🎨</span>
              Creative Director & Designer
            </p>

            <h1 className="font-heading font-bold leading-[0.88] mb-6 lg:mb-8">
              <span className="block text-[13vw] sm:text-[11vw] lg:text-[6.25rem] xl:text-[7.25rem] text-toy-bubble">
                Tulayakorn
              </span>
            </h1>

            <p className="text-base md:text-lg text-toy-ink/95 font-medium max-w-xl mb-8 leading-relaxed bg-white/55 backdrop-blur-md rounded-3xl border border-white/70 px-5 py-4 shadow-glass">
              Dopamine-friendly design with depth: clay-soft UI, inclusive communities, and creative
              energy — refined edges, serious craft.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 120, damping: 15, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="#work"
                className="group inline-flex items-center gap-3 text-toy-ink font-bold text-lg md:text-xl rounded-full px-8 py-4 border border-toy-ink/15 shadow-toy bg-gradient-to-br from-toy-lime/90 via-toy-mint to-emerald-200/90 hover:shadow-toy-hover transition-all duration-toy ease-toy"
              >
                <span>Let&apos;s go</span>
                <ArrowDown
                  className="group-hover:translate-y-1 transition-transform duration-toy ease-toy"
                  size={22}
                  strokeWidth={2}
                />
              </Link>
              <span className="text-sm font-semibold text-toy-ink/75 bg-toy-lavender/35 px-3 py-1.5 rounded-full border border-toy-ink/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                Idea → brush → build
              </span>
            </motion.div>
          </motion.div>
        </Parallax>

        <Parallax depth={1.15} className="relative flex-shrink-0 w-full max-w-md lg:max-w-lg mt-6 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 28, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 55, damping: 15, delay: 0.1 }}
          >
            {Object.entries(stickerVariants).map(([key, cfg]) => (
              <motion.div
                key={key}
                className={cfg.className}
                initial={{ opacity: 0, scale: 0.65, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: 'spring', delay: cfg.delay, stiffness: 200, damping: 18 }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
                  transition={{ duration: key === 'a' ? 4.5 : 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="rounded-3xl border border-white/70 bg-white/35 p-1 shadow-glass"
                >
                  <Image
                    src={cfg.src}
                    alt=""
                    width={200}
                    height={200}
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </motion.div>
              </motion.div>
            ))}

            <div className="p-1 rounded-[2rem] bg-gradient-to-br from-fuchsia-400/85 via-yellow-300/80 to-sky-400/85 shadow-pop">
              <div className="relative rounded-[1.85rem] overflow-hidden border border-white/80 bg-white/45 backdrop-blur-md p-2 animate-float shadow-lift">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/45 to-transparent pointer-events-none z-10" />
                <Image
                  src="/toy-reference-scene.png"
                  alt="Playful 3D scene"
                  width={640}
                  height={640}
                  className="relative z-0 w-full h-auto rounded-2xl object-cover"
                  priority
                />
              </div>
            </div>

            <motion.div
              className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-toy-ink/12 shadow-toy flex items-center justify-center font-heading font-bold text-lg sm:text-xl text-white bg-gradient-to-br from-toy-candy to-purple-500 animate-wiggle"
              whileHover={{ scale: 1.06 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              Yo!
            </motion.div>

            <motion.div
              className="hidden sm:flex absolute -left-2 bottom-10 w-16 h-16 rounded-2xl border border-toy-ink/12 overflow-hidden shadow-lift rotate-[-12deg]"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
            >
              <Image src="/playful-skittles.png" alt="" width={128} height={128} className="object-cover w-full h-full" />
            </motion.div>
          </motion.div>
        </Parallax>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, type: 'spring', stiffness: 80 }}
      >
        <span className="text-[10px] font-bold text-white/95 drop-shadow-md uppercase tracking-[0.25em]">
          Scroll
        </span>
        <div className="w-2 h-16 rounded-full bg-gradient-to-b from-white via-toy-pink to-toy-sky border border-white/50 shadow-lift" />
      </motion.div>
    </section>
  )
}
