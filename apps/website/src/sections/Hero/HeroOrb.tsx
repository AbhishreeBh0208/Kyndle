"use client";

import { motion } from "framer-motion";

export default function HeroOrb() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-visible">

      {/* ===========================
          Purple Ambient Glow
      ============================ */}
      <motion.div
        animate={{
          opacity: [0.28, 0.45, 0.28],
          x: [-15, 15, -15],
          y: [-10, 10, -10],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[720px] w-[720px] rounded-full blur-[180px]"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,.42) 0%, rgba(139,92,246,.15) 35%, transparent 75%)",
        }}
      />

      {/* ===========================
          Cyan Ambient Glow
      ============================ */}
      <motion.div
        animate={{
          opacity: [0.2, 0.35, 0.2],
          x: [20, -20, 20],
          y: [15, -15, 15],
          scale: [1.05, 1, 1.05],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[650px] w-[650px] rounded-full blur-[170px]"
        style={{
          background:
            "radial-gradient(circle, rgba(94,235,255,.35) 0%, rgba(94,235,255,.12) 35%, transparent 75%)",
        }}
      />

      {/* ===========================
          Neon Halo
      ============================ */}
      <div
        className="absolute h-[560px] w-[560px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,.04), transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      {/* ===========================
          Glass Sphere
      ============================ */}
      <motion.div
        animate={{
          borderRadius: [
            "49% 51% 50% 50% / 50% 49% 51% 50%",
            "50% 50% 49% 51% / 51% 50% 49% 50%",
            "49% 51% 50% 50% / 50% 49% 51% 50%",
          ],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[500px] w-[500px] overflow-hidden"
        style={{
          background: `
radial-gradient(
    circle at 25% 35%,
    rgba(139,92,246,.10),
    transparent 35%
),

radial-gradient(
    circle at 75% 65%,
    rgba(94,235,255,.10),
    transparent 40%
),

radial-gradient(
    circle,
    rgba(18,18,30,.82),
    rgba(10,8,20,.98) 70%
)
`,
          backdropFilter: "blur(60px)",
          boxShadow: `
            inset 0 0 70px rgba(255,255,255,.02),
            inset 0 -80px 100px rgba(0,0,0,.45)
          `,
        }}
      />

      {/* ===========================
          Inner Ambient Light
      ============================ */}
      <motion.div
        animate={{
          x: [-20, 15, -20],
          y: [-15, 20, -15],
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[180px] w-[180px] rounded-full bg-cyan-300 blur-[80px]"
      />

      {/* ===========================
          KYNDLE
      ============================ */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="
          absolute
          z-20

          whitespace-nowrap

          text-[8rem]
          md:text-[9rem]
          lg:text-[10rem]

          font-extralight

          tracking-[0.14em]

          uppercase

          leading-none

          bg-gradient-to-r
          from-cyan-100
          via-white
          to-violet-200

          bg-clip-text
          text-transparent

          pointer-events-none
          select-none
        "
      >
        KYNDLE
      </motion.h1>

    </div>
  );
}