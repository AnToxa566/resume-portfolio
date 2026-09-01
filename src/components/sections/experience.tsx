import { experienceData } from "@/data";
import { Section } from "@/components/section";
import { SectionLabel } from "@/components/ui/section-label";
import { ExperienceAccordion } from "./experience-accordion";

export function Experience() {
  const { roles, education } = experienceData;

  return (
    <Section id="experience" label="Experience" contentClassName="border-t border-line">
      <ExperienceAccordion roles={roles} />

      <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 rounded-b-lg border border-t-0 border-line px-5 py-[22px]">
        <SectionLabel className="shrink-0 grow-0 basis-[170px]">
          Education
        </SectionLabel>
        <span className="text-[15px] text-ink">
          {education.degree} · {education.school} ·{" "}
          <span className="font-mono text-sm text-muted">{education.years}</span>
        </span>
      </div>
    </Section>
  );
}
