import { Project1B } from "app/components/project-1b"
import { baseUrl } from "app/sitemap"

export const metadata = {
  title: 'project 1 billion jobs | Insights on the future of work from global leaders',
  description: 'Perspectives from 365 leaders on what new job categories will emerge in the next 25 years across robotics, space, longevity sciences, and other emerging ecosystems.',
  openGraph: {
    title: 'project 1 billion jobs | Insights on the future of work from global leaders',
    description: 'Perspectives from 365 leaders on what new job categories will emerge in the next 25 years across robotics, space, longevity sciences, and other emerging ecosystems.',
    type: 'website',
    url: `${baseUrl}/project-1-billion-jobs`,
    siteName: 'Collective Intelligence',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'project 1 billion jobs | Insights on the future of work from global leaders',
    description: 'Perspectives from 365 leaders on what new job categories will emerge in the next 25 years across robotics, space, longevity sciences, and other emerging ecosystems.',
  }
}

export default function Page() {
  return (
    <section>
      <Project1B />
    </section>
  )
} 