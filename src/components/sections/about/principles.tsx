import { aboutData } from "@/data";
import { Section } from "@/components/section";
import { SectionLabel } from "@/components/ui/section-label";

export function AboutPrinciples() {
  const { principles } = aboutData;

  return (
    <Section label={principles.label}>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-8">
        {principles.items.map((item) => (
          <div key={item.kicker} className="border-t border-line pt-5">
            <SectionLabel>{item.kicker}</SectionLabel>
            <h3 className="mt-4 mb-2.5 text-[20px] display">{item.title}</h3>
            <p className="max-w-[44ch] text-[15px] text-muted">{item.body}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 max-w-[62ch] text-pretty text-[15px] text-muted">
        {principles.note}
      </p>
    </Section>
  );
}
