"use client";

import { motion } from "framer-motion";

export default function XPPreview() {
  return (
    <div className="relative flex min-h-[170px] items-center justify-center">

      <motion.div
        animate={{
          scale: [1, 1.04, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          h-32
          w-32
          rounded-full
          bg-violet-500/10
          blur-[55px]
        "
      />

      <div className="relative text-center">

        <p
          className="
            text-5xl
            font-extralight
            tracking-tight
            text-white
          "
        >
          +2,400
        </p>

        <p
          className="
            mt-2
            text-xs
            uppercase
            tracking-[0.25em]
            text-cyan-300/70
          "
        >
          XP converted
        </p>

        <div className="mt-5 flex justify-center gap-2">

          <span className="rounded-full bg-violet-400/10 px-3 py-1 text-xs text-violet-300">
            Trees
          </span>

          <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
            Impact
          </span>

        </div>

      </div>

    </div>
  );
}