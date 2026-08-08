"use client";

import { motion } from "framer-motion";

export default function GuildPreview() {
  return (
    <div className="relative min-h-[170px]">

      <div className="flex items-center">

        {[0, 1, 2, 3, 4].map((item) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: item * 0.08,
            }}
            className="
              -ml-2
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border-2
              border-[#0b0913]
              bg-gradient-to-br
              from-violet-400
              to-cyan-400
              text-[10px]
              text-white
              first:ml-0
            "
          >
            {String.fromCharCode(65 + item)}
          </motion.div>
        ))}

        <div
          className="
            ml-4
            rounded-full
            border
            border-white/[0.08]
            bg-white/[0.03]
            px-3
            py-1.5
            text-[10px]
            text-zinc-400
          "
        >
          +128 members
        </div>

      </div>

      <div className="mt-8">

        <div className="flex items-end justify-between">

          <div>
            <p className="text-sm text-white">
              Kindlers
            </p>

            <p className="mt-1 text-xs text-zinc-500">
              Community XP this week
            </p>
          </div>

          <span className="text-lg font-light text-cyan-300">
            84.2K
          </span>

        </div>

        <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/5">

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "78%" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
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
  );
}