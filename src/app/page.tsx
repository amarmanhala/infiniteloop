import Image from "next/image";
import Link from "next/link";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import ProjectCard from "./components/ProjectCard";

const ibmPlexSerif = IBM_Plex_Serif({ weight: ["300"], subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-6 py-8 sm:px-6 sm:py-6">
      <section className="">
        <h1 className="text-5xl text-white font-regular leading-tight">
          Hello, I&apos;m Amarpreet Singh, a software developer and designer
          based in chilly Toronto. I spend my time to crafting delightful
          software solutions that help companies grow their businesses.
        </h1>
      </section>

      <section className="mt-16">
        <h2
          className={`${ibmPlexSerif.className} text-white text-4xl border-b border-stone-700 py-4`}
        >
          Projects
        </h2>
        <div className="grid w-full grid-cols-2 gap-6 my-4">
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
    </main>
  );
}
