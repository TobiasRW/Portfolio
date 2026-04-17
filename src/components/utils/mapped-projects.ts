import { projects as originalProjects } from '@/data/project-data';
import { Project } from 'wolmar-ui';

export function mapProjects(scopedT?: Function): Project[] {
  return originalProjects.map((proj) => ({
    image: proj.imageSrc,
    title: scopedT ? scopedT(proj.titleKey) : proj.titleKey,
    description: scopedT ? scopedT(proj.textKey) : proj.textKey,
    link: proj.link,
    tags: proj.tags,
  }));
}
