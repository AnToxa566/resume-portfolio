"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { cn } from "@/lib/cn";

import { profileData } from "@/data";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-bg transition-colors",
        scrolled ? "border-line" : "border-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex flex-none items-center gap-3">
          <span className="block size-[9px] flex-none rotate-45 border border-signal" />
          <span className="text-[15px] text-ink display">{profileData.name}</span>
        </Link>

        <nav className="flex items-center gap-4 sm:gap-7">
          <span className="hidden items-center gap-4 min-[600px]:flex sm:gap-7">
            {profileData.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={cn(
                  "text-sm transition-colors hover:text-ink",
                  pathname === item.href ? "text-ink" : "text-muted",
                )}
              >
                {item.label}
              </Link>
            ))}
          </span>

          <ButtonLink href={profileData.cvHref} variant="outline" size="sm">
            Download CV
          </ButtonLink>
        </nav>
      </Container>
    </header>
  );
}
