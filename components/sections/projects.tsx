"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/sections/project-card";
import { FeaturedProject } from "@/components/sections/featured-project";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const filters = [
  { key: "all", label: "All" },
  { key: "building", label: "Building" },
  { key: "live", label: "Live" },
  { key: "completed", label: "Completed" },
] as const;

type FilterKey = (typeof filters)[number]["key"];

export function Projects() {
  const [active, setActive] = useState<FilterKey>("all");

  const featured = projects.find((p) => p.featured);
  const rest = useMemo(
    () => projects.filter((p) => !p.featured),
    []
  );

  const filtered = useMemo(() => {
    if (active === "all") return rest;
    return rest.filter((p) => p.status === active);
  }, [active, rest]);

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="02 — Work"
          title="Featured projects"
          description="A selection of real products I've built — from active development to completed, working software."
        />

        {featured && <FeaturedProject project={featured} />}

        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
                active === f.key
                  ? "bg-linear-to-r from-sky-400 to-emerald-400 text-[#05070c]"
                  : "text-ink-muted hover:bg-white/5 hover:text-ink"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2">
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="py-12 text-center font-mono text-sm text-ink-subtle">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
