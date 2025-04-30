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

      

      <h2 className="font-semibold text-xl mt-8 mb-4">Who hangs out at Nest</h2>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>We and our friends</li>
        <li>Our Portfolio Companies (for free)</li>
        <li>Senior Citizens in the Local Community (also for free)</li>
      </ul>

      <h2 className="font-semibold text-xl mt-8 mb-4">What we offer</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        
        <li>Curated book library optimized to spark ideas</li>
        <li>Inspiring memorabilia</li>
        <li>Comfortable spaces to work, read, connect and have coffee</li>
        <li>An open office environment where you can see how we work</li>
        <li>Opportunities to interact with our team and creators</li>
        <li>Daily technology workshops for seniors</li>
      </ul>

      <h2 className="font-semibold text-xl mt-8 mb-4">Visit us</h2>
      <div className="mb-6">
        <p className="mb-2"><strong>Address:</strong> Rua Brito Capelo 675, Matosinhos, Portugal</p>
        <p className="mb-2"><strong>Location:</strong> Just a 5-minute walk from the beautiful Atlantic Ocean</p>
        <p className="mb-2"><strong>Opening Hours:</strong> Monday-Friday 9am-7pm, Saturday 10am-6pm</p>
      </div>

      
     

      <div className="post-it-note mt-8">
        We allocate a percentage of our operating profit to host workshops and community events for seniors. Our vision is to inspire other companies to follow our lead and create similar initiatives in their communities.
      </div>

      <div className="mt-8 text-center">
        <a 
          href="mailto:hi@ci.vc?subject=Contact%20us%20from%20Nest%20website" 
          className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Contact us
        </a>
      </div>
    </section>
  )
} 