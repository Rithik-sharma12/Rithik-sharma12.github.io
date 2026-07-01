import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import raspberry from "@/assets/raspberry.jpg.asset.json";
import nextcloud from "@/assets/nextcloud.jpg.asset.json";
import gps from "@/assets/gps-project.jpg.asset.json";

const BUILDS = [
  {
    src: raspberry.url,
    alt: "Raspberry Pi Zero with Kali Linux setup",
    caption: "Raspberry Pi Zero · Portable offensive lab",
  },
  {
    src: nextcloud.url,
    alt: "Self-hosted Nextcloud server on dual-laptop setup",
    caption: "Self-hosted Nextcloud · Parrot OS server",
  },
  {
    src: gps.url,
    alt: "Custom GPS + sensor hardware prototype on breadboard",
    caption: "HetOTA hardware prototype · GPS + sensors",
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-navy">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-20 h-[480px] w-[480px] rounded-full bg-steel/8"
        style={{ borderRadius: "55% 45% 60% 40% / 50% 50% 50% 50%" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <SectionHeader title="About Me" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left: build photos */}
          <Reveal className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3">
              {BUILDS.map((b, i) => (
                <figure
                  key={b.src}
                  className={`group overflow-hidden rounded-2xl bg-navy-deep/60 ring-1 ring-cream/10 ${
                    i === 0 ? "col-span-2" : ""
                  }`}
                >
                  <img
                    src={b.src}
                    alt={b.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <figcaption className="px-3 py-2 font-mono-tech text-[10px] uppercase tracking-[0.14em] text-cream/70">
                    {b.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>

          {/* Right: red blob narrative card */}
          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="relative">
              <div className="rounded-[2.5rem] bg-steel px-8 py-9 shadow-2xl shadow-steel/25 sm:px-10 sm:py-11">
                <p className="text-base leading-relaxed text-paper sm:text-lg">
                  My journey into cybersecurity began with a curiosity about how
                  systems work and how they can be secured against evolving
                  threats. Since then, I have built practical experience through
                  internships, hands-on labs, and personal projects —
                  strengthening my foundation in vulnerability assessment,
                  networking, Linux, cloud security, secure software development,
                  and penetration testing.
                </p>
                <p className="mt-5 text-base leading-relaxed text-paper sm:text-lg">
                  I continuously expand my knowledge through platforms like
                  Hack The Box and TryHackMe while exploring emerging
                  technologies such as cloud computing, AI, and IoT. I believe
                  cybersecurity is about more than finding vulnerabilities —
                  it's about understanding systems, thinking like an attacker,
                  and building resilient solutions that create a safer digital
                  future.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
