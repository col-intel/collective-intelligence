import Image from 'next/image';

export function Project1B() {
  const communityInfo = {
    title: "project 1 billion jobs",
    subtitle: "Exploring the future of work with global leaders",
    description: "Project 1 Billion Jobs gathers insights from 365 people in my personal network to capture a broad range of perspectives on the future of work. We're exploring one core question: What new job categories will emerge in the next 25 years?",
    philosophy: "This initiative explores job creation not just from AI, but from rapid developments in emerging ecosystems such as robotics, space, longevity sciences, and beyond. We want to understand where the next opportunities will emerge as these transformations unfold.",
    format: "We conduct short 10-minute video conversations with leaders from various fields, turning these insights into blog posts with transcripts to share on LinkedIn. Each participant receives a draft for approval before publishing."
  };

  const participantProfiles = [
    "Founders building cutting-edge technologies and platforms",
    "Policy makers shaping the future of work regulations",
    "Industry leaders implementing transformation strategies",
    "Researchers at the forefront of emerging technologies",
    "Educators reimagining skills development for the future workforce",
    "Social entrepreneurs creating inclusive opportunities"
  ];

  const initiative = [
    {
      title: "One Question, 365 Perspectives",
      icon: "🧠",
      description: "Each leader shares their perspective on where the future of work is heading and what opportunities people should be paying attention to.",
      details: "Short 10-minute conversations with leaders across industries"
    }
  ];

  // Encode email content for mailto links
  const applicationEmailBody = encodeURIComponent(
    "I would like to participate in the Project 1 Billion Jobs initiative.\n\n" +
    "Name:\n" +
    "Company/Organization:\n" +
    "Position:\n" +
    "LinkedIn profile:\n\n" +
    "Please briefly share your perspective on where you see the future of work heading:\n\n" +
    "What do you think are the biggest opportunities people should be paying attention to?\n\n"
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
            We're bringing together diverse voices from leaders who have valuable perspectives on the future of work. All insights will be shared publicly to help everyone understand and prepare for emerging opportunities in a rapidly evolving job market.
          </p>
        </section>
        
        {/* Newsletter Signup */}
        <section className="py-10 px-8 bg-neutral-50 dark:bg-neutral-900 rounded-2xl text-center">
          <iframe 
            src="https://embeds.beehiiv.com/bf28df70-9f53-4c1a-bb09-2d357d0bd1d2" 
            data-test-id="beehiiv-embed" 
            width="100%" 
            height="320" 
            frameBorder="0" 
            scrolling="no" 
            style={{ borderRadius: '4px', border: '2px solid #e5e7eb', margin: '0', backgroundColor: 'transparent' }}
          ></iframe>
        </section>
      
      </div>
    </div>
  );
} 