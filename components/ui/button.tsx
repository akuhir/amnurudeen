import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: "md" | "lg";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  children: ReactNode;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  target?: string;
  rel?: string;
  onClick?: never;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-xl font-medium tracking-tight transition-all duration-300 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-linear-to-r from-sky-400 to-emerald-400 text-[#05070c] shadow-[0_0_0_1px_rgba(56,189,248,0.15),0_8px_24px_-8px_rgba(56,189,248,0.45)] hover:shadow-[0_0_0_1px_rgba(56,189,248,0.25),0_12px_32px_-8px_rgba(56,189,248,0.6)] hover:-translate-y-0.5",
  secondary:
    "glass text-ink hover:border-(--color-border-hover) hover:-translate-y-0.5",
  ghost:
    "text-ink-muted hover:text-ink hover:bg-white/5",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    icon,
    iconPosition = "right",
    className,
    children,
  } = props;

  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <a
        href={props.href}
        target={props.target}
        rel={props.rel}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={(props as ButtonAsButton).type ?? "button"}
      onClick={(props as ButtonAsButton).onClick}
      className={classes}
    >
      {content}
    </button>
  );
}
