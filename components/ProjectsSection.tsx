import { HugeiconsIcon } from "@hugeicons/react";
import {
  Github01Icon,
  ExternalLink,
  LockIcon,
} from "@hugeicons/core-free-icons";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { TechIcons } from "./icons/TechIcons";
import { cn } from "@/lib/utils";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "CodeSync",
    type: "web app",
    featured: true,
    description:
      "A real-time collaborative coding platform supporting 3+ concurrent users with conflict-free editing using Yjs CRDTs. Includes real-time code editing, file updates, user presence, cursor tracking, an AI coding assistant, multi-file project management, Monaco Editor, authentication, and collaborative workspaces.",
    image: "/projects/codesync.png",
    technologies: [
      {
        name: "Next.js",
        icon: "",
        url: "https://nextjs.org",
        iconKey: "NextJs",
      },
      {
        name: "Better Auth",
        icon: "",
        url: "https://better-auth.com",
        iconKey: "BetterAuth",
      },
      {
        name: "Yjs",
        icon: "",
        url: "https://yjs.dev",
        iconKey: "Yjs",
      },
      {
        name: "Socket.IO",
        icon: "",
        url: "https://socket.io",
        iconKey: "SocketIO",
      },
      {
        name: "Zustand",
        icon: "",
        url: "https://zustand.docs.pmnd.rs",
        iconKey: "Zustand",
      },
      {
        name: "Node.js",
        icon: "",
        url: "https://nodejs.org",
        iconKey: "NodeJS",
      },
    ],
    github: "https://github.com/monushah108/codesync",
    githubPrivate: false,
    live: "https://codesync-lovat.vercel.app",
    livePrivate: false,
  },

  {
    id: 2,
    title: "Storely",
    type: "web app",
    featured: true,
    description:
      "A cloud storage platform with 10 MB file upload support, cloud-based storage, and secure file management. Features 4-level RBAC with Owner, Admin, User, and Viewer roles, an administrative dashboard for user monitoring, access control, and platform administration, plus OAuth authentication and session-based authorization.",
    image: "/projects/storely.png",
    technologies: [
      {
        name: "MongoDB",
        icon: "",
        url: "https://mongodb.com",
        iconKey: "MongoDB",
      },
      {
        name: "Express.js",
        icon: "",
        url: "https://expressjs.com",
        iconKey: "Express",
      },
      {
        name: "React.js",
        icon: "",
        url: "https://react.dev",
        iconKey: "React",
      },
      {
        name: "Node.js",
        icon: "",
        url: "https://nodejs.org",
        iconKey: "NodeJS",
      },
      {
        name: "Redux Toolkit",
        icon: "",
        url: "https://redux-toolkit.js.org",
        iconKey: "Redux",
      },
    ],
    github: "https://github.com/monushah108/Storely",
    githubPrivate: false,
    live: "https://storely-liard.vercel.app/",
    livePrivate: false,
  },

  {
    id: 3,
    title: "Orbit AI",
    type: "web app",
    featured: true,
    description:
      "A real-time communication platform supporting 1-to-1 and group conversations using Socket.IO. Provides real-time messaging, user activity updates, and collaborative interactions across two communication modes, with Redis for backend and session-related operations and Groq-powered AI features for summaries, contextual recommendations, and real-time assistance.",
    image: "/projects/orbit-ai.png",
    technologies: [
      {
        name: "Next.js",
        icon: "",
        url: "https://nextjs.org",
        iconKey: "NextJs",
      },
      {
        name: "Socket.IO",
        icon: "",
        url: "https://socket.io",
        iconKey: "SocketIO",
      },
      {
        name: "Turborepo",
        icon: "",
        url: "https://turbo.build",
        iconKey: "Turborepo",
      },
      {
        name: "Groq",
        icon: "",
        url: "https://groq.com",
        iconKey: "Groq",
      },
      {
        name: "Redis",
        icon: "",
        url: "https://redis.io",
        iconKey: "Redis",
      },
    ],
    github: "https://github.com/monushah108/Orbit-Ai",
    githubPrivate: false,
    live: "https://orbit-ai-rho.vercel.app/",
    livePrivate: false,
  },
];

type ProjectsSectionProps = {
  showHeader?: boolean;
  showAllLink?: boolean;
  sectionClassName?: string;
  featuredOnly?: boolean;
};

