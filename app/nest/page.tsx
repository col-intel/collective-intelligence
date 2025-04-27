import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nest | Community Center & Office',
  description: 'Our office and community center in Matosinhos, Porto - where different generations learn together through upskilling sessions on technology and digital creation.',
}

export default function Nest() {
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
        <h1 className="text-2xl font-semibold tracking-tighter">
          nest
        </h1>
      </div>
      
      <div className="mb-8">
        <Image
          src="/thehouse.png"
          alt="Nest - Collective Intelligence's community center and office"
          width={800}
          height={450}
          className="rounded-lg"
          priority
        />
      </div>
      
      <p className="mb-4">
        Welcome to Nest – our office and community center in Porto, Portugal. Just a 5-minute walk from the ocean, it's where our team works daily while hosting a vibrant community space dedicated to intergenerational learning and connection.
      </p>

      <div className="my-8 rounded-lg bg-neutral-100 dark:bg-neutral-900 p-4">
        <p className="italic">
          Nest is where we bridge generations through technology. We host almost daily upskilling sessions teaching older adults how to navigate technology and avoid online scams, while guiding younger generations in creating games and digital products to serve their communities.
        </p>
      </div>

      <h2 className="font-semibold text-xl mt-8 mb-4">What we offer</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Tech upskilling sessions for seniors (avoiding scams, basic digital literacy)</li>
        <li>Game development and digital product creation for youth</li>
        <li>Curated book library optimized to spark ideas</li>
        <li>Inspiring memorabilia</li>
        <li>Comfortable spaces to work, read, connect and have coffee</li>
        <li>An open office environment where you can see how we work</li>
        <li>Opportunities to interact with our team and creators</li>
      </ul>

      <h2 className="font-semibold text-xl mt-8 mb-4">Visit us</h2>
      <div className="mb-6">
        <p className="mb-2"><strong>Address:</strong> Rua Brito Capelo 675, Matosinhos, Portugal</p>
        <p className="mb-2"><strong>Location:</strong> Just a 5-minute walk from the beautiful Atlantic Ocean</p>
        <p className="mb-2"><strong>Opening Hours:</strong> Monday-Friday 9am-7pm, Saturday 10am-6pm</p>
      </div>

      <div className="post-it-note mt-8">
        Join our community. Whether you want to learn how to protect yourself online or create your digital product.
      </div>

      <div className="mt-8 text-center">
        <a 
          href="mailto:hi@ci.vc?subject=Apply%20for%20Nest%20Membership&body=Hello,%0A%0AI'm%20interested%20in%20applying%20for%20a%20Nest%20membership.%0A%0AName:%20%0AAge:%20%0AInterests:%20%0A%0AWhat%20I%20hope%20to%20gain%20from%20Nest:%20%0A%0A" 
          className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Apply for Membership
        </a>
      </div>
    </section>
  )
} 