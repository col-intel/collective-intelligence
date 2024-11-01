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
        {`Modern organizations are facing incremental challenges with digital distribution. At Collective Intelligence, we solve this by fostering growth through strategic partnerships. We help organizations in Retail, Finance, DLT, Legal, Philanthropy, and Education find and implement the right alliances to expand their reach effectively.`}
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