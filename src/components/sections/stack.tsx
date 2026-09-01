import { stackData } from "@/data";
import { Section } from "@/components/section";
import { SectionLabel } from "@/components/ui/section-label";
import { Tag } from "@/components/ui/tag";

export function Stack() {
  return (
    <Section
      id="stack"
      label="Stack"
      contentClassName="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-x-8 gap-y-10"
    >
      {stackData.map((group) => (
        <div key={group.category}>
          <div className="border-b border-line pb-3.5">
            <SectionLabel>{group.category}</SectionLabel>
          </div>
          <div className="mt-[18px] flex flex-wrap gap-2">
            {group.items.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
}
