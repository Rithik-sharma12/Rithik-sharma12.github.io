// Blog content loader — reads markdown files from /content/blog with a tiny
// frontmatter parser. Add a new post by dropping a .md file in that folder.

export type BlogCategory =
  | "CTF Write-ups"
  | "Project Deep Dives"
  | "Hacking Walkthroughs"
  | "Learning Notes";

export const CATEGORIES: BlogCategory[] = [
  "CTF Write-ups",
  "Project Deep Dives",
  "Hacking Walkthroughs",
  "Learning Notes",
];

export const CATEGORY_STYLES: Record<
  BlogCategory,
  { bg: string; text: string; ring: string; dot: string }
> = {
  "CTF Write-ups": {
    bg: "bg-[#c8202a]",
    text: "text-paper",
    ring: "ring-[#c8202a]/40",
    dot: "bg-paper",
  },
  "Project Deep Dives": {
    bg: "bg-[#1a1410]",
    text: "text-paper",
    ring: "ring-[#1a1410]/40",
    dot: "bg-[#ff4d2e]",
  },
  "Hacking Walkthroughs": {
    bg: "bg-[#7a0f17]",
    text: "text-paper",
    ring: "ring-[#7a0f17]/40",
    dot: "bg-[#ff4d2e]",
  },
  "Learning Notes": {
    bg: "bg-[#e8dbc1]",
    text: "text-[#1a1410]",
    ring: "ring-[#1a1410]/20",
    dot: "bg-[#c8202a]",
  },
};

export interface BlogPost {
  slug: string;
  title: string;
  category: BlogCategory;
  tags: string[];
  excerpt: string;
  publishDate: string; // ISO
  readingTime: string;
  content: string; // raw markdown body
}

// Vite: eagerly bundle every markdown file under /content/blog as raw text.
const raw = import.meta.glob("/content/blog/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

function parseFrontmatter(source: string): { data: Record<string, string>; body: string } {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: source };
  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (key) data[key] = value;
  }
  return { data, body: match[2] };
}

function slugFromPath(path: string): string {
  const file = path.split("/").pop() ?? path;
  return file.replace(/\.md$/, "");
}

const posts: BlogPost[] = Object.entries(raw)
  .map(([path, source]) => {
    const { data, body } = parseFrontmatter(source);
    return {
      slug: slugFromPath(path),
      title: data.title ?? "Untitled",
      category: (data.category as BlogCategory) ?? "Learning Notes",
      tags: (data.tags ?? "")
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      excerpt: data.excerpt ?? "",
      publishDate: data.publishDate ?? "",
      readingTime: data.readingTime ?? "",
      content: body.trim(),
    } satisfies BlogPost;
  })
  .sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1));

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
