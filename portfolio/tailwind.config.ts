import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFD93D',
        surface: '#FFF9E6',
        text: '#422006',
        'text-dim': '#92400E',
        accent: '#FF6B35',
        'accent-blue': '#2563EB',
        'accent-mint': '#34D399',
        'accent-red': '#EF4444',
        border: '#F59E0B',
        toy: {
          yellow: '#FFD700',
          orange: '#FF9F1C',
          gold: '#FBBF24',
          blue: '#3B82F6',
          sky: '#38BDF8',
          lime: '#A3E635',
          red: '#EF4444',
          mint: '#6EE7B7',
          cream: '#FFF8E7',
          ink: '#422006',
          pink: '#FDA4AF',
          candy: '#F472B6',
          lavender: '#C4B5FD',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['var(--font-playful)', 'var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '32px',
        '4xl': '48px',
        '5xl': '64px',
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
        '24': '96px',
      },
      borderRadius: {
        sm: '10px',
        md: '16px',
        lg: '24px',
        xl: '28px',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        bubble: '2rem',
      },
      boxShadow: {
        toy: 'inset 0 1px 0 rgba(255,255,255,0.75), 0 2px 8px rgba(66,32,6,0.07), 0 12px 32px -8px rgba(14,165,233,0.12)',
        'toy-hover':
          'inset 0 1px 0 rgba(255,255,255,0.8), 0 4px 14px rgba(66,32,6,0.08), 0 18px 40px -12px rgba(244,114,182,0.14)',
        'toy-lg':
          'inset 0 1px 0 rgba(255,255,255,0.85), 0 4px 20px rgba(66,32,6,0.08), 0 28px 56px -16px rgba(56,189,248,0.14)',
        glass:
          'inset 0 1px 1px rgba(255,255,255,0.9), inset 0 -1px 0 rgba(66,32,6,0.04), 0 10px 40px -12px rgba(251, 146, 60, 0.15)',
        clay:
          'inset 0 1px 0 rgba(255,255,255,0.7), 0 6px 20px rgba(56, 189, 248, 0.12), 0 2px 8px rgba(244, 114, 182, 0.08)',
        pop: 'inset 0 1px 0 rgba(255,255,255,0.75), 0 8px 24px rgba(30, 58, 95, 0.1), 0 0 48px rgba(250, 204, 21, 0.2)',
        lift: 'inset 0 1px 0 rgba(255,255,255,0.95), 0 1px 2px rgba(66,32,6,0.05), 0 16px 40px -12px rgba(14,165,233,0.1)',
      },
      transitionDuration: {
        toy: '320ms',
      },
      transitionTimingFunction: {
        toy: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        float: 'toyFloat 3.2s ease-in-out infinite',
        'float-slow': 'toyFloat 5s ease-in-out infinite',
        wiggle: 'toyWiggle 2.4s ease-in-out infinite',
        shimmer: 'playfulShimmer 14s linear infinite',
        conveyor: 'conveyor 18s linear infinite',
        belt: 'beltSlide 34s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        toyFloat: {
          '0%, 100%': { transform: 'translateY(0) rotate(-0.5deg)' },
          '50%': { transform: 'translateY(-12px) rotate(0.5deg)' },
        },
        toyWiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        conveyor: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '120px 0' },
        },
        playfulShimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        beltSlide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundSize: {
        shimmer: '200% 200%',
      },
    },
  },
  plugins: [],
}

export default config
