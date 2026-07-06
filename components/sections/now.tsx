"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { timeline } from "@/data/timeline";

export function Now() {
  return (
    <section id="now" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="04 — Right now"
          title="Currently building"
          description="What I'm focused on at the moment."
        />

        <div className="relative max-w-2xl">
          <div className="absolute bottom-0 left-[9px] top-2 w-px bg-linear-to-b from-sky-400/40 via-emerald-400/40 to-transparent" />

          <div className="flex flex-col gap-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-5 pl-0"
              >
                <div className="relative z-10 mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center">
                  <span className="absolute inline-flex h-2.5 w-2.5 animate-ping rounded-full bg-emerald-400/60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-linear-to-br from-sky-400 to-emerald-400" />
                </div>
                <div className="glass -mt-1 flex-1 rounded-xl p-5">
                  <h3 className="font-medium text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                    {item.description}
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
