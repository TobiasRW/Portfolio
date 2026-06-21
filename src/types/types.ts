import type { Dictionary } from '@/i18n/config';
import type { Project as CardProject, ProjectCardVariant } from 'wolmar-ui';

/**
 * A project's key in the dictionary (e.g. "candidate", "fit-app").
 */
export type ProjectName = keyof Dictionary['projects'];

/**
 * A technology shown on a project page. The localized explanation is pulled
 * from the dictionary (`projects.<name>.accordion.items`) by position, so the
 * order here must match the order of those items.
 */
export type ProjectTech = {
  iconLabel: string;
  website?: string;
};

/**
 * A project extends the library's card view-model (image/title/route/...) so
 * the shapes stay in sync, and adds this app's own metadata and page content.
 * `description` (from CardProject) is intentionally left unset here — it is the
 * only localized card field and is injected per-locale at render time.
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
 * Demo login credentials shown on a project page.
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

/**
 * A single accordion entry on a project page.
 */
export type AccordionEntry = {
  content: string;
  website?: string;
  iconLabel: string;
};
