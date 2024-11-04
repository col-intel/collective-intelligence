import { BlogPosts } from 'app/components/posts'
import { Portfolio } from 'app/components/portfolio'

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
        {`At Collective Intelligence, we build, advise, and invest in web projects designed to enhance humanity's quality of life. Leveraging years of expertise in strategic partnerships, we address the ever-growing challenges of digital distribution by connecting technology-driven organizations with the alliances they need to grow and thrive.`}
      </p>
      <div className="my-8">
        <Portfolio />
      </div>
      <div className="my-8 hidden">
        <h2 className="font-semibold text-xl mb-4">Latest Posts</h2>
        <BlogPosts />
      </div>
    </section>
  )
}