"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface RankColumnProps {
  name: string;
  icon: string;
  level: number;
  height: number;
  active: boolean;
  completed: boolean;
}

export default function RankColumn({
  name,
  icon,
  level,
  height,
  active,
  completed,
}: RankColumnProps) {
  return (
    <div
      className="
        relative
        flex
        h-[460px]
        flex-1
        flex-col
        items-center
        justify-end
      "
    >
      {/* =====================================================
          RANK ICON
      ===================================================== */}

      <motion.div
        className="
          absolute
          z-20
          flex
          items-center
          justify-center
        "
        animate={{
          y: active ? -8 : 0,
          scale: active ? 1.12 : completed ? 1 : 0.92,
          opacity: active || completed ? 1 : 0.45,
          filter: active
            ? "drop-shadow(0 0 18px rgba(139,92,246,0.65))"
            : "drop-shadow(0 0 0 rgba(139,92,246,0))",
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          bottom: height + 18,
        }}
      >
<Image
  src={icon}
  alt={name}
  width={180}
  height={180}
  className="h-[150px] w-[150px] object-contain"
/>
      </motion.div>

      {/* =====================================================
          XP BAR
      ===================================================== */}

      <div
        className="
          relative
          w-10
          overflow-hidden
          rounded-full
          border
          border-white/[0.08]
          bg-white/[0.035]
        "
        style={{
          height,
        }}
      >
        {/* Background glow */}
        <motion.div
          className="
            absolute
            inset-x-0
            bottom-0
            rounded-full
            bg-gradient-to-t
            from-blue-400
            via-violet-400
            to-violet-300
          "
          animate={{
            height: active || completed ? "100%" : "8%",
            opacity: active ? 1 : completed ? 0.78 : 0.25,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* Inner glow */}
        <motion.div
          className="
            absolute
            inset-x-0
            bottom-0
            h-full
            rounded-full
            bg-white/10
            blur-md
          "
          animate={{
            opacity: active ? 0.7 : 0,
          }}
          transition={{
            duration: 0.5,
          }}
        />
      </div>

      {/* =====================================================
          RANK LABEL
      ===================================================== */}

      <motion.div
        className="
          absolute
          bottom-[-42px]
          whitespace-nowrap
          text-sm
          font-medium
          tracking-wide
        "
        animate={{
          color: active
            ? "#FFFFFF"
            : completed
            ? "#C4B5FD"
            : "rgba(255,255,255,0.45)",
          opacity: active || completed ? 1 : 0.55,
        }}
      >
        {name}
      </motion.div>

      {/* Level number */}
      <span
        className="
          absolute
          bottom-[-64px]
          text-[10px]
          uppercase
          tracking-[0.3em]
          text-zinc-600
        "
      >
        Rank {level}
      </span>
    </div>
  );
}