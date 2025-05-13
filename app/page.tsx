import { BlogPosts } from 'app/components/posts'
import { Portfolio } from 'app/components/portfolio'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <div className="flex items-center mb-8">
        <Image 
          src="/ci-logo.png" 
          alt="Collective Intelligence logo" 
          width={20} 
          height={20} 
          className="mr-2"
        />
        <h1 className=" text-2xl font-semibold tracking-tighter">
          collective intelligence
        </h1>
      </div>
      <p className="mb-4">
        {`We are a research and development lab creating and investing in companies with the potential to build super cool products and generate a significant number of new (and great) jobs.`}
      </p>
      <div className="post-it-note">
        {`If you're building something that fits our mission, we'd love to talk. `}
        <a href="mailto:hi@ci.vc" className="text-black underline">
          hi@ci.vc
        </a>
      </div>
      <div className="my-8">
        <Portfolio />
      </div>
      <div className="my-8 hidden">
        <h2 className="font-semibold text-xl mb-4">Latest Posts</h2>
        <BlogPosts />
      </div>
      <div className="post-it-note text-center mt-12">
        <p className="mb-1">Talk to us anytime:</p>
        <a 
          href="mailto:hi@ci.vc" 
          className="text-black font-medium underline"
        >
          hi@ci.vc
        </a>
      </div>
    </section>
  )
}