import { projects as originalProjects } from '@/data/project-data';
import { Project, ProjectCardVariant } from 'wolmar-ui';

export type MappedProject = Project & {
  variant?: ProjectCardVariant;
  color?: string;
};

export function mapProjects(scopedT?: Function): MappedProject[] {
  return originalProjects.map((proj) => ({
    image: proj.imageSrc,
    title: proj.title,
    description: scopedT ? scopedT(proj.textKey) : proj.textKey,
    route: proj.link,
    tags: proj.tags,
    variant: proj.variant,
    website: proj.website,
    github: proj.github,
    color: proj.bgColor,
  }));
}

export function getMappedProject(
  name: string,
  scopedT?: Function,
): MappedProject {
  const proj = originalProjects.find((p) => p.name === name);
  if (!proj) throw new Error(`Project not found: ${name}`);
  return {
    image: proj.imageSrc,
    title: proj.title,
    description: scopedT ? scopedT(proj.textKey) : proj.textKey,
    route: proj.link,
    tags: proj.tags,
    variant: proj.variant,
    website: proj.website,
    github: proj.github,
    color: proj.bgColor,
  };
}
