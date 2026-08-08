"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureCardProps {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
}

export default function FeatureCard({
  eyebrow,
  title,
  description,
  children,
  className = "",
}: FeatureCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 20,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[2rem]
        border
        border-white/[0.08]
        bg-white/[0.025]
        backdrop-blur-xl
        transition-colors
        duration-500
        hover:border-violet-400/20
        ${className}
      `}
    >
      {/* Hover glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-64
          w-64
          rounded-full
          bg-violet-500/10
          blur-[100px]
          opacity-0
          transition-opacity
          duration-700
          group-hover:opacity-100
        "
      />

      <div className="relative z-10 p-8 lg:p-10">

        <p
          className="
            text-[11px]
            font-medium
            uppercase
            tracking-[0.28em]
            text-violet-300/80
          "
        >
          {eyebrow}
        </p>

        <h3
          className="
            mt-4
            text-2xl
            font-light
            tracking-tight
            text-white
            lg:text-3xl
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-4
            max-w-lg
            text-sm
            leading-7
            text-zinc-400
            lg:text-base
          "
        >
          {description}
        </p>

        <div className="mt-10">
          {children}
        </div>

      </div>
    </motion.article>
  );
}