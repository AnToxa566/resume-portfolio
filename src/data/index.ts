import aboutJson from "./about.json";
import caseStudiesJson from "./case-studies.json";
import experienceJson from "./experience.json";
import profileJson from "./profile.json";
import stackJson from "./stack.json";
import type {
  AboutContent,
  CaseStudy,
  ExperienceData,
  Profile,
  StackGroup,
  Work,
} from "./types";
import workJson from "./work.json";

export const workData = workJson as Work;
export const experienceData = experienceJson as ExperienceData;
export const stackData = stackJson as StackGroup[];
export const profileData = profileJson as Profile;
export const aboutData = aboutJson as AboutContent;
export const caseStudyData = caseStudiesJson as CaseStudy[];

/** Look up a single case study by its `/work/[slug]` slug. */
export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudyData.find((study) => study.slug === slug);
}

export type {
  AboutContent,
  AboutFact,
  AboutPrinciple,
  AboutStoryEntry,
  CaseStudy,
  CaseStudyDecision,
  CaseStudyDiagram,
  CaseStudyDiagramBox,
  CaseStudyDiagramNode,
  CaseStudyMeta,
  CaseStudyMetric,
  CaseStudyOutcome,
  CaseStudyStack,
  ContactLink,
  Education,
  ExperienceData,
  HeroStat,
  NavLink,
  Profile,
  Project,
  ProjectLinks,
  Role,
  RoleMetric,
  ShortProject,
  StackGroup,
  Work,
} from "./types";
