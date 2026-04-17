import {
  ProjectBanner,
  ProjectDescription,
  ProjectImageSlider,
} from '@/components/project';
import { Accordion } from '@/components/ui';
import { Dots } from '@/components/visuals';
import { getScopedI18n } from '@/locales/server';
import { setStaticParamsLocale } from 'next-international/server';
import { Scene } from '@/components/renders';
import styles from '../page.module.css';
import { Typography } from 'wolmar-ui';

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  const scopedT = await getScopedI18n('projectCoelm');

  const accordionItems = [
    {
      content: scopedT('accordion.items.item1.content'),
      iconLabel: 'React',
      website: 'https://react.dev/',
    },
    {
      content: scopedT('accordion.items.item2.content'),
      iconLabel: 'Vite',
      website: 'https://vitejs.dev/',
    },
    {
      content: scopedT('accordion.items.item3.content'),
      iconLabel: 'Tailwind CSS',
      website: 'https://tailwindcss.com/',
    },
    {
      content: scopedT('accordion.items.item4.content'),
      iconLabel: 'Motion',
      website: 'https://motion.dev/',
    },
    {
      content: scopedT('accordion.items.item5.content'),
      iconLabel: 'JavaScript',
    },
    {
      content: scopedT('accordion.items.item6.content'),
      iconLabel: 'GSAP',
      website: 'https://gsap.com/',
    },
  ];

  return (
    <>
      <div className={styles.root}>
        <div className={styles.hero}>
          <Dots />
          <ProjectBanner
            variant="default"
            imageSrc="/images/coelm-banner.webp"
            title={scopedT('title')}
            website="https://coelm.tobiaswolmar.dk/"
            github="https://github.com/TobiasRW/hovedopgave"
          />
        </div>
      </div>
      <ProjectDescription
        title={scopedT('about.heading')}
        badges={[scopedT('about.badges.badge1')]}
        text={[
          { content: scopedT('about.text.paragraph1') },
          { content: scopedT('about.text.paragraph2') },
          { content: scopedT('about.text.paragraph3') },
          { content: scopedT('about.text.paragraph4') },
        ]}
        techStack={[
          'React',
          'Vite',
          'GSAP',
          'Motion',
          'Tailwind CSS',
          'JavaScript',
        ]}
      />
      <div className={styles.content}>
        <ProjectImageSlider
          images={[
            '/images/coelm-pic1.png',
            '/images/coelm-pic2.png',
            '/images/coelm-pic3.png',
            '/images/coelm-pic4.png',
          ]}
        />
        <Accordion
          items={accordionItems}
          title={scopedT('accordion.heading')}
        />
      </div>
      <div className={styles.model}>
        <Typography variant="h2" as="h4" weight="600">
          3D Model
        </Typography>
        <div className={styles.scene}>
          <Scene />
        </div>
      </div>
    </>
  );
}
