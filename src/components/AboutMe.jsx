import * as Motion from "framer-motion";
import { ABOUT } from "./constants";

export default function AboutMe() {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Motion.motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85 }}
          className="group rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-8 backdrop-blur transition hover:border-white/18"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#d7dde7]">
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
        </Motion.motion.div>

        <div className="grid gap-4">
          {ABOUT.stats.map((item) => (
            <Motion.motion.div
              key={item.label}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -6, scale: 1.01 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65 }}
              className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.24)]"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-[#b8c0cb]">
                {item.label}
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
            </Motion.motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
