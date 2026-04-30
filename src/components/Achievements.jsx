import { ArrowUpRight, Code2, Trophy } from "lucide-react";
import * as Motion from "framer-motion";
import { ACHIEVEMENTS } from "./constants";

const Achievements = () => {
  return (
    <section id="achievements" className="px-4 py-16 sm:px-6 md:px-12 lg:px-20">
      <Motion.motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-6xl"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#d7dde7]">
              Achievements
            </p>
            <h2 className="display-font mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Competitive practice and campus wins.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            A quick signal of consistency outside project work: coding practice,
            problem solving, and hackathon participation.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {ACHIEVEMENTS.map((item, index) => {
            const Icon = index === 0 ? Code2 : Trophy;
            const CardContent = (
              <Motion.motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 240, damping: 18 }}
                className="group h-full rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 shadow-[0_16px_44px_rgba(0,0,0,0.24)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-white">
                    <Icon size={20} />
                  </span>
                  {item.href ? (
                    <ArrowUpRight
                      size={18}
                      className="text-white/42 transition group-hover:text-white"
                    />
                  ) : null}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#bcc4d0]">
                  {item.meta}
                </p>
                <p className="mt-4 text-sm leading-7 text-white/64">{item.detail}</p>
              </Motion.motion.article>
            );

            return item.href ? (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {CardContent}
              </a>
            ) : (
              <div key={item.title}>{CardContent}</div>
            );
          })}
        </div>
      </Motion.motion.div>
    </section>
  );
};

export default Achievements;
