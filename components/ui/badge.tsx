import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  tone?: "sky" | "emerald" | "amber" | "neutral";
  className?: string;
  dot?: boolean;
}

const tones = {
  sky: "text-sky-300 bg-sky-400/10 ring-sky-400/25",
  emerald: "text-emerald-300 bg-emerald-400/10 ring-emerald-400/25",
  amber: "text-amber-300 bg-amber-400/10 ring-amber-400/25",
  neutral: "text-ink-muted bg-white/5 ring-white/10",
};

const dotTones = {
  sky: "bg-sky-400",
  emerald: "bg-emerald-400",
  amber: "bg-amber-400",
  neutral: "bg-ink-subtle",
};

export function Badge({
  children,
  tone = "neutral",
  className,
  dot = false,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset",
        tones[tone],
        className
      )}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          <span
            className={cn(
              "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
              dotTones[tone]
            )}
          />
          <span
            className={cn(
              "relative inline-flex h-1.5 w-1.5 rounded-full",
              dotTones[tone]
            )}
          />
        </span>
      )}
      {children}
    </span>
  );
}
