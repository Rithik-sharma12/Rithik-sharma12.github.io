import { Github, ArrowUpRight, Shield, Lock, Cpu } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { LINKS } from "@/lib/links";

type Project = {
  name: string;
  stack: string;
  icon: LucideIcon;
  problem: string;
  action: string;
  outcome: string;
};

const PROJECTS: Project[] = [
  {
    name: "ShredX",
    stack: "Rust · NIST SP 800-88 Rev. 1",
    icon: Shield,
    problem:
      "Enterprises need verifiable, irreversible destruction of sensitive data across heterogeneous storage media.",
    action:
      "Built a cross-platform sanitization utility in Rust implementing NIST SP 800-88 Rev. 1 patterns with memory-safe primitives and parallel I/O.",
    outcome:
      "Delivered a high-performance tool with deterministic wipe verification suitable for regulated environments.",
  },
  {
    name: "Steganography Web App",
    stack: "Python · Flask · AES Encryption",
    icon: Lock,
    problem:
      "Sensitive messages shared over public channels are trivially intercepted and inspected.",
    action:
      "Built and deployed a Flask web app that embeds AES-encrypted messages inside cover images, combining encryption with steganographic concealment.",
    outcome:
      "Achieved end-to-end confidentiality with a clean UX and reproducible extraction workflow.",
  },
  {
    name: "Secure Heterogeneous OTA (HetOTA)",
    stack: "IoT Security Lifecycle",
    icon: Cpu,
    problem:
      "IoT fleets ship insecure firmware update paths that expose devices to tampering and supply-chain attacks.",
    action:
      "Designed a secure OTA mechanism modeling the full firmware lifecycle: signing, transport integrity, rollback protection, and device attestation.",
    outcome:
      "Produced a hardened update reference flow suited to heterogeneous IoT deployments.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-navy">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-32 h-[460px] w-[460px] rounded-full bg-steel/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-10 h-[380px] w-[380px] rounded-full bg-steel/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <SectionHeader title="Projects" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal as="article" key={p.name} delay={i * 0.06}>
                <div className="group flex h-full flex-col rounded-3xl bg-steel p-7 text-paper shadow-xl shadow-steel/25 transition hover:-translate-y-1.5 hover:bg-steel-soft">
                  <div className="flex items-start justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-paper/20 bg-paper/10 text-paper backdrop-blur">
                      <Icon className="h-5 w-5" />
                    </div>
                    <a
                      href={LINKS.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.name} on GitHub`}
                      className="text-paper/70 transition hover:text-paper"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </a>
                  </div>

                  <h3 className="mt-5 font-display text-xl uppercase leading-tight text-paper sm:text-2xl">
                    {p.name}
                  </h3>
                  <p className="mt-1 font-mono-tech text-[11px] uppercase tracking-[0.14em] text-paper/75">
                    {p.stack}
                  </p>

                  <dl className="mt-5 space-y-3 text-sm leading-relaxed">
                    {[
                      { k: "Problem", v: p.problem },
                      { k: "Action", v: p.action },
                      { k: "Outcome", v: p.outcome },
                    ].map((row) => (
                      <div key={row.k}>
                        <dt className="font-mono-tech text-[10px] font-semibold uppercase tracking-[0.18em] text-paper/70">
                          {row.k}
                        </dt>
                        <dd className="mt-0.5 text-paper/95">{row.v}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-auto pt-6">
                    <a
                      href={LINKS.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-paper/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-paper transition hover:bg-paper hover:text-steel"
                    >
                      <Github className="h-3.5 w-3.5" /> View on GitHub
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
