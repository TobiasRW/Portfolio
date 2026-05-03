import { ProjectCard, Button, Typography, Flex } from 'wolmar-ui';
import { getScopedI18n } from '@/locales/server';
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr';
import { TransitionLink } from '../../utils/transition-link';
import styles from './projects.module.css';
import Image from 'next/image';
import { mapProjects } from '@/components/utils/mapped-projects';

export async function Projects() {
  const scopedT = await getScopedI18n('frontPage.projects');

  const mappedProjects = mapProjects(scopedT);

  return (
    <section id="projects" className={styles.root}>
      <Flex
        direction="column"
        gap={{ mobile: '10', tablet: '12', desktop: '14' }}
        align="center"
        paddingBlock={{ mobile: '12', tablet: '14', desktop: '16' }}
      >
        <Typography
          variant={{ mobile: 'h3', tablet: 'h2' }}
          as="h2"
          weight="600"
          className={styles.title}
        >
          {scopedT('title')}
        </Typography>
        <div className={styles.wrapper}>
          <div className={styles.grid}>
            {mappedProjects.slice(0, 4).map((proj, index) => (
              <ProjectCard.Root
                key={index}
                project={proj}
                variant={proj.variant}
                color={proj.color}
              >
                <ProjectCard.Content
                  as={TransitionLink}
                  href={proj.route!}
                  className={index > 2 ? styles.hide : undefined}
                >
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
            ))}
            <div className={styles.more}>
              <TransitionLink href="/projects">
                <Button variant="default" size="md" className={styles.button}>
                  <Typography
                    variant="body"
                    as="span"
                    color="dark"
                    weight="500"
                  >
                    {scopedT('viewAll')}
                  </Typography>
                  <ArrowRightIcon weight="bold" className={styles.arrow} />
                </Button>
              </TransitionLink>
            </div>
          </div>
        </div>
      </Flex>
    </section>
  );
}
