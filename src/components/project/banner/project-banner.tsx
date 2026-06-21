import Image from 'next/image';
import { ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr';

import {
  ProjectBanner as Banner,
  Button,
  Flex,
  ProjectBannerVariant,
} from 'wolmar-ui';
import { Project } from '@/types/types';

type ProjectBannerProps = {
  project: Project;
  variant: ProjectBannerVariant;
  color?: string;
};

export function ProjectBanner(props: ProjectBannerProps) {
  const { project, variant, color } = props;

  const darkTextProjects: Project['name'][] = ['book-space'];

  return (
    <Banner.Root project={project} variant={variant} color={color}>
      <Banner.Content
        height={{ mobile: '208px', tablet: '256px', desktop: '420px' }}
        width={{ mobile: '83.333%', tablet: '66.666%', desktop: '60%' }}
      >
        <Banner.Image asChild>
          <Image
            src={project.image}
            alt={`${project.title} banner`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </Banner.Image>
        <Banner.Info>
          <Banner.Title
            variant={{ mobile: 'h3', tablet: 'h2', desktop: 'h1' }}
            weight="500"
            as="h1"
            color={darkTextProjects.includes(project.name) ? 'dark' : 'light'}
          />
          <Flex gap="4" justify={variant === 'phone' ? 'start' : 'end'}>
            {project.github && (
              <Button as="a" href={project.github} target="_blank" icon>
                <Image
                  src="/icons/github.svg"
                  alt="GitHub logo"
                  width={16}
                  height={16}
                />
              </Button>
            )}
            {project.website && (
              <Button
                as="a"
                href={project.website}
                target="_blank"
                aria-label="Visit website"
                icon
              >
                <ArrowUpRightIcon size={16} />
              </Button>
            )}
          </Flex>
        </Banner.Info>
      </Banner.Content>
    </Banner.Root>
  );
}
