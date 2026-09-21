import { HugeiconsIcon } from "@hugeicons/react";
import { ExternalLink, Calendar01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import Image from "next/image";
import type { BlogPostWithReadTime } from "@/lib/blog-posts";

type LatestArticlesSectionProps = {
  showAllLink?: boolean;
  posts: BlogPostWithReadTime[];
};

export default function LatestArticlesSection({
  showAllLink = true,
  posts,
}: LatestArticlesSectionProps) {
  return (
    <section>
      <div className="mx-auto h-full max-w-5xl border-x">
        <div className="flex grow flex-col justify-center border-b bg-linear-to-br from-muted/40 via-background to-muted/20 px-4 py-10 sm:py-14 md:py-16 md:items-center">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Blog
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Latest Articles</h2>
          <p className="mt-1 text-sm sm:text-base text-muted-foreground">
            Insights from my development journey
          </p>
        </div>

        <BorderSeparator />

        <div className="grid">
          {posts.map((article, index) => (
            <article
              key={article.slug}
              className={`flex flex-col justify-between border-b ${
                index === posts.length - 1 ? "border-b-0" : ""
              }`}
            >
              <div className="flex items-center justify-between gap-3 border-b bg-secondary/50 p-3.5 sm:p-4 dark:bg-secondary/20">
                <Link
                  href={`/blog/${article.slug}`}
                  className="group flex items-center gap-2 sm:gap-3 text-foreground hover:text-primary min-w-0"
                >
                  <HugeiconsIcon
                    icon={ExternalLink}
                    size={18}
                    className="shrink-0 text-muted-foreground transition-transform rotate-0 group-hover:-rotate-45"
                  />
                  <h3 className="font-heading font-medium text-base sm:text-lg tracking-wider truncate">
                    {article.title}
                  </h3>
                </Link>
                <span className="text-xs text-muted-foreground shrink-0">
                  {article.readTime}
                </span>
              </div>

              <div className="flex flex-col md:flex-row md:items-stretch">
                <div className="relative overflow-hidden border-b md:border-b-0 md:border-r border-border/60 md:w-64 lg:w-72 md:shrink-0">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={440}
                    height={280}
                    className="h-44 sm:h-48 md:h-full w-full object-cover"
                    sizes="(min-width: 1024px) 288px, (min-width: 768px) 256px, 100vw"
                  />
                </div>

                <div className="flex flex-col justify-between gap-3 p-3.5 sm:p-4 flex-1">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs text-muted-foreground">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-muted/40 px-2 py-0.5 text-[11px] sm:text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="border-t px-3.5 sm:px-4 py-2.5 sm:py-3">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon icon={Calendar01Icon} size={14} />
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <a
                    href="https://github.com/monushah108"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    By monu
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {showAllLink && (
          <div className="border-t px-4 py-4 sm:py-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors min-h-[44px]"
            >
              View all articles
              <HugeiconsIcon icon={ExternalLink} size={14} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

function BorderSeparator({ className }: React.ComponentProps<"div">) {
  return (
    <div
      className={`relative inset-x-0 h-px w-full border-b ${className ?? ""}`}
    />
  );
}
