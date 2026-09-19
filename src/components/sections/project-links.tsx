import Link from "next/link";

import type { ProjectLinks } from "@/data";
import { cn } from "@/lib/cn";

function externalProps(href: string) {
  return href.startsWith("http")
    ? { target: "_blank", rel: "noreferrer" as const }
    : {};
}

export function ProjectLinkRow({
  links,
  showCaseStudy = true,
  className,
}: {
  links: ProjectLinks;
  showCaseStudy?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 font-mono text-xs tracking-[0.08em]",
        className,
      )}
    >
      {links.live && (
        <a
          href={links.live}
          {...externalProps(links.live)}
          className="text-muted transition-colors hover:text-ink whitespace-nowrap"
        >
          LIVE ↗
        </a>
      )}
      {links.github && (
        <a
          href={links.github}
          {...externalProps(links.github)}
          className="text-muted transition-colors hover:text-ink whitespace-nowrap"
        >
          GITHUB ↗
        </a>
      )}
      {showCaseStudy && links.caseStudy && (
        <Link
          href={links.caseStudy}
          className="text-ink transition-colors hover:text-signal whitespace-nowrap"
        >
          CASE STUDY →
        </Link>
      )}
    </div>
  );
}
