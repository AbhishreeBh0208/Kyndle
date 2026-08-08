"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TimelineEventProps {
  icon: ReactNode;
  platform: string;
  title: string;
  description: string;
  xp: string;
  time: string;
  delay?: number;
}

export default function TimelineEvent({
  icon,
  platform,
  title,
  description,
  xp,
  time,
  delay = 0,
}: TimelineEventProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
      }}
      className="relative flex gap-5"
    >
      {/* Node */}

      <div className="relative z-10 flex shrink-0 flex-col items-center">
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-white/[0.08]
            bg-[#0b0913]
            text-violet-300
            shadow-[0_0_25px_rgba(124,58,237,.08)]
          "
        >
          {icon}
        </div>
      </div>

      {/* Event */}

      <div
        className="
          mb-5
          flex-1
          rounded-2xl
          border
          border-white/[0.07]
          bg-white/[0.025]
          p-5
          transition-all
          duration-300
          hover:border-white/[0.12]
          hover:bg-white/[0.035]
        "
      >
        <div className="flex items-start justify-between gap-4">

          <div>
            <div className="flex items-center gap-3">

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.22em]
                  text-violet-300
                "
              >
                {platform}
              </span>

              <span className="text-xs text-zinc-700">
                •
              </span>

              <span className="text-xs text-zinc-600">
                {time}
              </span>

            </div>

            <h3 className="mt-3 text-base font-medium text-white">
              {title}
            </h3>

            <p className="mt-1.5 text-sm leading-6 text-zinc-500">
              {description}
            </p>
          </div>

          <span
            className="
              shrink-0
              rounded-full
              border
              border-cyan-400/10
              bg-cyan-400/[0.04]
              px-3
              py-1.5
              text-xs
              text-cyan-300
            "
          >
            {xp}
          </span>

        </div>
      </div>
    </motion.div>
  );
}