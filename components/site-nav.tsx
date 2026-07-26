"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

const LINKS = [
  { href: "/trips", label: "Trips" },
  { href: "/about", label: "About" },
  { href: "/join", label: "Join" },
];

export default function SiteNav({ transparent = false }: { transparent?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b ${
        transparent
          ? "bg-cream/70 dark:bg-ink/50 backdrop-blur-md border-ink/10 dark:border-cream/10"
          : "bg-cream/90 dark:bg-ink/80 backdrop-blur-md border-ink/10 dark:border-cream/10"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-chewy text-2xl md:text-3xl text-ink dark:text-cream"
        >
          Worldside<span className="text-bubblegum">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-anton uppercase text-sm tracking-wide text-ink dark:text-cream">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative hover:text-bubblegum transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/join" className="hidden md:block">
            <Button className="bg-bubblegum text-cream hover:bg-bubblegum/90 font-anton uppercase tracking-wide rounded-full px-5">
              Get In
            </Button>
          </Link>
          <ModeToggle />
          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 dark:border-cream/20 text-ink dark:text-cream"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-ink/10 dark:border-cream/10 bg-cream dark:bg-ink">
          <div className="mx-auto max-w-7xl px-5 py-4 flex flex-col gap-4 font-anton uppercase text-lg text-ink dark:text-cream">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
