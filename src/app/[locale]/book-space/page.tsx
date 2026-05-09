import {
  ProjectBanner,
  ProjectDescription,
  ProjectImageSlider,
} from '@/components/project';
import { Accordion } from '@/components/ui';
import { getScopedI18n } from '@/locales/server';
import { setStaticParamsLocale } from 'next-international/server';
import styles from '../page.module.css';
import { getMappedProject } from '@/components/utils/mapped-projects';
import { DotBackground } from 'wolmar-ui';

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  const scopedT = await getScopedI18n('projectBookSpace');
  const accordionItems = [
    {
      content: scopedT('accordion.items.item1.content'),
      iconLabel: 'React',
      website: 'https://react.dev/',
    },
    {
      content: scopedT('accordion.items.item2.content'),
      iconLabel: 'React Router',
      website: 'https://reactrouter.com/home',
    },
    {
      content: scopedT('accordion.items.item3.content'),
      iconLabel: 'MongoDB',
      website: 'https://www.mongodb.com/docs/',
    },
    {
      content: scopedT('accordion.items.item4.content'),
      iconLabel: 'Motion',
      website: 'https://motion.dev/',
    },
    {
      content: scopedT('accordion.items.item5.content'),
      iconLabel: 'Tailwind CSS',
      website: 'https://tailwindcss.com/',
    },
    {
      content: scopedT('accordion.items.item6.content'),
      iconLabel: 'TypeScript',
      website: 'https://www.typescriptlang.org/',
    },
  ];

  return (
    <>
      <div className={styles.root}>
        <div className={styles.hero}>
          <DotBackground size="sm" />
          <ProjectBanner
            project={getMappedProject('book-space')}
            variant="phone"
            color="#b8b8b8"
          />
        </div>
      </div>
      <ProjectDescription
        title={scopedT('about.heading')}
        badges={[
          scopedT('about.badges.badge1'),
          scopedT('about.badges.badge2'),
        ]}
        disclaimer={scopedT('about.text.disclaimer')}
        text={[
          { content: scopedT('about.text.paragraph1') },
          { content: scopedT('about.text.paragraph2') },
          { content: scopedT('about.text.paragraph3') },
          { content: scopedT('about.text.paragraph4') },
        ]}
        techStack={[
          'React',
          'React Router',
          'MongoDB',
          'Motion',
          'Tailwind CSS',
          'TypeScript',
        ]}
        testUser={{
          email: scopedT('about.text.testUser.email'),
          password: scopedT('about.text.testUser.password'),
        }}
      />
      <div className={styles.content}>
        <ProjectImageSlider
          variant="background"
          bgColor="#b8b8b8"
          images={[
            '/images/bookspace-pic1.png',
            '/images/bookspace-pic2.png',
            '/images/bookspace-pic3.png',
            '/images/bookspace-pic4.png',
          ]}
        />
        <Accordion
          items={accordionItems}
          title={scopedT('accordion.heading')}
        />
      </div>
    </>
  );
}
