import type { CaseStudyStack } from "@/data";
import { Section } from "@/components/section";
import { Tag } from "@/components/ui/tag";
import { Architecture } from "./architecture";

export function CaseStudyStack({ stack }: { stack: CaseStudyStack }) {
  return (
    <Section label="Stack">
      <p className="max-w-[62ch] text-pretty text-muted">{stack.intro}</p>

      {stack.diagram && (
        <div className="mt-10">
          <Architecture diagram={stack.diagram} />
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {stack.tech.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>
    </Section>
  );
}
