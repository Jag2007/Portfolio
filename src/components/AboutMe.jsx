import React from "react";
import profileImg from "../assets/profile.jpeg";
import { HexagonGrid } from "./Hero";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative w-screen flex flex-col md:flex-row items-center justify-center gap-10 py-16 px-4 md:px-16 z-10 bg-[#0d1117] overflow-hidden"
    >
      {/* Hexagon grid background */}
      <HexagonGrid />

      {/* Main content */}
      <div className="flex-1 text-center md:text-left z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          About Me
        </h2>
        <div className="w-16 h-1 bg-[#00c896] rounded-full mb-6 mx-auto md:mx-0" />
        <p className="text-[#e8fff4] text-base md:text-lg leading-relaxed mb-4">
          Hi! I’m{" "}
          <span className="font-semibold text-[#00c896]">
            Jagruthi Pulumati
          </span>
          , a passionate web developer and creative problem solver. I love
          building beautiful, functional, and accessible web experiences.
          Currently, I’m a student at NST, interning at Artizence, and taking on
          freelance projects that challenge me to grow and innovate. My goal is
          to blend design and code to create digital products that make a
          difference.
        </p>
        <p className="text-[#e8fff4] text-base md:text-lg leading-relaxed">
          When I’m not coding, you’ll find me exploring new UI trends, sketching
          ideas, or collaborating with others who share my vision for purposeful
          technology. Let’s connect and create something amazing together!
        </p>
      </div>
      {/* Image Section */}
      <div className="flex-1 flex items-center justify-center z-10">
        <img
          src={profileImg}
          alt="Jagruthi Pulumati profile"
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-2xl shadow-2xl bg-[#0d1117] hover:scale-105 transition-transform duration-300 border-none outline-none"
          style={{ boxShadow: "0 8px 32px 0 #00c89655" }}
        />
      </div>
    </section>
  );
}
