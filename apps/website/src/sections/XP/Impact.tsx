"use client";

import { motion } from "framer-motion";
import { ArrowRight, Gamepad2 } from "lucide-react";

import Container from "@/components/layout/Container";
import XPConversion from "./XPConversion";

export default function Impact() {
  return (
    <section
      id="impact"
      className="
        relative
        overflow-hidden
        py-20
        lg:py-20
      "
    >

      {/* Background glow */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-15%]
          top-1/2
          h-[600px]
          w-[600px]
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.025]
          blur-[150px]
        "
      />

      <Container>

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="max-w-3xl"
        >

          <span
            className="
              inline-flex
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/[0.05]
              px-5
              py-2
              text-xs
              uppercase
              tracking-[0.35em]
              text-cyan-300
            "
          >
            REAL-WORLD IMPACT
          </span>

          <h2
            className="
              mt-8
              text-5xl
              font-extralight
              leading-[1.05]
              tracking-tight
              md:text-6xl
              lg:text-7xl
            "
          >
            <span className="text-white">
              Your XP.
            </span>

            <br />

            <span
              className="
                bg-gradient-to-r
                from-cyan-200
                via-violet-200
                to-purple-300
                bg-clip-text
                text-transparent
              "
            >
              Real impact.
            </span>
          </h2>

          <p
            className="
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-zinc-400
            "
          >
            The XP you earn while gaming doesn't have to
            disappear when you close the game. Kyndle
            connects your progress to initiatives that create
            measurable change in the real world.
          </p>

        </motion.div>


        {/* How the conversion works */}

        <div className="mt-20 grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          {/* Explanation */}

          <div>

            <div className="space-y-10">

              {/* Step 1 */}

              <div className="flex gap-5">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-violet-400/20
                    bg-violet-400/[0.05]
                    text-xs
                    text-violet-300
                  "
                >
                  01
                </div>

                <div>

                  <h3 className="text-xl font-light text-white">
                    Earn XP
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    Play games, complete achievements and
                    participate in the Kyndle ecosystem.
                  </p>

                </div>

              </div>


              {/* Step 2 */}

              <div className="flex gap-5">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-violet-400/20
                    bg-violet-400/[0.05]
                    text-xs
                    text-violet-300
                  "
                >
                  02
                </div>

                <div>

                  <h3 className="text-xl font-light text-white">
                    XP gains impact value
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    Your accumulated XP contributes toward
                    Kyndle's real-world impact pool.
                  </p>

                </div>

              </div>


              {/* Step 3 */}

              <div className="flex gap-5">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-cyan-400/20
                    bg-cyan-400/[0.05]
                    text-xs
                    text-cyan-300
                  "
                >
                  03
                </div>

                <div>

                  <h3 className="text-xl font-light text-white">
                    Choose the impact
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    Support initiatives such as tree planting,
                    waste removal and renewable energy.
                  </p>

                </div>

              </div>

            </div>


            {/* Small CTA */}

            <div className="mt-12">

              <button
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  text-sm
                  text-zinc-300
                  transition-colors
                  hover:text-white
                "
              >
                See how impact works

                <ArrowRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </button>

            </div>

          </div>


          {/* Conversion UI */}

          <XPConversion />

        </div>

      </Container>

    </section>
  );
}