import { Briefcase } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    title: "Cyber Security Intern",
    company: "Edunet Foundation",
    period: "Jan 2025 – Feb 2025",
    details:
      "Conducted vulnerability assessments and network scanning using Nmap and Wireshark. Analyzed real-world attack scenarios and applied incident response workflows with risk-based vulnerability prioritization.",
    tags: ["Nmap", "Wireshark", "VAPT", "Incident Response"],
  },
  {
    title: "AI Azure Intern",
    company: "Microsoft & Edunet",
    period: "May 2025 – Jun 2025",
    details:
      "Built AI/ML pipelines on Microsoft Azure with exposure to cloud security services and identity management. Applied DevSecOps practices and explored AI-driven anomaly detection.",
    tags: ["Azure", "Cloud Security", "DevSecOps", "AI/ML"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="bg-navy">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <SectionHeader
            title="Experience"
            description="Short, focused internships where I shipped real security work — framed honestly as a final-year student building production exposure."
          />
        </Reveal>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute left-4 top-0 h-full w-px bg-steel/25 md:left-1/2"
          />
          <ul className="space-y-10">
            {ITEMS.map((item, i) => {
              const right = i % 2 === 1;
              return (
                <Reveal as="li" key={item.title} delay={i * 0.05}>
                  <div
                    className={`relative grid grid-cols-1 gap-6 pl-12 md:grid-cols-2 md:gap-12 md:pl-0 ${
                      right ? "md:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className={right ? "md:pl-12" : "md:pr-12 md:text-right"}>
                      <div className="inline-flex items-center gap-2 rounded-sm border border-steel/30 bg-steel/10 px-2.5 py-1 font-mono-tech text-[10px] uppercase tracking-[0.2em] text-steel-soft">
                        {item.period}
                      </div>
                      <h3 className="mt-3 text-lg font-bold uppercase tracking-tight text-cream sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-steel-soft">
                        {item.company}
                      </p>
                    </div>
                    <div
                      aria-hidden
                      className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-steel bg-navy md:left-1/2"
                    />
                    <div className={right ? "md:pr-12 md:text-right" : "md:pl-12"}>
                      <div className="rounded-md border border-cream/10 bg-navy-deep/60 p-5 transition hover:-translate-y-0.5 hover:border-steel/40">
                        <div className="mb-3 flex items-center gap-2 text-cream/60">
                          <Briefcase className="h-4 w-4" />
                          <span className="font-mono-tech text-[10px] uppercase tracking-[0.2em]">
                            Internship
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed text-cream/80">
                          {item.details}
                        </p>
                        <div
                          className={`mt-4 flex flex-wrap gap-1.5 ${right ? "md:justify-end" : ""}`}
                        >
                          {item.tags.map((t) => (
                            <span
                              key={t}
                              className="font-mono-tech text-[10px] uppercase tracking-[0.12em] rounded-sm bg-cream/5 px-2 py-1 text-cream/70"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
