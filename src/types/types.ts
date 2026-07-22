import type { Dictionary } from '@/i18n/config';
import type { Project as CardProject, ProjectCardVariant } from 'wolmar-ui';

/**
 * A project's key in the dictionary (e.g. "candidate", "fit-app").
 */
export type ProjectName = keyof Dictionary['projects'];

/**
 * A single project's localized content (about + accordion). A union across all projects.
 */
export type ProjectContent = Dictionary['projects'][ProjectName];

/**
 * A technology shown on a project page.
 */
export type ProjectTech = {
  iconLabel: string;
  website?: string;
};

/**
 * The Project shape.
 * Extends the CardProject type from wolmar-ui with additional properties.
 */
export type Project = CardProject & {
  name: ProjectName;
  variant: ProjectCardVariant;
  route: string;
  color?: string;
  gallery: string[];
  tech: ProjectTech[];
  techStack: string[];
  has3dModel?: boolean;
};

/**
 * The test user credentials.
 */
export type TestUser = {
  email?: string;
  username?: string;
  password: string;
};

/**
 * A technology/skill logo.
 */
export type Logo = {
  icon: string;
  dark?: string;
  label: string;
  url?: string;
  bgLight?: string;
  bgDark?: string;
  tag?: string;
};

/**
 * The valid image-slider variants.
 */
export type SliderVariant = 'default' | 'background';
