import { TECHNOLOGIES } from "./constants";

const colorClasses = [
  "border-[#7ef0c5]/25 bg-[#7ef0c5]/10 text-[#d4fff0]",
  "border-[#f3c677]/25 bg-[#f3c677]/10 text-[#fff1cf]",
  "border-[#62b0ff]/25 bg-[#62b0ff]/10 text-[#e4f1ff]",
];

const Technologies = () => {
  return (
    <section className="px-4 py-16 sm:px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-[#0e151d]/85 p-8 backdrop-blur">
        <p className="text-sm uppercase tracking-[0.3em] text-[#7ef0c5]">
          Tech Stack
        </p>
        <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="display-font text-3xl font-semibold text-white sm:text-4xl">
            The stack I actually use across frontend, backend basics, and ML work.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            React, JavaScript, and Tailwind are my main frontend tools. For
            backend understanding I work with SQL and basic APIs, and for ML
            projects I use Python with TensorFlow.
          </p>
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-[#7ef0c5]/20 bg-[#7ef0c5]/8 p-5">
          <p className="text-xs uppercase tracking-[0.26em] text-[#7ef0c5]">
            Highlighted Stack
          </p>
          <p className="mt-3 text-base leading-8 text-white/78 sm:text-lg">
            My tech stack mainly includes <span className="font-semibold text-white">React</span>, <span className="font-semibold text-white">JavaScript</span>, and <span className="font-semibold text-white">Tailwind</span> for frontend, <span className="font-semibold text-white">SQL</span> and <span className="font-semibold text-white">basic APIs</span> for backend understanding, and <span className="font-semibold text-white">Python</span> with <span className="font-semibold text-white">TensorFlow</span> for machine learning projects.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {TECHNOLOGIES.map((tech, index) => (
            <span
              key={tech}
              className={`rounded-full border px-4 py-2 text-sm font-medium ${
                colorClasses[index % colorClasses.length]
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
