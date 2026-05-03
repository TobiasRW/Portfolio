import { projects } from '@/data/project-data';
import { MappedProject } from './mapped-projects';

export function getProject(name: string, scopedT?: Function): MappedProject {
  const proj = projects.find((p) => p.name === name);
  if (!proj) throw new Error(`Project not found: ${name}`);
  return {
    image: proj.imageSrc,
    title: scopedT ? scopedT('title') : proj.titleKey,
    description: proj.textKey,
    route: proj.link,
    tags: proj.tags,
    variant: proj.variant,
    color: proj.bgColor,
    website: proj.website,
    github: proj.github,
  };
}
