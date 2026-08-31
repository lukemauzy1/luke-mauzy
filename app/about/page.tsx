"use client";

import { FadeIn } from "@/components/Motion";
import GlassCard from "@/components/GlassCard";
import SkillPill from "@/components/SkillPill";
import GradientOrb from "@/components/GradientOrb";
import { MarkerHighlight } from "@/components/AnimatedHighlight";

const softwareSkills = [
  "Python", "Embedded C / C++", "TypeScript", "React / Next.js",
  "ROS2", "Git / GitHub", "MATLAB", "SQL", "Fusion 360",
  "KiCad", "SPICE Simulation", "VHDL",
];

const protocolSkills = ["I2C", "SPI", "UART", "ADC"];

const hardwareSkills = [
  "PCB Design", "Soldering", "Arduino / ESP32", "Oscilloscopes",
  "3D Printing", "Raspberry Pi", "GPIO",
];

export default function AboutPage() {
  return (
    <main className="relative">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-6 pt-32 pb-16">
        <GradientOrb
          className="pointer-events-none -top-40 left-1/4"
          size={600}
          color="#f97316"
        />

        <div className="relative mx-auto max-w-4xl">
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-dim px-4 py-1.5">
              <span className="text-xs font-medium text-accent-light">
                About
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-[1.15] tracking-tight text-text sm:text-5xl">
              Third-year{" "}
              <MarkerHighlight delay={0.15}>
                UVA electrical engineering
              </MarkerHighlight>{" "}
              student building at the intersection of{" "}
              <MarkerHighlight delay={0.55}>
                hardware, analog circuits, and embedded systems.
              </MarkerHighlight>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="max-w-2xl text-lg leading-relaxed text-text-secondary">
              From designing and fabricating PCBs in KiCad to programming
              microcontrollers in C, I work across the full hardware stack. My
              projects have taken me through boost converter design, analog signal
              processing, waveform generation with 555 timers and op-amps, and
              embedded game development on the Raspberry Pi Pico.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Cards ── */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl grid gap-4 md:grid-cols-2">
          <GlassCard>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border-subtle bg-bg text-accent">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
            </div>
            <h2 className="mb-3 text-lg font-semibold text-text">
              What I work on
            </h2>
            <p className="text-sm leading-relaxed text-text-secondary">
              PCB design and fabrication, analog circuit design, power electronics,
              and embedded firmware. I have built a DC-DC boost converter from
              analytical calculations through to a manufactured and tested PCB,
              designed analog audio processing circuits, and developed waveform
              generation circuits using 555 timers and op-amp summing networks.
            </p>
          </GlassCard>

          <GlassCard delay={0.05}>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border-subtle bg-bg text-accent">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
              </svg>
            </div>
            <h2 className="mb-3 text-lg font-semibold text-text">
              What interests me
            </h2>
            <p className="text-sm leading-relaxed text-text-secondary">
              I am drawn to the signal level: how analog circuits behave in
              practice versus simulation, how switching converters manage energy
              through reactive components, and how microcontrollers interact with
              hardware in real time. I enjoy the full cycle from schematic to
              soldered board to oscilloscope verification.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-text">
              Skills &amp; Tools
            </h2>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            <GlassCard>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                Software
              </h3>
              <div className="flex flex-wrap gap-2">
                {softwareSkills.map((skill, i) => (
                  <SkillPill key={skill} skill={skill} index={i} />
                ))}
              </div>
            </GlassCard>

            <GlassCard delay={0.05}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                Protocols
              </h3>
              <div className="flex flex-wrap gap-2">
                {protocolSkills.map((skill, i) => (
                  <SkillPill key={skill} skill={skill} index={i} />
                ))}
              </div>
            </GlassCard>

            <GlassCard delay={0.1}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                Hardware
              </h3>
              <div className="flex flex-wrap gap-2">
                {hardwareSkills.map((skill, i) => (
                  <SkillPill key={skill} skill={skill} index={i} />
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* ── Current Focus ── */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <GlassCard className="border-l-[3px] border-l-accent">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-dim text-accent">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <div>
                <h2 className="mb-2 text-lg font-semibold text-text">
                  Current Focus
                </h2>
                <p className="text-sm leading-relaxed text-text-secondary">
                  Developing a handheld Pong game built around the Raspberry Pi Pico,
                  driving a 240x240 TFT display with joystick input and a compact
                  custom PCB. The focus is on real-time embedded programming, efficient
                  microcontroller resource usage, and designing a board layout that
                  integrates everything into a portable form factor.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-4xl">
          <GlassCard>
            <h2 className="mb-3 text-lg font-semibold text-text">
              Get in Touch
            </h2>
            <p className="mb-6 max-w-xl text-sm leading-relaxed text-text-secondary">
              If you want to talk about embedded systems, hardware, or how the
              Hoos are winning March Madness this year, feel free to reach out.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:lmauzy44@gmail.com"
                className="rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/luke-mauzy-80b922326/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-border-subtle bg-bg-card px-5 py-2.5 text-sm font-semibold text-text-secondary transition-all hover:border-accent/30 hover:text-text"
              >
                LinkedIn
              </a>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}
