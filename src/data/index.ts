import experienceJson from "./experience.json";
import profileJson from "./profile.json";
import stackJson from "./stack.json";
import type { ExperienceData, Profile, StackGroup, Work } from "./types";
import workJson from "./work.json";

export const workData = workJson as Work;
export const experienceData = experienceJson as ExperienceData;
export const stackData = stackJson as StackGroup[];
export const profileData = profileJson as Profile;

export type {
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
