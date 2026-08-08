"use client";

import { motion } from "framer-motion";

const friends = [
  {
    name: "Nova",
    game: "Valorant",
    status: "Online",
  },
  {
    name: "Rift",
    game: "Fortnite",
    status: "Online",
  },
  {
    name: "Echo",
    game: "Apex",
    status: "Away",
  },
];

export default function FriendsPreview() {
  return (
    <div className="space-y-2">

      {friends.map((friend, index) => (
        <motion.div
          key={friend.name}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.1,
          }}
          className="
            flex
            items-center
            justify-between
            rounded-xl
            border
            border-white/[0.06]
            bg-white/[0.025]
            px-4
            py-3
          "
        >
          <div className="flex items-center gap-3">

            <div className="relative h-8 w-8 rounded-full bg-gradient-to-br from-violet-400/70 to-cyan-400/70">

              <span
                className={`
                  absolute
                  bottom-0
                  right-0
                  h-2
                  w-2
                  rounded-full
                  border
                  border-[#0b0913]
                  ${
                    friend.status === "Online"
                      ? "bg-emerald-400"
                      : "bg-zinc-500"
                  }
                `}
              />

            </div>

            <div>
              <p className="text-sm text-white">
                {friend.name}
              </p>

              <p className="text-xs text-zinc-500">
                {friend.game}
              </p>
            </div>

          </div>

          <span className="text-xs text-zinc-500">
            {friend.status}
          </span>

        </motion.div>
      ))}

    </div>
  );
}