// Define the valid project variants
export type ProjectVariant = 'default' | 'phone' | 'computer';

// Define valid project banner variants
export type ProjectBannerVariant = 'default' | 'phone' | 'pc';

// Define valid project title keys
export type ProjectTitles =
  | 'project.coelm.name'
  | 'project.bookBuddy.name'
  | 'project.lendr.name'
  | 'project.liveScores.name'
  | 'project.palette.name'
  | 'project.bookSpace.name'
  | 'project.candidate.name'
  | 'project.fitApp.name';

// Define valid project text keys
export type ProjectTexts =
  | 'project.coelm.brief'
  | 'project.bookBuddy.brief'
  | 'project.lendr.brief'
  | 'project.liveScores.brief'
  | 'project.palette.brief'
  | 'project.bookSpace.brief'
  | 'project.candidate.brief'
  | 'project.fitApp.brief';

// Define the structure of a project
export type Project = {
  variant: ProjectVariant;
  imageSrc: string;
  titleKey: ProjectTitles;
  textKey: ProjectTexts;
  link: string;
  bgColor?: string;
  tags?: string[];
};

// Define the structure types for the project description component
export type DescriptionText = {
  content: string;
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
