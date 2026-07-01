import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Clock, Search } from "lucide-react";
import {
  CATEGORIES,
  CATEGORY_STYLES,
  formatDate,
  getAllPosts,
  type BlogCategory,
} from "@/lib/blog";

type Filter = "All" | BlogCategory;

const ALL_FILTERS: Filter[] = ["All", ...CATEGORIES];

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Rithik Sharma" },
      {
        name: "description",
        content:
          "Write-ups, walkthroughs, and things I'm learning — CTFs, project deep dives, and cybersecurity notes by Rithik Sharma.",
      },
      { property: "og:title", content: "Blog — Rithik Sharma" },
      {
        property: "og:description",
        content:
          "Write-ups, walkthroughs, and things I'm learning — CTFs, project deep dives, and cybersecurity notes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const posts = getAllPosts();
  const [active, setActive] = useState<Filter>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      if (active !== "All" && p.category !== active) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [posts, active, query]);

  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-24 h-[420px] w-[420px] rounded-full bg-steel/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-10 h-[360px] w-[360px] rounded-full bg-steel/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        {/* Header */}
        <div className="text-center">
          <h1
            className="font-display uppercase leading-[1.05] text-cream"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)" }}
          >
            Blog
          </h1>
          <div className="mx-auto mt-4 h-1.5 w-16 rounded-full bg-steel sm:w-20" />
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-cream/75 sm:text-base lg:text-lg">
            Write-ups, walkthroughs, and things I'm learning.
          </p>
        </div>

        {/* Filter + search */}
        <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {ALL_FILTERS.map((f) => {
              const isActive = active === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActive(f)}
                  className={`inline-flex items-center whitespace-nowrap rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.08em] transition ${
                    isActive
                      ? "bg-steel text-paper shadow-md shadow-steel/30"
                      : "border border-cream/20 bg-navy-deep/60 text-cream hover:border-steel hover:text-steel"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>

          <label className="relative block w-full lg:max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-cream/50" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search title or tag…"
              className="w-full rounded-full border border-cream/20 bg-navy-deep/70 py-2.5 pl-9 pr-4 text-sm text-cream placeholder:text-cream/40 focus:border-steel focus:outline-none"
            />
          </label>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="mt-16 rounded-2xl border border-cream/15 bg-navy-deep/60 p-10 text-center text-sm text-cream/70">
            No posts match that filter yet.
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => {
              const s = CATEGORY_STYLES[p.category];
              return (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group flex h-full flex-col rounded-2xl border border-cream/15 bg-navy-deep/70 p-6 shadow-sm transition hover:-translate-y-1.5 hover:border-steel hover:shadow-lg hover:shadow-steel/20"
                >
                  <span
                    className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ring-1 ${s.bg} ${s.text} ${s.ring}`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
                    {p.category}
                  </span>
                  <h2 className="mt-4 font-display text-lg uppercase leading-tight tracking-tight text-cream group-hover:text-steel sm:text-xl">
                    {p.title}
                  </h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-cream/75">
                    {p.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-cream/10 pt-4 font-mono-tech text-[10px] uppercase tracking-[0.14em] text-cream/60">
                    <span>{formatDate(p.publishDate)}</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {p.readingTime}
                    </span>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-steel">
                    Read <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
