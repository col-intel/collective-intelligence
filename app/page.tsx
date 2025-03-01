import { BlogPosts } from 'app/components/posts'
import { Portfolio } from 'app/components/portfolio'
import { CommunityProjects } from 'app/components/CommunityProjects'

export default function Page() {
  return (
    <section>
      <div className="flex items-center mb-8">
        <div className="w-5 h-5 bg-orange-200 rounded-full mr-2" aria-label="Collective Intelligence logo" />
        <h1 className=" text-2xl font-semibold tracking-tighter">
          collective intelligence
        </h1>
      </div>
      <p className="mb-4">
        {`At Collective Intelligence, we invest in visionary organizations that are building the infrastructure for the next 1 billion jobs.`}
      </p>
      <p className="mb-4">
        {`Historically, technological advancements have transformed job landscapes, often leading to improved working conditions and more meaningful careers. In this AI-driven era, we envision new career frameworks that will empower individuals to run more profitable businesses or provide human-centric services.`}
      </p>
      <p className="mb-4">
        {`We are committed to funding founders who have a clear vision for the future of work and can answer the pressing question of what these new careers will be. By doing so, we aim to create opportunities that are not only sustainable but also beneficial to humanity.`}
      </p>
      <div className="my-8">
        <Portfolio />
      </div>
      <div className="my-8 hidden">
        <h2 className="font-semibold text-xl mb-4">Latest Posts</h2>
        <BlogPosts />
      </div>

      {/* Community Projects Section */}
      <CommunityProjects />
    </section>
  )
}