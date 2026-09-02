import { Section } from "@/components/section";

/**
 * A mono-labelled block of prose. Reused for Context, Problem and Trade-offs.
 */
export function CaseStudyNarrative({
  label,
  paragraphs,
}: {
  label: string;
  paragraphs: string[];
}) {
  if (paragraphs.length === 0) return null;

  return (
    <Section label={label}>
      {paragraphs.map((paragraph, i) => (
        <p
          key={i}
          className={`${i === 0 ? "" : "mt-5"} max-w-[62ch] text-pretty text-muted`}
        >
          {paragraph}
        </p>
      ))}
    </Section>
  );
}
