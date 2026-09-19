import Image from "next/image";

import { aboutData } from "@/data";
import { cn } from "@/lib/cn";
import { Section } from "@/components/section";
import { SectionLabel } from "@/components/ui/section-label";

export function AboutTimeline() {
  const { story } = aboutData;

  return (
    <Section
      label={story.label}
      contentClassName="flex flex-col gap-[clamp(3rem,7vw,5rem)] border-l border-dashed border-line pl-[clamp(1.25rem,4vw,2.5rem)]"
    >
      {story.entries.map((entry, i) => {
        const imageLeft = i % 2 === 1;

        return (
          <div
            key={`${entry.year}-${entry.title}`}
            className="relative flex flex-col md:flex-row items-start gap-[clamp(1.5rem,4vw,2.5rem)]"
          >
            <span className="absolute top-[9px] left-[calc(-1*clamp(1.25rem,4vw,2.5rem)_-_4px)] size-[7px] rounded-full bg-signal" />

            <div className="min-w-0 w-full md:flex-[1_1_300px]">
              <div className="flex items-baseline gap-3.5 font-mono text-sm">
                <span className="text-ink">{entry.year}</span>
                <SectionLabel>{entry.kicker}</SectionLabel>
              </div>
              <h3 className="mt-3.5 mb-2.5 text-[20px] display">{entry.title}</h3>
              <p className="max-w-[52ch] text-[15px] text-muted">{entry.body}</p>
            </div>

            <div
              className={cn(
                "relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-line md:min-w-[220px] md:flex-[1_1_260px]",
                imageLeft
                  ? "order-last md:order-first"
                  : "order-last",
              )}
            >
              <Image
                fill
                src={entry.image}
                alt={entry.title}
                className="object-cover"
                sizes="(min-width: 768px) 360px, 100vw"
              />
            </div>
          </div>
        );
      })}
    </Section>
  );
}
