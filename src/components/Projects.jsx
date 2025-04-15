import { motion } from 'framer-motion';
import aboutImg from '../assets/about.png';
import { PROJECTS } from './constants';
import { LINKS } from './links';

const Projects = () => {
  return (
    <motion.div
      className="border-b border-neutral-900 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-center text-4xl font-bold my-10 bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-transparent">Projects</h1>
      <div className="flex flex-col gap-16 items-center">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col lg:flex-row items-center gap-8 w-full max-w-5xl px-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full lg:w-1/2 rounded-2xl shadow-md"
            />
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 rounded bg-white-400 px-2 py-1 text-sm font-medium text-purple-300 border-2 p-[2px] rounded-xl gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent ml-15 font-2xl font-bold"
                  >
                    {tech}
                  </span>
                ))}
                <a
                  href={project.projectlink[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 underline ml-2 mr-2 mb-2 rounded bg-white-400 px-2 py-1 text-sm font-medium text-purple-300 border-2 p-[2px] rounded-xl gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                >
                  View Project
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
