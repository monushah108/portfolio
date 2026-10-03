import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="border-b bg-linear-to-br from-primary/10 via-background to-background">
      <div className="flex flex-col gap-4 sm:gap-5 px-4 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-3.5 sm:gap-4">
            <Image
              src="/profile.jpg"
              alt="Portrait of monu"
              width={64}
              height={64}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full aspect-square object-top object-cover shrink-0 ring-2 ring-border/50"
              priority
              sizes="(min-width: 640px) 64px, 56px"
            />

            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight truncate">monu shah</h1>
              <p className="text-muted-foreground text-sm sm:text-base font-medium">
                Self-Taught Developer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto shrink-0">
            <a
              href="/resume.pdf"
              download
              className="flex-1 sm:flex-initial px-4 py-2.5 min-h-[44px] inline-flex items-center justify-center bg-primary/10 text-primary text-xs sm:text-sm font-medium rounded-md hover:bg-primary/20 active:scale-[0.98] transition-all"
            >
              Resume
            </a>

            <Link
              href="#contact"
              className="flex-1 sm:flex-initial px-4 py-2.5 min-h-[44px] inline-flex items-center justify-center bg-primary/10 text-primary text-xs sm:text-sm font-medium rounded-md hover:bg-primary/20 active:scale-[0.98] transition-all"
            >
              Let&apos;s Connect
            </Link>
          </div>
        </div>

        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
          Full-stack developer building modern web applications, AI-powered tools, and real-time systems. Passionate about clean code, open source, and performant web architecture.
        </p>
      </div>
    </section>
  );
}
