import Image from "next/image";
import Link from "next/link";
import { Inter, IBM_Plex_Serif } from "next/font/google";

const ibmPlexSerif = IBM_Plex_Serif({ weight: ["300"], subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-6 py-8 sm:px-6 sm:py-6">
      <section className="">
        <h1 className="text-5xl text-white font-regular leading-tight">
        Hello, I&apos;m Amarpreet Singh, a software developer and designer based in chilly Toronto. I spend my time to crafting delightful software solutions that help companies grow their businesses.
          
        </h1>
       
      </section>

      <section className="mt-12">
        <h2
          className={`${ibmPlexSerif.className} text-neutral-300 text-2xl sm:text-4xl border-b border-neutral-300 py-3 sm:py-6`}
        >
          Projects
        </h2>
      </section>
    </main>
  );
}
