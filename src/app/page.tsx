import Image from "next/image";
import Link from "next/link";
import { Inter, IBM_Plex_Serif } from 'next/font/google'

const ibmPlexSerif = IBM_Plex_Serif({ weight: ['300'], subsets: ['latin'], })


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div>
        <h1 className="text-4xl text-neutral-300 mb-6 font-semibold">Amarpreet Singh</h1>
        <h2 className="text-4xl text-neutral-300 font-light">
          Hello! I am software engineer, designer. I love building delightful products.
        </h2>
      </div>
      <nav className={`text-3xl text-neutral-300 ${ibmPlexSerif.className}`}>
        <ul>
          <li className="border-b-2 border-neutral-400 pb-3 mb-4 flex justify-between items-center"><Link href="./projects">Projects</Link></li>
          <li className="border-b-2 border-neutral-400 pb-3 mb-4 flex justify-between items-center"><Link href="./about">About</Link></li>
          <li className="border-b-2 border-neutral-400 pb-3 mb-4 flex justify-between items-center"><Link href="./projects">Resume</Link></li>
          <li className="border-b-2 border-neutral-400 pb-3 mb-4 flex justify-between items-center"><Link href="./contact">Let&apos;s connect</Link></li>
        </ul>
      </nav>
    </main>
  );
}
