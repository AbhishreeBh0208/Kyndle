"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Leaf,
  Recycle,
  Sun,
  Zap,
} from "lucide-react";

import ImpactMetric from "./ImpactMetric";

export default function XPConversion() {
  return (
    <div className="relative">

      {/* Ambient glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-500/[0.06]
          blur-[120px]
        "
      />

      {/* XP Conversion Panel */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.97,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          margin: "-100px",
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/[0.08]
          bg-[#0a0811]/80
          p-6
          shadow-[0_30px_100px_rgba(0,0,0,.25)]
          backdrop-blur-2xl
          md:p-8
        "
      >

        {/* Top label */}

        <div className="flex items-center justify-between">

          <span
            className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-cyan-300/80
            "
          >
            XP CONVERSION
          </span>

          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-violet-400/20
              bg-violet-400/[0.05]
              px-3
              py-1.5
              text-xs
              text-violet-300
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            LIVE
          </div>

        </div>


        {/* XP */}

        <div className="mt-10 text-center">

          <p
            className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-zinc-500
            "
          >
            Available XP
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="
              mt-3
              text-6xl
              font-extralight
              tracking-tight
              text-white
              md:text-7xl
            "
          >
            18,420
          </motion.p>

          <p className="mt-2 text-sm text-zinc-500">
            XP earned through your gaming activity
          </p>

        </div>


        {/* Conversion line */}

        <div className="relative mx-auto my-10 max-w-md">

          <div className="h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />

          <motion.div
  initial={{
    left: "-15%",
  }}
  animate={{
    left: ["-15%", "115%"],
    opacity: [0, 1, 1, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    repeatDelay: 1,
    ease: "easeInOut",
  }}
  className="
    absolute
    top-1/2
    h-1
    w-24
    -translate-y-1/2
    rounded-full
    bg-gradient-to-r
    from-transparent
    via-cyan-300
    to-transparent
    blur-[2px]
  "
/>

        </div>


        {/* Conversion label */}

        <div className="mb-7 text-center">

          <div className="inline-flex items-center gap-2">

            <Zap
              size={15}
              strokeWidth={1.5}
              className="text-violet-300"
            />

            <span
              className="
                text-xs
                uppercase
                tracking-[0.25em]
                text-zinc-400
              "
            >
              XP converted into impact
            </span>

          </div>

        </div>


        {/* Impact metrics */}

        <div className="grid gap-3 sm:grid-cols-3">

          <ImpactMetric
            icon={<Leaf size={19} strokeWidth={1.4} />}
            value="12"
            label="Trees"
            description="Equivalent impact supported through tree planting."
            delay={0.15}
          />

          <ImpactMetric
            icon={<Recycle size={19} strokeWidth={1.4} />}
            value="840 kg"
            label="Plastic removed"
            description="Waste removal supported through the impact pool."
            delay={0.25}
          />

          <ImpactMetric
            icon={<Sun size={19} strokeWidth={1.4} />}
            value="3"
            label="Solar kits"
            description="Clean-energy initiatives supported by XP."
            delay={0.35}
          />

        </div>

      </motion.div>

    </div>
  );
}