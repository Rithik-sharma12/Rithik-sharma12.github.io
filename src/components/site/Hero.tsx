import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Target, Terminal } from "lucide-react";
import { LINKS } from "@/lib/links";
import portrait from "@/assets/rithik-nobg.png.asset.json";



export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy">
      {/* Page background — photo sits directly on bg-navy */}
      {/* Subtle cyber grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Pulsing red glows */}
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-32 -top-20 h-[420px] w-[420px] rounded-full bg-steel/20 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-28 bottom-0 h-[360px] w-[360px] rounded-full bg-steel/15 blur-3xl"
      />
      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-steel/60"
          style={{
            left: `${(i * 13 + 7) % 95}%`,
            top: `${(i * 23 + 11) % 90}%`,
          }}
          animate={{ y: [0, -22, 0], opacity: [0.2, 0.9, 0.2] }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}




      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:py-24">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto w-[260px] sm:w-[300px] lg:w-[340px] xl:w-[360px] group">
            {/* Red outer glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 aspect-square w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c8202a] opacity-30 blur-[60px] transition-opacity duration-300 group-hover:opacity-50"
            />

            {/* Avatar wrapper with hover scale */}
            <div className="relative aspect-square transition-transform duration-300 ease-out group-hover:scale-[1.03]">
              {/* Rotating red conic-gradient border */}
              <div
                aria-hidden
                className="absolute -inset-[2px] z-0 animate-[hex-rotate_8s_linear_infinite]"
                style={{
                  clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  background: "conic-gradient(from 0deg, #c8202a, #ff4d2e, #c8202a)",
                }}
              />
              {/* Red hexagon background */}
              <div
                aria-hidden
                className="absolute inset-0 z-[5]"
                style={{
                  clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  background: "linear-gradient(180deg, #c8202a 0%, #7a0f17 100%)",
                }}
              />
              {/* Hexagon portrait — full image fits inside hexagon (contain) */}
              <img
                src={portrait.url}
                alt="Rithik Sharma — Cybersecurity Engineer"
                loading="eager"
                decoding="async"
                className="relative z-10 block h-full w-full object-contain object-center p-2"
                style={{
                  clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              />
            </div>
            {/* Status badge — white bg, animated red stylish text */}
            <div className="relative z-20 mt-5 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-[#c8202a] bg-white px-5 py-2.5 shadow-[0_0_24px_rgba(200,32,42,0.35)]">
                <span
                  className="inline-block h-2.5 w-2.5 rounded-full bg-[#c8202a]"
                  style={{ animation: "status-pulse 1.5s ease-out infinite" }}
                />
                <span
                  className="font-display text-sm uppercase tracking-[0.2em]"
                  style={{
                    background: "linear-gradient(90deg, #7a0f17, #ff4d2e, #c8202a, #ff4d2e, #7a0f17)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    animation: "otw-shine 3s linear infinite",
                  }}
                >
                  Open to Work
                </span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right side: stacked red blob cards */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-[1.75rem] bg-steel px-5 py-5 shadow-xl shadow-steel/20 sm:rounded-[2rem] sm:px-10 sm:py-7">
              <h1
                className="font-display uppercase leading-[1.1] text-cream"
                style={{ fontSize: "clamp(1.5rem, 5.5vw, 3rem)" }}
              >
                Hi, I'm <span className="text-paper">Rithik Sharma</span>
              </h1>
            </div>
            {/* speech-bubble tail (desktop only to avoid mobile overflow) */}
            <div
              aria-hidden
              className="absolute -left-3 top-10 hidden h-6 w-8 bg-steel sm:block"
              style={{ clipPath: "polygon(100% 0, 100% 100%, 0 50%)" }}
            />
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-[1.75rem] bg-steel px-5 py-6 shadow-xl shadow-steel/20 sm:rounded-[2rem] sm:px-10 sm:py-7"
          >
            <p className="text-center text-sm font-semibold leading-relaxed text-paper sm:text-base lg:text-lg">
              I build secure systems, analyze vulnerabilities, and continuously
              learn modern cybersecurity practices through real-world projects
              and hands-on experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-stretch gap-4 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between"
          >
            <div className="flex items-center justify-center gap-3 sm:justify-start">
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-12 w-12 place-items-center rounded-full bg-cream text-paper transition hover:-translate-y-1 hover:bg-steel"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-12 w-12 place-items-center rounded-full bg-[#0a66c2] text-paper transition hover:-translate-y-1"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={LINKS.htb}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hack The Box"
                className="grid h-12 w-12 place-items-center rounded-full bg-steel text-paper transition hover:-translate-y-1 hover:bg-steel-soft"
              >
                <Target className="h-5 w-5" />
              </a>
              <a
                href={LINKS.thm}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TryHackMe"
                className="grid h-12 w-12 place-items-center rounded-full bg-cream text-paper transition hover:-translate-y-1 hover:bg-steel"
              >
                <Terminal className="h-5 w-5" />
              </a>
            </div>

            <a
              href={LINKS.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-steel px-6 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-paper shadow-lg shadow-steel/30 transition hover:bg-steel-soft hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              Download Resume
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
