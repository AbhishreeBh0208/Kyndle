"use client";

import Link from "next/link";
import Image from "next/image";

const navigation = [
  {
    title: "Explore",
    links: [
      ["About", "#about"],
      ["Features", "#features"],
      ["How It Works", "#how-it-works"],
      ["Impact", "#impact"],
    ],
  },
  {
    title: "Progress",
    links: [
      ["Timeline", "#timeline"],
      ["Ranks", "#ranks"],
    ],
  },
  {
    title: "Community",
    links: [
      ["Discord", "#"],
      ["Leaderboard", "#"],
      ["Guilds", "#"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative px-4 pb-6 pt-16 sm:px-6 lg:px-8">
      {/* Subtle ambient glow */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-[300px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-gradient-to-r
          from-violet-500/[0.04]
          via-cyan-400/[0.035]
          to-violet-500/[0.04]
          blur-[120px]
        "
      />

      {/* Footer */}

      <div
        className="
          relative
          mx-auto
          max-w-8xl
          overflow-hidden
          rounded-[24px]
          border
          border-white/[0.07]
          bg-[#08070f]/90
        "
      >
        {/* Main footer content */}

        <div
          className="
            grid
            gap-12
            px-7
            py-10
            sm:px-10
            lg:grid-cols-[1.4fr_2fr]
            lg:px-12
            lg:py-12
          "
        >
          {/* Brand */}

          <div>
            <Link
              href="/"
              className="inline-flex items-center"
            >
              <Image
                src="/Kyndle Logo Gradient.svg"
                alt="Kyndle"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>

            <p
              className="
                mt-5
                max-w-xs
                text-sm
                leading-6
                text-zinc-500
              "
            >
              One gaming identity across every platform.
              Gaming, Reimagined.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-cyan-400
                  shadow-[0_0_8px_rgba(34,211,238,.7)]
                "
              />

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-zinc-600
                "
              >
                XP THAT MATTERS IRL
              </span>
            </div>
          </div>

          {/* Navigation */}

          <div
            className="
              grid
              grid-cols-2
              gap-8
              sm:grid-cols-3
            "
          >
            {navigation.map((group) => (
              <div key={group.title}>
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-zinc-600
                  "
                >
                  {group.title}
                </p>

                <div className="mt-4 space-y-2.5">
                  {group.links.map(([label, href]) => (
                    <Link
                      key={label}
                      href={href}
                      className="
                        block
                        w-fit
                        text-sm
                        text-zinc-400
                        transition-colors
                        duration-200
                        hover:text-white
                      "
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}

        <div
          className="
            flex
            flex-col
            gap-3
            border-t
            border-white/[0.06]
            px-7
            py-5
            text-[10px]
            text-zinc-600
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-10
            lg:px-12
          "
        >
          <span>
            © {new Date().getFullYear()} Kyndle. All rights reserved.
          </span>

          <div className="flex gap-5">
            <Link
              href="#"
              className="transition-colors hover:text-zinc-400"
            >
              Privacy
            </Link>

            <Link
              href="#"
              className="transition-colors hover:text-zinc-400"
            >
              Terms
            </Link>

            <Link
              href="#"
              className="transition-colors hover:text-zinc-400"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}