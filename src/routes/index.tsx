import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/site/TopBar";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Experience } from "@/components/site/Experience";
import { Projects } from "@/components/site/Projects";
import { Skills } from "@/components/site/Skills";
import { Certifications } from "@/components/site/Certifications";
import { Achievements } from "@/components/site/Achievements";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const TITLE =
  "Rithik Sharma | Cybersecurity Engineer · Penetration Testing · IoT Security · DevSecOps";
const DESC =
  "Rithik Sharma — B.E. Computer Science (Cyber Security) student at KCG College of Technology, Chennai. Specializing in penetration testing, IoT firmware security, VAPT, DevSecOps, and red team operations. Founder of NYX-CTF platform.";
const URL = "https://rithiksharma.lovable.app/";
const IMAGE =
  "https://rithiksharma.lovable.app/__l5e/assets-v1/51bbfc25-c88e-4884-8aab-a974aff69f12/rithik.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "author", content: "Rithik Sharma" },
      { name: "robots", content: "index, follow" },
      {
        name: "keywords",
        content:
          "Rithik Sharma, cybersecurity engineer, penetration testing, VAPT, red team, IoT security, firmware security, DevSecOps, CTF, NYX-CTF, Chennai, KCG College of Technology, Hack The Box, TryHackMe, SecureOTA, ShredX",
      },
      { property: "og:title", content: "Rithik Sharma | Cybersecurity Engineer" },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:image", content: IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Rithik Sharma | Cybersecurity Engineer" },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: IMAGE },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Rithik Sharma",
          url: URL,
          image: IMAGE,
          jobTitle: "Cybersecurity Engineering Student",
          description:
            "Penetration testing, IoT firmware security, VAPT, DevSecOps, red team operations.",
          alumniOf: "KCG College of Technology",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Chennai",
            addressCountry: "IN",
          },
          sameAs: [
            "https://github.com/Rithik-sharma12",
            "https://www.linkedin.com/in/rithiksharma19/",
            "https://tryhackme.com/p/RithikSharma",
            "https://profile.hackthebox.com/profile/019e2776-865d-707c-a074-4e4072edbb60",
          ],
        }),
      },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-navy text-cream">
      <TopBar />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
