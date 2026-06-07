import { getScopedI18n } from '@/locales/server';
import { setStaticParamsLocale } from 'next-international/server';
import styles from '../page.module.css';
import { Container, Grid, ProjectCard, Typography } from 'wolmar-ui';
import Image from 'next/image';
import { mapProjects } from '@/components/utils/mapped-projects';
import { TransitionLink } from '@/components/utils/transition-link';

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  const scopedT = await getScopedI18n('frontPage.projects');

  const mappedProjects = mapProjects(scopedT);

  const darkTextProjects = ['Book Space'];

  return (
    <>
      <Container
        as="section"
        width={{ mobile: '100%', tablet: '83.333%', desktop: '91.667%' }}
        className={styles.projects}
      >
        <Typography
          as="h1"
          variant={{ mobile: 'h3', tablet: 'h2', desktop: 'h1' }}
          weight="600"
          className={styles['projects-title']}
        >
          {scopedT('titleAll')}
        </Typography>
        <Grid
          gap="8"
          rowGap={{ mobile: '8', desktop: '10' }}
          columns={{ mobile: '1', tablet: '2', desktop: '3' }}
          paddingBlock={{ mobile: '10', tablet: '14', desktop: '16' }}
          className={styles['projects-grid']}
        >
          {mappedProjects.map((proj, index) => (
            <ProjectCard.Root
              key={index}
              project={proj}
              variant={proj.variant}
              color={proj.color}
            >
              <ProjectCard.Content as={TransitionLink} href={proj.route!}>
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
                  <ProjectCard.Title
                    variant="h2"
                    weight="500"
                    color={darkTextProjects.includes(proj.title) ? 'dark' : 'light'}
                  />
                  <ProjectCard.Description
                    color={darkTextProjects.includes(proj.title) ? 'dark' : 'light'}
                  />
                </ProjectCard.TextContent>
                <ProjectCard.Tags />
              </ProjectCard.Content>
            </ProjectCard.Root>
          ))}
        </Grid>
      </Container>
    </>
  );
}
