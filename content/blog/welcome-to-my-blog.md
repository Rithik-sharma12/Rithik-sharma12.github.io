---
title: Welcome — Why I'm Writing This
category: Learning Notes
tags: introduction, blogging
excerpt: A short note on why this blog exists, what I'll be writing about, and how I want it to feel — closer to a lab notebook than a marketing page.
publishDate: 2026-07-01
readingTime: 2 min read
---

I've been putting off starting a blog for a while. Every time I sat down to write one, it turned into a landing page — polished, sanitised, and useless to anyone who wanted to learn how the thing actually worked. So this is the reset.

## What this space is for

This is where I'll keep a public, honest record of what I'm working on and what I'm learning. Concretely, three kinds of posts:

- **CTF write-ups** — machines I've rooted on Hack The Box and TryHackMe, plus the occasional CTF challenge. Full chains, not just the flag.
- **Project deep dives** — the reasoning and trade-offs behind things I've built. **SecureOTA** (secure heterogeneous firmware updates) and **ShredX** (NIST SP 800-88 data sanitisation in Rust) are first in the queue.
- **Hacking walkthroughs and learning notes** — smaller things: a tool I finally understood, a paper I liked, a config that bit me.

## What it isn't

It isn't a place for "5 tips to break into cybersec" or vague thought-leadership. I don't have the mileage for that, and the internet has enough of it already. If a post doesn't have code, a command trace, a diagram, or a specific decision I had to make, it doesn't get published.

## How it's organised

Every post gets a **category** and a few **tags**, and the index page lets you filter by both. If you only care about CTFs, filter to CTFs. If you're here for the IoT / firmware stuff, filter to project deep dives. I'd rather you read one post that's relevant than scroll past ten that aren't.

## What's next

The next few posts are already in the queue:

1. **SecureOTA — the threat model**, and why signing alone isn't enough for heterogeneous fleets.
2. **ShredX — why Rust for a wipe tool**, and what "verifiable destruction" actually means under SP 800-88.
3. A HTB write-up as soon as I finish the box I'm currently stuck on.

If any of that sounds interesting, the RSS-style flow is simple: check back, or ping me on any of the links in the footer.

Thanks for reading the first one.
