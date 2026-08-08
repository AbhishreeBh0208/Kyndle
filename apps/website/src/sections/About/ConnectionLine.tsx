"use client";

import { motion } from "framer-motion";

interface Props {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export default function ConnectionLine({
  x1,
  y1,
  x2,
  y2,
}: Props) {
  /*
   * Deterministic delay based on the coordinates.
   * This avoids Math.random() changing between renders.
   */
  const delay = ((x1 + y1 + x2 + y2) % 2500) / 1000;

  return (
    <>
      {/* ==============================
          Base Connection
      =============================== */}

      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="2.5"
      />

      {/* ==============================
          Soft Neon Glow
      =============================== */}

      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="url(#connectionGradient)"
        strokeWidth="4"
        opacity="0.12"
        filter="url(#connectionBlur)"
      />

      {/* ==============================
          Neon Core
      =============================== */}

      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="url(#connectionGradient)"
        strokeWidth="1"
        opacity="0.75"
      />

      {/* ==============================
          Animated Energy Particle
      =============================== */}

      <motion.circle
        r="3"
        fill="#9B7CFF"
        animate={{
          cx: [x1, x2],
          cy: [y1, y2],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          repeatDelay: 2.5,
          delay,
          ease: "easeInOut",
        }}
      />

      {/* ==============================
          Particle Glow
      =============================== */}

      <motion.circle
        r="8"
        fill="#67E8F9"
        opacity="0.22"
        filter="url(#particleBlur)"
        animate={{
          cx: [x1, x2],
          cy: [y1, y2],
          opacity: [0, 0.35, 0.35, 0],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          repeatDelay: 2.5,
          delay,
          ease: "easeInOut",
        }}
      />
    </>
  );
}