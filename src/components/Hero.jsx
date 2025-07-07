import { motion, useAnimation } from "framer-motion";
import { Github, Linkedin, Instagram, FileText, Mail } from "lucide-react";
import { useState, useMemo, useRef } from "react";

// 1. Typewriter effect for name
function Typewriter({ text, speed = 80, ...props }) {
  const [displayed, setDisplayed] = useState("");
  const i = useRef(0);
  useMemo(() => {
    setDisplayed("");
    i.current = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i.current + 1));
      i.current++;
      if (i.current >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return <span {...props}>{displayed}</span>;
}

// Hexagon SVG as a React component
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

// 2. Parallax and random pulse for hexagons
function HexagonGrid() {
  const size = 115;
  const [hovered, setHovered] = useState(-1);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  // Pulse: randomly select a few hexagons to pulse every few seconds
  const [pulseIdx, setPulseIdx] = useState([]);

  // Calculate number of hexagons needed to fill the screen
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
        // Honeycomb offset
        const x = col * hexWidth * 0.75;
        const y = row * hexHeight + (col % 2 ? hexHeight / 2 : 0);
        // Fade out as they move further from top-left
        const dist = Math.sqrt(x * x + y * y);
        const maxDist = Math.sqrt(w * w + h * h);
        const fade = Math.max(0, 1 - dist / maxDist);
        // Animate scale and rotation
        const scale = 0.9 + 0.25 * Math.sin((row + col) * 0.5);
        const rotate = 8 * Math.sin((row - col) * 0.3);
        hexes.push({ x, y, fade, scale, rotate });
      }
    }
    return hexes;
  }, [size]);

  // Animate the grid gently from top-left to bottom-right
  const [offset, setOffset] = useState(0);
  useMemo(() => {
    let frame;
    let t = 0;
    const animate = () => {
      t += 0.0015; // even slower, but more visible
      setOffset(Math.sin(t) * 80); // larger amplitude
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  // Parallax effect
  function handleMouseMove(e) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const x = (e.clientX / w - 0.5) * 100; // more pronounced
    const y = (e.clientY / h - 0.5) * 100;
    setParallax({ x, y });
  }

  // Random pulse
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

// 3. Social icon bounce and tooltip
const SOCIALS = [
  {
    href: "https://github.com/Jag2007",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/jagruthi-pulumati-087b69305/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/jagruthi._16/",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://pdf.ac/3I9eEF",
    icon: FileText,
    label: "Resume",
  },
  {
    href: "jagruthi.pulumati2024@nst.rishihood.edu.in",
    icon: Mail,
    label: "Email",
  },
];

function SocialIcon({ href, icon: Icon, label }) {
  const controls = useAnimation();
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative text-white no-underline transition duration-300 rounded-full p-2 hover:bg-[#009e7a] hover:text-[#00c896]"
      whileHover={{ scale: 1.25 }}
      onHoverStart={() => controls.start({ y: -8 })}
      onHoverEnd={() => controls.start({ y: 0 })}
      style={{ display: "inline-block" }}
    >
      <Icon size={24} color="#fff" />
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        whileHover={{ opacity: 1, y: -24 }}
        transition={{ duration: 0.3 }}
        className="absolute left-1/2 -translate-x-1/2 -top-8 bg-[#222] text-xs px-2 py-1 rounded shadow pointer-events-none whitespace-nowrap"
        style={{ color: "#00c896" }}
      >
        {label}
      </motion.span>
    </motion.a>
  );
}

export default function HeroSection() {
  return (
    <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden text-white bg-[#0d1117]">
      {/* Hexagon grid background */}
      <HexagonGrid />

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
          <Typewriter text="Jagruthi Pulumati" speed={70} />
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

        {/* Social + Resume + Email */}
        <div className="mt-6 flex justify-center gap-5">
          {SOCIALS.map((s, i) => (
            <SocialIcon key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
