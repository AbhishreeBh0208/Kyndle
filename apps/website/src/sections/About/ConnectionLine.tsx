"use client";

import { motion } from "framer-motion";

interface Props {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export default function Connection({
  x1,
  y1,
  x2,
  y2,
}: Props) {

  const delay = Math.random() * 3;

  return (
    <>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="rgba(255,255,255,.08)"
        strokeWidth="1"
      />

      <motion.circle
        r="2.5"
        fill="#7C3AED"
        animate={{
          cx: [x1, x2],
          cy: [y1, y2],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          repeatDelay: 2 + Math.random() * 4,
          delay,
          ease: "linear",
        }}
      />

      <motion.circle
        r="4"
        fill="#67E8F9"
        opacity=".25"
        animate={{
          cx: [x1, x2],
          cy: [y1, y2],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          repeatDelay: 2 + Math.random() * 4,
          delay,
          ease: "linear",
        }}
      />

    </>
  );
}