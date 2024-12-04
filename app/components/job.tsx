interface JobProps {
  title: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  perks: string[];
}

export function Job({
  title,
  location,
  type,
  description,
  responsibilities,
  requirements,
  perks,
}: JobProps) {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">{title}</h1>

      <div className="flex space-x-4 text-sm text-neutral-600 dark:text-neutral-400 mb-8">
        <span>{location}</span>
        <span>•</span>
        <span>{type}</span>
      </div>

      <div className="prose dark:prose-invert">
        <p>{description}</p>

        <h2>Responsibilities</h2>
        <ul>
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>Requirements</h2>
        <ul>
          {requirements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>Perks & Benefits</h2>
        <ul>
          {perks.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="mt-8">
          <a
            href="mailto:hi@ci.vc?subject=Executive Assistant Application"
            className="px-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all"
          >
            Apply for this position
          </a>
        </div>
      </div>
    </section>
  )
}