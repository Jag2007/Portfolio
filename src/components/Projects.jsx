import { ExternalLink, Github } from "lucide-react";
import * as Motion from "framer-motion";
import { PROJECTS } from "./constants";

const LINK_ICONS = {
  github: Github,
  external: ExternalLink,
};

const Projects = () => {
  return (
    <section id="projects" className="px-4 py-16 sm:px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <Motion.motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#d7dde7]">
              Projects
            </p>
            <h2 className="display-font mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Projects from my resume and recent work.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            This section includes the work that reflects my current direction
            across AI/ML, full-stack development, backend learning, and shipped
            client-facing products.
          </p>
        </Motion.motion.div>

        <div className="mt-10 grid gap-6">
          {PROJECTS.map((project) => (
            <Motion.motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.75 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.34)] md:grid md:grid-cols-[1fr_0.9fr] md:gap-6"
            >
              <div className="metal-sheen absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" />
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[#e5ebf5]">
                    {project.period}
                  </span>
                </div>
                <h3 className="mt-5 text-3xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-lg text-[#f3c677]">{project.tagline}</p>
                <p className="mt-5 text-base leading-8 text-white/66">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-col justify-between gap-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-white/42">
                    Highlights
                  </p>
                  <div className="mt-3 space-y-3 text-sm leading-7 text-white/68 sm:text-base">
                    {project.highlights.map((point) => (
                      <p key={point} className="relative pl-5">
                        <span className="absolute left-0 top-3 h-1.5 w-1.5 rounded-full bg-[#d7dde7]" />
                        {point}
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-white/78"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {project.links.map((link) => {
                      const Icon = LINK_ICONS[link.icon];

                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/84 transition hover:border-white/25 hover:bg-white/[0.1]"
                        >
                          {Icon ? <Icon size={16} /> : null}
                          <span>{link.label}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Motion.motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
