"use client";
import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Anchor from "./Anchor";

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
    <footer className="w-full border-t border-stone-800 mt-24 pt-8 flex justify-between items-center sm:flex-row flex-col">
      <div className="sm:w-2/4 w-full">
        {" "}
        <span>
          This site, I have built with JavaScript,{" "}
          <Anchor paramURL="https://react.dev/">React</Anchor>,{" "}
          <Anchor paramURL="https://nextjs.org/">Nextjs</Anchor> and{" "}
          <Anchor paramURL="https://tailwindcss.com/">Tailwind</Anchor>.
        </span>
      </div>

      <div className="flex justify-start sm:justify-end items-center space-x-2 sm:w-2/4 w-full pb-2 pt-6 sm:pt-0 sm:pb-0">
        <Player
          autoplay
          loop
          src="/animation_lnapd8b7.json"
          style={{ height: "30px", width: "30px" }}
        ></Player>
        <span className="font-semibold text-lg">Happy {dayName}</span>  
      </div>
    </footer>
  );
};

export default Footer;
