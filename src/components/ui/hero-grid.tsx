import { cn } from "@/lib/cn";

/**
 * Full-bleed hairline grid that sits behind a page's hero. Breaks out of the
 * centred content column to span the viewport, fades out toward the
 * bottom-right, and stays inert to pointer and assistive tech. The parent must
 * be `relative isolate` so the `-z-10` layer stays behind the hero content but
 * in front of the page background.
 */
export function HeroGrid({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      style={{
        backgroundImage: "var(--hero-grid)",
        maskImage: "var(--hero-grid-mask)",
        WebkitMaskImage: "var(--hero-grid-mask)",
      }}
      className={cn(
        "pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2",
        className,
      )}
    />
  );
}
