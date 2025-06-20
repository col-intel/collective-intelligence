interface Project {
  name: string;
  description: string;
  url: string;
  community_size?: string;
  status: string;
}

interface Advisory {
  name: string;
  url: string;
  year: number;
}

interface OpenSourceProject {
  name: string;
  description: string;
  url: string;
}

interface Creation {
  name: string;
  description: string;
  url: string;
  year: number;
}

export function Portfolio() {
  const projectsData = [
    
    {
      name: "SoSquared",
      description: "The UK's most agile influencer marketing platform, delivering all the tools needed for influencers and brands to create captivating content together.",
      url: "https://sosquared.com/",
      community_size: "20k+ Influencers",
      status: "Active"
    },
    {
      name: "Polkastarter",
      description: "Polkastarter is the Leading Decentralized Fundraising Platform.",
      url: "https://polkastarter.com",
      community_size: "1M+ Users",
      status: "Acquired"
    },
    {
      name: "Talent Protocol",
      description: "Professional reputation data for the new internet.",
      url: "https://talentprotocol.com",
      community_size: "1M+ Users",
      status: "Active"
    },
    {
      name: "Impact Market",
      description: "ImpactMarket enables any vulnerable community to implement poverty alleviation mechanisms, like Unconditional Basic Income.",
      url: "https://www.impactmarket.com/",
      community_size: "44k+ Beneficiaries",
      status: "Inactive"
    },
    {
      name: "Coinvision",
      description: "Coinvision is a community blockchain technology enthusiasts.",
      url: "https://coinvision.co",
      community_size: "10k+ Members",
      status: "Acquired"
    },
    {
      name: "Codeplace",
      description: "One of the First Ruby on Rails Online Schools with 100k+ Students Worldwide",
      url: "https://codeforall.com/",
      community_size: "100k+ Students",
      status: "Acquired"
    }
  ]

  // Sort projects to prioritize active companies
  const projects = [...projectsData].sort((a, b) => {
    // Define priority order: Active > Acquired > Inactive
    const statusPriority = {
      "Active": 1,
      "Acquired": 2,
      "Inactive": 3
    };
    
    return statusPriority[a.status] - statusPriority[b.status];
  });

  const advisory = [
    { name: "Acreditar", url: "https://acreditar.org.pt/", year: 2024 },
    { name: "Raise n Go", url: "https://raisengo.com/", year: 2024 },
    { name: "CASA", url: "https://www.casa-apoioaosemabrigo.org/", year: 2024 },
    { name: "Animas Portugal", url: "https://animasportugal.org/", year: 2024 },
    { name: "Dark Matter", url: "https://www.darkmatter.is/", year: 2023 },
    { name: "Parfois", url: "https://www.parfois.com/", year: 2023 },
    { name: "Epic Travel", url: "https://epic.travel/", year: 2022 },
    { name: "xMoney", url: "https://www.xmoney.com/", year: 2022 },
    { name: "Coflyt", url: "https://www.coflyt.com/", year: 2021 },
    { name: "BePro", url: "https://bepro.network/", year: 2021 }

  ]

  const creations = [
    {
      name: "steps.org",
      description: "Hit your daily steps, for good.",
      url: "https://steps.org",
      status: "2025"
    },
    {
      name: "Poolside",
      description: "The Club For Founders in Tech, Entertainment, & AI",
      url: "https://www.poolside.co",
      status: "2025"
    }
  ]

  const freeTools = [
    {
      name: "gateless-donations",
      description: "A zero-dependency static donation widget for non-profit organizations that doesn't require a payment gateway. Built with vanilla JavaScript and Tailwind CSS.",
      url: "https://github.com/col-intel/gateless-donations"
    }
  ]

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-semibold text-xl mb-4">creations</h2>
        <div className="grid grid-cols-1 gap-4">
          {creations.map((creation) => (
            creation.url ? (
              <a
                key={creation.name}
                href={creation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg border border-neutral-800 hover:bg-neutral-900 transition-all"
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">{creation.name}</h3>
                  <span className="text-sm text-neutral-400">
                    {creation.status}
                  </span>
                </div>
                <p className="text-neutral-400 text-sm mt-2">
                  {creation.description}
                </p>
              </a>
            ) : (
              <div
                key={creation.name}
                className="p-4 rounded-lg border border-neutral-800 hover:bg-neutral-900 transition-all"
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">{creation.name}</h3>
                  <span className="text-sm text-neutral-400">
                    {creation.status}
                  </span>
                </div>
                <p className="text-neutral-400 text-sm mt-2">
                  {creation.description}
                </p>
              </div>
            )
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-semibold text-xl mb-4">ventures</h2>
        <div className="grid grid-cols-1 gap-4">
          {projects.map((project) => (
            project.url ? (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg border border-neutral-800 hover:bg-neutral-900 transition-all"
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">{project.name}</h3>
                  <span className="text-sm text-neutral-400">
                    {project.status}
                  </span>
                </div>
                <p className="text-neutral-400 text-sm mt-2">
                  {project.description}
                </p>
                {project.community_size && (
                  <p className="text-sm text-neutral-500 mt-2">
                    {project.community_size}
                  </p>
                )}
              </a>
            ) : (
              <div
                key={project.name}
                className="p-4 rounded-lg border border-neutral-800 hover:bg-neutral-900 transition-all"
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">{project.name}</h3>
                  <span className="text-sm text-neutral-400">
                    {project.status}
                  </span>
                </div>
                <p className="text-neutral-400 text-sm mt-2">
                  {project.description}
                </p>
                {project.community_size && (
                  <p className="text-sm text-neutral-500 mt-2">
                    {project.community_size}
                  </p>
                )}
              </div>
            )
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-semibold text-xl mb-4">advisory</h2>
        <div className="flex flex-wrap gap-4">
          {advisory.map((org) => (
            <a
              key={org.name}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-neutral-800 hover:bg-neutral-900 transition-all"
            >
              <span className="font-medium">{org.name}</span>
              <span className="text-neutral-400 text-sm ml-2">
                ({org.year})
              </span>
            </a>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-semibold text-xl mb-4">free tools</h2>
        <div className="grid grid-cols-1 gap-4">
          {freeTools.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg border border-neutral-800 hover:bg-neutral-900 transition-all"
            >
              <h3 className="font-medium">{project.name}</h3>
              <p className="text-neutral-400 text-sm mt-2">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    
    </div>
  )
}