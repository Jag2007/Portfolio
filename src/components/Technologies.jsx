import React, { useMemo, useState } from "react";
import {
  DiPython,
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiGit,
} from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { GiBrain } from "react-icons/gi";
import tailwindLogo from "../assets/tailwind-logo.png";
import { motion } from "framer-motion";

// --- Hexagon Background ---
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
  const [hovered, setHovered] = useState(-1);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [pulseIdx, setPulseIdx] = useState([]);

  const hexes = useMemo(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
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

  useMemo(() => {
    let frame;
    let t = 0;
    const animate = () => {
      t += 0.0015;
      setOffset(Math.sin(t) * 80);
      frame = requestAnimationFrame(animate);
    };
    let setOffset = () => {};
    setOffset = (offset) => setParallax((prev) => ({ ...prev, offset }));
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  useMemo(() => {
    const interval = setInterval(() => {
      const count = Math.floor(Math.random() * 6) + 3;
      const idxs = Array.from({ length: count }, () =>
        Math.floor(Math.random() * hexes.length)
      );
      setPulseIdx(idxs);
    }, 1800);
    return () => clearInterval(interval);
  }, [hexes.length]);

  function handleMouseMove(e) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const x = (e.clientX / w - 0.5) * 100;
    const y = (e.clientY / h - 0.5) * 100;
    setParallax({ x, y });
  }

  return (
    <div
      className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none"
      onMouseMove={handleMouseMove}
    >
      {hexes.map((hex, i) => (
        <Hexagon
          key={i}
          x={hex.x + parallax.x}
          y={hex.y + parallax.y}
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
// --- End Hexagon Grid ---

const Technologies = () => {
  return (
    <section className="relative w-screen py-20 px-4 md:px-16 bg-[#0d1117] overflow-hidden z-10">
      {/* Hexagon Background */}
      <HexagonGrid />

      {/* Emerald Glow */}
      <div className="absolute top-1/2 left-1/2 w-[480px] h-[480px] rounded-full blur-[160px] opacity-30 -translate-x-1/2 -translate-y-1/2 z-0" />

      {/* Title */}
      <h2 className="text-center text-3xl md:text-5xl font-bold text-white mb-10 z-10">
        Tech Stacks
      </h2>

      {/* Tech Icons Grid */}
      <div className="flex flex-wrap justify-center gap-6 z-10">
        <TechIcon
          icon={<RiReactjsLine />}
          border="border-cyan-400"
          text="text-cyan-400"
        />
        <TechIcon
          icon={<SiTypescript />}
          border="border-blue-500"
          text="text-blue-500"
        />
        <TechIcon
          icon={<DiJavascript1 />}
          border="border-yellow-300"
          text="text-yellow-300"
        />
        <TechIcon
          icon={<DiPython />}
          border="border-yellow-400"
          text="text-yellow-400"
        />
        <TechIcon
          icon={<DiHtml5 />}
          border="border-orange-500"
          text="text-orange-500"
        />
        <TechIcon
          icon={<DiCss3 />}
          border="border-blue-400"
          text="text-blue-400"
        />
        <TechIcon
          icon={<DiGit />}
          border="border-red-400"
          text="text-red-400"
        />
        <TechIcon
          icon={<GiBrain />}
          border="border-purple-400"
          text="text-purple-400"
        />
        <TechIcon
          icon={
            <img src={tailwindLogo} alt="Tailwind CSS" className="w-10 h-10" />
          }
          border="border-sky-400"
        />
      </div>
    </section>
  );
};

// Reusable Tech Icon
function TechIcon({ icon, border, text = "" }) {
  return (
    <div
      className={`border-2 ${border} p-4 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300`}
    >
      <div className={`text-4xl md:text-5xl ${text}`}>{icon}</div>
    </div>
  );
}

export default Technologies;
