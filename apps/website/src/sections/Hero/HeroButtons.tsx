"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="-mt-20 z-40 flex items-center gap-6">

      <Button
        variant="primary"
        size="lg"
        className="group"
      >
        Download

        <ArrowRight
          className="
          ml-2
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
        />

      </Button>

      <Button
        variant="secondary"
        size="lg"
      >
        Learn More
      </Button>

    </div>
  );
}