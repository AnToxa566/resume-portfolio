// Shapes for the JSON data files in this directory.

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

export interface Work {
  featured: Project;
  projects: Project[];
  alsoShipped: ShortProject[];
}

export interface RoleMetric {
  from: string;
  to: string;
  label: string;
}

export interface Role {
  id: string;
  period: string;
  title: string;
  company: string;
  location: string;
  /** Single-letter company mark. */
  badge: string;
  bullets: string[];
  metrics?: RoleMetric[];
  tech: string[];
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
