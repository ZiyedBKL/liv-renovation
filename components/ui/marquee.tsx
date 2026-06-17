"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
  durationSeconds?: number;
  className?: string;
}

export function Marquee({
  children,
  reverse = false,
  pauseOnHover = false,
  durationSeconds = 40,
  className,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex w-full overflow-hidden [--gap:2rem]",
        className
      )}
      style={{ ["--duration" as string]: `${durationSeconds}s` }}
    >
      <div
        className={cn(
          "flex shrink-0 items-center gap-[var(--gap)] [animation:marquee_var(--duration)_linear_infinite]",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
        {children}
        {children}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% / 3 - var(--gap) / 3)); }
        }
      `}</style>
    </div>
  );
}
