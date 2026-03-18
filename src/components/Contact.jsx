import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "./constants";

const CONTACT_ICONS = {
  github: Github,
  linkedin: Linkedin,
  resume: FileText,
  email: Mail,
};

const Contact = () => {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-[#0e151d]/88 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.28)]">
        <p className="text-sm uppercase tracking-[0.3em] text-[#7ef0c5]">
          Contact
        </p>
        <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="display-font text-3xl font-semibold text-white sm:text-4xl">
              Open to internships, collaborations, and strong product work.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/65">
              If you are building something that needs clean UI, reliable frontend
              execution, or sharper user flows, reach out. Email is the fastest way
              to get me.
            </p>
          </div>
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center justify-center rounded-full bg-[#7ef0c5] px-6 py-3 text-sm font-semibold text-[#07110d] transition hover:scale-[1.02]"
          >
            {PROFILE.email}
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {PROFILE.socials.map((item) => {
            const Icon = CONTACT_ICONS[item.icon];

            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/78 transition hover:border-[#f3c677]/30 hover:bg-[#f3c677]/10"
              >
                {Icon ? <Icon size={16} /> : null}
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
