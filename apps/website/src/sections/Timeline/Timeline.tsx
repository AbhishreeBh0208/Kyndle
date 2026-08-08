"use client";

import { useEffect, useState } from "react";
import {
  Trophy,
  Gamepad2,
  Users,
  Leaf,
} from "lucide-react";

import Container from "@/components/layout/Container";
import TimelineConnector from "./TimelineConnector";
import TimelineCard from "./TimelineCard";

const events = [
  {
    platform: "STEAM",
    time: "2h ago",
    title: "Achievement unlocked",
    description: "Completed a new milestone.",
    xp: "+250 XP",
    icon: Trophy,
  },
  {
    platform: "RIOT",
    time: "5h ago",
    title: "New game activity",
    description: "Your Valorant progress was updated.",
    xp: "+120 XP",
    icon: Gamepad2,
  },
  {
    platform: "KYNDLE",
    time: "Yesterday",
    title: "Friend joined your guild",
    description: "Nova joined your gaming circle.",
    xp: "+80 XP",
    icon: Users,
  },
  {
    platform: "IMPACT",
    time: "Yesterday",
    title: "Impact milestone reached",
    description:
      "Your XP contributed toward a new impact milestone.",
    xp: "+500 XP",
    icon: Leaf,
  },
];

const STEP_DURATION = 2200;

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const advance = () => {
      setActiveIndex((current) => {
        if (current >= events.length - 1) {
          // Hold the completed timeline briefly
          timeout = setTimeout(() => {
            setActiveIndex(-1);
          }, 1400);

          return current;
        }

        return current + 1;
      });
    };

    // Initial delay before the first activation
    timeout = setTimeout(advance, 900);

    const interval = setInterval(advance, STEP_DURATION);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative py-24 lg:py-32" id="timeline">
      <Container>

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-16 max-w-2xl">

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
            YOUR JOURNEY
          </span>

          <h2
            className="
              mt-5
              text-5xl
              font-extralight
              tracking-tight
              text-white
              lg:text-6xl
            "
          >
            Every move
            <br />

            <span
              className="
                bg-gradient-to-r
                from-cyan-200
                via-white
                to-violet-300
                bg-clip-text
                text-transparent
              "
            >
              becomes progress.
            </span>
          </h2>

        </div>

        {/* =====================================================
            TIMELINE
        ===================================================== */}

        <div className="relative">

          <TimelineConnector
            activeIndex={activeIndex}
            total={events.length}
          />

          <div className="space-y-6">

            {events.map((event, index) => (
              <TimelineCard
                key={event.title}
                {...event}
                index={index}
                activeIndex={activeIndex}
              />
            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}