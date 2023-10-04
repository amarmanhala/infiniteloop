"use client"

import React from "react";
import { Inter, IBM_Plex_Serif } from "next/font/google";

const ibmPlexSerif = IBM_Plex_Serif({ weight: ["400"], subsets: ["latin"] });


const PageSectionHeader = ({ title }: { title: string }) => {
  return (
    <h2
      className={`${ibmPlexSerif.className} text-4xl border-b dark:border-stone-700 border-stone-300 py-4 mb-4 mt-6`}
    >
      {title}
    </h2>
  );
};

export default PageSectionHeader;
