import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import {
  DiPython,
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiGit,
} from "react-icons/di";
import { GiBrain } from "react-icons/gi";
import tailwindLogo from "../assets/tailwind-logo.png";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-5xl font-bold tracking-tight bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-transparent">
        Tech Stacks
      </h1>
      <div className="flex flex-wrap justify-center gap-6 px-6">
        <div className="border-2 border-cyan-400 p-4 rounded-xl">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="border-2 border-yellow-400 p-4 rounded-xl">
          <DiPython className="text-7xl text-yellow-400" />
        </div>
        <div className="border-2 border-yellow-300 p-4 rounded-xl">
          <DiJavascript1 className="text-7xl text-yellow-300" />
        </div>
        <div className="border-2 border-orange-500 p-4 rounded-xl">
          <DiHtml5 className="text-7xl text-orange-500" />
        </div>
        <div className="border-2 border-blue-400 p-4 rounded-xl">
          <DiCss3 className="text-7xl text-blue-400" />
        </div>
        <div className="border-2 border-red-400 p-4 rounded-xl">
          <DiGit className="text-7xl text-red-400" />
        </div>
        <div className="border-2 border-sky-400 p-4 rounded-xl">
          <img src={tailwindLogo} alt="Tailwind CSS" className="w-16 h-16" />
        </div>
        <div className="border-2 border-purple-400 p-4 rounded-xl">
          <GiBrain className="text-7xl text-purple-400" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
