'use client'

const STRIP = [
  'Brief',
  'Sketch',
  'Iterate',
  'Brand',
  'Motion',
  'Systems',
  'Community',
  'Play',
  'Ship',
  '·',
]

export default function ConveyorBelt() {
  const doubled = [...STRIP, ...STRIP]

  return (
    <div className="relative w-full overflow-hidden border-y border-toy-ink/[0.08] bg-gradient-to-r from-white/15 via-white/30 to-white/15 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
      <div
        className="absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-[#7dd3fc]/40 to-transparent pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-[#fde047]/35 to-transparent pointer-events-none"
        aria-hidden
      />

      <div className="flex w-max animate-belt py-3.5 md:py-4">
        {doubled.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="inline-flex items-center px-8 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-toy-ink/55 whitespace-nowrap"
          >
            {label === '·' ? (
              <span className="text-toy-pink/60 text-lg leading-none">●</span>
            ) : (
              label
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
