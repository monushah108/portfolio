"use client";

import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-5xl border-x">
        <div className="flex items-center justify-between px-3 sm:px-4 py-2">
          <Link href="/" aria-label="monu home" className="group py-1">
            <span className="text-xl sm:text-2xl font-bold font-instrument-serif-italic tracking-tight group-hover:text-primary transition-colors">
              monu
            </span>
          </Link>
          <div className="flex items-center gap-3 sm:gap-6">
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground transition-colors py-1"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-muted-foreground hover:text-foreground transition-colors py-1"
              >
                Projects
              </Link>
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-foreground transition-colors py-1"
              >
                Blog
              </Link>
            </nav>
            <ThemeToggle />
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md border border-border/60 hover:bg-muted/50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              <span
                className={`block w-4 h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"}`}
              ></span>
              <span
                className={`block w-4 h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`block w-4 h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"}`}
              ></span>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="md:hidden border-t bg-background/95 backdrop-blur-md animate-in slide-in-from-top-2 duration-200"
          >
            <nav className="flex flex-col gap-1 p-3">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground hover:bg-muted/50 px-3 py-2.5 rounded-md text-sm font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-muted-foreground hover:text-foreground hover:bg-muted/50 px-3 py-2.5 rounded-md text-sm font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-foreground hover:bg-muted/50 px-3 py-2.5 rounded-md text-sm font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
