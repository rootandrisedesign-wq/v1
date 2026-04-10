import type { Metadata } from 'next'
import { Fredoka, Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'
import CustomCursor from '@/components/CustomCursor'
import PlayfulDecor from '@/components/PlayfulDecor'
import BrushStrokes from '@/components/BrushStrokes'
import { ParallaxProvider } from '@/components/ParallaxProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const fredoka = Fredoka({
  subsets: ['latin'],
  variable: '--font-playful',
  weight: ['500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000',
  ),
  title: 'Tulayakorn | Creative Director & Designer',
  description: 'Portfolio showcasing innovative design and community-driven projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fredoka.variable}`}>
      <body className={inter.className}>
        <PlayfulDecor />
        <BrushStrokes />
        <ParallaxProvider>
          <CustomCursor />
          <SmoothScroll>
            <div className="relative z-10">
              <Navigation />
              <main>{children}</main>
              <Footer />
            </div>
          </SmoothScroll>
        </ParallaxProvider>
      </body>
    </html>
  )
}
