import React from 'react'
import { Inter, IBM_Plex_Serif } from "next/font/google";
import { TECH_STACK } from "../../../data"

const ibmPlexSerif = IBM_Plex_Serif({ weight: ["400"], subsets: ["latin"] });

function Uses() {
  return (
    <section className="mt-12 sm:mt-12">
        <h2
          className={`${ibmPlexSerif.className} text-neutral-300 text-2xl sm:text-4xl border-b border-neutral-300 py-3 sm:py-6`}
        >
          Tech
        </h2>
        {
          TECH_STACK.map((tech, index) => {
            return (<h1 key={index}>{tech.name}</h1>)
          })
        }
      </section>
  )
}

export default Uses