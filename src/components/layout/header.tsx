"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { useEffect, useState } from "react";
import { siteContent } from "@/content/site";
import { navLinks } from "@/config/navigation";
import { telHref } from "@/lib/contact-links";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const { brand, contact } = siteContent;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/60 bg-cream/90 py-3 shadow-sm backdrop-blur-xl"
          : "bg-cream/60 py-5 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="group relative z-10 flex h-12 w-[150px] items-center sm:h-14 sm:w-[180px] lg:h-16 lg:w-[225px]"
        >
          <BrandLogo className="transition-opacity group-hover:opacity-90" />
          <span className="sr-only">{brand.name}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="relative z-50 flex items-center gap-3">
          <a
            href={telHref(contact.phone)}
            className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-cream transition-all hover:bg-accent-hover sm:inline-flex"
          >
            <Phone className="h-4 w-4" strokeWidth={2} />
            Ara
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-cream text-foreground md:hidden"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 top-0 z-40 bg-accent-soft/40 backdrop-blur-sm md:hidden">
          <nav className="absolute inset-x-4 top-20 rounded-2xl border border-border bg-cream p-6 shadow-2xl">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-lg font-medium text-foreground transition-colors hover:bg-accent-soft/50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={telHref(contact.phone)}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3.5 text-sm font-semibold text-cream hover:bg-accent-hover"
            >
              <Phone className="h-4 w-4" />
              {contact.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
