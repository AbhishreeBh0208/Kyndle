"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroActions() {
  return (
    <div className="flex flex-col items-center">
      {/* =====================================================
          CTA BUTTONS
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 18,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.35,
          ease: "easeOut",
        }}
        className="
          flex
          flex-col
          items-center
          justify-center
          gap-3

          sm:flex-row
          sm:gap-4
        "
      >
        {/* =================================================
            DOWNLOAD
        ================================================= */}

        <motion.button
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
            group

            inline-flex
            h-14
            w-full
            min-w-[190px]

            items-center
            justify-center
            gap-3

            rounded-full

            bg-gradient-to-r
            from-violet-500
            via-violet-400
            to-cyan-400

            px-7

            text-base
            font-medium
            text-white

            shadow-[0_0_30px_rgba(124,58,237,0.28)]

            transition-all
            duration-300

            hover:shadow-[0_0_45px_rgba(34,211,238,0.25)]

            sm:w-auto
            sm:min-w-[190px]
            sm:text-lg
          "
        >
          <span>Download Kyndle</span>

          <ArrowRight
            size={18}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </motion.button>

        {/* =================================================
            LEARN MORE
        ================================================= */}

        <Link
          href="#how-it-works"
          className="inline-flex"
        >
          <motion.button
            type="button"
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              group

              inline-flex
              h-14
              w-full
              min-w-[170px]

              items-center
              justify-center

              rounded-full

              border
              border-white/10

              bg-white/[0.035]

              px-7

              text-base
              font-medium
              text-white

              backdrop-blur-md

              transition-all
              duration-300

              hover:border-white/20
              hover:bg-white/[0.07]

              sm:w-auto
              sm:min-w-[170px]
              sm:text-lg
            "
          >
            <span>Learn More</span>
          </motion.button>
        </Link>
      </motion.div>

      {/* =====================================================
          DIVIDER
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scaleX: 0.7,
        }}
        animate={{
          opacity: 1,
          scaleX: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.8,
          ease: "easeOut",
        }}
        className="
          mt-10

          flex
          w-full
          max-w-[300px]

          items-center
          justify-center
          gap-5

          sm:mt-12
          sm:max-w-[360px]
          sm:gap-7
        "
      >
        <div
          className="
            h-px
            flex-1

            bg-gradient-to-r
            from-transparent
            to-white/15
          "
        />

        <motion.div
          animate={{
            opacity: [0.45, 1, 0.45],
            scale: [0.9, 1.08, 0.9],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            shrink-0

            text-lg
            text-violet-300

            drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]
          "
        >
          ✧
        </motion.div>

        <div
          className="
            h-px
            flex-1

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
          mt-6

          whitespace-nowrap

          text-[9px]
          font-light

          tracking-[0.35em]

          text-white/60

          sm:mt-7
          sm:text-xs
          sm:tracking-[0.48em]

          md:text-sm
        "
      >
        XP THAT MATTERS IRL
      </motion.p>
    </div>
  );
}