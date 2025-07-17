import React from "react";
import { CONTACT } from "./constants";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { HexagonGrid } from "./Hero";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full py-16 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40 text-white overflow-hidden bg-[#0d1117]"
    >
      {/* Hexagon Background */}
      <HexagonGrid />

      {/* Emerald Glowing Blur */}
      <div className="absolute top-[5%] left-1/2 transform -translate-x-1/2 w-[80%] h-72 rounded-full blur-[320px] opacity-25  z-0" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Get In Touch
        </h2>

        <p className="text-[hsl(151,50%,59%)] text-base md:text-lg mb-3">
          Phone:{" "}
          <span className="text-[#fdfffe] font-medium">{CONTACT.phoneNo}</span>
        </p>
        <p className="text-[hsl(151,50%,59%)] text-base md:text-lg mb-3">
          Email:{" "}
          <span className="text-[#ffffff] font-medium">{CONTACT.email}</span>
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://www.linkedin.com/in/jagruthi-pulumati-087b69305/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ffffff] hover:scale-110 transition-transform duration-300"
          >
            <FaLinkedin className="text-3xl md:text-4xl drop-shadow-[0_0_20px_#00c89680]" />
          </a>
          <a
            href="https://www.instagram.com/jagruthi._16/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:scale-110 transition-transform duration-300"
          >
            <FaInstagram className="text-3xl md:text-4xl drop-shadow-[0_0_20px_#ec489980]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
