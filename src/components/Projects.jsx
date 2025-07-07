import React, { useMemo } from "react";
import { PROJECTS } from "./constants";
import { motion } from "framer-motion";

// --- HexagonGrid and Hexagon from Hero.jsx ---
function Hexagon({
  x,
  y,
  size,
  isHovered,
  onHover,
  onLeave,
  opacity,
  scale,
  rotate,
  pulse,
}) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{ position: "absolute", left: x, top: y, pointerEvents: "auto" }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onTouchStart={onHover}
      onTouchEnd={onLeave}
      animate={{ scale: scale * (pulse ? 1.35 : 1), rotate }}
      transition={{
        duration: pulse ? 2.5 : 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      <polygon
        points="50,10 90,30 90,70 50,90 10,70 10,30"
        fill="none"
        stroke={pulse ? "#00c896" : isHovered ? "#00c896" : "#fff"}
        strokeWidth={pulse ? 3.5 : 0.5}
        opacity={opacity}
        style={{
          filter:
            isHovered || pulse
              ? "drop-shadow(0 0 64px #00c896) drop-shadow(0 0 32px #00c896)"
              : "none",
          transition: "stroke 0.2s, filter 0.5s, stroke-width 0.5s",
        }}
      />
    </motion.svg>
  );
}

function HexagonGrid() {
  const size = 115;
  const [hovered, setHovered] = React.useState(-1);
  const [parallax, setParallax] = React.useState({ x: 0, y: 0 });
  const [pulseIdx, setPulseIdx] = React.useState([]);

  const hexes = useMemo(() => {
    const w = typeof window !== "undefined" ? window.innerWidth : 1200;
    const h = typeof window !== "undefined" ? window.innerHeight : 800;
    const hexWidth = size;
    const hexHeight = (Math.sqrt(3) / 2) * size;
    const cols = Math.ceil(w / (hexWidth * 0.75)) + 2;
    const rows = Math.ceil(h / hexHeight) + 2;
    const hexes = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * hexWidth * 0.75;
        const y = row * hexHeight + (col % 2 ? hexHeight / 2 : 0);
        const dist = Math.sqrt(x * x + y * y);
        const maxDist = Math.sqrt(w * w + h * h);
        const fade = Math.max(0, 1 - dist / maxDist);
        const scale = 0.9 + 0.25 * Math.sin((row + col) * 0.5);
        const rotate = 8 * Math.sin((row - col) * 0.3);
        hexes.push({ x, y, fade, scale, rotate });
      }
    }
    return hexes;
  }, [size]);

  const [offset, setOffset] = React.useState(0);
  React.useMemo(() => {
    let frame;
    let t = 0;
    const animate = () => {
      t += 0.0015;
      setOffset(Math.sin(t) * 80);
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  function handleMouseMove(e) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const x = (e.clientX / w - 0.5) * 100;
    const y = (e.clientY / h - 0.5) * 100;
    setParallax({ x, y });
  }

  React.useMemo(() => {
    const interval = setInterval(() => {
      const count = Math.floor(Math.random() * 6) + 3;
      const idxs = Array.from({ length: count }, () =>
        Math.floor(Math.random() * hexes.length)
      );
      setPulseIdx(idxs);
    }, 1800);
    return () => clearInterval(interval);
  }, [hexes.length]);

  return (
    <div
      className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none"
      style={{ overflow: "hidden" }}
      onMouseMove={handleMouseMove}
    >
      {hexes.map((hex, i) => (
        <Hexagon
          key={i}
          x={hex.x + offset + parallax.x}
          y={hex.y + offset + parallax.y}
          size={size}
          isHovered={hovered === i}
          onHover={() => setHovered(i)}
          onLeave={() => setHovered(-1)}
          opacity={0.12 * hex.fade}
          scale={hex.scale}
          rotate={hex.rotate}
          pulse={pulseIdx.includes(i)}
        />
      ))}
    </div>
  );
}
// --- End HexagonGrid ---

// Add variants for smooth staggered animation
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full py-16 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40 text-white overflow-hidden"
    >
      {/* Hexagon background */}
      <HexagonGrid />
      {/* Emerald to deep blue/black gradient */}
      <div className="absolute top-[0.5%] w-full h-40 md:h-72 bg-[#00c896] rounded-full blur-[400px] md:blur-[400px] opacity-25" />

      <motion.h1
        className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-br from-white to-[#ffffff] bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h1>

      {/* Animate all cards in together with stagger */}
      <motion.div
        className="flex flex-col gap-12 md:gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col lg:flex-row items-center gap-6 md:gap-10 w-full max-w-6xl rounded-xl p-4 transition-transform duration-300 bg-white/5 backdrop-blur-md border border-white/10 shadow-xl"
            variants={cardVariants}
            whileHover={{ scale: 1.035, boxShadow: "0 8px 32px 0 #00c89655" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full lg:w-1/2 rounded-xl shadow-md object-cover"
            />
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-[#c4f4e2] mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap items-center">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 mr-2 mb-2 text-xs sm:text-sm font-medium text-[#00c896] border border-[#00c896]/30 rounded-full bg-[#00c896]/10 backdrop-blur"
                  >
                    {tech}
                  </span>
                ))}
                <a
                  href={project.projectlink[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 mt-2 inline-block text-sm font-medium text-[#00c896] underline hover:text-white transition duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
