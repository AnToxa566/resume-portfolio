"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { cn } from "@/lib/cn";

import { profileData } from "@/data";

import { Container } from "@/components/ui/container";
import { DownloadCvButton } from "@/components/download-cv-button";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [renderedPathname, setRenderedPathname] = useState(pathname);

  if (pathname !== renderedPathname) {
    setRenderedPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    // Plain `overflow: hidden` on <body> propagates to the root scrolling
    // box and breaks the header's `position: sticky` offset when the page
    // is already scrolled (it renders at its unstuck flow position instead
    // of the viewport top). Pinning body via `position: fixed` with a
    // negative `top` avoids that entirely and is restored on close.
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    const media = window.matchMedia("(min-width: 600px)");
    const onMediaChange = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", onMediaChange);

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      window.scrollTo({ top: scrollY, behavior: "instant" });
      window.removeEventListener("keydown", onKeyDown);
      media.removeEventListener("change", onMediaChange);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex size-9 flex-none items-center justify-center text-ink min-[600px]:hidden"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
          {open ? (
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-16 bottom-0 z-40 animate-rise overflow-y-auto bg-bg min-[600px]:hidden"
        >
          <Container className="flex h-full flex-col py-8">
            <nav aria-label="Primary" className="flex flex-col divide-y divide-line border-y border-line">
              {profileData.nav.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "group flex items-center justify-between py-6 text-ink transition-colors hover:text-signal",
                  )}
                >
                  <span className="display text-4xl">{item.label}</span>
                  <span className="font-mono text-sm text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </Link>
              ))}
            </nav>

            <DownloadCvButton className="mt-8 w-full justify-center" />

            <p className="mt-auto pt-8 font-mono text-xs text-muted">
              {profileData.name.toUpperCase()} · {new Date().getFullYear()}
            </p>
          </Container>
        </div>
      ) : null}
    </>
  );
}
