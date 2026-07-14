'use client';

import Image from 'next/image';
import { ProjectCard } from 'wolmar-ui';
import { useMediaQuery } from 'wolmar-ui/hooks';
import { TransitionLink } from '@/components/ui';
import type { ProjectCardData } from '@/lib/mapped-projects';

type ProjectsCardsProps = {
  projects: ProjectCardData[];
};

export function ProjectsCards({ projects }: ProjectsCardsProps) {
  const showFourthCard = useMediaQuery('(min-width: 1792px)');
  const visibleProjects = showFourthCard
    ? projects.slice(0, 4)
    : projects.slice(0, 3);

  return visibleProjects.map((proj) => (
    <ProjectCard.Root
      key={proj.name}
      project={proj}
      variant={proj.variant}
      color={proj.color}
    >
      <ProjectCard.Content as={TransitionLink} href={proj.route}>
        <ProjectCard.Image asChild>
          <Image
            src={proj.image}
            alt={proj.title}
            fill
            priority
            sizes="(max-width: 460px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </ProjectCard.Image>
        <ProjectCard.TextContent>
          <ProjectCard.Title variant="h2" weight="500" />
          <ProjectCard.Description />
        </ProjectCard.TextContent>
        <ProjectCard.Tags />
      </ProjectCard.Content>
    </ProjectCard.Root>
  ));
}
