// Define the valid project variants
export type ProjectVariant = "default" | "phone" | "computer";

// Define valid project title keys
export type ProjectTitles =
  | "project.coelm.name"
  | "project.bookBuddy.name"
  | "project.lendr.name"
  | "project.glassFill.name"
  | "project.liveScores.name"
  | "project.palette.name";

// Define valid project text keys
export type ProjectTexts =
  | "project.coelm.brief"
  | "project.bookBuddy.brief"
  | "project.lendr.brief"
  | "project.glassFill.brief"
  | "project.liveScores.brief"
  | "project.palette.brief";

// Define the structure of a project
export type Project = {
  variant: ProjectVariant;
  imageSrc: string;
  titleKey: ProjectTitles;
  textKey: ProjectTexts;
  link: string;
  bgColor?: string;
};

// Define logo types
export type Logo = {
  icon: string;
  dark?: string;
  label: string;
  url?: string;
};
