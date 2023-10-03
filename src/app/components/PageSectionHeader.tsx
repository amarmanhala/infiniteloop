"use client"

import React from "react";
import { Inter, IBM_Plex_Serif } from "next/font/google";

const ibmPlexSerif = IBM_Plex_Serif({ weight: ["300"], subsets: ["latin"] });


const PageSectionHeader = ({ title }: { title: string }) => {
  return (
    <h2
      className={`${ibmPlexSerif.className} text-white text-4xl border-b border-stone-700 py-4 mb-4 mt-6`}
    >
      {title}
    </h2>
  );
};

export default PageSectionHeader;
