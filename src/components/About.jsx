import React from "react";
import aboutImg from "../assets/about.png";
import { ABOUT_TEXT } from "./constants";
const About = () => {
  return (
    <div id="about" className="border-b border-neutral-900 pb-4 pt-10 pl-55">
      <h1 className="my-20 text-center text-4xl bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-transparent font-bold">
        About
        <span className="bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-transparent">
          {" "}
          Me
        </span>
      </h1>
      <div className="flex flex-wrap ">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl h-140" src={aboutImg} alt="about" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex jutify-center lg:justify-start">
            <p
              className=" text-xl my-2 max-w-xl py-20 font-light
                    tracking-tighter"
            >
              {ABOUT_TEXT}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
