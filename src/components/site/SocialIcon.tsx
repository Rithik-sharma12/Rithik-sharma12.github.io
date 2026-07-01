import type { LucideIcon } from "lucide-react";

export function SocialIcon({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: LucideIcon;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="group inline-flex h-10 w-10 items-center justify-center rounded-sm border border-cream/15 text-cream/80 transition hover:-translate-y-0.5 hover:border-steel hover:text-steel"
    >
      <Icon className="h-4 w-4 transition group-hover:scale-110" />
    </a>
  );
}
