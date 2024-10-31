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
  metadataBase: new URL(baseUrl),
  title: {
    default: 'collective intelligence - human demand research and advisory',
    template: '%s | collective intelligence - human demand research and advisory',
  },
  description: 'Our mission is to decode and anticipate human demand. We uncover emerging needs and trends, positioning our partners to stay ahead in an ever-evolving market.',
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
    title: 'collective intelligence - human demand research and advisory',
    description: 'Our mission is to decode and anticipate human demand. We uncover emerging needs and trends, positioning our partners to stay ahead in an ever-evolving market.',
    url: baseUrl,
    siteName: 'collective intelligence - human demand research and advisory',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'collective intelligence - human demand research and advisory',
    description: 'Our mission is to decode and anticipate human demand. We uncover emerging needs and trends, positioning our partners to stay ahead in an ever-evolving market.',
    images: [`${baseUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="background-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="collective intelligence" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/icon.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="collective intelligence" />
        <meta name="twitter:description" content="Our mission is to decode and anticipate human demand. We uncover emerging needs and trends, positioning our partners to stay ahead in an ever-evolving market." />
        <meta name="twitter:image" content="/og-image.png" />
        <meta name="og:title" content="collective intelligence" />
        <meta name="og:description" content="Our mission is to decode and anticipate human demand. We uncover emerging needs and trends, positioning our partners to stay ahead in an ever-evolving market." />
        <meta name="og:url" content={baseUrl} />
        <meta name="og:site_name" content="collective intelligence" />
        <meta name="og:image" content="/og-image.png" />
        <meta name="og:image:width" content="1200" />
        <meta name="og:image:height" content="630" />
      </head>
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
