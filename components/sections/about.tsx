"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const pillars = [
  {
    icon: Code2,
    title: "Web & mobile apps",
    description:
      "I build responsive web platforms and Android applications end-to-end — from interface to backend.",
  },
  {
    icon: Sparkles,
    title: "AI-assisted development",
    description:
      "I pair modern tooling like Cursor and Claude Code with my own judgment to design and ship faster, without sacrificing quality.",
  },
  {
    icon: Rocket,
    title: "Practical, real value",
    description:
      "Every project I take on has to solve an actual problem for actual people — not just look good in a portfolio.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="01 — About"
          title="A self-driven developer who ships"
          description="I'm a full-stack developer who enjoys turning ideas into working software. My focus is simple: build things that are genuinely useful, and keep getting better at building them."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <p className="text-base leading-relaxed text-ink-muted">
              I got into development by wanting to fix problems I saw around
              me — communication gaps in my class, the hassle of tracking
              personal finances, the need for a shared space where a whole
              campus community could connect. That instinct is still what
              drives every project I start.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              I work across the stack, from interface design to database
              architecture, and I lean on AI-assisted workflows to move
              quickly while staying deliberate about code quality,
              performance, and the details that make a product feel
              trustworthy.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              I&apos;m continuously learning — new frameworks, better
              patterns, smarter ways to use AI in my workflow — because the
              tools change fast, and I want to keep building at the edge of
              what&apos;s possible.
            </p>
          </motion.div>

          <div className="grid gap-5">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group glass flex items-start gap-4 rounded-2xl p-6 transition-colors duration-300 hover:border-(--color-border-hover)"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-sky-400/15 to-emerald-400/15 ring-1 ring-inset ring-white/10">
                  <pillar.icon className="h-5 w-5 text-sky-300" />
                </div>
                <div>
                  <h3 className="font-medium text-ink">{pillar.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
