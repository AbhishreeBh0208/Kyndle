"use client";

import Container from "@/components/layout/Container";
import FeatureCard from "./FeatureCard";
import ProfilePreview from "./ProfilePreview";
import XPPreview from "./XPPreview";
import FriendsPreview from "./FriendsPreview";
import GuildPreview from "./GuildPreview";

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-24 lg:py-8"
    >
      <Container>

        {/* Heading */}

        <div className="max-w-3xl">

          <span
            className="
              inline-flex
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/5
              px-5
              py-2
              text-xs
              uppercase
              tracking-[0.35em]
              text-cyan-300
            "
          >
            THE KYNDLE ECOSYSTEM
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
                One identity.
            </span>

            <br />

            <span className="text-white">
                Endless possibilities.
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
            Your games, achievements, friends and impact —
            brought together into one living ecosystem.
          </p>

        </div>

        {/* Bento */}

        <div className="mt-20 grid gap-5 lg:grid-cols-2">

          {/* Large */}

          <FeatureCard
            eyebrow="01 YOUR IDENTITY"
            title="Universal Gaming Profile"
            description="One profile that grows with every game you play, every achievement you unlock and every platform you connect."
            className="lg:row-span-2"
          >
            <ProfilePreview />
          </FeatureCard>

          {/* XP */}

          <FeatureCard
            eyebrow="02 YOUR PROGRESS"
            title="XP That Matters"
            description="Turn your gaming progress into measurable real-world impact."
          >
            <XPPreview />
          </FeatureCard>

          {/* Friends */}

          <FeatureCard
            eyebrow="03 YOUR PEOPLE"
            title="One Social Layer"
            description="See your friends, their games and their progress without jumping between platforms."
          >
            <FriendsPreview />
          </FeatureCard>

          {/* Guild */}

          <FeatureCard
            eyebrow="04 YOUR COMMUNITY"
            title="Guilds With Purpose"
            description="Build communities around games, goals and real-world challenges."
            className="lg:col-span-2"
          >
            <GuildPreview />
          </FeatureCard>

        </div>

      </Container>
    </section>
  );
}