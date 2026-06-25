"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/schema-org";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#process", label: "Process" },
  { href: "#zone", label: "Zone" },
  { href: "#devis", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:h-28 md:px-8">
        <Link href="/" className="flex items-center" aria-label="LIV Rénovation - Accueil">
          <Image
            src="/logo-liv.png"
            alt="LIV Rénovation"
            width={160}
            height={160}
            priority
            className="h-20 w-auto md:h-24 object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm tracking-wide text-foreground/80 hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${SITE.phone}`}
            className="font-sans text-sm tracking-wide text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1.5"
          >
            <Phone className="size-3.5" />
            {SITE.phoneDisplay}
          </a>
          <a
            href="#devis"
            className="rounded-full bg-primary px-5 py-2 font-sans text-sm text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Devis gratuit
          </a>
        </nav>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen(true)}
          className="md:hidden p-2 text-foreground"
        >
          <Menu className="size-6" />
        </button>
      </div>

      {open && (
        <div data-lenis-prevent className="md:hidden fixed inset-0 z-50 bg-background/98 backdrop-blur-xl flex flex-col">
          <div className="flex items-center justify-between h-24 px-4 border-b border-border">
            <Link href="/" onClick={() => setOpen(false)} className="flex items-center" aria-label="LIV Rénovation - Accueil">
              <Image
                src="/logo-liv.png"
                alt="LIV Rénovation"
                width={120}
                height={120}
                className="h-20 w-auto object-contain"
              />
            </Link>
            <button
              type="button"
              aria-label="Fermer le menu"
              onClick={() => setOpen(false)}
              className="p-2"
            >
              <X className="size-6" />
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl tracking-tight uppercase text-primary"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${SITE.phone}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-sans text-sm text-primary-foreground"
            >
              <Phone className="size-4" />
              {SITE.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
