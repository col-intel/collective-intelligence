import { Job } from "app/components/job"

export const metadata = {
  title: 'Executive Assistant Position | Collective Intelligence',
  description: 'Join our team as an Executive Assistant at Collective Intelligence in Porto, Portugal. We offer competitive benefits, modern tools, and a dynamic work environment.',
  openGraph: {
    title: 'Executive Assistant Position | Collective Intelligence',
    description: 'Join our team as an Executive Assistant at Collective Intelligence in Porto, Portugal. We offer competitive benefits, modern tools, and a dynamic work environment.',
    type: 'website',
    url: 'https://www.ci.vc/jobs/executive-assistant',
    siteName: 'Collective Intelligence',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Executive Assistant Position | Collective Intelligence',
    description: 'Join our team as an Executive Assistant at Collective Intelligence in Porto, Portugal. We offer competitive benefits, modern tools, and a dynamic work environment.',
  }
}

export default function Page() {
  return (
    <Job
      title="Executive Assistant"
      location="Porto, Portugal"
      type="Full-time"
      description="We are seeking a highly organized and professional Executive Assistant to support our family office operations in Porto. The ideal candidate will be tech-savvy, detail-oriented, and capable of managing complex schedules while maintaining the highest level of confidentiality."
      responsibilities={[
        "Manage complex calendars and coordinate meetings across multiple time zones using modern scheduling tools",
        "Organize and maintain digital documentation using Notion for knowledge management",
        "Handle sensitive communications and manage inbox workflows",
        "Assist with research and data gathering using AI tools like ChatGPT and Claude",
        "Coordinate team communication and projects through Slack",
        "Prepare and organize digital expense reports and handle reimbursements",
        "Coordinate virtual and in-person events and meetings",
        "Act as a liaison between executives and internal/external stakeholders",
        "Create and maintain standard operating procedures (SOPs) in Notion"
      ]}
      requirements={[
        "3+ years of experience as an Executive Assistant, preferably in a tech-forward environment",
        "Excellent written and verbal communication skills in English and Portuguese",
        "Strong organizational and time management skills",
        "Proficiency in modern workplace tools: Notion, Slack, Google Workspace",
        "Experience with AI tools like ChatGPT/Claude for research and content assistance",
        "Ability to maintain strict confidentiality",
        "Bachelor's degree preferred",
        "Flexibility to occasionally work outside normal business hours",
        "Valid passport and ability to travel internationally",
        "Having a driver's license is a plus"
      ]}
      perks={[
        "Competitive salary package",
        "Occasional all expenses covered trips to Tallinn, Estonia and other European Cities",
        "Comprehensive meal plans",
        "Premium health insurance coverage",
        "Childcare vouchers",
        "Latest MacBook Air",
        "Latest iPhone",
        "Paid subscriptions to essential work tools (Notion, ChatGPT Plus, etc.)",
        "Modern office in Porto, Portugal",
        "Flexible working hours and hybrid work options",
        "Company car"
      ]}
    />
  )
}