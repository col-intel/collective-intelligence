import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Manrope } from 'next/font/google'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ci.vc'),
  title: {
    default: 'collective intelligence - grow together',
    template: '%s | collective intelligence - grow together',
  },
  description: "We are a family office investing in founders that want to build products we really want to use.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'collective intelligence - grow together',
    description: "We are a family office investing in founders that want to build products we really want to use.",
    url: 'https://ci.vc',
    siteName: 'collective intelligence - grow together',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://ci.vc/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'collective intelligence - grow together',
    description: "We are a family office investing in founders that want to build products we really want to use.",
    images: ['https://ci.vc/og-image.png'],
    creator: '@ci_vc',
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable,
        manrope.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto font-manrope">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
