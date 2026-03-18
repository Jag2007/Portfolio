import { EDUCATION, EXPERIENCE } from "./constants";

export default function Experience() {
  return (
    <section id="experience" className="px-4 py-16 sm:px-6 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-[#7ef0c5]">
            Experience
          </p>
          <div className="mt-6 space-y-6">
            {EXPERIENCE.map((item) => (
              <div
                key={`${item.company}-${item.period}`}
                className="rounded-[1.5rem] border border-white/8 bg-[#101720] p-6"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="text-white/62">{item.company}</p>
                  </div>
                  <p className="text-sm uppercase tracking-[0.18em] text-[#f3c677]">
                    {item.period}
                  </p>
                </div>
                <div className="mt-5 space-y-3 text-sm leading-7 text-white/68 sm:text-base">
                  {item.points.map((point) => (
                    <p key={point}>{point}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[#0e151d]/85 p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-[#7ef0c5]">
            Education
          </p>
          <div className="mt-6 space-y-5">
            {EDUCATION.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.16em] text-[#f3c677]">
                  {item.meta}
                </p>
                <p className="mt-3 text-sm leading-7 text-white/62">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
