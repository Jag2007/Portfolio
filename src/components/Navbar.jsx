import logo from "../assets/jp.png";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  } else if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-14 py-4 bg-transparent backdrop-blur-lg shadow-lg">
      {/* Logo */}
      <img
        src={logo}
        alt="logo"
        className="w-10 rounded-xl cursor-pointer transition-transform duration-300 hover:scale-110"
        onClick={() => scrollToSection("home")}
      />

      {/* Nav Links */}
      <div className="flex gap-6">
        {["home", "about", "projects", "contact"].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className="relative text-white font-light tracking-wide uppercase text-sm md:text-base border-none outline-none bg-transparent transition-all duration-300 group"
          >
            {section}

            {/* Emerald hover underline */}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#00c896] transition-all duration-300 group-hover:w-full"></span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
