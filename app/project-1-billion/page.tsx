import { Project1B } from "app/components/project-1b"
import { baseUrl } from "app/sitemap"

export const metadata = {
  title: 'project 1 billion | Insights on the future of work from global leaders',
  description: 'Subscribe to our free newsletter showcasing perspectives from 365 leaders, founders, and policymakers on how AI will transform the job landscape over the next 5, 10, and 30 years.',
  openGraph: {
    title: 'project 1 billion | Insights on the future of work from global leaders',
    description: 'Subscribe to our free newsletter showcasing perspectives from 365 leaders, founders, and policymakers on how AI will transform the job landscape over the next 5, 10, and 30 years.',
    type: 'website',
    url: `${baseUrl}/project-1-billion`,
    siteName: 'Collective Intelligence',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'project 1 billion | Insights on the future of work from global leaders',
    description: 'Subscribe to our free newsletter showcasing perspectives from 365 leaders, founders, and policymakers on how AI will transform the job landscape over the next 5, 10, and 30 years.',
  }
}

export default function Page() {
  return (
    <section>
      <Project1B />
    </section>
  )
} 