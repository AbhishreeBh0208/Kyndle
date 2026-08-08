"use client";

import Container from "@/components/layout/Container";
import Network from "./Network";

export default function WhoWeAre() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 lg:py-8"
    >
      <Container>

        <div className="grid lg:grid-cols-2 gap-28 items-center">

          {/* LEFT */}

          <div>

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
                tracking-[0.35em]
                uppercase

                text-violet-300
              "
            >
              WHY KYNDLE
            </span>

            <h2
              className="
                mt-8

                text-6xl

                lg:text-7xl

                font-extralight

                leading-none

                tracking-tight
              "
            >
              Gaming,
              <br />
              Reimagined.
            </h2>

            <p
              className="
                mt-10

                max-w-xl

                text-lg

                leading-9

                text-zinc-400
              "
            >
              Gaming has become fragmented.

              Every launcher tracks your friends,
              achievements and progress separately.

              Kyndle brings every platform together into one
              evolving identity while turning your gaming
              journey into measurable real-world impact.
            </p>

            <div className="mt-16 space-y-4">

              <h3 className="text-3xl font-light">
                One Profile.
              </h3>

              <h3 className="text-3xl font-light">
                Every Platform.
              </h3>

              <h3 className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-3xl font-light text-transparent">
                Real Impact.
              </h3>

            </div>

          </div>

          {/* RIGHT */}

          <Network />

        </div>

      </Container>
    </section>
  );
}