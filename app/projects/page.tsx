import type { Metadata } from "next";
import { baseMetadata } from "@/lib/seo";
import ProjectsSection from "@/components/ProjectsSection";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Projects",
  description: "Selected projects and experiments by monu.",
  alternates: {
    canonical: "https://monushah.vercel.app/projects",
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Projects | monu",
    description: "Selected projects and experiments by monu.",
    url: "https://monushah.vercel.app/projects",
    type: "website",
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Projects | monu",
    description: "Selected projects and experiments by monu.",
  },
};

export default function ProjectsPage() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-5xl border-x">
          <div className="px-4 py-10 sm:py-14 bg-linear-to-br from-muted/40 via-background to-muted/20">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Projects
            </p>
            <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              What I’m Building
            </h1>
            <p className="mt-2 sm:mt-3 text-muted-foreground text-sm sm:text-base">
              Real-world projects, experiments, and systems I’m actively working
              on.
            </p>
          </div>
        </div>
      </section>

      <ProjectsSection
        showHeader={false}
        showAllLink={false}
        sectionClassName="pt-0"
      />
      <div className="section-connector" />
    </div>
  );
}
