"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ImpactMetricProps {
  icon: ReactNode;
  value: string;
  label: string;
  description: string;
  delay?: number;
}

export default function ImpactMetric({
  icon,
  value,
  label,
  description,
  delay = 0,
}: ImpactMetricProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
      }}
      className="
        rounded-2xl
        border
        border-white/[0.07]
        bg-white/[0.025]
        p-5
        backdrop-blur-xl
      "
    >
      <div className="flex items-start justify-between">
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-white/[0.08]
            bg-white/[0.04]
            text-cyan-300
          "
        >
          {icon}
        </div>

        <span className="text-xs text-zinc-400">
          IMPACT
        </span>
      </div>

      <p className="mt-6 text-3xl font-light text-white">
        {value}
      </p>

      <p className="mt-1 text-sm font-medium text-zinc-300">
        {label}
      </p>

      <p className="mt-2 text-xs leading-5 text-zinc-400">
        {description}
      </p>
    </motion.div>
  );
}