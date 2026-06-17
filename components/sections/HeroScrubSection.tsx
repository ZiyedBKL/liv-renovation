"use client";

import { HeroScrub } from "@/components/ui/hero-scrub";

const FRAME_COUNT = 2;

export function HeroScrubSection() {
  return (
    <HeroScrub
      frameCount={FRAME_COUNT}
      frameUrl={(i) =>
        `/hero-frames/peinture-${String(i + 1).padStart(4, "0")}.webp`
      }
      titleTop="AVANT"
      titleBottom="APRÈS"
      accentClassName="text-primary"
    />
  );
}
