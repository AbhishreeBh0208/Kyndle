"use client";

import { motion } from "framer-motion";

const lines = [
  {
    text: "One Profile.",
    gradient: false,
  },
  {
    text: "Every Platform.",
    gradient: false,
  },
  {
    text: "Real Impact.",
    gradient: true,
  },
];

export default function AboutText() {
  return (
    <div className="flex flex-col">
      {lines.map((line, index) => (
        <div
          key={line.text}
          className="overflow-hidden"
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 45,
              filter: "blur(8px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.6,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.14,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`
              text-[clamp(2.5rem,4vw,4.5rem)]
              font-light
              leading-[1.15]
              tracking-[-0.02em]
              ${
                line.gradient
                  ? "bg-gradient-to-r from-cyan-200 via-white to-violet-300 bg-clip-text text-transparent"
                  : "text-white"
              }
            `}
          >
            {line.text}
          </motion.div>
        </div>
      ))}
    </div>
  );
}