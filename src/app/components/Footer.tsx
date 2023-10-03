"use client";
import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Link from "next/link";

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
          This site, I have built with JavaScript,{" "}
          <Link href="https://react.dev/" target="blank">
            React
          </Link>
          ,{" "}
          <Link href="https://nextjs.org/" target="blank">
            Nextjs
          </Link>{" "}
          and{" "}
          <Link href="https://tailwindcss.com/" target="blank">
            Tailwind
          </Link>
          .
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
