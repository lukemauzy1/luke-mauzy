"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

function MarkerHighlight({
  children,
  delay = 0.3,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.span
      initial={{ backgroundSize: "0% 0.45em" }}
      animate={{ backgroundSize: "100% 0.45em" }}
      transition={{ duration: 1.1, ease: "easeInOut", delay }}
      className="
        inline
        bg-[linear-gradient(to_right,rgba(229,114,0,0.32),rgba(229,114,0,0.32))]
        bg-no-repeat
        [background-position:0_88%]
        text-[#f8f5f0]
        [box-decoration-break:clone]
        [-webkit-box-decoration-break:clone]
        px-[0.04em]
      "
    >
      {children}
    </motion.span>
  );
}

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <section className="mb-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#e57200]">
          About
        </p>

        <h1 className="mb-6 max-w-3xl text-5xl font-bold leading-[1.15] tracking-tight text-[#f8f5f0]">
          Third-year{" "}
          <MarkerHighlight delay={0.15}>
            UVA electrical engineering
          </MarkerHighlight>{" "}
          student building at the intersection of{" "}
          <MarkerHighlight delay={0.55}>
            hardware, analog circuits, and embedded systems.
          </MarkerHighlight>
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-[#b8c2cf]">
          From designing and fabricating PCBs in KiCad to programming
          microcontrollers in C, I work across the full hardware stack. My
          projects have taken me through boost converter design, analog signal
          processing, waveform generation with 555 timers and op-amps, and
          embedded game development on the Raspberry Pi Pico. I care about
          building systems that are technically rigorous and work in the real
          world, not just in simulation.
        </p>
      </section>

      <section className="mb-16 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-[#22364d] bg-[#132235] p-6">
          <h2 className="mb-4 text-xl font-semibold text-[#f8f5f0]">
            What I work on
          </h2>
          <p className="leading-7 text-[#b8c2cf]">
            My projects span PCB design and fabrication, analog circuit design,
            power electronics, and embedded firmware. I have built a DC-DC boost
            converter from analytical calculations through to a manufactured and
            tested PCB, designed analog audio processing circuits with
            Sallen-Key filters and peak detectors, and developed waveform
            generation circuits using 555 timers and op-amp summing networks.
          </p>
        </div>

        <div className="rounded-2xl border border-[#22364d] bg-[#132235] p-6">
          <h2 className="mb-4 text-xl font-semibold text-[#f8f5f0]">
            What interests me
          </h2>
          <p className="leading-7 text-[#b8c2cf]">
            I am drawn to the signal level: how analog circuits behave in
            practice versus simulation, how switching converters manage energy
            through reactive components, and how microcontrollers interact with
            hardware in real time. I enjoy the full cycle from schematic to
            soldered board to oscilloscope verification.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold text-[#f8f5f0]">
          Skills and tools
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[#22364d] bg-[#132235] p-6">
            <h3 className="mb-4 text-lg font-semibold text-[#f8f5f0]">
              Software
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-[#b8c2cf]">
              <li>Python</li>
              <li>Embedded C / C++</li>
              <li>TypeScript</li>
              <li>React / Next.js</li>
              <li>Git / GitHub</li>
              <li>MATLAB</li>
              <li>SQL</li>
              <li>Fusion 360</li>
              <li>KiCad</li>
              <li>SPICE Simulation</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[#22364d] bg-[#132235] p-6">
            <h3 className="mb-4 text-lg font-semibold text-[#f8f5f0]">
              Hardware
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-[#b8c2cf]">
              <li>PCB Design</li>
              <li>Soldering</li>
              <li>KiCad</li>
              <li>Arduino / ESP32</li>
              <li>Oscilloscopes</li>
              <li>3D Printing</li>
              <li>Raspberry Pi</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16 rounded-2xl border border-[#22364d] border-l-4 border-l-[#e57200] bg-[#132235] p-8">
        <h2 className="mb-4 text-2xl font-semibold text-[#f8f5f0]">
          Current focus
        </h2>
        <p className="max-w-3xl leading-8 text-[#b8c2cf]">
          I am currently developing a handheld Pong game built around the
          Raspberry Pi Pico, driving a 240x240 TFT display with joystick input
          and a compact custom PCB. The focus is on real-time embedded
          programming, efficient microcontroller resource usage, and designing a
          board layout that integrates everything into a portable form factor.
        </p>
      </section>

      <section className="rounded-2xl border border-[#22364d] bg-[#132235] p-8">
        <h2 className="mb-4 text-2xl font-semibold text-[#f8f5f0]">
          Contact
        </h2>
        <p className="mb-6 max-w-2xl leading-8 text-[#b8c2cf]">
          If you want to talk about embedded systems, hardware, or how the Hoos
          are winning March Madness this year, feel free to reach out.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:lmauzy44@gmail.com"
            className="rounded-xl bg-[#e57200] px-5 py-3 font-medium text-white transition hover:bg-[#f28c28]"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/luke-mauzy-80b922326/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-[#22364d] px-5 py-3 font-medium text-[#f8f5f0] transition hover:border-[#e57200] hover:text-[#e57200]"
          >
            LinkedIn
          </a>
          <a
            href="/Luke_Mauzy_Resume.pdf"
            download="Luke_Mauzy_Resume.pdf"
            className="rounded-xl border border-[#22364d] px-5 py-3 font-medium text-[#f8f5f0] transition hover:border-[#e57200] hover:text-[#e57200]"
          >
            Resume ↓
          </a>
        </div>
      </section>
    </main>
  );
}