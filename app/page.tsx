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
        {`We are a family office investing in founders that want to build products we really want to use.`}
      </p>
      <p className="mb-4">
        {`We're simply looking for products that solve real problems in our daily lives. No grand visions of transforming humanity required."`}
      </p>
      <div className="post-it-note">
        {`If you're building something you're passionate about and think we might love to use it too, we'd like to talk. Email us at hi@ci.vc`}
      </div>
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