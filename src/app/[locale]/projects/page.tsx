import { getScopedI18n } from '@/locales/server';
import { setStaticParamsLocale } from 'next-international/server';
import styles from '../page.module.css';
import { ProjectCard } from 'wolmar-ui';
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

  return (
    <>
      <div className={styles.projects}>
        <h2 className={styles['projects-title']}>{scopedT('titleAll')}</h2>
        <div className={styles['projects-grid']}>
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
                  <ProjectCard.Title variant="h2" weight="500" />
                  <ProjectCard.Description />
                </ProjectCard.TextContent>
                <ProjectCard.Tags />
              </ProjectCard.Content>
            </ProjectCard.Root>
          ))}
        </div>
      </div>
    </>
  );
}
