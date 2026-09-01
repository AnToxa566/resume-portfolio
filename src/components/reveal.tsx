"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/cn";

/**
 * Fades/rises its children in when they scroll into view.
 *
 * Distance/duration/easing come from the `--rise-*` tokens in globals.css, so
 * the on-scroll reveal matches the on-load `rise` keyframe used in the Hero.
 *
 * - No JS: the <noscript> rule in the root layout keeps `[data-reveal]` visible.
 * - Reduced motion: the global media query in globals.css zeroes the transition,
 *   so the reveal still happens but snaps instantly.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  /** Stagger offset in ms, applied as `transition-delay`. */
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -15% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal
      data-shown={shown}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        // `translate` (not `transform`) is the property Tailwind v4's
        // `translate-y-*` writes to — it must be the transitioned property.
        "transition-[opacity,translate] duration-[var(--rise-duration)] ease-[var(--rise-ease)] will-change-[opacity,translate] motion-reduce:transition-none",
        "data-[shown=false]:translate-y-[var(--rise-distance)] data-[shown=false]:opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
