import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TheLab | Collective Intelligence',
  description: 'Our lab for our team and friends (like you) in Porto, Portugal.',
}

export default function TheLab() {
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
         the lab
        </h1>
      </div>
      
      <div className="mb-8">
        <Image
          src="/thehouse.png"
          alt="Your Lab - Collective Intelligence's community center and lab"
          width={800}
          height={450}
          className="rounded-lg"
          priority
        />
      </div>
      
      <p className="mb-4">
        Welcome to the lab – a space for our team and friends (like you) in Porto, Portugal. Just a 5-minute walk from the ocean, it's where our team works daily.
      </p>

      

      <h2 className="font-semibold text-xl mt-8 mb-4">Who hangs out at the lab</h2>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>We and our friends (like you)</li>
        <li>Our Portfolio Companies (for free)</li>
      </ul>

      <h2 className="font-semibold text-xl mt-8 mb-4">What we offer</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        
        <li>Curated book library optimized to spark ideas</li>
        <li>Inspiring memorabilia</li>
        <li>Comfortable spaces to work, read, connect and have coffee</li>
      </ul>

      <h2 className="font-semibold text-xl mt-8 mb-4">Visit us</h2>
      <div className="mb-6">
        <p className="mb-2"><strong>Address:</strong> Rua Brito Capelo 675, Matosinhos, Portugal</p>
        <p className="mb-2"><strong>Location:</strong> Just a 5-minute walk from the beautiful Atlantic Ocean</p>
        <p className="mb-2"><strong>Opening Hours:</strong> Monday-Friday 9am-7pm, Saturday 10am-6pm</p>
      </div>


      <div className="post-it-note text-center">
        <p className="mb-1">Want to create something here?</p>
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