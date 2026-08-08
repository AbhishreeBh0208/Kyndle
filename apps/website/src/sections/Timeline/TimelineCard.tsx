"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface TimelineCardProps {
  platform: string;
  time: string;
  title: string;
  description: string;
  xp: string;
  icon: LucideIcon;
  index: number;
  activeIndex: number;
}

export default function TimelineCard({
  platform,
  time,
  title,
  description,
  xp,
  icon: Icon,
  index,
  activeIndex,
}: TimelineCardProps) {

  const isActive = activeIndex === index;
  const isCompleted = activeIndex > index;

  return (
    <motion.div
      className="relative pl-20"
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >

      {/* =====================================================
          NODE
      ===================================================== */}

      <motion.div
        className="
          absolute
          left-0
          top-0

          flex
          h-14
          w-14
          items-center
          justify-center

          rounded-full

          border

          bg-[#0B0A14]/90

          backdrop-blur-xl
        "
        animate={{
          borderColor:
            isActive
              ? "rgba(139,92,246,0.75)"
              : isCompleted
              ? "rgba(139,92,246,0.28)"
              : "rgba(255,255,255,0.10)",

          scale: isActive ? 1.12 : 1,

          boxShadow: isActive
            ? [
                "0 0 0 rgba(139,92,246,0)",
                "0 0 25px rgba(139,92,246,0.55)",
                "0 0 12px rgba(34,211,238,0.25)",
              ]
            : isCompleted
            ? "0 0 10px rgba(139,92,246,0.12)"
            : "0 0 0 rgba(139,92,246,0)",
        }}
        transition={{
          duration: isActive ? 0.7 : 0.35,
          ease: "easeOut",
        }}
      >

        <motion.div
          animate={{
            color: isActive
              ? "#C4B5FD"
              : isCompleted
              ? "#A78BFA"
              : "#A78BFA",
          }}
        >
          <Icon
            size={20}
            strokeWidth={1.5}
          />
        </motion.div>

      </motion.div>

      {/* =====================================================
          CARD
      ===================================================== */}

      <motion.div
        className="
          relative
          overflow-hidden

          rounded-3xl

          border

          bg-white/[0.025]

          p-6

          backdrop-blur-xl
        "
        animate={{
          y: isActive ? -4 : 0,

          borderColor:
            isActive
              ? "rgba(139,92,246,0.38)"
              : isCompleted
              ? "rgba(139,92,246,0.12)"
              : "rgba(255,255,255,0.08)",

          backgroundColor:
            isActive
              ? "rgba(139,92,246,0.055)"
              : "rgba(255,255,255,0.025)",

          boxShadow: isActive
            ? [
                "0 0 0 rgba(139,92,246,0)",
                "0 0 35px rgba(139,92,246,0.12)",
                "0 0 18px rgba(34,211,238,0.05)",
              ]
            : "0 0 0 rgba(139,92,246,0)",
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          borderColor: "rgba(139,92,246,0.24)",
          backgroundColor: "rgba(255,255,255,0.04)",
        }}
      >

        {/* =================================================
            ACTIVATION LIGHT
        ================================================= */}

        <motion.div
          className="
            pointer-events-none
            absolute
            inset-0

            bg-gradient-to-r
            from-violet-500/[0.10]
            via-transparent
            to-cyan-400/[0.04]
          "
          initial={{
            opacity: 0,
            x: "-100%",
          }}
          animate={
            isActive
              ? {
                  opacity: [0, 1, 0],
                  x: ["-100%", "0%", "100%"],
                }
              : {
                  opacity: 0,
                }
          }
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        />

        {/* =================================================
            TOP ROW
        ================================================= */}

        <div className="relative z-10 flex items-center justify-between gap-6">

          <div className="flex items-center gap-3">

            <span
              className="
                text-xs
                font-medium
                tracking-[0.28em]
                text-violet-300
              "
            >
              {platform}
            </span>

            <span className="text-zinc-600">
              •
            </span>

            <span className="text-sm text-zinc-500">
              {time}
            </span>

          </div>

          {/* XP */}
          <motion.span
            animate={{
              scale: isActive ? [1, 1.08, 1] : 1,

              borderColor: isActive
                ? "rgba(34,211,238,0.45)"
                : "rgba(34,211,238,0.20)",

              backgroundColor: isActive
                ? "rgba(34,211,238,0.09)"
                : "rgba(34,211,238,0.04)",

              boxShadow: isActive
                ? [
                    "0 0 0 rgba(34,211,238,0)",
                    "0 0 18px rgba(34,211,238,0.28)",
                    "0 0 0 rgba(34,211,238,0)",
                  ]
                : "0 0 0 rgba(34,211,238,0)",
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              relative
              z-10
              shrink-0

              rounded-full

              border

              px-4
              py-2

              text-sm
              font-medium

              text-cyan-300
            "
          >
            {xp}
          </motion.span>

        </div>

        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="relative z-10 mt-5">

          <motion.h3
            animate={{
              color: isActive
                ? "#FFFFFF"
                : "#F4F4F5",
            }}
            className="
              text-xl
              font-medium
            "
          >
            {title}
          </motion.h3>

          <p
            className="
              mt-2
              text-base
              leading-7
              text-zinc-500
            "
          >
            {description}
          </p>

        </div>

      </motion.div>

    </motion.div>
  );
}