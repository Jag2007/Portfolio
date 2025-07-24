import logo from "../assets/jp.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  } else if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const NAV_LINKS = ["home", "about", "projects", "contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-14 py-4 bg-black/60 backdrop-blur-lg shadow-lg border-b border-white/10">
      {/* Logo */}
      <img
        src={logo}
        alt="logo"
        className="w-10 rounded-xl cursor-pointer transition-transform duration-300 hover:scale-110"
        onClick={() => scrollToSection("home")}
      />

      {/* Desktop Nav Links */}
      <div className="hidden md:flex gap-6">
        {NAV_LINKS.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className="relative text-white font-light tracking-wide uppercase text-sm md:text-base border-none outline-none bg-transparent transition-all duration-300 group"
          >
            {section}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#00c896] transition-all duration-300 group-hover:w-full"></span>
          </button>
        ))}
      </div>

      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden p-1"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[68px] left-0 w-full bg-black/95 shadow-lg flex flex-col items-center gap-3 py-4 z-40 md:hidden transition-all duration-300 ease-in-out">
          {NAV_LINKS.map((section) => (
            <button
              key={section}
              onClick={() => {
                scrollToSection(section);
                setMenuOpen(false);
              }}
              className="text-white text-base font-semibold uppercase tracking-widest hover:text-[#00c896] transition-colors duration-200"
            >
              {section}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
