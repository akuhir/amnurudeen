"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { skills } from "@/data/skills";

const categoryLabel = {
  language: "Language",
  framework: "Framework",
  tool: "Tool",
  ai: "AI Workflow",
};

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="03 — Toolkit"
          title="Skills & tools"
          description="The languages, frameworks, and AI-assisted tools I use to design, build, and ship products."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 8) * 0.05 }}
              className="group glass flex flex-col gap-2 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-(--color-border-hover)"
            >
              <span className="font-mono text-[10px] uppercase tracking-wider text-ink-subtle">
                {categoryLabel[skill.category]}
              </span>
              <span className="text-sm font-medium text-ink transition-colors group-hover:text-gradient">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
