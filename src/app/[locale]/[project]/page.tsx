import {
  ProjectAccordion,
  ProjectBanner,
  ProjectDescription,
  ProjectImageSlider,
} from '@/components/project';
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
        content={t.about}
        techStack={project.techStack}
        labels={dict.testUser}
      />
      <div className={styles.content}>
        <ProjectImageSlider
          variant={project.color ? 'background' : 'default'}
          bgColor={project.color}
          images={project.gallery}
        />
        <ProjectAccordion tech={project.tech} content={t.accordion} />
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
