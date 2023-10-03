"use client";
import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Inter, IBM_Plex_Serif } from "next/font/google";

const ibmPlexSerif = IBM_Plex_Serif({ weight: ["300"], subsets: ["latin"] });

const Footer = () => {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var d = new Date();
  var dayName = days[d.getDay()];
  return (
    <footer className="w-full border-t border-stone-800 mt-24 pt-8 flex justify-between items-center px-6">
      <div>
        {" "}
        <span className="text-stone-300">
          This site, I have built with Gatsby, Styled Components, and is hosted
          on Netlify. Github hosts the source code.
        </span>
      </div>

      <div className="flex justify-center items-center space-x-2">
        <Player
          autoplay
          loop
          src="/animation_lnapd8b7.json"
          style={{ height: "30px", width: "30px" }}
        ></Player>
        <span className="text-stone-50 font-semibold">Happy {dayName}</span>
      </div>
    </footer>
  );
};

export default Footer;
