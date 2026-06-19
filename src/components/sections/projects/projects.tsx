import {
  ProjectCard,
  Button,
  Typography,
  Flex,
  Container,
  Grid,
} from 'wolmar-ui';
import type { Dictionary } from '@/i18n/config';
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr';
import { TransitionLink } from '../../utils/transition-link';
import styles from './projects.module.css';
import Image from 'next/image';
import { mapProjects } from '@/components/utils/mapped-projects';

export async function Projects({ dict }: { dict: Dictionary }) {
  const t = dict.frontPage.projects;
  const mappedProjects = mapProjects(dict.projects);

  return (
    <Container as="section" id="projects" className={styles.root}>
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
          {t.title}
        </Typography>
        <Container width="91.6667%" className={styles.wrapper}>
          <Grid
            gap={{ mobile: '8', desktop: '12' }}
            columns={{ mobile: '1', tablet: '3' }}
            className={styles.grid}
          >
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
                    {t.viewAll}
                  </Typography>
                  <ArrowRightIcon weight="bold" className={styles.arrow} />
                </Button>
              </TransitionLink>
            </div>
          </Grid>
        </Container>
      </Flex>
    </Container>
  );
}
