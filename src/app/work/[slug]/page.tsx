import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { caseStudyData, getCaseStudy } from "@/data";
import { SiteHeader } from "@/components/site-header";
import { Contact } from "@/components/sections/contact";
import { CaseStudyDecisions } from "@/components/sections/case-study/decisions";
import { CaseStudyIntro } from "@/components/sections/case-study/intro";
import { CaseStudyNarrative } from "@/components/sections/case-study/narrative";
import { CaseStudyNext } from "@/components/sections/case-study/next-case";
import { CaseStudyOutcome } from "@/components/sections/case-study/outcome";
import { CaseStudyStack } from "@/components/sections/case-study/stack";
import { Container } from "@/components/ui/container";

export function generateStaticParams() {
  return caseStudyData.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return {
    title: `${study.name} — Anton Bohachuk`,
    description: study.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const index = caseStudyData.findIndex((s) => s.slug === study.slug);
  const next = caseStudyData[(index + 1) % caseStudyData.length];

  return (
    <>
      <SiteHeader />
      <main>
        <Container>
          <CaseStudyIntro study={study} />
          <CaseStudyNarrative label="Context" paragraphs={study.context} />
          <CaseStudyNarrative label="Problem" paragraphs={study.problem} />
          <CaseStudyStack stack={study.stack} />
          <CaseStudyDecisions decisions={study.decisions} />
          <CaseStudyOutcome outcome={study.outcome} />
          <CaseStudyNarrative label="Trade-offs" paragraphs={study.tradeoffs} />
          <CaseStudyNext study={next} />
          <Contact />
        </Container>
      </main>
    </>
  );
}
