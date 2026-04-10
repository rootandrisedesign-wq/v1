'use client'

import {
  createContext,
  useContext,
  useEffect,
  type ReactNode,
} from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion'

type ParallaxCtx = {
  normX: MotionValue<number>
  normY: MotionValue<number>
}

const Ctx = createContext<ParallaxCtx | null>(null)

export function useParallaxMouse() {
  const v = useContext(Ctx)
  if (!v) {
    throw new Error('useParallaxMouse must be used within ParallaxProvider')
  }
  return v
}

export function ParallaxProvider({ children }: { children: ReactNode }) {
  const normX = useMotionValue(0)
  const normY = useMotionValue(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      normX.set(e.clientX / window.innerWidth - 0.5)
      normY.set(e.clientY / window.innerHeight - 0.5)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [normX, normY])

  return <Ctx.Provider value={{ normX, normY }}>{children}</Ctx.Provider>
}

type ParallaxProps = {
  children: ReactNode
  /** 1 = subtle, 2 = medium hero float */
  depth?: number
  className?: string
}

export function Parallax({ children, depth = 1, className }: ParallaxProps) {
  const { normX, normY } = useParallaxMouse()
  const range = 18 * depth
  const yRange = 14 * depth

  const tx = useTransform(normX, [-0.5, 0.5], [-range, range])
  const ty = useTransform(normY, [-0.5, 0.5], [-yRange, yRange])
  const x = useSpring(tx, { stiffness: 52, damping: 28, mass: 0.4 })
  const y = useSpring(ty, { stiffness: 52, damping: 28, mass: 0.4 })

  return (
    <motion.div className={className} style={{ x, y }}>
      {children}
    </motion.div>
  )
}
