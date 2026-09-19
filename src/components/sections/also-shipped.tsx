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
          className="flex flex-col gap-y-2 border-b border-line px-5 py-[18px] last:border-b-0 lg:flex-row lg:flex-nowrap lg:items-baseline lg:gap-x-5 lg:gap-y-0"
        >
          <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 lg:contents">
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
            <span className="grow basis-[260px] text-sm text-muted lg:min-w-0 lg:truncate">
              {item.summary}
            </span>
          </div>
          <div className="flex items-center justify-between gap-4 lg:contents">
            <span className="font-mono text-xs text-muted lg:shrink-0 lg:grow-0 lg:basis-[240px] lg:whitespace-nowrap">
              {item.tech.join(" · ")}
            </span>
            <ProjectLinkRow
              links={item.links}
              showCaseStudy={false}
              className="lg:ml-4 lg:shrink-0"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
