import Link from "next/link";

import type { ShortProject } from "@/data";
import { SectionLabel } from "@/components/ui/section-label";
import { ProjectLinkRow } from "./project-links";

export function AlsoShipped({ items }: { items: ShortProject[] }) {
  return (
    <div className="mt-8 rounded-lg border border-line">
      <div className="border-b border-line px-5 py-3.5">
        <SectionLabel>Also shipped</SectionLabel>
      </div>
      {items.map((item) => (
        <div
          key={item.name}
          className="flex flex-wrap items-baseline gap-x-5 gap-y-2 border-b border-line px-5 py-[18px] last:border-b-0"
        >
          <span className="shrink-0 grow-0 basis-[90px] text-base display">
            {item.links.caseStudy ? (
              <Link
                href={item.links.caseStudy}
                className="transition-colors hover:text-signal"
              >
                {item.name}
              </Link>
            ) : (
              item.name
            )}
          </span>
          <span className="grow basis-[260px] text-sm text-muted">
            {item.summary}
          </span>
          <span className="grow basis-[240px] font-mono text-xs text-muted">
            {item.tech.join(" · ")}
          </span>
          <ProjectLinkRow links={item.links} showCaseStudy={false} />
        </div>
      ))}
    </div>
  );
}
