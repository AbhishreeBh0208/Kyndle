"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import StepConnector from "./StepConnector";

interface StepCardProps {
  number: string;
  label: string;
  title: string;
  description: string;
  children: ReactNode;
  delay?: number;
  showConnector?: boolean;
}

export default function StepCard({
  number,
  label,
  title,
  description,
  children,
  delay = 0,
  showConnector = true,
}: StepCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-100px",
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}
      className="relative"
    >
      {/* Connector */}

      {showConnector && <StepConnector />}

      {/* Step indicator */}

      <div className="relative z-10">

        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            border
            border-white/[0.10]
            bg-[#0b0913]
            shadow-[0_0_40px_rgba(124,58,237,.08)]
          "
        >
          <span
            className="
              text-sm
              font-medium
              tracking-[0.2em]
              text-transparent
              bg-gradient-to-r
              from-violet-300
              to-cyan-300
              bg-clip-text
            "
          >
            {number}
          </span>
        </div>

        {/* Content */}

        <div className="mt-10">

          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.3em]
              text-violet-300/80
            "
          >
            {label}
          </p>

          <h3
            className="
              mt-4
              text-3xl
              font-light
              tracking-tight
              text-white
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-5
              max-w-sm
              min-h-[84px]
              text-base
              leading-7
              text-zinc-400
            "
          >
            {description}
          </p>

        </div>

        {/* Visual */}

        <div className="mt-10">
          {children}
        </div>

      </div>
    </motion.div>
  );
}