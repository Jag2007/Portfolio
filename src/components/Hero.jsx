import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "./constants";

function HexagonGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-60">
      <div className="absolute left-[8%] top-24 h-32 w-32 rotate-12 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm" />
      <div className="absolute right-[10%] top-36 h-24 w-24 rounded-[1.5rem] border border-[#7ef0c5]/30 bg-[#7ef0c5]/10" />
      <div className="absolute left-[14%] bottom-24 h-40 w-40 rounded-full border border-[#f3c677]/20 bg-[#f3c677]/10 blur-3xl" />
      <div className="absolute right-[18%] bottom-12 h-52 w-52 rounded-full border border-[#62b0ff]/20 bg-[#62b0ff]/10 blur-3xl" />
    </div>
  );
}

const SOCIAL_ICONS = {
  github: Github,
  linkedin: Linkedin,
  resume: FileText,
  email: Mail,
};

function SocialIcon({ href, icon, label }) {
  const Icon = SOCIAL_ICONS[icon];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-white/88 transition hover:border-[#7ef0c5]/40 hover:bg-[#7ef0c5]/10"
    >
      {Icon ? <Icon size={16} /> : null}
      <span>{label}</span>
    </a>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 md:px-12 lg:px-20"
    >
      <HexagonGrid />
      <div className="absolute inset-x-0 top-24 mx-auto h-64 w-[85%] rounded-full bg-[#5fc9a9]/18 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
        <div>
          <p
            className="mb-4 text-sm uppercase tracking-[0.35em] text-[#7ef0c5]"
          >
            Portfolio aligned to resume
          </p>

          <h1 className="display-font max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl md:text-7xl">
            {PROFILE.name}
          </h1>

          <p
            className="mt-6 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl"
          >
            {PROFILE.role}
          </p>

          <p
            className="mt-4 max-w-2xl text-base leading-7 text-white/60 sm:text-lg"
          >
            {PROFILE.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {PROFILE.socials.map((item) => (
              <SocialIcon key={item.label} {...item} />
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[#0f1720]/75 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur">
          <p className="text-sm uppercase tracking-[0.28em] text-[#f3c677]">
            Current snapshot
          </p>
          <div className="mt-6 space-y-4">
            {PROFILE.headline.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/8 bg-white/4 px-4 py-4 text-sm leading-6 text-white/78"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { HexagonGrid };
