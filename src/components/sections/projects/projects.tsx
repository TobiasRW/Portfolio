import { Button, Typography, Flex, Container, Grid } from 'wolmar-ui';
import type { Dictionary } from '@/i18n/config';
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr';
import { TransitionLink } from '@/components/ui';
import styles from './projects.module.css';
import { mapProjects } from '@/lib/mapped-projects';
import { ProjectsCards } from './projects-cards';

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
            <ProjectsCards projects={mappedProjects} />

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
