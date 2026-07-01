import { Github, Linkedin, Target, Terminal } from "lucide-react";
import { LINKS, NAV_ITEMS } from "@/lib/links";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-[320px] w-[320px] rounded-full bg-steel/15 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="font-display text-lg uppercase tracking-tight">
            Rithik <span className="text-steel">Sharma</span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
            Final-year Cybersecurity Engineering student. Building offensive
            security skills, secure systems, and proof of practice.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a aria-label="GitHub" href={LINKS.github} target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-steel text-paper transition hover:bg-steel-soft"><Github className="h-4 w-4" /></a>
            <a aria-label="LinkedIn" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-steel text-paper transition hover:bg-steel-soft"><Linkedin className="h-4 w-4" /></a>
            <a aria-label="Hack The Box" href={LINKS.htb} target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-steel text-paper transition hover:bg-steel-soft"><Target className="h-4 w-4" /></a>
            <a aria-label="TryHackMe" href={LINKS.thm} target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-steel text-paper transition hover:bg-steel-soft"><Terminal className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <div className="font-mono-tech text-[11px] uppercase tracking-[0.22em] text-steel">
            Quick Links
          </div>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {NAV_ITEMS.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-cream/80 transition hover:text-steel">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-mono-tech text-[11px] uppercase tracking-[0.22em] text-steel">
            Contact
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`mailto:${LINKS.email}`} className="text-cream/80 hover:text-steel">
                {LINKS.email}
              </a>
            </li>
            <li>
              <a href={`tel:${LINKS.phone.replace(/\s+/g, "")}`} className="text-cream/80 hover:text-steel">
                {LINKS.phone}
              </a>
            </li>
            <li>
              <a href={LINKS.resume} target="_blank" rel="noopener noreferrer" className="text-cream/80 hover:text-steel">
                Resume / CV
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-cream/15">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-4 py-5 text-[11px] uppercase tracking-[0.18em] text-cream/60 sm:flex-row sm:items-center sm:px-6">
          <span className="font-mono-tech">© {year} Rithik Sharma · All rights reserved</span>
          <span className="font-mono-tech">Built with React · Designed for security</span>
        </div>
      </div>
    </footer>
  );
}
