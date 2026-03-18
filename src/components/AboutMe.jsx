import { ABOUT } from "./constants";

export default function AboutMe() {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
          <p className="text-sm uppercase tracking-[0.3em] text-[#7ef0c5]">
            About
          </p>
          <h2 className="display-font mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Product-minded frontend work, backed by clean execution.
          </h2>
          <p className="mt-6 text-base leading-8 text-white/70">{ABOUT.intro}</p>
          <div className="mt-6 space-y-4 text-base leading-8 text-white/62">
            {ABOUT.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {ABOUT.stats.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.75rem] border border-white/10 bg-[#111a24] p-6"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-[#f3c677]">
                {item.label}
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
