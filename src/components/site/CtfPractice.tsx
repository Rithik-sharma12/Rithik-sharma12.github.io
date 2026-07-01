import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { LINKS } from "@/lib/links";
import htbLogo from "@/assets/htb.png.asset.json";
import thmLogo from "@/assets/thm.png.asset.json";

const PLATFORMS = [
  {
    name: "Hack The Box",
    handle: "@RithikSharma",
    logo: htbLogo.url,
    bg: "bg-[#111714]",
    href: LINKS.htb,
    blurb:
      "Active engagement on machines and challenges spanning web exploitation, privilege escalation, and Active Directory paths.",
  },
  {
    name: "TryHackMe",
    handle: "@RithikSharma",
    logo: thmLogo.url,
    bg: "bg-[#f5f5f5]",
    href: LINKS.thm,
    blurb:
      "Structured rooms and learning paths across offensive security, network fundamentals, and SOC analyst workflows.",
  },
];

export function CtfPractice() {
  return (
    <section id="ctf" className="bg-navy">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <SectionHeader
            eyebrow="Practice"
            title="Proof of Continuous Practice"
            description="Security is a habit. These platforms are where I keep the edge sharp — solving real problems, every week, against intentionally vulnerable systems."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PLATFORMS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-md border border-cream/10 bg-navy-deep/60 p-7 transition hover:-translate-y-1 hover:border-steel"
              >
                <div className="flex items-start justify-between">
                  <div className={`grid h-16 w-16 place-items-center rounded-xl ${p.bg} p-2`}>
                    <img src={p.logo} alt={`${p.name} logo`} className="h-full w-full object-contain" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-cream/40 transition group-hover:text-steel" />
                </div>
                <h3 className="mt-6 text-xl font-bold uppercase tracking-tight text-cream">
                  {p.name}
                </h3>
                <p className="mt-1 font-mono-tech text-[11px] uppercase tracking-[0.14em] text-steel-soft">
                  {p.handle}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-cream/75">
                  {p.blurb}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 font-mono-tech text-[11px] uppercase tracking-[0.18em] text-steel">
                  View profile →
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
