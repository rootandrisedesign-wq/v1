'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const controls = useAnimation()

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 56 : direction === 'down' ? -56 : 0,
      x: direction === 'left' ? 48 : direction === 'right' ? -48 : 0,
      rotate: direction === 'left' || direction === 'right' ? 0 : -2,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0,
    },
  }

  useEffect(() => {
    if (isInView) {
      void controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{
        type: 'spring',
        stiffness: 80,
        damping: 16,
        mass: 0.9,
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
