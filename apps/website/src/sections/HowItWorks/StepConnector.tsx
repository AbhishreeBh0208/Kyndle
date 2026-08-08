"use client";

import { motion } from "framer-motion";

export default function StepConnector() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        left-16
        right-[-2.5rem]
        top-8
        hidden
        h-px
        lg:block
        z-0
      "
    >
      {/* Base line */}
      <div className="absolute inset-0 bg-white/[0.09]" />

      {/* Soft neon glow */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-violet-500/20
          via-cyan-400/25
          to-violet-500/20
          blur-[2px]
        "
      />

      {/* Animated energy */}
      <motion.div
        animate={{
          x: ["-10%", "110%"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-0
          top-1/2
          h-[5px]
          w-40
          -translate-y-1/2
          rounded-full
          bg-gradient-to-r
          from-transparent
          via-violet-400
          to-cyan-300
          blur-[1px]
        "
      />
    </div>
  );
}   