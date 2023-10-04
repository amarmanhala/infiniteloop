"use client"
import Link from "next/link";
import React from "react";
import { Inter, IBM_Plex_Serif } from "next/font/google";

const ibmPlexSerif = IBM_Plex_Serif({ weight: ["400"], subsets: ["latin"] });

const Anchor = ({
  paramURL,
  children,
}: {
  paramURL: string;
  children: any;
}) => {
  return (
    <Link href={paramURL} target="blank" className={` ${ibmPlexSerif.className} border-b-2 border-pink-600`}>
      {children}
    </Link>
  );
};

export default Anchor;