export default function ProjectsSection({
  showHeader = true,
  showAllLink = true,
  sectionClassName,
  featuredOnly = false,
}: ProjectsSectionProps) {
  const shownProjects = featuredOnly
    ? projects.filter((p) => p.featured)
    : projects;
  return (
    <section id="projects" className={cn(sectionClassName)}>
      <div className="mx-auto h-full max-w-5xl border-x">
        {showHeader && (
          <>
            <div className="flex grow flex-col justify-center border-b bg-linear-to-br from-muted/40 via-background to-muted/20 px-4 py-10 sm:py-14 md:py-16 md:items-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                What I’m Building
              </h2>
              <p className="mt-1 mb-2 text-sm sm:text-base text-muted-foreground">
                Real-world projects with real users
              </p>
            </div>

            <BorderSeparator />
          </>
        )}

        <div className="grid">
          {shownProjects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "flex flex-col justify-between border-b",
                index === shownProjects.length - 1 && "border-b-0",
              )}
            >
              <div className="flex items-center justify-between gap-3 border-b bg-secondary/50 p-3.5 sm:p-4 dark:bg-secondary/20">
                <a
                  href={project.live || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 sm:gap-3 text-foreground hover:text-primary min-w-0"
                >
                  <HugeiconsIcon
                    icon={ExternalLink}
                    size={18}
                    className="shrink-0 text-muted-foreground transition-transform rotate-0 group-hover:-rotate-45"
                  />
                  <h3 className="font-heading font-medium text-base sm:text-lg tracking-wider truncate">
                    {project.title}
                  </h3>
                </a>
                <Badge
                  variant="secondary"
                  className="shrink-0 rounded-full capitalize bg-border/40 text-xs"
                >
                  {project.type}
                </Badge>
              </div>

              <div className="flex flex-col md:flex-row md:items-stretch">
                <div className="relative overflow-hidden md:w-72 lg:w-96 md:shrink-0 border-b md:border-b-0 md:border-r border-border/60">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={520}
                    height={320}
                    className="h-48 sm:h-56 md:h-full w-full object-cover"
                    sizes="(min-width: 1024px) 384px, (min-width: 768px) 288px, 100vw"
                  />
                </div>

                <div className="flex flex-col justify-between gap-4 flex-1">
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base p-4">
                    {project.description}
                  </p>
                  <div className="border-t">
                    <div className="flex divide-x divide-border/60">
                      <a
                        href={
                          project.githubPrivate ? undefined : project.github
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={
                          project.githubPrivate
                            ? `${project.title} GitHub repository is private`
                            : `View ${project.title} on GitHub`
                        }
                        className={cn(
                          "flex items-center justify-center gap-2 flex-1 bg-background text-sm font-medium transition-colors py-2.5 min-h-[44px]",
                          project.githubPrivate
                            ? "cursor-not-allowed opacity-60"
                            : "hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary",
                        )}
                        tabIndex={project.githubPrivate ? -1 : 0}
                        aria-disabled={project.githubPrivate}
                      >
                        <HugeiconsIcon
                          icon={project.githubPrivate ? LockIcon : Github01Icon}
                          size={16}
                        />
                        {project.githubPrivate ? "Private" : "GitHub"}
                      </a>

                      <a
                        href={
                          !project.live || project.livePrivate
                            ? undefined
                            : project.live
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={
                          !project.live || project.livePrivate
                            ? `${project.title} live site is private or unavailable`
                            : `View ${project.title} live site`
                        }
                        className={cn(
                          "flex items-center justify-center gap-2 flex-1 bg-background text-sm font-medium transition-colors py-2.5 min-h-[44px]",
                          !project.live || project.livePrivate
                            ? "cursor-not-allowed opacity-60"
                            : "hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary",
                        )}
                        tabIndex={!project.live || project.livePrivate ? -1 : 0}
                        aria-disabled={!project.live || project.livePrivate}
                      >
                        <HugeiconsIcon
                          icon={
                            !project.live || project.livePrivate
                              ? LockIcon
                              : ExternalLink
                          }
                          size={16}
                        />
                        {!project.live || project.livePrivate
                          ? "Private"
                          : "Live Site"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t">
                <div className="flex w-full flex-wrap items-center gap-2 p-3 stripe-bg-10">
                  {project.technologies.map((tech) => {
                    if (
                      tech.iconKey &&
                      TechIcons[tech.iconKey as keyof typeof TechIcons]
                    ) {
                      const IconComponent =
                        TechIcons[tech.iconKey as keyof typeof TechIcons];
                      return (
                        <a
                          key={tech.name}
                          href={tech.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-md border border-border/60 bg-background transition-all hover:bg-accent hover:border-primary/50"
                          title={tech.name}
                        >
                          <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                        </a>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {showAllLink && (
          <div className="border-t px-4 py-4 sm:py-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors min-h-[44px]"
            >
              View all projects
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
    <div className={cn("relative inset-x-0 h-px w-full border-b", className)} />
  );
}
