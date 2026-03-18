import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "./constants";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 md:px-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#0d141c]/80 px-5 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.22)] backdrop-blur">
        <button
          onClick={() => scrollToSection("home")}
          className="display-font text-sm font-semibold uppercase tracking-[0.35em] text-white"
        >
          JP
        </button>

        <div className="hidden items-center gap-5 md:flex">
          {NAV_LINKS.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="text-sm uppercase tracking-[0.22em] text-white/68 transition hover:text-[#7ef0c5]"
            >
              {section.label}
            </button>
          ))}
        </div>

        <button
          className="rounded-full border border-white/10 p-2 text-white md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="mx-auto mt-3 max-w-6xl rounded-[1.5rem] border border-white/10 bg-[#0d141c]/95 p-4 shadow-[0_20px_40px_rgba(0,0,0,0.22)] backdrop-blur md:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  scrollToSection(section.id);
                  setMenuOpen(false);
                }}
                className="rounded-xl border border-white/8 px-4 py-3 text-left text-sm uppercase tracking-[0.2em] text-white/78"
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
