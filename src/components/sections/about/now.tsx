import { aboutData } from "@/data";
import { Section } from "@/components/section";
import { Placeholder } from "@/components/ui/placeholder";

export function AboutNow() {
  const { now } = aboutData;

  return (
    <Section label={now.label}>
      <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.1] display">
        {now.heading}
      </h2>
      <p className="mt-5 mb-10 max-w-[62ch] text-pretty text-muted">{now.body}</p>
      <Placeholder ratio="21/9" label={now.image} />
    </Section>
  );
}
