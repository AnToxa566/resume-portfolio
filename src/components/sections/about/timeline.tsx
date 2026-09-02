import { aboutData } from "@/data";
import { cn } from "@/lib/cn";
import { Section } from "@/components/section";
import { Placeholder } from "@/components/ui/placeholder";
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
            className="relative flex flex-wrap items-start gap-[clamp(1.5rem,4vw,2.5rem)]"
          >
            <span className="absolute top-[9px] left-[calc(-1*clamp(1.25rem,4vw,2.5rem)_-_4px)] size-[7px] rounded-full bg-signal" />

            <div className="min-w-0 flex-[1_1_300px]">
              <div className="flex items-baseline gap-3.5 font-mono text-sm">
                <span className="text-ink">{entry.year}</span>
                <SectionLabel>{entry.kicker}</SectionLabel>
              </div>
              <h3 className="mt-3.5 mb-2.5 text-[20px] display">{entry.title}</h3>
              <p className="max-w-[52ch] text-[15px] text-muted">{entry.body}</p>
            </div>

            <div
              className={cn(
                "flex-[1_1_260px] min-w-[220px]",
                imageLeft
                  ? "order-last min-[560px]:order-first"
                  : "order-last",
              )}
            >
              <Placeholder ratio="4/3" label={entry.image} />
            </div>
          </div>
        );
      })}
    </Section>
  );
}
