import { motion } from "framer-motion";
import {
  Code2,
  ShieldAlert,
  Wrench,
  Server,
  BrainCircuit,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

// Simple Icons CDN — official brand logos
const si = (slug: string, color?: string) =>
  `https://cdn.simpleicons.org/${slug}${color ? `/${color}` : ""}`;

type Skill = { name: string; logo?: string; initials?: string };
type Category = {
  title: string;
  subtitle: string;
  icon: typeof Code2;
  skills: Skill[];
};

const CATEGORIES: Category[] = [
  {
    title: "Programming Languages",
    subtitle:
      "Languages I use for scripting, automation, tooling, and building applications.",
    icon: Code2,
    skills: [
      { name: "Python", logo: si("python") },
      { name: "Java", logo: si("openjdk", "f89820") },
      { name: "C", logo: si("c", "A8B9CC") },
      { name: "JavaScript", logo: si("javascript") },
      { name: "Bash", logo: si("gnubash", "4EAA25") },
    ],
  },
  {
    title: "Cybersecurity",
    subtitle:
      "Core offensive and defensive security domains I work across in labs and projects.",
    icon: ShieldAlert,
    skills: [
      { name: "Vulnerability Assessment", initials: "VA" },
      { name: "Penetration Testing", initials: "PT" },
      { name: "Network Security", initials: "NS" },
      { name: "Web App Security", logo: si("owasp", "000000") },
      { name: "OWASP Top 10", logo: si("owasp", "000000") },
      { name: "Security Analysis", initials: "SA" },
      { name: "Threat Detection", initials: "TD" },
      { name: "Security Testing", initials: "ST" },
    ],
  },
  {
    title: "Security Tools",
    subtitle:
      "Hands-on tooling for recon, exploitation, monitoring, and post-exploitation.",
    icon: Wrench,
    skills: [
      { name: "Nmap", initials: "Nm" },
      { name: "Burp Suite", logo: si("burpsuite", "FF6633") },
      { name: "OWASP ZAP", logo: si("owasp", "000000") },
      { name: "Wireshark", logo: si("wireshark", "1679A7") },
      { name: "Metasploit", logo: si("metasploit", "2596CD") },
      { name: "Snort", logo: si("snort", "FF1F1F") },
      { name: "Aircrack-ng", initials: "Ai" },
      { name: "Hydra", initials: "Hy" },
      { name: "SQLMap", initials: "SQ" },
      { name: "OpenVAS", initials: "OV" },
      { name: "Gobuster", initials: "Go" },
      { name: "Wazuh", logo: si("wazuh", "005571") },
      { name: "Git", logo: si("git", "F05032") },
      { name: "GitHub", logo: si("github", "000000") },
      { name: "GCP", logo: si("googlecloud", "4285F4") },
      { name: "Docker", logo: si("docker", "2496ED") },
    ],
  },
  {
    title: "Platforms",
    subtitle: "Operating systems and runtimes I deploy, attack, and harden.",
    icon: Server,
    skills: [
      { name: "Linux", logo: si("linux", "000000") },
      { name: "Windows", logo: si("windows11", "0078D4") },
      { name: "Docker", logo: si("docker", "2496ED") },
    ],
  },
  {
    title: "Core Concepts",
    subtitle:
      "Theoretical foundations behind the tooling — what makes systems break and hold.",
    icon: BrainCircuit,
    skills: [
      { name: "Networking", initials: "Nw" },
      { name: "Operating Systems", initials: "OS" },
      { name: "Database Systems", initials: "DB" },
      { name: "Cryptography", initials: "Cr" },
      { name: "Cloud Security", logo: si("googlecloud", "4285F4") },
      { name: "IoT Security", initials: "IoT" },
      { name: "DevOps Fundamentals", initials: "Dv" },
    ],
  },
];

function SkillBadge({ skill, i }: { skill: Skill; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: i * 0.025 }}
      whileHover={{ scale: 1.06, y: -2 }}
      className="group/badge inline-flex items-center gap-2 rounded-full border border-paper/15 bg-paper/5 px-3 py-1.5 backdrop-blur-sm transition hover:border-paper/40 hover:bg-paper/15 hover:shadow-[0_0_18px_rgba(251,245,231,0.25)]"
    >
      <span className="grid h-5 w-5 shrink-0 place-items-center overflow-hidden rounded-full bg-paper/90">
        {skill.logo ? (
          <img
            src={skill.logo}
            alt=""
            className="h-3.5 w-3.5 object-contain"
            loading="lazy"
          />
        ) : (
          <span className="text-[8px] font-black uppercase text-steel-deep">
            {skill.initials}
          </span>
        )}
      </span>
      <span className="text-xs font-semibold tracking-tight text-paper">
        {skill.name}
      </span>
    </motion.div>
  );
}

function CategoryCard({ cat, index }: { cat: Category; index: number }) {
  const Icon = cat.icon;
  return (
    <Reveal delay={index * 0.05} className="h-full">
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        className="group relative h-full overflow-hidden rounded-3xl p-[1.5px]"
      >
        {/* Animated gradient border */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-3xl bg-[conic-gradient(from_0deg,transparent_0%,rgba(251,245,231,0.45)_18%,transparent_35%,transparent_65%,rgba(251,245,231,0.35)_82%,transparent_100%)] opacity-60 transition group-hover:opacity-100"
          style={{ animation: "spin 8s linear infinite" }}
        />
        <div className="relative h-full rounded-3xl bg-gradient-to-br from-steel via-steel-soft to-steel-deep p-6 sm:p-7">
          {/* Glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-paper/10 blur-3xl"
          />

          <div className="relative flex items-start gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-paper/20 bg-paper/10 text-paper backdrop-blur">
              <Icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h3 className="font-display text-lg uppercase leading-tight tracking-tight text-paper sm:text-xl">
                {cat.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-paper/75">
                {cat.subtitle}
              </p>
            </div>
          </div>

          <div className="relative mt-5 flex flex-wrap gap-2">
            {cat.skills.map((s, i) => (
              <SkillBadge key={s.name} skill={s} i={i} />
            ))}
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-navy">
      {/* Cyber grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26,20,16,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(26,20,16,0.6) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 h-[460px] w-[460px] rounded-full bg-steel/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-10 h-[420px] w-[420px] rounded-full bg-steel/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <SectionHeader
            title="Skills"
            description="Categorized skills across offensive security, defensive monitoring, programming, and the cloud / dev stack I use every day."
          />
        </Reveal>

        {/* Responsive bento-style grid: mobile 1col → tablet 2col → desktop 3col, with featured spans */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <CategoryCard cat={CATEGORIES[0]} index={0} />
          </div>
          <div className="lg:col-span-4">
            <CategoryCard cat={CATEGORIES[1]} index={1} />
          </div>
          <div className="md:col-span-2 lg:col-span-6">
            <CategoryCard cat={CATEGORIES[2]} index={2} />
          </div>
          <div className="lg:col-span-2">
            <CategoryCard cat={CATEGORIES[3]} index={3} />
          </div>
          <div className="lg:col-span-4">
            <CategoryCard cat={CATEGORIES[4]} index={4} />
          </div>
        </div>
      </div>
    </section>
  );
}
