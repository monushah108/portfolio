import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";

type BlogPostLayoutProps = {
  title: string;
  excerpt?: string;
  image?: string;
  date?: string;
  author?: string;
  readTime?: string;
  tags?: string[];
  mediumUrl?: string;
  slug?: string;
  canonicalUrl?: string;
  children: ReactNode;
};

export default function BlogPostLayout({
  title,
  excerpt,
  image,
  date,
  author,
  readTime,
  tags,
  mediumUrl,
  slug,
  canonicalUrl,
  children,
}: BlogPostLayoutProps) {
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  const resolvedCanonicalUrl =
    canonicalUrl ?? (slug ? `https://monushah.vercel.app/blog/${slug}` : undefined);

  const structuredData: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: excerpt,
    image: image ? [image] : undefined,
    datePublished: date,
    dateModified: date,
    author: {
      "@type": "Person",
      name: author ?? "monu",
      url: "https://monushah.vercel.app",
    },
    publisher: {
      "@type": "Person",
      name: "monu",
      url: "https://monushah.vercel.app",
      image: "https://monushah.vercel.app/profile.jpg",
    },
    inLanguage: "en",
    keywords: tags?.length ? tags.join(", ") : undefined,
    mainEntityOfPage: resolvedCanonicalUrl,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="mx-auto h-full max-w-5xl border-x">
        <div className="flex items-center gap-3 border-b px-4 py-3">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors"
          >
            <HugeiconsIcon
              icon={ArrowLeft01Icon}
              size={18}
              className="text-muted-foreground transition-transform group-hover:-translate-x-0.5"
            />
            Back to all posts
          </Link>
          <div className="h-3 flex-1 border-y border-border/60 stripe-bg-12" />
          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-muted-foreground">
            Blog
          </span>
        </div>

        <div className="border-b bg-secondary/50 px-4 py-5 sm:py-6 dark:bg-secondary/20">
          <div className="space-y-2 sm:space-y-3">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl">
              {title}
            </h1>
            {excerpt && (
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {excerpt}
              </p>
            )}
          </div>
        </div>

        {image && (
          <div className="border-b">
            <Image
              src={image}
              alt={title}
              width={1200}
              height={630}
              className="h-52 sm:h-72 md:h-[28rem] w-full object-cover"
              priority
            />
          </div>
        )}

        <div className="h-8 sm:h-10 border-b border-border/60 stripe-bg-12" />

        <div className="border-b">
          <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-muted-foreground">
            <div className="flex flex-wrap items-center gap-2">
              <a
                href="https://github.com/monushah108"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/90 transition-colors hover:text-foreground"
              >
                {author ?? "monu"}
              </a>
              <span className="opacity-60">•</span>
              {formattedDate && date ? (
                <time dateTime={date}>{formattedDate}</time>
              ) : (
                <span>—</span>
              )}
              <span className="opacity-60">•</span>
              <span>{readTime ?? "1 min read"}</span>
            </div>

            {tags?.length ? (
              <div className="flex flex-wrap items-center gap-1.5 text-xs">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-muted/40 px-2 py-0.5 text-[11px] sm:text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <div className="px-4 py-6 sm:py-10">
          <article className="space-y-6 blog-content overflow-x-hidden">{children}</article>
        </div>

        <div className="border-t">
          <div className="flex flex-col gap-4 px-4 py-5 sm:py-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground">
                Enjoyed this read?
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Clap or leave a response on Medium.
              </p>
            </div>

            {mediumUrl ? (
              <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2.5 sm:gap-3">
                <a
                  href={mediumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-border/60 px-4 py-2.5 text-xs sm:text-sm font-medium text-foreground/90 transition-colors hover:border-primary/60 hover:text-foreground min-h-[44px]"
                >
                  Clap on Medium
                </a>
                <a
                  href={`${mediumUrl}?responses=1`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-border/60 px-4 py-2.5 text-xs sm:text-sm font-medium text-foreground/90 transition-colors hover:border-primary/60 hover:text-foreground min-h-[44px]"
                >
                  Write a response
                </a>
              </div>
            ) : (
              <div className="h-2 w-full max-w-xs border-y border-border/60 stripe-bg-10" />
            )}
          </div>
        </div>

        <div className="h-8 border-t border-border/60 stripe-bg-12" />
      </div>
    </main>
  );
}
