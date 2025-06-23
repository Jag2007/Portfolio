import logo from "../assets/jp.png";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 text-white backdrop-blur-md shadow-md">
      <img src={logo} alt="logo" className="w-10" />
      <span className="flex gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/jagruthi-pulumati-087b69305/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-400 transition-transform duration-300 transform hover:scale-125 p-2"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-400 transition-transform duration-300 transform hover:scale-125 p-2"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/jagruthi._16/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-400 transition-transform duration-300 transform hover:scale-125 p-2"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-transform duration-300 transform hover:scale-125 p-2"
        >
          <FaTwitter />
        </a>
      </span>
    </nav>
  );
};

export default Navbar;
