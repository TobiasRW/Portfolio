import {
  ProjectBanner,
  ProjectDescription,
  ProjectImageSlider,
} from '@/components/project';
import { Accordion } from '@/components/ui';
import { Dots } from '@/components/visuals';
import { getScopedI18n } from '@/locales/server';
import { setStaticParamsLocale } from 'next-international/server';
import styles from '../page.module.css';
import { getProject } from '@/components/utils/get-project';

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  const scopedT = await getScopedI18n('projectFitApp');
  const accordionItems = [
    {
      content: scopedT('accordion.items.item1.content'),
      iconLabel: 'Next.js',
      website: 'https://nextjs.org/docs',
    },
    {
      content: scopedT('accordion.items.item2.content'),
      iconLabel: 'Supabase',
      website: 'https://supabase.com/docs',
    },
    {
      content: scopedT('accordion.items.item3.content'),
      iconLabel: 'Motion',
      website: 'https://motion.dev/',
    },
    {
      content: scopedT('accordion.items.item4.content'),
      iconLabel: 'Tailwind CSS',
      website: 'https://tailwindcss.com/',
    },
    {
      content: scopedT('accordion.items.item5.content'),
      iconLabel: 'TypeScript',
      website: 'https://www.typescriptlang.org/',
    },
  ];

  return (
    <>
      <div className={styles.root}>
        <div className={styles.hero}>
          <Dots />
          <ProjectBanner
            variant="phone"
            project={getProject('fit-app', scopedT)}
            color="#1db954"
          />
        </div>
      </div>
      <ProjectDescription
        title={scopedT('about.heading')}
        badges={[
          scopedT('about.badges.badge1'),
          scopedT('about.badges.badge2'),
        ]}
        text={[
          { content: scopedT('about.text.paragraph1') },
          { content: scopedT('about.text.paragraph2') },
          { content: scopedT('about.text.paragraph3') },
        ]}
        techStack={[
          'React',
          'Next.js',
          'Supabase',
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
          bgColor="#1db954"
          images={[
            '/images/fit-app-pic1.png',
            '/images/fit-app-pic2.png',
            '/images/fit-app-pic3.png',
            '/images/fit-app-pic4.png',
            '/images/fit-app-pic5.png',
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
