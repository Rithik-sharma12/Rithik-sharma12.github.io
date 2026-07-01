import { Award } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

const CERTS = [
  {
    name: "NPTEL Privacy and Security in Social Media",
    issuer: "NPTEL · Elite + Silver",
  },
  { name: "AI-ML Engineer", issuer: "PMKVY 4.0" },
  { name: "Cyber Security Internship", issuer: "Edunet Foundation" },
  { name: "Azure AI Internship", issuer: "Microsoft & Edunet" },
];

export function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-navy"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-24 h-[420px] w-[420px] rounded-full bg-steel/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <SectionHeader title="Certifications" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CERTS.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.05}>
              <div className="group flex h-full flex-col rounded-2xl border border-cream/15 bg-navy-deep/70 p-6 shadow-sm transition hover:-translate-y-1.5 hover:border-steel hover:shadow-lg hover:shadow-steel/20">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-steel text-paper transition group-hover:scale-110">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-sm font-bold uppercase leading-snug tracking-tight text-cream">
                  {c.name}
                </h3>
                <p className="mt-2 font-mono-tech text-[11px] uppercase tracking-[0.14em] text-steel">
                  {c.issuer}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-cream/65">
            These certifications support practical learning and are presented
            alongside hands-on projects, labs, and security exercises.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
