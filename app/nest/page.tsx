import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nest | Book Store & Community Center',
  description: 'Our office, book store and community center in Matosinhos, Porto - open to the public and a space for all generations to connect and grow together.',
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
          alt="Nest - Collective Intelligence's office, book store and community center"
          width={800}
          height={450}
          className="rounded-lg"
          priority
        />
      </div>
      
      <p className="mb-4">
        Welcome to Nest – our office, book store and community center in Porto, Portugal. Just a 5-minute walk from the ocean, it's where our team works daily, but we've opened it to the public as a vibrant space where people of all generations can connect, learn, and grow together.
      </p>

      <div className="my-8 rounded-lg bg-neutral-100 dark:bg-neutral-900 p-4">
        <p className="italic">
          Nest is a test bed for our vision of building community spaces that bring together diverse groups of people.
          Our founders work from here too, so don't be surprised if you bump into us while browsing books or enjoying a coffee!
        </p>
      </div>

      <h2 className="font-semibold text-xl mt-8 mb-4">What we offer</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Curated book selection optimized to spark ideas.</li>
        <li>Inspiring memorabilia.</li>
        <li>Comfortable spaces to work, read, connect and have coffee.</li>
        <li>A meeting place for creative minds.</li>
        <li>An open office where you can see how we work.</li>
        <li>Opportunities to interact with our team and creators.</li>
      </ul>

      <h2 className="font-semibold text-xl mt-8 mb-4">Visit us</h2>
      <div className="mb-6">
        <p className="mb-2"><strong>Address:</strong> Rua Brito Capelo 675, Matosinhos, Portugal</p>
        <p className="mb-2"><strong>Location:</strong> Just a 5-minute walk from the beautiful Atlantic Ocean</p>
        <p className="mb-2"><strong>Opening Hours:</strong> Monday-Friday 9am-7pm, Saturday 10am-6pm</p>
      </div>

      <div className="post-it-note mt-8">
        Drop by to say hello, browse our collection, join one of our events, or just watch us work! Nest blurs the line between office and public space - that's what makes it special. We'd love to welcome you to our community!
      </div>
    </section>
  )
} 