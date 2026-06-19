import type { Dictionary } from '@/i18n/config';

// Define the valid project variants
export type ProjectVariant = 'default' | 'phone' | 'computer';

// Define valid project banner variants
export type ProjectBannerVariant = 'default' | 'phone' | 'pc';

// A project's key in the dictionary (e.g. "candidate", "fit-app").
export type ProjectName = keyof Dictionary['projects'];

// A technology shown on a project page. The localized explanation is pulled
// from the dictionary (`projects.<name>.accordion.items`) by position, so the
// order here must match the order of those items.
export type ProjectTech = {
  iconLabel: string;
  website?: string;
};

// Define the structure of a project
export type Project = {
  name: ProjectName;
  variant: ProjectVariant;
  imageSrc: string;
  title: string;
  link: string;
  bgColor?: string;
  tags?: string[];
  website?: string;
  github?: string;
  // Project-page content (non-translated):
  gallery: string[]; // image-slider images
  tech: ProjectTech[]; // accordion technologies (content comes from the dictionary)
  techStack: string[]; // tech-stack tooltip row (icon labels, own order)
  has3dModel?: boolean; // renders the 3D model section
};

export type TestUser = {
  email?: string;
  username?: string;
  password: string;
};

//_____________ LOGO TYPES _______________//

// Define logo types
export type Logo = {
  icon: string;
  dark?: string;
  label: string;
  url?: string;
  bgLight?: string;
  bgDark?: string;
  tag?: string;
};

//______________ SLIDER TYPES _______________//

// Define slider variant types
export type SliderVariant = 'default' | 'background';

//______________ ACCORDION TYPES _______________//

// Define accordion entry type
export type AccordionEntry = {
  content: string;
  website?: string;
  iconLabel: string;
};
