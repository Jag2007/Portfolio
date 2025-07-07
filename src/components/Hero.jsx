import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";

export default function HeroSection() {
  return (
    <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden text-white bg-[#0d1117]">
      {/* Emerald glowing blur */}
      <div className="absolute top-[35%] w-full h-72 bg-[#00c896] rounded-full blur-[160px] opacity-25 animate-pulse" />

      {/* Floating ring effect */}
      <motion.div
        className="absolute border border-[#00c896] rounded-full w-[400px] h-[400px] opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* Main content */}
      <div className="z-10 text-center px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Jagruthi Pulumati
        </motion.h1>

        <motion.p
          className="mt-4 text-[#e8fff4] text-md md:text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          NST Student | Intern @Artizence | Freelance Web Developer | UI with
          Vision | Code with Purpose
        </motion.p>

        <motion.div
          className="mt-2 w-24 h-1 mx-auto bg-[#00c896] rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 1 }}
        />

        {/* Social Icons */}
        <div className="mt-6 flex justify-center gap-5 text-[#00c896]">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6 hover:text-white transition duration-300" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-6 h-6 hover:text-white transition duration-300" />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-6 h-6 hover:text-white transition duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
