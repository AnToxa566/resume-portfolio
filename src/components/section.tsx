import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/ui/section-label";

/**
 * The mono-labelled left-rail layout shared by every home page section.
 */
export function Section({
  id,
  label,
  children,
  className,
  contentClassName,
}: {
  id?: string;
  label: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-16 pt-[clamp(4.5rem,10vw,8rem)]", className)}
    >
      <div className="flex flex-wrap gap-6">
        <Reveal className="shrink-0 basis-30">
          <SectionLabel>{label}</SectionLabel>
        </Reveal>

        <Reveal
          delay={80}
          className={cn("min-w-0 flex-1 basis-160", contentClassName)}
        >
          {children}
        </Reveal>
      </div>
    </section>
  );
}
