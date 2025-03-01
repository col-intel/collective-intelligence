export function CommunityProjects() {
  return (
    <div>
      <h2 className="font-semibold text-xl mb-4">community projects</h2>
      <div className="grid grid-cols-1 gap-4">
        <a
          href="https://www.ruasegura.pt"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all"
        >
          <div className="flex justify-between items-start">
            <h3 className="font-medium">Rua Segura (Porto)</h3>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-2">
            A local security incident reporting system for city councils that enables citizens to report safety concerns in their neighborhoods.
          </p>
        </a>
      </div>
    </div>
  )
} 