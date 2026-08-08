"use client";

import { motion } from "framer-motion";

interface TimelineConnectorProps {
  activeIndex: number;
  total: number;
}

export default function TimelineConnector({
  activeIndex,
  total,
}: TimelineConnectorProps) {
  /*
    Keep the moving energy slightly ahead of the
    activation point so it visually reaches the node.
  */
  const progress =
    activeIndex < 0
      ? 0
      : ((activeIndex + 1) / total) * 100;

  return (
    <div
      className="
        pointer-events-none
        absolute
        left-[27px]
        top-7
        bottom-7
        w-px
      "
    >

      {/* =====================================================
          BASE LINE
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-white/[0.07]
        "
      />

      {/* =====================================================
          COMPLETED ENERGY PATH
      ===================================================== */}

      <motion.div
        className="
          absolute
          left-0
          top-0
          w-px
          bg-gradient-to-b
          from-violet-400
          via-violet-400
          to-cyan-300
        "
        animate={{
          height: `${progress}%`,
        }}
        transition={{
          duration: 1.15,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* =====================================================
          MOVING ENERGY HEAD
      ===================================================== */}

      <motion.div
        className="
          absolute
          left-1/2
          top-0
          h-20
          w-[3px]
          -translate-x-1/2

          rounded-full

          bg-gradient-to-b
          from-transparent
          via-violet-300
          to-cyan-300

          blur-[1px]

          shadow-[0_0_8px_rgba(139,92,246,0.9),0_0_18px_rgba(34,211,238,0.4)]
        "
        animate={{
          top:
            activeIndex < 0
              ? "-10%"
              : `calc(${progress}% - 40px)`,
          opacity: activeIndex < 0 ? 0 : 1,
        }}
        transition={{
          duration: 1.15,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

    </div>
  );
}