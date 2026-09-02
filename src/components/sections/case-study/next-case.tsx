import Link from "next/link";

import type { CaseStudy } from "@/data";
import { Reveal } from "@/components/reveal";
import { Placeholder } from "@/components/ui/placeholder";
import { SectionLabel } from "@/components/ui/section-label";

/** Link card to the next case study in the set. */
export function CaseStudyNext({ study }: { study: CaseStudy }) {
  return (
    <div className="pt-[clamp(4.5rem,10vw,8rem)]">
      <Reveal>
        <Link
          href={`/work/${study.slug}`}
          className="group block rounded-lg border border-line p-6 transition-colors hover:border-signal"
        >
          <div className="flex flex-wrap items-center gap-6">
            <div className="min-w-0 flex-[1_1_320px]">
              <SectionLabel>Next</SectionLabel>
              <h2 className="mt-3.5 mb-2 text-[clamp(1.5rem,3.4vw,2rem)] display">
                {study.name}
              </h2>
              <p className="max-w-[46ch] text-[15px] text-muted">
                {study.summary}
              </p>
              <span className="mt-[18px] inline-flex items-center gap-2.5 font-mono text-xs tracking-[0.12em] text-muted">
                READ CASE <span className="text-signal">→</span>
              </span>
            </div>

            <div className="flex-[0_1_320px] min-w-[220px]">
              <Placeholder
                ratio="16/10"
                label={`${study.name.toUpperCase()} — SCREENSHOT`}
                interactive
              />
            </div>
          </div>
        </Link>
      </Reveal>
    </div>
  );
}
