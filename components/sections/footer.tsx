import { Mail, MessageCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/brand-icons";
import { site } from "@/data/site";

const socials = [
  { icon: Mail, href: `mailto:${site.email}`, label: "Email" },
  { icon: GithubIcon, href: site.social.github, label: "GitHub" },
  { icon: LinkedinIcon, href: site.social.linkedin, label: "LinkedIn" },
  { icon: XIcon, href: site.social.twitter, label: "X (Twitter)" },
  { icon: MessageCircle, href: site.social.whatsapp, label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-(--color-border) py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
        <p className="max-w-md font-mono text-sm italic text-ink-subtle">
          &ldquo;{site.quote}&rdquo;
        </p>

        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="rounded-lg p-2.5 text-ink-subtle transition-colors hover:bg-white/5 hover:text-ink"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="text-xs text-ink-subtle">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
