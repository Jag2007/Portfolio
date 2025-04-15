import { motion } from 'framer-motion';
import logo from '../assets/jp.png';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 text-white backdrop-blur-md"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img src={logo} alt="logo" className="mx-2 w-10" />
      <span className="flex gap-4 text-2xl">
        <motion.a
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          className="text-white hover:text-transparent hover:gradient-to-r hover:from-purple-400 hover:to-purple-600 p-2 rounded-full transition-all duration-200"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          className="text-white hover:text-transparent hover:gradient-to-r hover:from-purple-400 hover:to-purple-600 p-2 rounded-full transition-all duration-200"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          className="text-white hover:text-transparent hover:gradient-to-r hover:from-purple-400 hover:to-purple-600 p-2 rounded-full transition-all duration-200"
        >
          <FaInstagram />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          className="text-white hover:text-transparent hover:gradient-to-r hover:from-purple-400 hover:to-purple-600 p-2 rounded-full transition-all duration-200"
        >
          <FaTwitter />
        </motion.a>
      </span>
    </motion.nav>
  );
};

export default Navbar;
