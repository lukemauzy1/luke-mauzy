"use client";

import { MarkerHighlight } from "@/components/AnimatedHighlight";

export default function HeroHeading() {
  return (
    <h1 className="mb-6 max-w-3xl text-5xl font-bold tracking-tight leading-tight">
      <MarkerHighlight>
        I work where the code meets the copper.
      </MarkerHighlight>
    </h1>
  );
}