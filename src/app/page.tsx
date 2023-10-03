import Image from "next/image";
import Link from "next/link";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import ProjectCard from "./components/ProjectCard";
import PageSectionHeader from "./components/PageSectionHeader";
import PageSection from "./components/PageSection";

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
        <PageSectionHeader title="Projects" />
        <div className="grid w-full grid-cols-2 gap-6 my-4">
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
      <PageSection>
        <PageSectionHeader title="About me" />
        <div className="text-stone-200 text-lg">
          <p className="text-stone-100 text-lg leading-relaxed mb-4">
            I&apos;ve been working as full stack developer for over five years,
            working with both big tech companies and small startups since I
            started my career in 2016. I earned my Master&apos;s degree ins
            Computer Applications from India, and it lit a fire in my
            programming career.
          </p>
          <p className="leading-relaxed mb-4">
            My interests span a broad spectrum of subjects, encompassing web
            development, frontend development, UI/UX design, and human-computer
            interaction. My go to tech stack is JavaScript, TypeScript, React,
            Node.js, and Next.js.
          </p>
          <p className="leading-relaxed mb-4">
            I&apos;m always eager to learn new technologies and stay up-to-date
            with the latest trends in the ever-evolving tech world.
          </p>
          <p className="leading-relaxed mb-4">
            When I&apos;m not coding, I love to go for runs, explore new places
            on my own, and, well, I&apos;m a big fan of milk tea.
          </p>
          <p className="leading-relaxed mb-4">
            You can gain further insights into my background and interests
            through my Resume
          </p>
          <p className="leading-relaxed mb-4">
            Thank you for stopping by.
          </p>
        </div>
      </PageSection>

      <PageSection>
        <PageSectionHeader title="Let's chat"></PageSectionHeader>
        <p className="text-stone-100 text-xl">
        Email me at{" "}
          <a href="mailto: amar.manhala@gmail.com" style={{ textDecoration: "none"}}>
            <u>amar.manhala@gmail.com</u>
          </a>{" "}
          or you can find on{" "}
          <a
            href="https://twitter.com/hyumanamar"
            target="_blank"
            className="underline"
          >
            <u>Twitter</u>
          </a>
          ,{" "}
          <a
            href="https://github.com/amarmanhala"
            target="_blank"
            className="underline"
          >
            <u>Github</u>
          </a>
          .
        </p>
      </PageSection>
    </main>
  );
}
