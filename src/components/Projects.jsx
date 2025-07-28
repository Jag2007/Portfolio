import React, { useMemo } from "react";
import { PROJECTS } from "./constants";
import { motion } from "framer-motion";
import { HexagonGrid } from "./Hero";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full py-16 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40 text-white overflow-hidden bg-[#0d1117]"
    >
      {/* Hexagon Background */}
      <HexagonGrid />

      {/* Emerald glowing blur like AboutMe */}
      <div className="absolute top-[5%] left-1/2 transform -translate-x-1/2 w-[80%] h-72 rounded-full blur-[320px] opacity-25  z-0" />

      {/* Section Title */}
      <motion.h1
        className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h1>

      {/* Project List */}
      <motion.div
        className="flex flex-col gap-20 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col lg:flex-row items-center gap-10 max-w-6xl"
            variants={cardVariants}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full lg:w-1/2 rounded-xl shadow-lg object-cover"
              style={{ boxShadow: "0 8px 16px 0 #00c89655" }}
            />

            {/* Project Text */}
            <div className="w-full lg:w-1/2 text-[#e8fff4]">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap items-center">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 mr-2 mb-2 text-xs sm:text-sm font-medium text-[#00c896] border border-[#00c896]/30 rounded-full bg-[#00c896]/10 backdrop-blur"
                  >
                    {tech}
                  </span>
                ))}
                {project.projectlink[0] && (
                  <a
                    href={project.projectlink[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 mt-2 inline-block text-sm font-medium text-[#00c896] underline hover:text-white transition duration-300"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
