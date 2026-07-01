import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import { LINKS, NAV_ITEMS } from "@/lib/links";

function hrefFor(item: { href: string }, atHome: boolean) {
  if (item.href.startsWith("#")) return atHome ? item.href : `/${item.href}`;
  return item.href;
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const atHome = pathname === "/";

  useEffect(() => {
    if (!atHome) return;
    const ids = NAV_ITEMS.filter((i) => i.href.startsWith("#")).map((i) => i.href.slice(1));
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [atHome]);

  return (
    <nav className="sticky top-0 z-50 w-full bg-navy/85 backdrop-blur supports-[backdrop-filter]:bg-navy/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <ul className="hidden flex-1 flex-wrap items-center gap-1.5 xl:flex">
          {NAV_ITEMS.map((item) => {
            const isHash = item.href.startsWith("#");
            const id = isHash ? item.href.slice(1) : item.href;
            const isActive = isHash ? atHome && active === id : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <a
                  href={hrefFor(item, atHome)}
                  className={`inline-flex items-center whitespace-nowrap rounded-full px-3 py-2 text-[11px] font-bold uppercase tracking-[0.06em] transition ${
                    isActive
                      ? "bg-steel text-paper shadow-md shadow-steel/30"
                      : "bg-steel/95 text-paper hover:bg-steel-soft hover:-translate-y-0.5"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="ml-auto flex items-center gap-2">
          <a
            href={LINKS.resume}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fbf5e7", backgroundColor: "#1a1410" }}
            className="hidden items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition hover:opacity-90 sm:inline-flex"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-steel text-paper xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-cream/10 bg-navy xl:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={hrefFor(item, atHome)}
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-steel px-4 py-3 text-center text-sm font-bold uppercase tracking-[0.1em] text-paper"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-cream px-4 py-3 text-sm font-bold uppercase tracking-[0.12em] text-paper"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
