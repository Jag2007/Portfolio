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
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-4 bg-transparent backdrop-blur-lg shadow-lg">
      <img
        src={logo}
        alt="logo"
        className="w-10 rounded-xl cursor-pointer"
        onClick={() => scrollToSection("home")}
      />

      <div className="flex gap-6">
        {["home", "about", "projects", "contact"].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className="relative text-white font-medium tracking-wide border-none outline-none transition-all duration-300 ease-in-out hover:text-[#00c896] group bg-null"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}

            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00c896] transition-all duration-300 group-hover:w-full"></span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
