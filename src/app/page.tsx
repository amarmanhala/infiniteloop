import Image from "next/image";
import Link from "next/link";
import { Inter, IBM_Plex_Serif } from "next/font/google";

const ibmPlexSerif = IBM_Plex_Serif({ weight: ["300"], subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-6 py-10 sm:px-32 sm:py-20">
      <div>
        <h1 className="text-2xl sm:text-4xl text-neutral-300 mb-6 font-semibold">
          Amarpreet Singh
        </h1>
        <h2 className="text-2xl sm:text-4xl text-neutral-300 font-light">
          Hello! I am software engineer, designer. I love building delightful
          products.
        </h2>
      </div>

      <section className="mt-24 sm:mt-32">
        <h2
          className={`${ibmPlexSerif.className} text-neutral-300 text-2xl sm:text-4xl border-b border-neutral-300 py-3 sm:py-6`}
        >
          Projects
        </h2>
      </section>
    </main>
  );
}
