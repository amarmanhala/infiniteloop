import React from 'react'
import PageSectionHeader from './PageSectionHeader'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section className="sm:mt-16 mt-8">
    <PageSectionHeader title="Projects" />
    <div className="grid w-full sm:grid-cols-2 grid-cols-1 gap-6 my-4">
      <ProjectCard />
      <ProjectCard />
    </div>
  </section>
  )
}

export default Projects