"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="flex flex-col items-center -mt-10">

      <div className="flex gap-5">

        <Button variant="primary" className="group">
          Download
          <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>

        <Button variant="secondary">
          Learn More
        </Button>

      </div>

      <div className="mt-14 flex items-center gap-6">

        <div className="h-px w-32 bg-white/10" />

        <Sparkles
          size={16}
          className="text-violet-400"
        />

        <div className="h-px w-32 bg-white/10" />

      </div>

      <p className="mt-8 text-sm uppercase tracking-[0.7em] text-zinc-400">
        XP THAT MATTERS IRL
      </p>

    </div>
  );
}