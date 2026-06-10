"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { useEffect, useState, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import { navLinks } from "@/config/navigation";
import { cn } from "@/lib/utils";

type HeaderClientProps = {
  brandName: string;
  brandLogo: string;
  phone: string;
  phoneHref: string;
};

export function HeaderClient({
  brandName,
  brandLogo,
  phone,
  phoneHref,
}: HeaderClientProps) {
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

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);

    if (window.location.pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const mobileMenu =
    open &&
    typeof document !== "undefined" &&
    createPortal(
      <div className="fixed inset-0 z-[150] bg-accent-soft/70 md:hidden">
        <button
          type="button"
          className="absolute inset-0"
          aria-label="Menüyü kapat"
          onClick={() => setOpen(false)}
        />
        <nav className="absolute inset-x-4 top-20 rounded-2xl border border-border bg-cream p-6 shadow-2xl">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-lg font-medium text-foreground transition-colors hover:bg-accent-soft/50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={phoneHref}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3.5 text-sm font-semibold text-cream hover:bg-accent-hover"
          >
            <Phone className="h-4 w-4" />
            {phone}
          </a>
        </nav>
      </div>,
      document.body,
    );

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transition-all duration-500",
          scrolled
            ? "border-b border-border/60 bg-cream py-3 shadow-sm"
            : "bg-cream/95 py-5",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 lg:px-8">
          <Link
            href="/"
            onClick={handleLogoClick}
            className="group relative flex h-12 w-[150px] shrink-0 items-center overflow-hidden sm:h-14 sm:w-[180px] md:overflow-visible lg:h-16 lg:w-[225px]"
          >
            <BrandLogo
              src={brandLogo}
              alt={brandName}
              className="transition-opacity group-hover:opacity-90"
            />
            <span className="sr-only">{brandName}</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="relative z-[200] flex shrink-0 items-center gap-3">
            <a
              href={phoneHref}
              className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-cream transition-all hover:bg-accent-hover sm:inline-flex"
            >
              <Phone className="h-4 w-4" strokeWidth={2} />
              Ara
            </a>

            <button
              type="button"
              onClick={() => setOpen((current) => !current)}
              className="inline-flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-full border border-border bg-cream text-foreground md:hidden"
              aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>
      {mobileMenu}
    </>
  );
}
