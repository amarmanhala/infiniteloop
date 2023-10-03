import React from 'react'
import PageSection from './PageSection'
import PageSectionHeader from './PageSectionHeader'

const About = () => {
  return (
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
      <p className="leading-relaxed mb-4">Thank you for stopping by.</p>
    </div>
  </PageSection>
  )
}

export default About