import * as Motion from "framer-motion";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "./constants";

const SOCIAL_ICONS = {
  github: Github,
  linkedin: Linkedin,
  resume: FileText,
  email: Mail,
};

function SocialIcon({ href, icon, label }) {
  const Icon = SOCIAL_ICONS[icon];

  return (
    <Motion.motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.045] px-4 py-2 text-sm text-white/88 backdrop-blur transition"
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      {Icon ? (
        <Icon size={16} className="text-[#dfe5ef] transition group-hover:text-white" />
      ) : null}
      <span>{label}</span>
    </Motion.motion.a>
  );
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 md:px-12 lg:px-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_20%),radial-gradient(circle_at_80%_18%,rgba(167,174,186,0.06),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.04),transparent_28%)]" />
      <div className="absolute left-[6%] top-24 h-40 w-40 rounded-full border border-white/8 bg-white/[0.02] blur-2xl" />
      <div className="absolute right-[8%] top-20 h-52 w-52 rounded-full bg-white/[0.035] blur-3xl" />
      <div className="absolute inset-x-0 top-[22%] mx-auto h-72 w-[76%] rounded-full bg-white/[0.04] blur-[140px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <Motion.motion.div variants={container} initial="hidden" animate="show">
          <Motion.motion.h1
            variants={fadeUp}
            className="display-font max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl md:text-7xl"
          >
            {PROFILE.name}
          </Motion.motion.h1>

          <Motion.motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl"
          >
            {PROFILE.role}
          </Motion.motion.p>

          <Motion.motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl text-base leading-7 text-white/58 sm:text-lg"
          >
            {PROFILE.summary}
          </Motion.motion.p>

          <Motion.motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            {PROFILE.socials.map((item) => (
              <SocialIcon key={item.label} {...item} />
            ))}
          </Motion.motion.div>
        </Motion.motion.div>

        <div className="grid gap-4 pt-24 lg:pt-40">
          {PROFILE.headline.map((item, index) => (
            <Motion.motion.div
              key={item}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.32 + index * 0.12, duration: 0.7 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-6 py-6 text-base leading-8 text-white/78 backdrop-blur"
            >
              {item}
            </Motion.motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
