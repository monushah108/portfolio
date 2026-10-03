"use client";

import type { ReactNode } from "react";
import { TechIcons } from "./icons/TechIcons";
import { cn } from "@/lib/utils";

// Custom SVG Icons for technologies not currently in TechIcons
const JavaScriptIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 128 128" className={className} aria-hidden="true">
    <path fill="#F7DF1E" d="M0 0h128v128H0z" />
    <path
      d="m67.312 103.93 9.324-5.632c2.064 3.376 4.648 6.04 8.784 6.04 4.096 0 6.696-1.744 6.696-8.296V58.33h11.456v37.8c0 12.352-7.144 17.848-17.768 17.848-9.064 0-14.864-4.816-18.492-10.048zm-35.32-5.728 9.328-5.744c2.6 4.312 6.024 7.576 11.232 7.576 4.768 0 7.824-2.384 7.824-5.696 0-3.928-3.136-5.328-8.4-7.592l-2.88-1.232c-8.28-3.528-13.784-8.008-13.784-17.384 0-8.624 6.576-15.184 16.928-15.184 7.376 0 12.72 2.8 16.328 8.872l-8.912 5.712c-2-3.488-4.32-4.952-7.416-4.952-3.52 0-5.84 2.184-5.84 5.048 0 3.52 2.368 4.888 7.36 7.04l2.88 1.24c9.808 4.224 14.928 8.528 14.928 17.848 0 10.224-8.04 16.032-18.72 16.032-10.536 0-16.936-5.184-20.976-11.536z"
    />
  </svg>
);

const PythonIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 128 128" className={className} aria-hidden="true">
    <path
      fill="#387EB8"
      d="M63.5 6.5c-7.9 0-15.3.7-21.7 2-18.4 3.7-21.7 11.4-21.7 25.6v19.1h43.4v6.4H20.6C6.5 59.6 0 68.2 0 84.7s12.5 24.3 27.5 24.3h8.3v-12.2c0-8.9 7.6-16.7 16.5-16.7h29.2c7.2 0 13.1-6 13.1-13.1V24.5c0-14.7-12.8-18-31.1-18zm-12.1 7.7c2.7 0 4.8 2.2 4.8 4.8s-2.2 4.8-4.8 4.8-4.8-2.2-4.8-4.8 2.1-4.8 4.8-4.8z"
    />
    <path
      fill="#FFE052"
      d="M64.5 121.5c7.9 0 15.3-.7 21.7-2 18.4-3.7 21.7-11.4 21.7-25.6V74.8H64.5v-6.4h43.4c14.1 0 20.6-8.6 20.6-25.1s-12.5-24.3-27.5-24.3h-8.3v12.2c0 8.9-7.6 16.7-16.5 16.7H47c-7.2 0-13.1 6-13.1 13.1v42.5c0 14.7 12.8 18 30.6 18zm12.1-7.7c-2.7 0-4.8-2.2-4.8-4.8s2.2-4.8 4.8-4.8 4.8 2.2 4.8 4.8-2.1 4.8-4.8 4.8z"
    />
  </svg>
);

const CPlusPlusIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 128 128" className={className} aria-hidden="true">
    <path
      fill="#00599C"
      d="M64 1.5C29.5 1.5 1.5 29.5 1.5 64s28 62.5 62.5 62.5 62.5-28 62.5-62.5S98.5 1.5 64 1.5zm0 18.6c24.2 0 43.9 19.7 43.9 43.9S88.2 107.9 64 107.9 20.1 88.2 20.1 64 39.8 20.1 64 20.1z"
    />
    <path
      fill="#004482"
      d="M78.6 42.6c-4.4-4.4-10.2-6.8-16.5-6.8-12.8 0-23.2 10.4-23.2 23.2s10.4 23.2 23.2 23.2c6.3 0 12.1-2.4 16.5-6.8l8.9 8.9C81.4 90.4 72.1 94 62.1 94 45.5 94 32 80.5 32 63.9S45.5 33.8 62.1 33.8c10 0 19.3 3.6 25.4 9.7l-8.9 9.1z"
    />
    <path
      fill="#00599C"
      d="M89.2 59.2h5v-5h4.6v5h5v4.6h-5v5h-4.6v-5h-5v-4.6zm19.8 0h5v-5h4.6v5h5v4.6h-5v5H114v-5h-5v-4.6z"
    />
  </svg>
);

const SqlIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const HtmlIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 128 128" className={className} aria-hidden="true">
    <path fill="#E34F26" d="M19.4 117.8L9.2 3.4h109.6l-10.2 114.4L64 128z" />
    <path fill="#EF652A" d="M64 118.7l37.8-10.5 8.7-97.4H64z" />
    <path
      fill="#EBEBEB"
      d="M64 49.3H46.6l-1.2-13.6H64V22.4H30.4l3.6 40.2H64zm0 39.4l-.2.1-15.8-4.3-1-11.4H33.6l2 22.8L64 103.5z"
    />
    <path
      fill="#FFF"
      d="M63.9 49.3v13.3h16.2l-1.5 17.1-14.7 4v13.8l27.1-7.5.3-2.9 3.2-35.8.2-2H63.9zm0-26.9v13.3h33.4l.3-3.1 1-10.2z"
    />
  </svg>
);

const CssIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 128 128" className={className} aria-hidden="true">
    <path fill="#1572B6" d="M19.4 117.8L9.2 3.4h109.6l-10.2 114.4L64 128z" />
    <path fill="#33A9DC" d="M64 118.7l37.8-10.5 8.7-97.4H64z" />
    <path
      fill="#EBEBEB"
      d="M64 56.5H49.1l-1.1-12.7H64V30.5H33.8l3.4 39.3H64zm0 40.5l-.2.1-17.7-4.8-1.1-12.8H31.6l2.3 25.5L64 112.5z"
    />
    <path
      fill="#FFF"
      d="M63.9 69.8v13.3l17.7-4.8 1.8-20.1H63.9v11.6h6.4l-.9 9.8zM63.9 30.5v13.3h31.1l.9-10.3.3-3H63.9z"
    />
  </svg>
);

const AuthIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
    <rect x="15" y="14" width="6" height="5" rx="1" />
    <path d="M18 14v-2a1 1 0 0 0-2 0v2" />
  </svg>
);

const AuthorizationIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const DockerIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.186.185.186m0 2.715h2.118a.187.187 0 0 0 .186-.186V6.29a.187.187 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.887c0 .103.082.186.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.186H8.1a.185.185 0 0 0-.185.185v1.887c0 .103.083.186.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.186H5.136a.186.186 0 0 0-.186.185v1.887c0 .103.084.186.186.186m5.893 2.715h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186h-2.12a.186.186 0 0 0-.185.185v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H2.208a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185m21.616-.628c-.313-.198-.823-.298-1.507-.298-.445 0-.895.047-1.341.14-.143-.88-.707-1.427-1.458-1.427-.474 0-.912.232-1.229.624-.316.39-.462.909-.413 1.459-.444.186-.807.458-1.076.812-.44.577-.665 1.343-.665 2.274 0 .422.046.812.138 1.168H1.054c-.217 0-.414.095-.55.26a.7.7 0 0 0-.126.577C.936 21.037 4.258 24 10.998 24c6.723 0 11.233-3.473 12.39-9.528.096-.502.146-1.002.146-1.503 0-1.144-.378-1.92-.71-2.13" />
  </svg>
);

const GitIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 128 128" className={className} fill="#F05032" aria-hidden="true">
    <path d="M125.7 57.8L70.2 2.3c-3-3-8-3-11.1 0L47.5 13.9l14 14c3.2-1.1 7-.3 9.5 2.2 2.5 2.5 3.3 6.3 2.2 9.5l13.5 13.5c3.2-1.1 7-.3 9.5 2.2 3.6 3.6 3.6 9.4 0 13s-9.4 3.6-13 0c-2.6-2.6-3.4-6.5-2.2-9.7L67.9 45.5v32.2c.8.4 1.6.9 2.3 1.6 3.6 3.6 3.6 9.4 0 13s-9.4 3.6-13 0c-3.6-3.6-3.6-9.4 0-13 .8-.8 1.8-1.4 2.8-1.8V44.9c-1-.4-2-1-2.8-1.8-2.6-2.6-3.3-6.4-2.2-9.6L41.3 19.8 2.3 58.8c-3 3-3 8 0 11.1l55.5 55.5c3 3 8 3 11.1 0l56.8-56.5c3.1-3.1 3.1-8.1 0-11.1z" />
  </svg>
);

const GitHubActionsIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <circle cx="19" cy="5" r="2" />
    <circle cx="5" cy="19" r="2" />
    <path d="M5 17A7 7 0 0 1 12 9" />
    <path d="M12 15a7 7 0 0 1 7-7" />
  </svg>
);

const CiCdIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21.5 2v6h-6" />
    <path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
    <path d="M2.5 22v-6h6" />
  </svg>
);

const PostmanIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 128 128" className={className} fill="#FF6C37" aria-hidden="true">
    <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm32.8 45.4L63.5 67.2c-.8.5-1.8.8-2.8.8-.9 0-1.8-.3-2.6-.8l-9.9-6.3 33.7-18.7c1.7-.9 3.5.9 2.5 2.5l-4.4 6.7zM42.3 57.6l10.2 6.5-11.8 17.8c-.8 1.2-2.4 1.5-3.6.7s-1.5-2.4-.7-3.6l5.9-8.9-3.7-2.4c-1.3-.8-1.7-2.5-.9-3.8.8-1.2 2.4-1.6 3.7-.8l4.4 2.8 1.5-2.3-5.2-3.3c-1.3-.8-1.7-2.5-.9-3.8.8-1.3 2.5-1.7 3.8-.9l5.9 3.7 1.5-2.3-5.2-3.3c-1.3-.8-1.7-2.5-.9-3.8.8-1.3 2.5-1.7 3.8-.9l6.7 4.3 1.5-2.3-5.2-3.3c-1.3-.8-1.7-2.5-.9-3.8.8-1.3 2.5-1.7 3.8-.9l7.7 4.9 1.5-2.3-5.2-3.3c-1.3-.8-1.7-2.5-.9-3.8.8-1.3 2.5-1.7 3.8-.9l10.1 6.4-14.7 22.2z" />
  </svg>
);

const VercelIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 1 24 22H0z" />
  </svg>
);

const LinuxIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12.012 0c-3.18 0-5.758 2.56-5.758 5.72v.227C5.228 6.38 4.5 7.51 4.5 8.81c0 1.25.666 2.34 1.654 2.87-.04.34-.06.69-.06 1.05 0 4.14 2.65 7.5 5.918 7.5s5.918-3.36 5.918-7.5c0-.36-.02-.71-.06-1.05.988-.53 1.654-1.62 1.654-2.87 0-1.3-.728-2.43-1.754-2.863V5.72c0-3.16-2.578-5.72-5.758-5.72zm-1.75 4.34c.48 0 .87.39.87.87s-.39.87-.87.87-.87-.39-.87-.87.39-.87.87-.87zm3.5 0c.48 0 .87.39.87.87s-.39.87-.87.87-.87-.39-.87-.87.39-.87.87-.87zm-1.75 2.18c.95 0 1.7.53 1.7 1.18 0 .65-.75 1.18-1.7 1.18s-1.7-.53-1.7-1.18c0-.65.75-1.18 1.7-1.18zM3.46 19.38c-.85.34-1.46 1.06-1.46 1.95 0 1.47 1.66 2.67 3.71 2.67 1.25 0 2.36-.45 3.03-1.17-1.7-.42-3.16-1.68-4.28-3.45zm17.08 0c-1.12 1.77-2.58 3.03-4.28 3.45.67.72 1.78 1.17 3.03 1.17 2.05 0 3.71-1.2 3.71-2.67 0-.89-.61-1.61-1.46-1.95z" />
  </svg>
);

type TechItem = {
  name: string;
  category: "Languages" | "Frontend" | "Backend" | "Tools";
  icon: (props: { className?: string }) => ReactNode;
};

