import { PROJECTS } from "./constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-16 pl-55">
      <h1 className="text-center text-4xl font-bold my-10 bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-transparent">
        Projects
      </h1>
      <div className="flex flex-col gap-16 items-center">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center gap-8 w-full max-w-5xl px-4 hover:scale-105 transition-transform duration-300"
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
                    className="px-3 py-1 mr-2 mb-2 text-sm font-medium border border-purple-500 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text"
                  >
                    {tech}
                  </span>
                ))}
                <a
                  href={project.projectlink[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 ml-2 mb-2 text-sm font-medium text-blue-300 underline hover:text-blue-400 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
