"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  x: string;
  y: string;
}

export default function PlatformNode({
  children,
  x,
  y,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: .8,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      whileHover={{
        y: -5,
        scale: 1.08,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
      }}
      className="absolute"
      style={{
        left: x,
        top: y,
        transform: "translate(-50%,-50%)",
      }}
    >
      <div
        className="
          flex

          h-14
          w-14

          items-center
          justify-center

          rounded-full

          border
          border-white/10

          bg-white/[0.04]

          backdrop-blur-xl

          shadow-[0_6px_30px_rgba(0,0,0,.3)]

          transition-all

          hover:border-cyan-300/40
          hover:bg-white/[0.08]
        "
      >
        {children}
      </div>
    </motion.div>
  );
}