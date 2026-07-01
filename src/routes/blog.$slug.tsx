import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { ArrowLeft, Clock } from "lucide-react";
import "highlight.js/styles/github-dark.css";
import {
  CATEGORY_STYLES,
  formatDate,
  getPostBySlug,
} from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Post not found — Blog" }] };
    return {
      meta: [
        { title: `${post.title} — Rithik Sharma` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: PostNotFound,
  component: PostPage,
});

function PostNotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
      <h1 className="font-display text-3xl uppercase text-cream">
        Post not found
      </h1>
      <p className="mt-3 text-sm text-cream/70">
        That post doesn't exist — it may have been renamed.
      </p>
      <Link
        to="/blog"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-steel px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-paper transition hover:bg-steel-soft"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> Back to blog
      </Link>
    </section>
  );
}

function PostPage() {
  const { post } = Route.useLoaderData() as { post: NonNullable<ReturnType<typeof getPostBySlug>> };
  const s = CATEGORY_STYLES[post.category];

  return (
    <article className="relative overflow-hidden bg-navy">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-16 h-[380px] w-[380px] rounded-full bg-steel/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-cream/70 transition hover:text-steel"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to blog
        </Link>

        <header className="mt-8 border-b border-cream/10 pb-8">
          <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono-tech uppercase tracking-[0.14em] text-cream/60">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ring-1 ${s.bg} ${s.text} ${s.ring}`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" /> {post.readingTime}
            </span>
            <span>{formatDate(post.publishDate)}</span>
          </div>

          <h1
            className="mt-5 font-display uppercase leading-[1.1] text-cream"
            style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}
          >
            {post.title}
          </h1>

          {post.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {post.tags.map((t: string) => (
                <span
                  key={t}
                  className="rounded-full border border-cream/20 bg-navy-deep/60 px-2.5 py-1 font-mono-tech text-[10px] uppercase tracking-[0.14em] text-cream/70"
                >
                  #{t}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose-blog mt-10">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
            components={{
              img: ({ src, alt }) => (
                <figure className="my-8">
                  <img
                    src={typeof src === "string" ? src : ""}
                    alt={alt ?? ""}
                    loading="lazy"
                    className="w-full rounded-xl border border-cream/15"
                  />
                  {alt && (
                    <figcaption className="mt-2 text-center font-mono-tech text-[11px] uppercase tracking-[0.14em] text-cream/60">
                      {alt}
                    </figcaption>
                  )}
                </figure>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
