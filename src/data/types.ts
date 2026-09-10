// Shapes for the JSON data files in this directory.

import type { DurationValue } from "@/lib/duration";

export interface ProjectLinks {
  live?: string;
  github?: string;
  caseStudy?: string;
}

export interface Project {
  name: string;
  summary: string;
  /** Placeholder label shown in the image slot until a real asset exists. */
  image: string;
  tech: string[];
  links: ProjectLinks;
  /** e.g. "In progress" — renders as an accent badge. */
  status?: string;
}

export interface ShortProject {
  name: string;
  summary: string;
  tech: string[];
  links: ProjectLinks;
}

/** ------------------------------------------------------------------ *
 * Case study — one per `/work/[slug]` page (see case-studies.json).
 * ------------------------------------------------------------------ */

export interface CaseStudyMeta {
  role: string;
  type: string;
  year: string;
  /** Fixed string, or a `{ start, end? }` range formatted at render time. */
  duration: DurationValue;
  team: string;
}

export interface CaseStudyDecision {
  title: string;
  body: string;
}

export interface CaseStudyMetric {
  from: string;
  to: string;
  caption: string;
}

export interface CaseStudyDiagramBox {
  title: string;
  subtitle?: string;
}

export interface CaseStudyDiagramNode {
  /** Boxes on one row: 1 → single centred box, >1 → responsive grid. */
  boxes: CaseStudyDiagramBox[];
  /** Connector rendered above this node (omit on the first). */
  connector?: "plain" | "signal";
  /** Label shown on a "signal" connector, e.g. "SSR + CACHE AT EDGE". */
  connectorLabel?: string;
  /** Render boxes as muted pills (bottom data-store row). */
  muted?: boolean;
}

export interface CaseStudyDiagram {
  label: string;
  nodes: CaseStudyDiagramNode[];
}

export interface CaseStudyStack {
  intro: string;
  diagram?: CaseStudyDiagram;
  tech: string[];
}

export interface CaseStudyOutcome {
  metrics: CaseStudyMetric[];
  note?: string;
}

export interface CaseStudy {
  slug: string;
  name: string;
  summary: string;
  /** Placeholder label for the hero image slot. */
  heroImage: string;
  links: { live?: string; code?: string };
  meta: CaseStudyMeta;
  context: string[];
  problem: string[];
  stack: CaseStudyStack;
  decisions: CaseStudyDecision[];
  outcome: CaseStudyOutcome;
  tradeoffs: string[];
}

export interface Work {
  featured: Project;
  projects: Project[];
  alsoShipped: ShortProject[];
}

export interface RoleMetric {
  /** Short rail label, e.g. "LCP", "Hosting cost". */
  label: string;
  /** Value shown at the row's right edge, e.g. "~2s → ~1s", "−85%". */
  value: string;
}

export interface RoleDetail {
  label: string;
  /** Fixed string, or a `{ start, end? }` range formatted at render time. */
  value: DurationValue;
}

export interface Role {
  id: string;
  period: string;
  title: string;
  company: string;
  location: string;
  /** Company site — wraps the logo + name as a link in the accordion header. */
  companyHref: string;
  /** Company logo, e.g. "/images/coverr-logo.jpg". */
  logo: string;
  bullets: string[];
  /** IMPACT block of the meta-rail — omitted when there are no figures. */
  metrics?: RoleMetric[];
  /** DETAILS block of the meta-rail (team, setup, tenure…). */
  details?: RoleDetail[];
  tech: string[];
  /** `/work/[slug]` — renders the "read the case study" link in the rail. */
  caseStudySlug?: string;
}

export interface Education {
  degree: string;
  school: string;
  years: string;
}

export interface ExperienceData {
  roles: Role[];
  education: Education;
}

export interface StackGroup {
  category: string;
  items: string[];
}

export interface HeroStat {
  value?: string;
  from?: string;
  to?: string;
  caption: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}

export interface AboutFact {
  label: string;
  value: string;
}

export interface AboutPrinciple {
  kicker: string;
  title: string;
  body: string;
}

export interface AboutStoryEntry {
  year: string;
  kicker: string;
  title: string;
  body: string;
  /** Placeholder label shown in the image slot until a real asset exists. */
  image: string;
}

export interface AboutContent {
  label: string;
  headline: string;
  /** Lead paragraphs, rendered in order. */
  intro: string[];
  portraitLabel: string;
  cta: { label: string; href: string };
  facts: AboutFact[];
  principles: {
    label: string;
    items: AboutPrinciple[];
    note: string;
  };
  story: {
    label: string;
    entries: AboutStoryEntry[];
  };
  now: {
    label: string;
    heading: string;
    body: string;
    image: string;
  };
}

export interface Profile {
  name: string;
  nav: NavLink[];
  cvHref: string;
  hero: {
    status: string;
    headline: string;
    intro: string;
    portraitLabel: string;
    stats: HeroStat[];
  };
  about: {
    text: string;
    href: string;
    linkLabel: string;
  };
  contact: {
    heading: string;
    blurb: string;
    links: ContactLink[];
    footerLeft: string;
    footerRight: string;
  };
}
