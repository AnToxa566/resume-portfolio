import type { CaseStudyOutcome as CaseStudyOutcomeData } from "@/data";
import { Section } from "@/components/section";
import { Metric } from "@/components/ui/metric";

export function CaseStudyOutcome({
  outcome,
}: {
  outcome: CaseStudyOutcomeData;
}) {
  return (
    <Section label="Outcome">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-px overflow-hidden rounded-lg border border-line bg-line">
        {outcome.metrics.map((metric) => (
          <Metric
            key={metric.caption}
            from={metric.from}
            to={metric.to}
            caption={metric.caption}
            className="bg-bg p-6"
          />
        ))}
      </div>

      {outcome.note && (
        <p className="mt-6 max-w-[62ch] text-pretty text-[15px] text-muted">
          {outcome.note}
        </p>
      )}
    </Section>
  );
}
