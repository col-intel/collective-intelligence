import { Community } from "app/components/community"
import { baseUrl } from "app/sitemap"

export const metadata = {
  title: 'one billion jobs lunch club | Free insights on the future of work',
  description: 'Subscribe to our free newsletter for insights from our monthly discussions on building the infrastructure for the next 1 billion jobs in an AI-driven world.',
  openGraph: {
    title: 'one billion jobs lunch club | Free insights on the future of work',
    description: 'Subscribe to our free newsletter for insights from our monthly discussions on building the infrastructure for the next 1 billion jobs in an AI-driven world.',
    type: 'website',
    url: `${baseUrl}/one-billion-jobs`,
    siteName: 'Collective Intelligence',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'one billion jobs lunch club | Free insights on the future of work',
    description: 'Subscribe to our free newsletter for insights from our monthly discussions on building the infrastructure for the next 1 billion jobs in an AI-driven world.',
  }
}

export default function Page() {
  return (
    <section>
      <Community />
    </section>
  )
} 