"use client";

import { motion } from "framer-motion";

const platforms = [
  "STEAM",
  "RIOT",
  "EPIC",
  "XBOX",
  "PLAYSTATION",
];

const stats = [
  {
    label: "Games",
    value: "42",
  },
  {
    label: "Achievements",
    value: "186",
  },
  {
    label: "XP",
    value: "18.4K",
  },
];

export default function ProfilePreview() {
  return (
    <div className="relative min-h-[520px]">

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
          bg-violet-500/[0.07]
          blur-[120px]
        "
      />

      {/* Profile window */}

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          relative
          mx-auto
          max-w-xl
          overflow-hidden
          rounded-2xl
          border
          border-white/[0.08]
          bg-[#0b0913]/80
          shadow-[0_30px_80px_rgba(0,0,0,.3)]
        "
      >

        {/* Header */}

        <div className="border-b border-white/[0.06] p-6">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-br
                  from-violet-500
                  to-cyan-400
                  text-lg
                  font-medium
                  text-white
                  shadow-[0_0_30px_rgba(139,92,246,.2)]
                "
              >
                K
              </div>

              <div>
                <p className="text-base font-medium text-white">
                  Your Gaming Identity
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  Level 42 · Kindler
                </p>
              </div>

            </div>

            <div
              className="
                rounded-full
                border
                border-violet-400/20
                bg-violet-400/[0.06]
                px-3
                py-1.5
                text-xs
                text-violet-300
              "
            >
              18,420 XP
            </div>

          </div>

        </div>


        {/* Connected platforms */}

        <div className="p-6">

          <div className="mb-4 flex items-center justify-between">

            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Connected Platforms
            </p>

            <span className="text-xs text-cyan-300">
              5 connected
            </span>

          </div>

          <div className="grid grid-cols-5 gap-2">

            {platforms.map((platform, index) => (
              <motion.div
                key={platform}
                initial={{
                  opacity: 0,
                  scale: 0.85,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                className="
                  flex
                  h-12
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/[0.07]
                  bg-white/[0.025]
                  px-2
                  text-[9px]
                  font-medium
                  tracking-wide
                  text-zinc-400
                "
              >
                {platform}
              </motion.div>
            ))}

          </div>


          {/* Progress */}

          <div className="mt-8">

            <div className="mb-3 flex items-center justify-between">

              <span className="text-sm text-zinc-400">
                Overall Progress
              </span>

              <span className="text-sm text-violet-300">
                72%
              </span>

            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.05]">

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "72%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: 0.3,
                }}
                className="
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  from-violet-500
                  to-cyan-400
                "
              />

            </div>

          </div>

        </div>


        {/* Stats */}

        <div className="grid grid-cols-3 border-t border-white/[0.06]">

          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                p-6
                text-center
                ${
                  index !== stats.length - 1
                    ? "border-r border-white/[0.06]"
                    : ""
                }
              `}
            >

              <p className="text-2xl font-light text-white">
                {stat.value}
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-zinc-600">
                {stat.label}
              </p>

            </div>
          ))}

        </div>


        {/* Recent activity */}

        <div className="border-t border-white/[0.06] p-6">

          <div className="mb-5 flex items-center justify-between">

            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Recent Activity
            </p>

            <span className="text-xs text-zinc-600">
              View all
            </span>

          </div>

          <div className="space-y-3">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-zinc-300">
                  Achievement unlocked
                </p>

                <p className="mt-1 text-xs text-zinc-600">
                  Epic Games · 2 hours ago
                </p>
              </div>

              <span className="text-sm text-cyan-300">
                +250 XP
              </span>

            </div>

            <div className="h-px bg-white/[0.04]" />

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-zinc-300">
                  New game added
                </p>

                <p className="mt-1 text-xs text-zinc-600">
                  Steam · Yesterday
                </p>
              </div>

              <span className="text-sm text-violet-300">
                +100 XP
              </span>

            </div>

          </div>

        </div>

      </motion.div>

    </div>
  );
}