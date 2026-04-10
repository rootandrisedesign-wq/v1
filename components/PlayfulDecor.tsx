'use client'

import { motion } from 'framer-motion'

const sparkles = ['✦', '✧', '★', '·', '◎']

export default function PlayfulDecor() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden select-none"
      aria-hidden
    >
      <motion.div
        className="absolute -top-40 -left-32 w-[min(100vw,520px)] h-[min(100vw,520px)] rounded-full bg-gradient-to-br from-yellow-200/90 via-amber-300/50 to-transparent blur-2xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-24 w-[420px] h-[420px] rounded-full bg-gradient-to-bl from-sky-300/70 via-cyan-200/40 to-transparent blur-2xl"
        animate={{ y: [0, 24, 0], x: [0, -12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 left-[8%] w-[340px] h-[340px] rounded-full bg-gradient-to-tr from-fuchsia-300/35 via-pink-200/25 to-transparent blur-2xl"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[55%] h-[45%] rounded-tl-[40%] bg-gradient-to-tl from-lime-300/20 via-emerald-200/15 to-transparent"
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="absolute inset-0 opacity-[0.14] toy-grid-floor" />

      {[
        { t: 0.12, l: 0.08, d: 0, s: sparkles[0] },
        { t: 0.22, l: 0.88, d: 0.4, s: sparkles[1] },
        { t: 0.55, l: 0.06, d: 0.8, s: sparkles[2] },
        { t: 0.72, l: 0.92, d: 1.2, s: sparkles[3] },
        { t: 0.38, l: 0.48, d: 0.6, s: sparkles[4] },
      ].map((item, i) => (
        <motion.span
          key={i}
          className="absolute text-lg md:text-2xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
          style={{ top: `${item.t * 100}%`, left: `${item.l * 100}%` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [0.9, 1.15, 0.9],
            rotate: [-8, 8, -8],
          }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Infinity,
            delay: item.d,
            ease: 'easeInOut',
          }}
        >
          {item.s}
        </motion.span>
      ))}

      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={`candy-${i}`}
          className="absolute rounded-full border border-white/55 shadow-[0_6px_18px_rgba(66,32,6,0.08),inset_0_2px_6px_rgba(255,255,255,0.45)]"
          style={{
            width: 10 + (i % 3) * 6,
            height: 10 + (i % 3) * 6,
            left: `${12 + i * 14}%`,
            top: `${18 + (i % 2) * 55}%`,
            background: ['#f472b6', '#4ade80', '#38bdf8', '#facc15', '#c084fc', '#fb9234'][i],
          }}
          animate={{
            y: [0, -12, 0],
            rotate: [0, 12, -8, 0],
          }}
          transition={{
            duration: 6 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.35,
          }}
        />
      ))}
    </div>
  )
}
