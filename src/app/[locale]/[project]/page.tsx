import {
  ProjectBanner,
  ProjectDescription,
  ProjectImageSlider,
} from '@/components/project';
import { Accordion } from '@/components/ui';
import { Scene } from '@/components/renders';
import { hasLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { notFound } from 'next/navigation';
import styles from '../page.module.css';
import { projects } from '@/data/project-data';
import { DotBackground, Typography } from 'wolmar-ui';

export function generateStaticParams() {
  return projects.map((project) => ({ project: project.name }));
}

export default async function Page({
  params,
}: PageProps<'/[locale]/[project]'>) {
  const { locale, project: slug } = await params;
  if (!hasLocale(locale)) notFound();

  const project = projects.find((p) => p.name === slug);
  if (!project) notFound();

  const dict = await getDictionary(locale);
  const t = dict.projects[project.name];

  const { heading, badges, paragraphs } = t.about;
  const disclaimer = 'disclaimer' in t.about ? t.about.disclaimer : undefined;
  const testUser = 'testUser' in t.about ? t.about.testUser : undefined;

  const { heading: accordionHeading } = t.accordion;
  const accordionItems = project.tech.map((item, index) => ({
    ...item,
    content: t.accordion.items[index],
  }));

  return (
    <>
      <div className={styles.root}>
        <div className={styles.hero}>
          <DotBackground size="sm" />
          <ProjectBanner
            project={project}
            variant={project.variant}
            color={project.color}
          />
        </div>
      </div>
      <ProjectDescription
        title={heading}
        badges={badges}
        disclaimer={disclaimer}
        text={paragraphs}
        techStack={project.techStack}
        testUser={testUser}
        labels={dict.testUser}
      />
      <div className={styles.content}>
        <ProjectImageSlider
          variant={project.color ? 'background' : 'default'}
          bgColor={project.color}
          images={project.gallery}
        />
        <Accordion items={accordionItems} title={accordionHeading} />
      </div>
      {project.has3dModel && (
        <div className={styles.model}>
          <Typography variant="h2" as="h4" weight="600">
            3D Model
          </Typography>
          <div className={styles.scene}>
            <Scene />
          </div>
        </div>
      )}
    </>
  );
}
