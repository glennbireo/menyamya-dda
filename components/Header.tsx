"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/Container";
import { getSiteConfig, getNavLinks } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const site = getSiteConfig();
  const navLinks = getNavLinks();

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-secondary">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm text-white">
            MDDA
          </span>
          <span className="hidden text-sm sm:inline">{site.orgName}</span>
        </Link>

        <nav className="hidden gap-6 text-sm font-medium text-zinc-700 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-300 lg:hidden"
        >
          <span className="sr-only">Menu</span>
          ☰
        </button>
      </Container>

      {open ? (
        <nav className="border-t border-zinc-200 bg-white lg:hidden">
          <Container className="flex flex-col gap-3 py-4 text-sm font-medium text-zinc-700">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
