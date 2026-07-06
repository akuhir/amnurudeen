"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Now", href: "#now" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
            scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
          }`}
        >
          <a
            href="#top"
            className="font-mono text-sm font-semibold tracking-tight text-ink"
          >
            AN<span className="text-emerald-400">.</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-lg p-2 text-ink-muted transition-colors hover:bg-white/5 hover:text-ink"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
            <Button href="#contact" size="md">
              Contact Me
            </Button>
          </div>

          <button
            className="p-2 text-ink md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mt-2 flex flex-col gap-1 rounded-2xl p-3 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3.5 py-2.5 text-sm text-ink-muted transition-colors hover:bg-white/5 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                toggleTheme();
                setOpen(false);
              }}
              className="flex items-center gap-2 rounded-lg px-3.5 py-2.5 text-left text-sm text-ink-muted hover:bg-white/5 hover:text-ink"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              Switch to {theme === "dark" ? "light" : "dark"}
            </button>
          </motion.div>
        )}
      </div>
    </header>
  );
}
