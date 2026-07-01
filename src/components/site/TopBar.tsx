import { Github, Linkedin } from "lucide-react";
import { LINKS } from "@/lib/links";

export function TopBar() {
  return (
    <div className="w-full bg-cream text-paper">
      <div className="mx-auto flex max-w-7xl items-center justify-end gap-3 px-4 py-1.5 text-[11px] sm:text-xs">
        <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-paper/80 transition hover:text-steel">
          <Github className="h-4 w-4" />
        </a>
        <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-paper/80 transition hover:text-steel">
          <Linkedin className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
