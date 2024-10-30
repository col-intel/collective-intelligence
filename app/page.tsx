import { BlogPosts } from 'app/components/posts'
import { Portfolio } from 'app/components/portfolio'

export default function Page() {
  return (
    <section>
      <div className="flex items-center mb-8">
        <div className="w-5 h-5 bg-orange-200 rounded-full mr-2" aria-label="Happy Collective logo" />
        <h1 className=" text-2xl font-semibold tracking-tighter">
          welcome to the collective
        </h1>
      </div>
      <p className="mb-4">
        {`our mission is to create, invest and promote human communities in the age of rapid technological progress.`}
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