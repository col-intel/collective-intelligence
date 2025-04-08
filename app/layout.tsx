import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL('https://ci.vc'),
  title: {
    default: 'collective intelligence - grow together',
    template: '%s | collective intelligence - grow together',
  },
  description: "At Collective Intelligence, we invest in visionary founders who are building the infrastructure for the next 1 billion jobs.",
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
    description: "At Collective Intelligence, we invest in visionary founders who are building the infrastructure for the next 1 billion jobs.",
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
    description: "At Collective Intelligence, we invest in visionary founders who are building the infrastructure for the next 1 billion jobs.",
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
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
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
