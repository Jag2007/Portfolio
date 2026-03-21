import * as Motion from "framer-motion";

const binaryRows = [
  "101101001011010010110100101101001011",
  "010010110100101101001011010010110100",
  "110010101100101011001010110010101100",
  "001101011001101011001101011001101011",
  "101011110010101111001010111100101011",
  "011010010110100101101001011010010110",
  "111000101110001011100010111000101110",
  "000111010001110100011101000111010001",
];

const snowflakes = Array.from({ length: 96 }, (_, index) => ({
  id: index,
  left: (index * 9.5) % 100,
  size: 1.5 + (index % 5) * 0.9,
  duration: 8 + (index % 7) * 1.8,
  delay: (index % 11) * 0.45,
  drift: (index % 2 === 0 ? 1 : -1) * (10 + (index % 6) * 5),
  opacity: 0.18 + (index % 5) * 0.09,
}));

const glitterSpecks = Array.from({ length: 42 }, (_, index) => ({
  id: index,
  left: (index * 7.8) % 100,
  top: (index * 11.7) % 100,
  size: 1 + (index % 3) * 0.8,
  duration: 3.6 + (index % 5) * 1.1,
  delay: (index % 9) * 0.35,
  opacity: 0.18 + (index % 4) * 0.08,
}));

export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:110px_110px]" />
      <div className="absolute inset-0 opacity-28 [background-image:linear-gradient(135deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(45deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:160px_160px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_45%,rgba(0,0,0,0.22)_100%)]" />

      <Motion.motion.div
        className="absolute -left-[10%] top-[12%] h-px w-[52rem] bg-gradient-to-r from-transparent via-white/45 to-transparent"
        animate={{ x: [0, 180, 0], opacity: [0.2, 0.55, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.motion.div
        className="absolute right-[-12%] top-[34%] h-px w-[44rem] bg-gradient-to-r from-transparent via-white/28 to-transparent"
        animate={{ x: [0, -180, 0], opacity: [0.14, 0.34, 0.14] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.motion.div
        className="absolute left-[-8%] bottom-[22%] h-px w-[58rem] bg-gradient-to-r from-transparent via-[#aab2be]/40 to-transparent"
        animate={{ x: [0, 220, 0], opacity: [0.14, 0.46, 0.14] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.motion.div
        className="absolute left-[-20%] top-[58%] h-px w-[70rem] rotate-[8deg] bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{ x: [0, 240, 0], opacity: [0.08, 0.28, 0.08] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.motion.div
        className="absolute right-[-18%] top-[24%] h-px w-[66rem] -rotate-[9deg] bg-gradient-to-r from-transparent via-white/18 to-transparent"
        animate={{ x: [0, -220, 0], opacity: [0.08, 0.24, 0.08] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <Motion.motion.div
        className="absolute left-[18%] top-[-10%] h-[34rem] w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"
        animate={{ y: [0, 110, 0], opacity: [0.12, 0.32, 0.12] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.motion.div
        className="absolute right-[14%] top-[-8%] h-[40rem] w-px bg-gradient-to-b from-transparent via-white/16 to-transparent"
        animate={{ y: [0, 150, 0], opacity: [0.08, 0.28, 0.08] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.motion.div
        className="absolute left-[52%] top-[-6%] h-[48rem] w-px bg-gradient-to-b from-transparent via-[#aab2be]/16 to-transparent"
        animate={{ y: [0, 130, 0], opacity: [0.06, 0.22, 0.06] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0">
        {binaryRows.map((row, index) => (
          <Motion.motion.div
            key={`${row}-${index}`}
            className="absolute font-mono text-[10px] tracking-[0.35em] text-white/14"
            style={{
              left: `${4 + index * 11}%`,
              top: `${6 + index * 10}%`,
              rotate: -90,
            }}
            animate={{ y: [0, 58, 0], opacity: [0.06, 0.22, 0.06] }}
            transition={{
              duration: 8 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          >
            {row}
          </Motion.motion.div>
        ))}
      </div>

      <div className="absolute inset-0">
        {binaryRows.slice(0, 5).map((row, index) => (
          <Motion.motion.div
            key={`horizontal-${row}-${index}`}
            className="absolute font-mono text-[10px] tracking-[0.35em] text-white/10"
            style={{
              left: `${10 + index * 12}%`,
              top: `${18 + index * 16}%`,
            }}
            animate={{ x: [0, 80, 0], opacity: [0.04, 0.14, 0.04] }}
            transition={{
              duration: 12 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.4,
            }}
          >
            {row}
          </Motion.motion.div>
        ))}
      </div>

      <Motion.motion.div
        className="absolute inset-y-0 left-[-20%] w-[22%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)] blur-2xl"
        animate={{ x: ["0%", "620%"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
      />
      <Motion.motion.div
        className="absolute inset-y-0 left-[-30%] w-[14%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)] blur-xl"
        animate={{ x: ["0%", "760%"] }}
        transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
      />

      <div className="absolute inset-0">
        {snowflakes.map((flake) => (
          <Motion.motion.span
            key={flake.id}
            className="absolute rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.65)]"
            style={{
              left: `${flake.left}%`,
              top: "-4%",
              width: `${flake.size}px`,
              height: `${flake.size}px`,
            }}
            animate={{
              y: ["0vh", "112vh"],
              x: [0, flake.drift, 0],
              opacity: [0, flake.opacity, flake.opacity * 0.85, 0],
            }}
            transition={{
              duration: flake.duration,
              repeat: Infinity,
              delay: flake.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0">
        {glitterSpecks.map((speck) => (
          <Motion.motion.span
            key={`glitter-${speck.id}`}
            className="absolute rounded-full bg-[#CCD1D4] shadow-[0_0_12px_rgba(204,209,212,0.9)]"
            style={{
              left: `${speck.left}%`,
              top: `${speck.top}%`,
              width: `${speck.size}px`,
              height: `${speck.size}px`,
            }}
            animate={{
              opacity: [0.04, speck.opacity, 0.08],
              scale: [0.9, 1.45, 0.95],
            }}
            transition={{
              duration: speck.duration,
              repeat: Infinity,
              delay: speck.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
