"use client";

import { MarkerHighlight } from "@/components/AnimatedHighlight";

export default function HeroHeading() {
  return (
    <h1 className="max-w-3xl text-5xl font-bold tracking-tight leading-[1.1] text-text sm:text-6xl">
      I work where the code{" "}
      <span className="text-text">meets</span>{" "}
      <MarkerHighlight>the copper.</MarkerHighlight>
    </h1>
  );
}
