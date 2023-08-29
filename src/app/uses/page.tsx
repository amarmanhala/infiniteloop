import React from 'react'
import { Inter, IBM_Plex_Serif } from "next/font/google";
import { TECH_STACK } from "../../../data"



const ibmPlexSerif = IBM_Plex_Serif({ weight: ["400"], subsets: ["latin"] });

function Uses() {
  // Using map() to create an array of <span> elements
  const technologyElements = TECH_STACK.map(tech => <span key={tech}>{tech}</span>);
  return (
    <section className="mt-12 sm:mt-12">
        <h2
          className={`${ibmPlexSerif.className} text-neutral-300 text-2xl sm:text-4xl border-b border-neutral-300 py-3 sm:py-6`}
        >
          Tech
        </h2>
        <ul className="text-lg text-neutral-300">
         
        </ul>
      </section>
  )
}

export default Uses