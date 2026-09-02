import type { CaseStudyDecision } from "@/data";
import { Section } from "@/components/section";

export function CaseStudyDecisions({
  decisions,
}: {
  decisions: CaseStudyDecision[];
}) {
  return (
    <Section label="Decisions">
      <div className="flex flex-col gap-4">
        {decisions.map((decision) => (
          <div
            key={decision.title}
            className="rounded-lg border border-line p-6"
          >
            <h3 className="mb-3 text-[20px] display">{decision.title}</h3>
            <p className="max-w-[62ch] text-pretty text-[15px] text-muted">
              {decision.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
