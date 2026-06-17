"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

interface ZoomImage {
  src: string;
  alt: string;
}

interface PictureConfig {
  scaleEnd: number;
  innerStyle: React.CSSProperties;
}

const PICTURES: PictureConfig[] = [
  { scaleEnd: 4, innerStyle: { width: "25vw", height: "25vh" } },
  { scaleEnd: 5, innerStyle: { width: "35vw", height: "30vh", top: "-30vh", left: "5vw" } },
  { scaleEnd: 6, innerStyle: { width: "20vw", height: "45vh", top: "-10vh", left: "-25vw" } },
  { scaleEnd: 5, innerStyle: { width: "25vw", height: "25vh", top: "27.5vh", left: "27.5vw" } },
  { scaleEnd: 6, innerStyle: { width: "25vw", height: "25vh", top: "27.5vh", left: "-22.5vw" } },
  { scaleEnd: 8, innerStyle: { width: "20vw", height: "25vh", top: "22.5vh", left: "27.5vw" } },
  { scaleEnd: 9, innerStyle: { width: "30vw", height: "25vh", top: "-30vh", left: "27.5vw" } },
];

function PictureItem({
  scrollProgress,
  image,
  config,
  priority,
}: {
  scrollProgress: MotionValue<number>;
  image: ZoomImage;
  config: PictureConfig;
  priority: boolean;
}) {
  const scale = useTransform(scrollProgress, [0, 1], [1, config.scaleEnd]);

  return (
    <motion.div
      style={{ scale }}
      className="absolute top-0 left-0 flex h-full w-full items-center justify-center"
    >
      <div className="relative" style={config.innerStyle}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover"
          priority={priority}
        />
      </div>
    </motion.div>
  );
}

export function ZoomParallax({ images }: { images: ZoomImage[] }) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen overflow-hidden">
        {images.slice(0, 7).map((image, i) => (
          <PictureItem
            key={i}
            scrollProgress={scrollYProgress}
            image={image}
            config={PICTURES[i]}
            priority={i === 0}
          />
        ))}
      </div>
    </div>
  );
}
