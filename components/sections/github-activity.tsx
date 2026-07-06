"use client";

import { motion } from "framer-motion";
import { GithubIcon } from "@/components/ui/brand-icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/data/site";

// Deterministic pseudo-random activity levels (0-4) for a placeholder
// contribution graph — no live GitHub connection configured yet.
function generateActivity(weeks: number, days: number) {
  const grid: number[][] = [];
  let seed = 42;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  for (let w = 0; w < weeks; w++) {
    const week: number[] = [];
    for (let d = 0; d < days; d++) {
      const r = rand();
      week.push(r > 0.6 ? Math.floor(r * 5) % 5 : 0);
    }
    grid.push(week);
  }
  return grid;
}

const levelColors = [
  "bg-white/5",
  "bg-sky-400/25",
  "bg-sky-400/45",
  "bg-emerald-400/60",
  "bg-emerald-400/85",
];

export function GithubActivity() {
  const grid = generateActivity(30, 7);

  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="05 — Activity"
          title="GitHub contributions"
          description="A live contribution graph will appear here once connected. For now, here's a placeholder view."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-6 sm:p-8"
        >
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-ink-muted">
              <GithubIcon className="h-4 w-4" />
              <span className="font-mono text-sm">
                github.com/{site.social.github.split("/").pop()}
              </span>
            </div>
            <span className="rounded-full bg-white/5 px-3 py-1 font-mono text-[11px] text-ink-subtle ring-1 ring-inset ring-white/10">
              Not connected — placeholder data
            </span>
          </div>

          <div className="overflow-x-auto pb-2">
            <div className="flex gap-1">
              {grid.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-1">
                  {week.map((level, di) => (
                    <div
                      key={di}
                      className={`h-2.5 w-2.5 rounded-[3px] ${levelColors[level]}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center gap-2 font-mono text-[11px] text-ink-subtle">
            <span>Less</span>
            {levelColors.map((c, i) => (
              <div key={i} className={`h-2.5 w-2.5 rounded-[3px] ${c}`} />
            ))}
            <span>More</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
