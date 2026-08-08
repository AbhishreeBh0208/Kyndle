"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroActions() {
  return (
    <div
      className="
        absolute
        left-1/2
        top-[70%]
        z-30
        -translate-x-1/2
      "
    >
      {/* =====================================================
          CTA BUTTONS
      ===================================================== */}

<div className="flex items-center justify-center gap-4">

  {/* Download */}
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="
      inline-flex
      h-14
      items-center
      gap-3
      rounded-full
      bg-gradient-to-r
      from-violet-500
      to-cyan-400
      px-8
      text-lg
      font-medium
      text-white
    "
  >
    Download

  <ArrowRight size={18} />
  </motion.button>


  {/* Learn More */}
  <Link href="#how-it-works">
    <motion.button
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="
        inline-flex
        h-14
        items-center
        justify-center

        rounded-full

        border
        border-white/10

        bg-white/[0.035]

        px-8

        text-lg
        font-medium
        text-white

        backdrop-blur-md

        transition-all
        duration-300

        hover:border-white/20
        hover:bg-white/[0.07]
      "
    >
      Learn More
    </motion.button>
  </Link>

</div>


      {/* =====================================================
          DIVIDER
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.8,
        }}
        className="
          mt-16
          flex
          items-center
          justify-center
          gap-7
        "
      >
        <div
          className="
            h-px
            w-40
            bg-gradient-to-r
            from-transparent
            to-white/15
          "
        />

        <div
          className="
            text-xl
            text-violet-300
            drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]
          "
        >
          ✧
        </div>

        <div
          className="
            h-px
            w-40
            bg-gradient-to-l
            from-transparent
            to-white/15
          "
        />
      </motion.div>

      {/* =====================================================
          TAGLINE
      ===================================================== */}

      <motion.p
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
        className="
          mt-8
          text-center

          whitespace-nowrap

          text-sm
          md:text-base

          font-light

          tracking-[0.48em]

          text-white/65
        "
      >
        XP THAT MATTERS IRL
      </motion.p>
    </div>
  );
}