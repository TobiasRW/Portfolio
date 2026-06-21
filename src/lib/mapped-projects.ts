import { projects } from '@/data/project-data';
import type { Dictionary } from '@/i18n/config';
import type { Project } from '@/types/types';

type ProjectsDict = Dictionary['projects'];

/**
 * The shape of the project data needed for the project cards.
 */
export type ProjectCardData = Project & { description: string };

/**
 * Maps the non-localized project data to the shape needed for the project cards.
 * @param projectsDict - The "projects" section of the locale dictionary.
 * @returns An array of projects with localized descriptions, ready to be rendered in the project cards.
 */
export function mapProjects(projectsDict: ProjectsDict): ProjectCardData[] {
  return projects.map((project) => ({
    ...project,
    description: projectsDict[project.name].brief,
  }));
}
