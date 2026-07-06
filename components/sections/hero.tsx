"use client";

import { motion } from "framer-motion";
import { ArrowRight, FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)]" />
      <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 animate-blob rounded-full bg-sky-500/20 blur-[100px]" />
      <div
        className="pointer-events-none absolute -right-24 top-64 h-80 w-80 animate-blob rounded-full bg-emerald-500/20 blur-[100px]"
        style={{ animationDelay: "-6s" }}
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 ring-1 ring-inset ring-white/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-medium text-ink-muted">
              Available for freelance work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">Abubakar Nurudeen.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl"
          >
            AI-Powered Full-Stack Developer building digital products that
            solve real-world problems.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-ink-subtle"
          >
            I enjoy turning ideas into useful applications — combining modern
            web technologies with AI-assisted development to design, build,
            and ship products faster without cutting corners on quality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href="#projects" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
              View My Projects
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Contact Me
            </Button>
          </motion.div>
        </div>

        {/* Right: illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block"
        >
          <div className="relative mx-auto aspect-square w-full max-w-md">
            {/* Floating code card */}
            <motion.div
              className="glass absolute left-1/2 top-1/2 w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-2xl p-5 shadow-2xl shadow-black/40"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="mb-4 flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                <span className="ml-2 font-mono text-[11px] text-ink-subtle">
                  build.tsx
                </span>
              </div>
              <pre className="font-mono text-[12.5px] leading-relaxed text-ink-muted">
                <code>
                  <span className="text-sky-400">const</span>{" "}
                  <span className="text-emerald-300">developer</span> = {"{"}
                  {"\n"}
                  {"  "}name:{" "}
                  <span className="text-amber-300">
                    &quot;Abubakar&quot;
                  </span>
                  ,{"\n"}
                  {"  "}stack:{" "}
                  <span className="text-amber-300">&quot;Full-Stack&quot;</span>
                  ,{"\n"}
                  {"  "}approach:{" "}
                  <span className="text-amber-300">&quot;AI-assisted&quot;</span>
                  ,{"\n"}
                  {"  "}status:{" "}
                  <span className="text-sky-300">buildCampora</span>(),{"\n"}
                  {"};"}
                </code>
              </pre>
            </motion.div>

            {/* Floating badge cards */}
            <motion.div
              className="glass absolute -left-6 top-4 flex items-center gap-2 rounded-xl px-3.5 py-2.5 shadow-lg shadow-black/30"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <FolderGit2 className="h-4 w-4 text-sky-400" />
              <span className="font-mono text-xs text-ink-muted">
                3 projects shipped
              </span>
            </motion.div>

            <motion.div
              className="glass absolute -right-4 bottom-8 rounded-xl px-3.5 py-2.5 shadow-lg shadow-black/30"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <span className="font-mono text-xs text-emerald-300">
                ● Building Campora
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
