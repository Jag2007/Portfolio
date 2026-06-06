import * as Motion from "framer-motion";
import { TECHNOLOGIES } from "./constants";

const colorClasses = [
  "border-white/14 bg-white/[0.06] text-[#eff3f8]",
  "border-[#a7afba]/20 bg-[#a7afba]/10 text-[#e3e8ef]",
  "border-[#717987]/22 bg-[#717987]/10 text-[#cfd6e0]",
];

const Technologies = () => {
  return (
    <section className="px-4 py-16 sm:px-6 md:px-12 lg:px-20">
      <Motion.motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-8 backdrop-blur"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-[#d7dde7]">
          Tech Stack
        </p>
        <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="display-font text-3xl font-semibold text-white sm:text-4xl">
            The stack I use across AI agents, backend APIs, full-stack apps, and ML work.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            Python, LangGraph, LangChain, Scikit-learn, React, TypeScript,
            Node.js, Express.js, MongoDB, Postgres, Tailwind, SQL, and API
            testing are the technologies I want front and center.
          </p>
        </div>

        <div className="relative mt-8 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5">
          <div className="metal-sheen pointer-events-none absolute inset-0" />
          <p className="text-xs uppercase tracking-[0.26em] text-[#d7dde7]">
            Highlighted Stack
          </p>
          <p className="mt-3 text-base leading-8 text-white/78 sm:text-lg">
            My main stack includes <span className="font-semibold text-white">Python</span>, <span className="font-semibold text-white">LangGraph</span>, <span className="font-semibold text-white">LangChain</span>, <span className="font-semibold text-white">Scikit-learn</span>, <span className="font-semibold text-white">React</span>, <span className="font-semibold text-white">TypeScript</span>, <span className="font-semibold text-white">Node.js</span>, <span className="font-semibold text-white">Express.js</span>, <span className="font-semibold text-white">MongoDB</span>, <span className="font-semibold text-white">Postgres</span>, <span className="font-semibold text-white">Tailwind</span>, <span className="font-semibold text-white">SQL</span>, and <span className="font-semibold text-white">Postman</span>.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {TECHNOLOGIES.map((tech, index) => (
            <Motion.motion.span
              key={tech}
              whileHover={{ y: -4, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className={`rounded-full border px-4 py-2 text-sm font-medium ${
                colorClasses[index % colorClasses.length]
              }`}
            >
              {tech}
            </Motion.motion.span>
          ))}
        </div>
      </Motion.motion.div>
    </section>
  );
};

export default Technologies;
