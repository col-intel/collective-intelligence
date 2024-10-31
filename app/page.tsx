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
        {`Collective Intelligence is dedicated to decoding and anticipating human demand. Our mission is to understand the complex patterns of human behavior and translate this knowledge into actionable insights that empower businesses. Through rigorous research, we uncover emerging needs and trends, positioning our partners to stay ahead in an ever-evolving market.`}
      </p>
      <p className="mb-4">
        {`In addition to research, we offer strategic investment and advisory services, focusing on organizations in the fundraising and data sectors. With a commitment to impactful partnerships, we support organizations in scaling sustainably and making data-driven decisions to maximize their market potential.`}
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