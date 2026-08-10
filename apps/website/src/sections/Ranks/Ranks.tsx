"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Container from "@/components/layout/Container";
import RankColumn from "./RankColumn";

const ranks = [
  {
    name: "Spark",
    icon: "/ranks/spark.png",
    xp: 1000,
    height: 90,
  },
  {
    name: "Igniter",
    icon: "/ranks/igniter.png",
    xp: 1250,
    height: 140,
  },
  {
    name: "Kindler",
    icon: "/ranks/kindler.png",
    xp: 1500,
    height: 220,
  },
  {
    name: "Flare",
    icon: "/ranks/flare.png",
    xp: 2000,
    height: 280,
  },
  {
    name: "Blaze",
    icon: "/ranks/blaze.png",
    xp: 2500,
    height: 340,
  },
  {
    name: "Inferno",
    icon: "/ranks/inferno.png",
    xp: 3000,
    height: 400,
  },
];

const XP_DURATION = 1500;
const RANK_PAUSE = 900;

export default function Ranks() {
  const [activeRank, setActiveRank] = useState(0);
  const [xp, setXp] = useState(0);
  const [showGain, setShowGain] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    let mounted = true;

    const runRankSequence = async () => {
      // Reset animation
      setXp(0);
      setActiveRank(0);
      setShowGain(false);

      await wait(700);

      for (let i = 0; i < ranks.length; i++) {
        if (!mounted) return;

        const targetXP = ranks[i].xp;

        // Start XP animation
        setShowGain(true);

        await animateXP(
          0,
          targetXP,
          XP_DURATION,
          (value) => {
            if (mounted) {
              setXp(value);
            }
          }
        );

        if (!mounted) return;

        // Hold completed XP
        await wait(500);

        setShowGain(false);

        // Move to next rank
        if (i < ranks.length - 1) {
          await wait(RANK_PAUSE);

          if (!mounted) return;

          setActiveRank(i + 1);
          setXp(0);

          await wait(600);
        }
      }

      if (!mounted) return;

      // Hold Inferno
      await wait(2500);

      if (!mounted) return;

      // Restart entire sequence
      setCycle((value) => value + 1);
    };

    runRankSequence();

    return () => {
      mounted = false;
    };
  }, [cycle]);

  return (
    <section
      id="ranks"
      className="
        relative
        overflow-hidden
        py-28
        lg:py-20
      "
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2

          h-[750px]
          w-[1100px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-violet-500/[0.07]

          blur-[160px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-10%]
          top-[35%]

          h-[500px]
          w-[500px]

          rounded-full

          bg-cyan-400/[0.035]

          blur-[140px]
        "
      />

      <Container>
        {/* ===================================================
            MAIN GRID
        =================================================== */}

        <div
          className="
            grid
            items-center
            gap-20

            lg:grid-cols-[0.72fr_1.28fr]
          "
        >
          {/* =================================================
              LEFT — COPY
          ================================================= */}

          <div className="relative z-10">
            <span
              className="
                inline-flex
                rounded-full
                border
                border-violet-500/20
                bg-violet-500/5

                px-5
                py-2

                text-xs
                uppercase
                tracking-[0.35em]

                text-violet-300
              "
            >
              THE RANK SYSTEM
            </span>

            <h2
              className="
                mt-7

                text-5xl
                font-extralight
                leading-[1.05]
                tracking-tight

                text-white

                lg:text-7xl
              "
            >
              You&apos;re not
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-violet-300
                  via-cyan-200
                  to-violet-300

                  bg-clip-text

                  text-transparent
                "
              >
                just tracked,
              </span>

              <br />

              you&apos;re ranked.
            </h2>

            <p
              className="
                mt-8

                max-w-lg

                text-lg
                leading-8

                text-zinc-400
              "
            >
              Kyndle rewards consistent players who earn XP
              through their gaming activity and real-world
              contributions. The more you contribute, the
              higher you climb — unlocking exclusive rewards,
              progression and recognition along the way.
            </p>

            {/* =================================================
                LIVE XP
            ================================================= */}

            <div
              className="
                mt-12
                flex
                min-h-[82px]
                items-center
                gap-5
              "
            >
              <AnimatePresence mode="wait">
                {showGain && (
                  <motion.div
                    key={`${activeRank}-${cycle}`}
                    initial={{
                      opacity: 0,
                      y: 16,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -16,
                      scale: 0.95,
                    }}
                    className="
                      bg-gradient-to-r
                      from-cyan-300
                      via-white
                      to-violet-300

                      bg-clip-text
                      text-transparent

                      text-4xl
                      font-medium
                      tracking-tight
                    "
                  >
                    +{xp.toLocaleString()} XP
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.span
                key={activeRank}
                initial={{
                  opacity: 0,
                  x: -8,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                className="
                  text-base
                  uppercase
                  tracking-[0.25em]
                  text-zinc-300
                "
              >
                {ranks[activeRank].name}
              </motion.span>
            </div>
          </div>

          {/* =================================================
              RIGHT — RANK HIERARCHY
          ================================================= */}

          <div
            className="
              relative

              min-h-[680px]

              overflow-hidden

              rounded-[2rem]

              border
              border-white/[0.07]

              bg-white/[0.015]

              px-4
              pb-28
              pt-20

              backdrop-blur-xl

              sm:px-8
              lg:px-10
            "
          >
            {/* =================================================
                TOP AMBIENT GLOW
            ================================================= */}

            <motion.div
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

                bg-violet-500/[0.07]

                blur-[100px]
              "
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* =================================================
                BASELINE
            ================================================= */}

            <div
              className="
                absolute
                bottom-24
                left-6
                right-6

                h-px

                bg-gradient-to-r
                from-transparent
                via-white/[0.12]
                to-transparent

                lg:left-10
                lg:right-10
              "
            />

            {/* =================================================
                ACTIVE RANK FLOOR GLOW
            ================================================= */}

            <motion.div
              className="
                pointer-events-none

                absolute
                bottom-12

                h-32
                w-40

                rounded-full

                bg-violet-500/20

                blur-[55px]
              "
              animate={{
                left: `${4 + activeRank * 16}%`,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            {/* =================================================
                RANK COLUMNS
            ================================================= */}

            <div
              className="
                relative
                z-10

                flex
                h-[520px]

                items-end
                justify-between

                gap-2
                sm:gap-4
              "
            >
              {ranks.map((rank, index) => (
                <RankColumn
                  key={rank.name}
                  {...rank}
                  level={index + 1}
                  active={index === activeRank}
                  completed={index < activeRank}
                />
              ))}
            </div>

            {/* =================================================
                CURRENT RANK INDICATOR
            ================================================= */}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   HELPERS
========================================================= */

function wait(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}

function animateXP(
  from: number,
  to: number,
  duration: number,
  onUpdate: (value: number) => void
) {
  return new Promise<void>((resolve) => {
    const start = performance.now();

    const update = (now: number) => {
      const elapsed = now - start;

      const progress = Math.min(
        elapsed / duration,
        1
      );

      // Smooth ease-out
      const eased =
        1 - Math.pow(1 - progress, 3);

      const value = Math.round(
        from + (to - from) * eased
      );

      onUpdate(value);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        resolve();
      }
    };

    requestAnimationFrame(update);
  });
}