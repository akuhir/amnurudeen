"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Sparkles,
  ImageIcon,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/brand-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";

const statusTone = {
  building: "amber" as const,
  live: "emerald" as const,
  completed: "sky" as const,
};

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { name, tagline, description, status, statusLabel, tags, links, comingSoon } =
    project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group glass relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-(--color-border-hover) hover:shadow-2xl hover:shadow-black/30"
    >
      {/* Media / placeholder */}
      <div className="relative flex aspect-video items-center justify-center overflow-hidden border-b border-(--color-border) bg-linear-to-br from-sky-500/5 to-emerald-500/5">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_20%,transparent_100%)]" />
        <div className="relative flex flex-col items-center gap-2 text-ink-subtle">
          <ImageIcon className="h-8 w-8" strokeWidth={1.5} />
          <span className="font-mono text-[11px]">
            {comingSoon ? "Screenshot coming soon" : "Preview"}
          </span>
        </div>
        {comingSoon && (
          <div className="absolute right-3 top-3">
            <Badge tone="amber" dot>
              Coming Soon
            </Badge>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-ink">{name}</h3>
          <Badge tone={statusTone[status]} dot={status === "building"}>
            {statusLabel}
          </Badge>
        </div>

        <p className="font-mono text-xs text-sky-400/80">{tagline}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-[11px] text-ink-subtle ring-1 ring-inset ring-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3 border-t border-(--color-border) pt-5">
          {links.demo && (
            <Button
              href={links.demo}
              variant="secondary"
              size="md"
              icon={<ArrowUpRight className="h-3.5 w-3.5" />}
            >
              Live Demo
            </Button>
          )}
          {links.github && (
            <Button
              href={links.github}
              variant="ghost"
              size="md"
              icon={<GithubIcon className="h-3.5 w-3.5" />}
              iconPosition="left"
            >
              GitHub
            </Button>
          )}
          {links.apk && (
            <Button
              href={links.apk}
              variant="secondary"
              size="md"
              icon={<Download className="h-3.5 w-3.5" />}
              iconPosition="left"
            >
              Download APK
            </Button>
          )}
          {comingSoon && !links.demo && !links.github && (
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-subtle">
              <Sparkles className="h-3.5 w-3.5" />
              In active development
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
