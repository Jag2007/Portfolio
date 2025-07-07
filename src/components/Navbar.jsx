import logo from "../assets/jp.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 bg-transparent text-white backdrop-blur-md shadow-md">
      <img src={logo} alt="logo" className="w-10 rounded-xl" />
      <div className="flex gap-4">
        <a
          href="#about"
          className="text-white hover:scale-125 p-2 transition-transform"
        >
          About
        </a>
        <a
          href="#projects"
          className="text-white hover:scale-125 p-2 transition-transform"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-white hover:scale-125 p-2 transition-transform"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
