"use client"
import Link from "next/link";
import React from "react";

const Anchor = ({
  paramURL,
  children,
}: {
  paramURL: string;
  children: any;
}) => {
  return (
    <Link href={paramURL} target="blank" className="border-b border-pink-600">
      {children}
    </Link>
  );
};

export default Anchor;
