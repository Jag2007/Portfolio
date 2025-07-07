import React, { useMemo } from "react";
import { CONTACT } from "./constants";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
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

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative border-b border-neutral-900 pb-12 pt-10 px-2 sm:px-6 md:px-12 lg:px-24 xl:px-40 overflow-hidden"
    >
      {/* Hexagon background */}
      <HexagonGrid />
      {/* Emerald to deep blue/black gradient */}
      <div className="absolute top-[0.02%] w-full h-40 md:h-72 bg-[#00c896] rounded-full blur-[100px] md:blur-[400px] opacity-25" />
      <h1 className="my-8 md:my-10 text-center text-2xl sm:text-3xl md:text-4xl font-bold">
        Get In Touch
      </h1>
      <div className="text-center tracking-lighter">
        <p className="my-4 text-sm sm:text-base md:text-lg">
          Phone: {CONTACT.phoneNo}
        </p>
        <div className="flex justify-center gap-4 mb-4 flex-wrap">
          <a
            href="https://www.linkedin.com/in/jagruthi-pulumati-087b69305/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl sm:text-4xl text-blue-700" />
          </a>
          <a
            href="https://www.instagram.com/jagruthi._16/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-3xl sm:text-4xl text-pink-500" />
          </a>
        </div>
        <a href="#" className="block text-xs sm:text-sm md:text-base">
          Email: {CONTACT.email}
        </a>
      </div>
    </section>
  );
};

export default Contact;
