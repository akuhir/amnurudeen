"use client";

import { motion } from "framer-motion";
import { ImageIcon, Sparkles, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";

export function FeaturedProject({ project }: { project: Project }) {
  const { name, tagline, description, statusLabel, tags, comingSoon } = project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="glass relative mb-8 grid overflow-hidden rounded-3xl lg:grid-cols-2"
    >
      <div className="relative flex flex-col justify-center p-8 sm:p-10 lg:p-12">
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-xs tracking-wide text-emerald-400">
            FEATURED PROJECT
          </span>
          <Badge tone="amber" dot={comingSoon}>
            {statusLabel}
          </Badge>
        </div>

        <h3 className="text-3xl font-semibold tracking-tight text-ink">
          {name}
        </h3>
        <p className="mt-2 font-mono text-sm text-sky-400/80">{tagline}</p>

        <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-muted">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-[11px] text-ink-subtle ring-1 ring-inset ring-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-2 font-mono text-xs text-ink-subtle">
          <Users className="h-3.5 w-3.5" />
          Built for students, staff & alumni
        </div>
      </div>

      {/* Visual side */}
      <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden border-t border-(--color-border) bg-linear-to-br from-sky-500/10 via-transparent to-emerald-500/10 lg:border-l lg:border-t-0">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black_10%,transparent_100%)]" />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex flex-col items-center gap-3 text-ink-subtle"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-inset ring-white/10">
            <ImageIcon className="h-7 w-7" strokeWidth={1.5} />
          </div>
          <span className="font-mono text-xs">
            {comingSoon ? "Screenshots coming soon" : "Preview"}
          </span>
        </motion.div>
        {comingSoon && (
          <div className="absolute bottom-5 right-5">
            <span className="glass inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-[11px] text-ink-muted">
              <Sparkles className="h-3 w-3 text-emerald-400" />
              In active development
            </span>
          </div>
        )}
      </div>
    </motion.article>
  );
}
