"use client";

import Container from "@/components/layout/Container";
import StepCard from "./StepCard";
import { motion } from "framer-motion";
import {
  Gamepad2,
  Layers3,
  Sprout,
} from "lucide-react";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="
        relative pt-24 pb-12 lg:pt-28 lg:pb-16
      "
    >
      {/* Ambient background */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-500/[0.035]
          blur-[140px]
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
              border-violet-400/20
              bg-violet-400/[0.05]
              px-5
              py-2
              text-xs
              uppercase
              tracking-[0.35em]
              text-violet-300
            "
          >
            HOW IT WORKS
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
            Play normally.
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
        Make it matter.
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
            Kyndle works quietly in the background,
            turning the things you already do as a gamer
            into one connected identity and measurable impact.
          </p>

        </motion.div>


        {/* Steps */}

        <div className="mt-24 grid gap-16 lg:grid-cols-3 lg:gap-10">

          {/* Step 1 */}

          <StepCard
            number="01"
            label="CONNECT"
            title="Bring your games together."
            description="Connect the platforms you already use. Kyndle creates one identity across your entire gaming ecosystem."
            delay={0}
          >
            <div
              className="
                flex
                h-32
                items-center
                justify-center
                rounded-2xl
                border
                border-white/[0.07]
                bg-white/[0.02]
              "
            >

              <div className="flex items-center gap-3">

                {[
                  "STEAM",
                  "EPIC",
                  "XBOX",
                ].map((platform) => (
                  <div
                    key={platform}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-white/[0.03]
                      text-[10px]
                      text-zinc-300
                    "
                  >
                    {platform.slice(0, 2)}
                  </div>
                ))}

              </div>

            </div>
          </StepCard>


          {/* Step 2 */}

          <StepCard
            number="02"
            label="PLAY"
            title="Build your gaming identity."
            description="Your games, achievements and progress continuously shape your Kyndle profile and XP."
            delay={0.15}
          >
            <div
              className="
                flex
                h-32
                items-center
                justify-center
                rounded-2xl
                border
                border-white/[0.07]
                bg-white/[0.02]
              "
            >

              <div className="text-center">

                <Gamepad2
                  size={28}
                  strokeWidth={1.2}
                  className="mx-auto text-violet-300"
                />

                <p className="mt-4 text-2xl font-light text-white">
                  +2,400 XP
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  earned this month
                </p>

              </div>

            </div>
          </StepCard>


          {/* Step 3 */}

          <StepCard
            number="03"
            label="IMPACT"
            title="Turn XP into real change."
            description="Your progress contributes toward real-world initiatives, making every achievement count beyond the screen."
            delay={0.3}
            showConnector={false}
          >
            <div
              className="
                relative
                flex
                h-32
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.07]
                bg-white/[0.02]
              "
            >

              <div
                className="
                  absolute
                  h-32
                  w-32
                  rounded-full
                  bg-cyan-400/10
                  blur-[50px]
                "
              />

              <div className="relative flex items-center gap-5">

                <div className="text-center">

                  <p className="text-2xl font-light text-white">
                    12
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-widest text-zinc-400">
                    Trees
                  </p>

                </div>

                <div className="h-8 w-px bg-white/[0.08]" />

                <Sprout
                  size={30}
                  strokeWidth={1.2}
                  className="text-cyan-300"
                />

                <div className="h-8 w-px bg-white/[0.08]" />

                <div className="text-center">

                  <p className="text-2xl font-light text-white">
                    840
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-widest text-zinc-400">
                    Impact XP
                  </p>

                </div>

              </div>

            </div>
          </StepCard>

        </div>

      </Container>
    </section>
  );
}