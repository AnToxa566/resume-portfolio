import aboutJson from "./about.json";
import experienceJson from "./experience.json";
import profileJson from "./profile.json";
import stackJson from "./stack.json";
import type {
  AboutContent,
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

export type {
  AboutContent,
  AboutFact,
  AboutPrinciple,
  AboutStoryEntry,
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
