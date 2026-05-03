import { projects as originalProjects } from '@/data/project-data';
import { Project, ProjectCardVariant } from 'wolmar-ui';

export type MappedProject = Project & {
  variant?: ProjectCardVariant;
  color?: string;
};

export function mapProjects(scopedT?: Function): MappedProject[] {
  return originalProjects.map((proj) => ({
    image: proj.imageSrc,
    title: scopedT ? scopedT(proj.titleKey) : proj.titleKey,
    description: scopedT ? scopedT(proj.textKey) : proj.textKey,
    route: proj.link,
    tags: proj.tags,
    variant: proj.variant,
    website: proj.website,
    github: proj.github,
    color: proj.bgColor,
  }));
}
