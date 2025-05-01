import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nest | Community Center & Office',
  description: 'Our office and community center in Matosinhos, Porto - where we collaborate with mental health researchers and provide workshops on mental wellbeing for the local community.',
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
        Welcome to Nest – our office and community center in Porto, Portugal. Just a 5-minute walk from the ocean, it's where our team works daily while hosting a vibrant community space dedicated to mental health research and workshops for the local community.
      </p>

      

      <h2 className="font-semibold text-xl mt-8 mb-4">Who hangs out at Nest</h2>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>We and our friends</li>
        <li>Our Portfolio Companies (for free)</li>
        <li>Mental Health Researchers & Professionals (also for free)</li>
      </ul>

      <h2 className="font-semibold text-xl mt-8 mb-4">What we offer</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        
        <li>Curated book library optimized to spark ideas</li>
        <li>Inspiring memorabilia</li>
        <li>Comfortable spaces to work, read, connect and have coffee</li>
        <li>An open office environment where you can see how we work</li>
        <li>Opportunities to interact with our team and creators</li>
        <li>Free daily mental health workshops for the local community</li>
      </ul>

      <h2 className="font-semibold text-xl mt-8 mb-4">Visit us</h2>
      <div className="mb-6">
        <p className="mb-2"><strong>Address:</strong> Rua Brito Capelo 675, Matosinhos, Portugal</p>
        <p className="mb-2"><strong>Location:</strong> Just a 5-minute walk from the beautiful Atlantic Ocean</p>
        <p className="mb-2"><strong>Opening Hours:</strong> Monday-Friday 9am-7pm, Saturday 10am-6pm</p>
      </div>

      
     

      <div className="post-it-note mt-8">
        We allocate a percentage of our operating profit to host mental health workshops and community events. Our vision is to inspire other companies to follow our lead and create similar initiatives that promote mental wellbeing in their communities.
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