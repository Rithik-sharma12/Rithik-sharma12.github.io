import {
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
  Target,
  Terminal,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { LINKS } from "@/lib/links";

const SOCIALS = [
  { label: "LinkedIn", href: LINKS.linkedin, icon: Linkedin },
  { label: "GitHub", href: LINKS.github, icon: Github },
  { label: "Hack The Box", href: LINKS.htb, icon: Target },
  { label: "TryHackMe", href: LINKS.thm, icon: Terminal },
];

export function Contact() {
  return (
    <section id="contact" className="bg-navy">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <SectionHeader
            title="Contact"
            description="Let's discuss security, research, or opportunities."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-1 gap-6 rounded-md border border-cream/10 bg-navy-deep/60 p-6 sm:p-10 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <a
                href={`mailto:${LINKS.email}`}
                className="group flex items-center gap-4 rounded-sm border border-cream/10 bg-cream/[0.03] p-4 transition hover:border-steel"
              >
                <div className="grid h-11 w-11 place-items-center rounded-sm border border-steel/30 bg-steel/10 text-steel">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-cream/50">
                    Email
                  </div>
                  <div className="truncate text-sm font-medium text-cream group-hover:text-steel">
                    {LINKS.email}
                  </div>
                </div>
              </a>

              <a
                href={`tel:${LINKS.phone.replace(/\s+/g, "")}`}
                className="group flex items-center gap-4 rounded-sm border border-cream/10 bg-cream/[0.03] p-4 transition hover:border-steel"
              >
                <div className="grid h-11 w-11 place-items-center rounded-sm border border-steel/30 bg-steel/10 text-steel">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-cream/50">
                    Phone
                  </div>
                  <div className="truncate text-sm font-medium text-cream group-hover:text-steel">
                    {LINKS.phone}
                  </div>
                </div>
              </a>

              <a
                href={LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-steel px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-cream transition hover:bg-steel-soft"
              >
                <Download className="h-3.5 w-3.5" /> Download Resume
              </a>
            </div>

            <div>
              <div className="font-mono-tech text-[11px] uppercase tracking-[0.22em] text-steel-soft">
                Profiles
              </div>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {SOCIALS.map((s) => {
                  const Icon = s.icon;
                  return (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 rounded-sm border border-cream/10 bg-cream/[0.03] p-4 transition hover:-translate-y-0.5 hover:border-steel"
                      >
                        <div className="grid h-10 w-10 place-items-center rounded-sm border border-cream/10 text-cream/70 transition group-hover:border-steel group-hover:text-steel">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-semibold uppercase tracking-[0.1em] text-cream">
                          {s.label}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
