import Image from 'next/image';

export function Community() {
  const communityInfo = {
    title: "one billion jobs lunch club",
    subtitle: "A forum exploring the infrastructure for the next 1 billion jobs",
    description: "One Billion Jobs Lunch Club brings together founders, policy makers, and leaders who are creating human-centric employment opportunities in an AI-driven world. As automation reshapes the workforce, we explore initiatives that create sustainable, human-driven roles that can't be easily replaced by AI.",
    philosophy: "Our discussions focus on platforms enabling localized business, personalized services, and new models for self-employment—empowering individuals to generate income in a rapidly changing job market. All lunch discussions are summarized and shared publicly through our newsletter, creating a growing knowledge base on the future of work that anyone can access.",
    format: "Each month, we gather in a different European city, hosted by companies that are reshaping how people will work in the coming decades. Each lunch discussion is carefully structured to generate valuable insights that we share with our wider community."
  };

  const memberProfiles = [
    "Founders building platforms for human-centric employment",
    "Policy makers shaping the regulatory landscape of work",
    "Non-profit leaders addressing workforce transitions",
    "Investors funding the future of employment",
    "Academics researching emerging labor models",
    "Industry experts implementing tools for the future workforce"
  ];

  const gatherings = [
    {
      title: "Curated Lunches",
      icon: "🍽️",
      description: "Focused 4-hour gatherings with 8 participants. Each lunch addresses specific challenges in building the infrastructure for the next 1 billion jobs. Summaries are published and shared through our newsletter.",
      details: "Monthly in rotating European cities"
    }
  ];

  const upcomingLunches = [
    { month: "May 2025", location: "Porto, Portugal", applicationsOpen: false },
    { month: "June 2025", location: "Tallinn, Estonia", applicationsOpen: true },
    { month: "July 2025", location: "Reykjavik, Iceland", applicationsOpen: true },
    { month: "August 2025 and onwards", location: "TBA", applicationsOpen: false }
  ];

  // Encode email content for mailto links
  const newsletterEmailBody = encodeURIComponent("Please add me to the One Billion Jobs newsletter.\n\nName:\nCompany/Organization:\nPosition:");
  
  const applicationEmailBody = encodeURIComponent(
    "I would like to apply to join an upcoming One Billion Jobs lunch.\n\n" +
    "Name:\n" +
    "Company/Organization:\n" +
    "Position:\n" +
    "LinkedIn profile:\n\n" +
    "Please briefly share why you're interested in the future of work:\n\n" +
    "What specific aspect of job creation or future of work are you most focused on?\n\n" +
    "Have you built or are you building infrastructure for new job creation?\n\n" +
    "Any city/region preference for attending a lunch?\n\n"
  );

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{communityInfo.title} 🍚</h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">{communityInfo.subtitle}</p>
      </div>
      
      {/* Main Content */}
      <div className="space-y-16">
        {/* About Section */}
        <section>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed">{communityInfo.description}</p>
            <p className="text-lg leading-relaxed">{communityInfo.philosophy}</p>
            <p className="text-lg font-medium mt-6">{communityInfo.format}</p>
          </div>
        </section>
        
        {/* Lunch Calendar Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Upcoming Lunches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingLunches.map((lunch, index) => (
              <div key={index} className="flex items-center p-6 bg-white dark:bg-neutral-900 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-800">
                <div className="mr-5 text-2xl font-bold text-neutral-400 dark:text-neutral-600">{lunch.month}</div>
                <div>
                  <h3 className="font-medium text-lg">{lunch.location}</h3>
                  {lunch.location !== "TBA" && (
                    <p className="text-sm text-neutral-500 mt-1">{lunch.applicationsOpen ? "Applications open" : "Applications closed"}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Newsletter Signup */}
        <section className="py-10 px-8 bg-neutral-50 dark:bg-neutral-900 rounded-2xl text-center">
          <h2 className="text-2xl font-semibold mb-4">Get Our Lunch Summaries</h2>
          <p className="text-lg mb-6 text-neutral-600 dark:text-neutral-400">Subscribe to our newsletter to receive summaries of all our discussions, completely free and open to everyone.</p>
          <a 
            href={`mailto:hi@ci.vc?subject=One Billion Jobs Newsletter Subscription&body=${newsletterEmailBody}`}
            className="inline-block px-8 py-4 text-base font-medium rounded-lg bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition-all"
          >
            Subscribe to Newsletter
          </a>
        </section>
        
        {/* Gatherings Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">Our Format</h2>
          <div className="grid grid-cols-1 gap-8">
            {gatherings.map((event, index) => (
              <div key={index} className="bg-white dark:bg-neutral-900 rounded-xl shadow-sm hover:shadow-md transition-all p-6 border border-neutral-100 dark:border-neutral-800">
                <div className="text-3xl mb-4">{event.icon}</div>
                <h3 className="font-bold text-xl mb-3">{event.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-5 text-base">{event.description}</p>
                <div className="text-sm font-medium text-neutral-500 dark:text-neutral-500 mt-auto">{event.details}</div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Members Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">Our Participants Include</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {memberProfiles.map((profile, index) => (
              <div key={index} className="flex items-center p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
                <div className="w-2 h-2 bg-neutral-400 dark:bg-neutral-600 rounded-full mr-4"></div>
                <p className="font-medium">{profile}</p>
              </div>
            ))}
          </div>
          
          <p className="mt-12 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
            We bring together diverse leaders contributing to the future of work. The One Billion Jobs Lunch Club creates a structured environment where participants can exchange valuable insights that drive meaningful human employment in an AI-driven world, with knowledge shared publicly to benefit everyone interested in the future of work.
          </p>
        </section>
        
        {/* Apply CTA */}
        <section className="py-10 px-8 bg-neutral-50 dark:bg-neutral-900 rounded-2xl text-center">
          <h2 className="text-2xl font-semibold mb-4">Interested in Participating?</h2>
          <p className="text-lg mb-6 text-neutral-600 dark:text-neutral-400">While our lunches are limited to 8 participants each month, we welcome applications from diverse perspectives.</p>
          <a 
            href={`mailto:hi@ci.vc?subject=One Billion Jobs Lunch Club Application&body=${applicationEmailBody}`}
            className="inline-block px-8 py-4 text-base font-medium rounded-lg border-2 border-black dark:border-white bg-transparent text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
          >
            Apply to Join a Lunch
          </a>
        </section>
      </div>
    </div>
  );
} 