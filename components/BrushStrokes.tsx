'use client'

import { motion } from 'framer-motion'

/** Organic brush-like SVG paths — wanders slowly to evoke sketching / creative process */
export default function BrushStrokes() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[2] overflow-hidden"
      aria-hidden
    >
      <defs>
        <linearGradient id="brush-a" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ec4899" stopOpacity="0.55" />
          <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="brush-b" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#facc15" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0.35" />
        </linearGradient>
      </defs>

      <motion.svg
        className="absolute -left-[15%] top-[8%] w-[130%] h-[55%] text-transparent"
        viewBox="0 0 1400 420"
        preserveAspectRatio="none"
        initial={false}
        animate={{
          x: [0, 45, -25, 20, 0],
          y: [0, -28, 15, -10, 0],
          rotate: [0, 0.8, -0.6, 0.4, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <motion.path
          d="M40,220 C220,120 380,320 560,200 S920,160 1150,240 S1320,100 1360,200"
          fill="none"
          stroke="url(#brush-a)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0.15, opacity: 0.25 }}
          animate={{
            pathLength: [0.12, 0.95, 0.2, 0.9, 0.15],
            opacity: [0.2, 0.38, 0.28, 0.35, 0.22],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.path
          d="M80,320 Q320,200 520,280 T900,260 T1250,340"
          fill="none"
          stroke="url(#brush-b)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="8 14"
          animate={{ opacity: [0.2, 0.4, 0.25, 0.38, 0.2] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.svg>

      <motion.svg
        className="absolute right-[-10%] bottom-[12%] w-[90%] h-[45%]"
        viewBox="0 0 900 380"
        preserveAspectRatio="none"
        animate={{
          x: [0, -35, 25, 0],
          y: [0, 20, -18, 0],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.path
          d="M20,180 C200,80 350,280 500,160 C650,40 780,200 880,120"
          fill="none"
          stroke="url(#brush-a)"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity={0.3}
          initial={{ pathLength: 0.3 }}
          animate={{ pathLength: [0.25, 1, 0.35, 0.95, 0.3] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.path
          d="M60,300 C180,240 280,340 420,260 S700,220 840,300"
          fill="none"
          stroke="#f472b6"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeOpacity={0.28}
          animate={{ strokeOpacity: [0.15, 0.32, 0.2, 0.3, 0.15] }}
          transition={{ duration: 11, repeat: Infinity }}
        />
      </motion.svg>
    </div>
  )
}
