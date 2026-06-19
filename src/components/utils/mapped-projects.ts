import { projects as originalProjects } from '@/data/project-data';
import type { Dictionary } from '@/i18n/config';
import type { ProjectName } from '@/types/types';
import { Project, ProjectCardVariant } from 'wolmar-ui';

type ProjectsDict = Dictionary['projects'];

export type MappedProject = Project & {
  variant?: ProjectCardVariant;
  color?: string;
};

// Combines static project metadata with the localized card description.
export function mapProjects(projectsDict: ProjectsDict): MappedProject[] {
  return originalProjects.map((proj) => ({
    image: proj.imageSrc,
    title: proj.title,
    description: projectsDict[proj.name].brief,
    route: proj.link,
    tags: proj.tags,
    variant: proj.variant,
    website: proj.website,
    github: proj.github,
    color: proj.bgColor,
  }));
}

// Builds a single project for the banner, which renders the title, image
// and links but no description.
export function getMappedProject(name: ProjectName): MappedProject {
  const proj = originalProjects.find((p) => p.name === name);
  if (!proj) throw new Error(`Project not found: ${name}`);
  return {
    image: proj.imageSrc,
    title: proj.title,
    description: '',
    route: proj.link,
    tags: proj.tags,
    variant: proj.variant,
    website: proj.website,
    github: proj.github,
    color: proj.bgColor,
  };
}
