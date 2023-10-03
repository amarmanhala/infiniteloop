import React from 'react'
import PageSectionHeader from './PageSectionHeader'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section className="mt-16">
    <PageSectionHeader title="Projects" />
    <div className="grid w-full grid-cols-2 gap-6 my-4">
      <ProjectCard />
      <ProjectCard />
    </div>
  </section>
  )
}

export default Projects