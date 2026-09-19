import Image from "next/image";
import Link from "next/link";

import type { CaseStudy } from "@/data";
import { formatDurationLong } from "@/lib/duration";
import { isImageSrc } from "@/lib/image";
import { ButtonLink } from "@/components/ui/button";
import { HeroGrid } from "@/components/ui/hero-grid";
import { Placeholder } from "@/components/ui/placeholder";
import { SectionLabel } from "@/components/ui/section-label";

/**
 * Case study opener: back link, title, lead, actions, the mono meta grid and a
 * full-width hero image. On-load `animate-rise` stagger — mirrors `Hero` and
 * `AboutIntro`, so it sits outside the `<Section>` rail.
 */
export function CaseStudyIntro({ study }: { study: CaseStudy }) {
  const meta: { label: string; value: string }[] = [
    { label: "Type", value: study.meta.type },
    { label: "Year", value: study.meta.year },
    { label: "Duration", value: formatDurationLong(study.meta.duration) },
    { label: "Team", value: study.meta.team },
  ];

  return (
    <>
      <section className="relative isolate pt-[clamp(3rem,7vw,5rem)] pb-[clamp(2rem,5vw,3rem)]">
        <HeroGrid />
        <Link
          href="/#work"
          className="inline-block animate-rise font-mono text-xs tracking-[0.12em] text-muted transition-colors hover:text-ink"
        >
          ← ALL WORK
        </Link>

        <h1 className="mt-7 max-w-[18ch] animate-rise text-[clamp(2.375rem,6.4vw,4rem)] leading-[1.05] [animation-delay:60ms] display">
          {study.name}
        </h1>

        <p className="mt-6 max-w-[62ch] animate-rise text-pretty text-[clamp(1.0625rem,2vw,1.25rem)] text-muted [animation-delay:120ms]">
          {study.summary}
        </p>

        {(study.links.live || study.links.code) && (
          <div className="mt-9 flex animate-rise flex-wrap gap-3 [animation-delay:180ms]">
            {study.links.live && (
              <ButtonLink target="_blank" href={study.links.live}>View live</ButtonLink>
            )}
            {study.links.code && (
              <ButtonLink target="_blank" href={study.links.code} variant="outline">
                View code
              </ButtonLink>
            )}
          </div>
        )}
      </section>

      <section className="grid animate-rise grid-cols-1 min-[600px]:grid-cols-2 min-[1080px]:grid-cols-4 gap-px overflow-hidden rounded-lg border border-line bg-line [animation-delay:240ms]">
        {meta.map((item) => (
          <div key={item.label} className="bg-bg px-[22px] py-5">
            <SectionLabel>{item.label}</SectionLabel>
            <div className="mt-2 font-mono text-sm text-ink">{item.value}</div>
          </div>
        ))}
      </section>

      <div className="mt-[clamp(2rem,5vw,3rem)] animate-rise [animation-delay:300ms]">
        {isImageSrc(study.heroImage) ? (
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-line">
            <Image
              src={study.heroImage}
              alt={study.name}
              fill
              priority
              sizes="(min-width: 1024px) 960px, 100vw"
              className="object-cover"
            />
          </div>
        ) : (
          <Placeholder ratio="16/9" label={study.heroImage ?? study.name} />
        )}
      </div>
    </>
  );
}
