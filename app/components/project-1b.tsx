import Image from 'next/image';

export function Project1B() {
  const communityInfo = {
    title: "project 1 billion",
    subtitle: "Perspectives on the next billion jobs from global leaders",
    description: "Project 1 Billion gathers insights from 365 leaders, founders, policymakers, and innovators who are shaping the future of work in an AI-driven world. We ask one simple question: What will the job landscape look like in 5, 10, and 30 years from now?",
    philosophy: "AI is transforming every industry, and like the Internet, will eventually touch every job. Our core mission is to bring light to where the next 1 billion jobs will come from as this transformation unfolds. Our initiative captures diverse viewpoints on this transformation—both optimistic and cautionary—to help prepare individuals and organizations for this rapidly evolving future. All perspectives are shared weekly through our newsletter, creating an accessible knowledge base on the future of work.",
    format: "Starting in May 2025, we'll feature one thought leader each day of the year, creating a comprehensive mosaic of expert opinions on how AI will reshape employment opportunities across all sectors and regions."
  };

  const participantProfiles = [
    "Founders building AI-powered platforms and tools",
    "Policy makers shaping AI governance and labor regulations",
    "Industry leaders implementing AI transformation strategies",
    "Researchers at the forefront of AI capabilities and limitations",
    "Educators reimagining skills development for an AI-integrated workforce",
    "Social entrepreneurs creating inclusive AI-driven opportunities"
  ];

  const initiative = [
    {
      title: "One Question, 365 Perspectives",
      icon: "🧠",
      description: "Each leader answers the same forward-looking question about how AI will transform the job landscape, creating a diverse tapestry of expert insights on our collective future.",
      details: "Starting May 2025 with daily perspectives"
    }
  ];

  const upcomingInterviews = [
    { month: "TBA", description: "Healthcare AI Innovator", nationality: "Sweden" },
    { month: "TBA", description: "Manufacturing Automation Leader", nationality: "Japan" },
    { month: "TBA", description: "Creative Industries Technologist", nationality: "Brazil" },
    { month: "TBA", description: "Financial Services AI Strategist", nationality: "Singapore" }
  ];

  // Encode email content for mailto links
  const newsletterEmailBody = encodeURIComponent("Please add me to the Project 1 Billion newsletter.\n\nName:\nCompany/Organization:\nPosition:");
  
  const applicationEmailBody = encodeURIComponent(
    "I would like to apply to be interviewed for the Project 1 Billion initiative.\n\n" +
    "Name:\n" +
    "Company/Organization:\n" +
    "Position:\n" +
    "LinkedIn profile:\n\n" +
    "Please briefly share your perspective on how AI will transform the job landscape:\n\n" +
    "What specific aspect of AI and the future of work are you most focused on?\n\n" +
    "Have you built or are you building tools/systems that create new job opportunities in the AI era?\n\n"
  );

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="mb-16">
        <div className="flex items-center mb-4">
          <Image 
            src="/ci-logo.png" 
            alt="Collective Intelligence logo" 
            width={20} 
            height={20} 
            className="mr-2"
          />
          <h1 className="text-2xl font-semibold tracking-tighter">
            {communityInfo.title}
          </h1>
        </div>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">{communityInfo.subtitle}</p>
      </div>
      
      {/* Main Content */}
      <div className="space-y-16">
        {/* About Section */}
        <section>
          <div>
            <p className="mb-4">{communityInfo.description}</p>
            <p className="mb-4">{communityInfo.philosophy}</p>
            <p className="mb-4">{communityInfo.format}</p>
          </div>
        </section>
        
        {/* Interviews Calendar Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Upcoming Interviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingInterviews.map((interview, index) => (
              <div key={index} className="flex items-center p-6 bg-white dark:bg-neutral-900 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-800">
                <div className="mr-5 text-2xl font-bold text-neutral-400 dark:text-neutral-600">{interview.month}</div>
                <div>
                  <h3 className="font-medium text-lg">{interview.description}</h3>
                  <p className="text-sm text-neutral-500 mt-1">{interview.nationality}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Newsletter Signup */}
        <section className="py-10 px-8 bg-neutral-50 dark:bg-neutral-900 rounded-2xl text-center">
          <h2 className="text-2xl font-semibold mb-4">Get Weekly Insights</h2>
          <p className="text-lg mb-6 text-neutral-600 dark:text-neutral-400">Subscribe to our newsletter to receive 7 expert perspectives each week on the future of work in the AI era, completely free and open to everyone.</p>
          <a 
            href={`mailto:hi@ci.vc?subject=Project 1 Billion Newsletter Subscription&body=${newsletterEmailBody}`}
            className="inline-block px-8 py-4 text-base font-medium rounded-lg bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition-all"
          >
            Subscribe to Newsletter
          </a>
        </section>
        
        {/* Initiative Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">Our Format</h2>
          <div className="grid grid-cols-1 gap-8">
            {initiative.map((item, index) => (
              <div key={index} className="bg-white dark:bg-neutral-900 rounded-xl shadow-sm hover:shadow-md transition-all p-6 border border-neutral-100 dark:border-neutral-800">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-5 text-base">{item.description}</p>
                <div className="text-sm font-medium text-neutral-500 dark:text-neutral-500 mt-auto">{item.details}</div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Participants Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">Our Participants Include</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {participantProfiles.map((profile, index) => (
              <div key={index} className="flex items-center p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
                <div className="w-2 h-2 bg-neutral-400 dark:bg-neutral-600 rounded-full mr-4"></div>
                <p className="font-medium">{profile}</p>
              </div>
            ))}
          </div>
          
          <p className="mb-4 mt-8">
            We bring together diverse voices from those at the forefront of AI integration across industries. Project 1 Billion creates a comprehensive repository of expert insights on how AI will reshape employment, with these perspectives shared publicly to help everyone prepare for and thrive in an AI-transformed job market.
          </p>
        </section>
        
        {/* Apply CTA */}
        <section className="py-10 px-8 bg-neutral-50 dark:bg-neutral-900 rounded-2xl text-center">
          <h2 className="text-2xl font-semibold mb-4">Share Your Perspective</h2>
          <p className="text-lg mb-6 text-neutral-600 dark:text-neutral-400">We're looking for thoughtful leaders with unique insights on how AI will transform the future of work. Apply to be featured in our initiative.</p>
          <a 
            href={`mailto:hi@ci.vc?subject=Project 1 Billion Application&body=${applicationEmailBody}`}
            className="inline-block px-8 py-4 text-base font-medium rounded-lg border-2 border-black dark:border-white bg-transparent text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
          >
            Apply to be Featured
          </a>
        </section>
      </div>
    </div>
  );
} 