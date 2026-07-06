"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/brand-icons";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
    primary: true,
  },
  {
    label: "WhatsApp",
    value: "Chat directly",
    href: site.social.whatsapp,
    icon: MessageCircle,
    primary: false,
  },
  {
    label: "GitHub",
    value: "@abubakarnurudeen",
    href: site.social.github,
    icon: GithubIcon,
    primary: false,
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: site.social.linkedin,
    icon: LinkedinIcon,
    primary: false,
  },
  {
    label: "X (Twitter)",
    value: "Follow along",
    href: site.social.twitter,
    icon: XIcon,
    primary: false,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="glass relative overflow-hidden rounded-3xl px-8 py-14 text-center sm:px-14"
        >
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_30%,black_10%,transparent_100%)]" />
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 animate-blob rounded-full bg-sky-500/15 blur-[100px]" />

          <div className="relative">
            <span className="font-mono text-sm font-medium text-sky-400">
              06 — Contact
            </span>
            <h2 className="mx-auto mt-3 max-w-xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Have a project in mind? Let&apos;s build it.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-ink-muted">
              Whether it&apos;s a freelance project, a collaboration, or just
              an idea worth discussing — I&apos;m one message away and
              usually reply within a day.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button
                href={`mailto:${site.email}`}
                size="lg"
                icon={<Mail className="h-4 w-4" />}
                iconPosition="left"
              >
                Email Me
              </Button>
              <Button
                href={site.social.whatsapp}
                variant="secondary"
                size="lg"
                icon={<MessageCircle className="h-4 w-4" />}
                iconPosition="left"
              >
                WhatsApp
              </Button>
            </div>

            <div className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
              {channels
                .filter((c) => !c.primary)
                .map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-(--color-border) bg-white/[0.02] px-4 py-3.5 text-left transition-all duration-300 hover:border-(--color-border-hover) hover:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <channel.icon className="h-4 w-4 text-sky-400" />
                      <div>
                        <p className="text-sm font-medium text-ink">
                          {channel.label}
                        </p>
                        <p className="text-xs text-ink-subtle">
                          {channel.value}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-ink-subtle transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
                  </a>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