// Exact user-specified technologies
const allTechItems: TechItem[] = [
  // Languages
  { name: "JavaScript", category: "Languages", icon: JavaScriptIcon },
  { name: "TypeScript", category: "Languages", icon: TechIcons.TypeScript },
  { name: "Python", category: "Languages", icon: PythonIcon },
  { name: "C++", category: "Languages", icon: CPlusPlusIcon },
  { name: "SQL", category: "Languages", icon: SqlIcon },
  { name: "HTML", category: "Languages", icon: HtmlIcon },
  { name: "CSS", category: "Languages", icon: CssIcon },

  // Frontend
  { name: "React.js", category: "Frontend", icon: TechIcons.React },
  { name: "Next.js", category: "Frontend", icon: TechIcons.NextJs },
  { name: "Redux Toolkit", category: "Frontend", icon: TechIcons.Redux },
  { name: "Zustand", category: "Frontend", icon: TechIcons.Zustand },
  { name: "Tailwind CSS", category: "Frontend", icon: TechIcons.Tailwind },
  { name: "Shadcn/UI", category: "Frontend", icon: TechIcons.Shadcn },

  // Backend
  { name: "Node.js", category: "Backend", icon: TechIcons.NodeJS },
  { name: "Express.js", category: "Backend", icon: TechIcons.Express },
  { name: "MongoDB", category: "Backend", icon: TechIcons.MongoDB },
  { name: "Redis", category: "Backend", icon: TechIcons.Redis },
  { name: "Authentication", category: "Backend", icon: AuthIcon },
  { name: "Authorization", category: "Backend", icon: AuthorizationIcon },
  { name: "Socket.io", category: "Backend", icon: TechIcons.SocketIO },

  // Tools
  { name: "Docker", category: "Tools", icon: DockerIcon },
  { name: "Git", category: "Tools", icon: GitIcon },
  { name: "GitHub Actions", category: "Tools", icon: GitHubActionsIcon },
  { name: "CI/CD", category: "Tools", icon: CiCdIcon },
  { name: "Postman", category: "Tools", icon: PostmanIcon },
  { name: "Vercel", category: "Tools", icon: VercelIcon },
  { name: "Linux", category: "Tools", icon: LinuxIcon },
];

// Split into two balanced rows for marquee
const marqueeRow1: TechItem[] = [
  ...allTechItems.filter((t) => t.category === "Languages"),
  ...allTechItems.filter((t) => t.category === "Frontend"),
];

const marqueeRow2: TechItem[] = [
  ...allTechItems.filter((t) => t.category === "Backend"),
  ...allTechItems.filter((t) => t.category === "Tools"),
];

export default function SkillsSection({
  sectionClassName,
}: {
  sectionClassName?: string;
}) {
  return (
    <section id="skills" className={cn(sectionClassName)}>
      <div className="mx-auto h-full max-w-5xl border-x">
        {/* Section Header */}
        <div className="flex grow flex-col justify-center border-b bg-linear-to-br from-muted/40 via-background to-muted/20 px-4 py-8 sm:py-12 md:items-center text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Capabilities & Stack
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Skills & Technologies
          </h2>
          <p className="mt-1 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            The core languages, frameworks, backend services, and developer tools I build with
          </p>
        </div>

        <div className="relative inset-x-0 h-px w-full border-b" />

        {/* Marquee Animation Showcase */}
        <div className="relative overflow-hidden py-8 sm:py-10 border-b bg-secondary/15">
          {/* Left & Right Gradient Fade Masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-14 sm:w-28 bg-linear-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-14 sm:w-28 bg-linear-to-l from-background to-transparent z-10" />

          {/* Marquee Track 1 (Leftward) */}
          <div className="animate-marquee gap-3 sm:gap-4 py-2">
            {[...marqueeRow1, ...marqueeRow1, ...marqueeRow1].map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={`m1-${tech.name}-${idx}`}
                  className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-border/70 bg-background/90 hover:bg-secondary/70 hover:border-primary/50 transition-colors shadow-2xs select-none shrink-0"
                >
                  <span className="flex h-4 w-4 sm:h-4.5 sm:w-4.5 items-center justify-center shrink-0">
                    <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-foreground">
                    {tech.name}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground/80 uppercase px-1.5 py-0.5 rounded bg-muted/50 border border-border/40">
                    {tech.category}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Marquee Track 2 (Rightward / Reverse) */}
          <div className="animate-marquee-reverse gap-3 sm:gap-4 py-2 mt-3.5">
            {[...marqueeRow2, ...marqueeRow2, ...marqueeRow2].map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={`m2-${tech.name}-${idx}`}
                  className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-border/70 bg-background/90 hover:bg-secondary/70 hover:border-primary/50 transition-colors shadow-2xs select-none shrink-0"
                >
                  <span className="flex h-4 w-4 sm:h-4.5 sm:w-4.5 items-center justify-center shrink-0">
                    <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-foreground">
                    {tech.name}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground/80 uppercase px-1.5 py-0.5 rounded bg-muted/50 border border-border/40">
                    {tech.category}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Stripe Accent */}
        <div className="h-6 sm:h-8 border-t border-border/60 stripe-bg-12" />
      </div>
    </section>
  );
}
