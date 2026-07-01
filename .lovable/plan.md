
# Rithik Sharma — Cybersecurity Portfolio

Single-page, dark, enterprise-grade portfolio built on the existing TanStack Start stack (since Next.js 15 can't be swapped in here). All content, sections, colors, motion, and accessibility from your brief are preserved 1:1.

## Stack & setup
- TanStack Start + React 19 + TypeScript + Vite (existing)
- Framer Motion for reveals, hover lifts, ticker, counters
- Lucide React for icons
- `@fontsource/inter` + `@fontsource/fira-code` installed via `bun add`
- Smooth anchor scrolling, sticky nav, accessible focus rings, semantic HTML5
- SEO: `head()` in the single route with title, description, OG/Twitter tags

## Design tokens (added to `src/styles.css`)
```text
--navy:   #122C4F   (primary base / dark sections)
--cream:  #FBF9E4   (secondary base / light sections)
--steel:  #5B88B2   (accent / CTAs / tags / highlight)
--ink:    #000000   (text, borders, top bar, footer)
```
Mapped through `@theme inline` so `bg-navy`, `text-cream`, `bg-steel`, `border-ink` work as utilities. No other colors introduced. Fira Code reserved for tech labels/tags/stacks only.

## File structure
```text
src/routes/index.tsx          single-page composition + SEO head()
src/components/site/
  TopBar.tsx                  black bar + ticker + GH/LinkedIn
  Nav.tsx                     sticky navy navbar + Download CV CTA + mobile sheet
  Hero.tsx                    split hero, headline w/ steel highlight, CTAs, social row, portrait card + trust chips
  About.tsx                   cream bg, summary + stat cards + Download CV
  Experience.tsx              timeline (Edunet, Microsoft & Edunet)
  Projects.tsx                grid of ShredX / Steganography / HetOTA in PAO format
  Skills.tsx                  Programming / Security Tools / Domains pill tags (Fira Code)
  Certifications.tsx          4-col responsive grid + honesty footnote
  CtfPractice.tsx             "Proof of Continuous Practice" — HTB + THM cards
  Achievements.tsx            vertical timeline of milestones
  Contact.tsx                 contact card: email/phone/socials/resume + closing line
  Footer.tsx                  black footer with quick links, socials, contact
  Reveal.tsx                  shared fade-up wrapper (Framer Motion, prefers-reduced-motion aware)
  Ticker.tsx                  marquee animation
src/lib/links.ts              centralized social/resume URLs
src/assets/portrait.png       generated stylized placeholder portrait
public/placeholder.png        copy of the same so `<img src="/placeholder.png">` works as specified
```

## Content (locked from brief)
- Hero headline: **OFFENSIVE SECURITY IS A MINDSET** with "OFFENSIVE SECURITY" in #5B88B2
- Subheadline + two CTAs (View Projects → #projects, Contact Me → #contact)
- Social row: GitHub, LinkedIn, Hack The Box, TryHackMe
- About: KCG College copy, stat cards (Security Labs Practiced, Projects Built, Certifications, CTF Platforms)
- Experience: Edunet Foundation (Jan–Feb 2025), Microsoft & Edunet (May–Jun 2025) — framed as internships
- Projects: ShredX, Steganography Web App, HetOTA — each with Problem / Action / Outcome
- Skills: three categories with the exact tag lists
- Certifications: 4 items + honesty footnote
- CTF: HTB + TryHackMe practice proof
- Achievements: full milestone list incl. NYX-CTF for CyberFest'26
- Contact: email `a.rithiksharma@gmail.com`, phone `+91 9363460499`, all socials + resume
- Footer: copyright, quick links, socials, email, phone

## Links (used everywhere required)
- LinkedIn: https://www.linkedin.com/in/rithiksharma19/
- GitHub: https://github.com/Rithik-sharma12
- HTB: https://profile.hackthebox.com/profile/019e2776-865d-707c-a074-4e4072edbb60
- THM: https://tryhackme.com/p/RithikSharma
- Resume (Download CV): https://drive.google.com/drive/folders/1rzRfOTjqrmRU5yTc3KUeTBAOnNt-uhah?usp=sharing

All external links use `target="_blank" rel="noopener noreferrer"`.

## Top status bar
- Black bg, cream text, thin height
- Left: Framer Motion marquee — `LATEST: Organizing NYX-CTF for CyberFest'26`
- Right: GitHub + LinkedIn icons (Lucide)

## Main navigation
- Sticky, navy background, logo **R. SHARMA**
- Items: Home, About, Experience, Projects, Skills, Certifications, Achievements, Contact (no Research, no Blog)
- Right CTA: **Download CV** (steel button → resume URL)
- Mobile: hamburger → accessible Sheet drawer; active section underlined via scroll-spy `IntersectionObserver`

## Hero portrait placeholder
Generate a stylized, on-brand neutral portrait card illustration (silhouette of a professional in dark navy/steel palette, no face details) saved to `src/assets/portrait.png` AND copied to `public/placeholder.png` so the exact `<img src="/placeholder.png" alt="Rithik Sharma">` from the brief still works. Trust chips below: "Hack The Box Active", "TryHackMe Active", "Security Projects Built".

## Motion
- `Reveal` wrapper: fade-up with `whileInView`, `viewport={{ once: true, margin: "-80px" }}`
- Card hover lift (`y: -4`, soft shadow)
- Button hover transitions
- Counter animation on About stats
- Ticker loop in top bar
- Smooth anchor scrolling via `scroll-behavior: smooth` and `scroll-margin-top` on sections
- Respects `prefers-reduced-motion`

## Accessibility & responsive
- Semantic `<header> <nav> <main> <section id> <footer>`, single `<h1>`, logical heading order
- Keyboard-reachable nav, visible focus rings using steel
- Color pairings checked for AA contrast (navy/cream, cream/ink, steel/ink, navy/cream)
- Layout stacks cleanly on mobile; nav becomes drawer; grids collapse to single column; touch targets ≥ 44px
- Images have meaningful alt text

## SEO
- `head()` in `src/routes/index.tsx`: title "Rithik Sharma — Cybersecurity Engineering Portfolio", description focused on VAPT / IoT / DevSecOps / cloud security, OG + Twitter tags, no og:image (no fitting asset yet)

## Out of scope (per your rules)
- No research section
- No blog section in nav
- No fabricated senior experience — copy framed as final-year student with internships, labs, CTFs
