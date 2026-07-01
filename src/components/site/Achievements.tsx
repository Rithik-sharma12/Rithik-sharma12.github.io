import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

const MILESTONES = [
  { year: "2022", title: "Started Cybersecurity Journey", body: "Began structured study of networking, Linux, and security fundamentals." },
  { year: "2023", title: "NPTEL Elite + Silver", body: "Privacy and Security in Social Media — recognised with Elite + Silver." },
  { year: "Jan 2025", title: "Cyber Security Internship", body: "Edunet Foundation — VAPT, scanning, and incident response workflows." },
  { year: "May 2025", title: "Azure AI Internship", body: "Microsoft & Edunet — cloud security and DevSecOps exposure." },
  { year: "2025", title: "Built ShredX", body: "Rust-based enterprise data sanitization tool aligned to NIST SP 800-88 Rev. 1." },
  { year: "2025", title: "Developed HetOTA", body: "Secure heterogeneous OTA mechanism for IoT firmware lifecycles." },
  { year: "2026", title: "Portfolio Launch", body: "Public portfolio shipped — projects, practice, and proof in one place." },
  { year: "Next", title: "Future Security Goals", body: "Targeting offensive security, VAPT, and security engineering roles." },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden bg-navy">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-steel/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <SectionHeader
            title="Achievements"
            description="A progression from learner to builder — the moments that shaped the practice."
          />
        </Reveal>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px bg-steel/40 sm:left-6"
          />
          <ul className="space-y-8">
            {MILESTONES.map((m, i) => (
              <Reveal as="li" key={m.title + i} delay={i * 0.04}>
                <div className="relative pl-12 sm:pl-16">
                  <span
                    aria-hidden
                    className="absolute left-4 top-2 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-steel bg-navy sm:left-6"
                  />
                  <div className="font-mono-tech text-[11px] uppercase tracking-[0.22em] text-steel">
                    {m.year}
                  </div>
                  <h3 className="mt-1 text-lg font-bold uppercase tracking-tight text-cream">
                    {m.title}
                  </h3>
                  <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-cream/75">
                    {m.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
