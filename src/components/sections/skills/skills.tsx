'use client';

import { ArrowUpRightIcon } from '@phosphor-icons/react';
import useDarkMode from '@/hooks/useDarkMode';
import { skillLogos, getLogo } from '@/data/logos';
import Image from 'next/image';
import { useScopedI18n } from '@/locales/client';
import { Logo } from '@/types/types';
import { Carousel as EmblaCarousel } from '@/components/embla';
import styles from './skills.module.css';
import { Typography } from 'wolmar-ui';

export function Skills() {
  const isDarkMode = useDarkMode();
  const skills = skillLogos;

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Typography variant="h2" weight="600" className={styles.title}>
            Skills
          </Typography>
          <Carousel skills={skills} isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
}

function Carousel({
  skills,
  isDarkMode,
}: {
  skills: Logo[];
  isDarkMode: boolean;
}) {
  const scopedT = useScopedI18n('frontPage.skills');
  return (
    <div className={styles.carousel}>
      <div className={styles.left}></div>
      <div className={styles.right}></div>
      <EmblaCarousel>
        {skills.map((logo, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={getLogo(logo, isDarkMode)}
              alt={logo.label}
              width={64}
              height={64}
              className={styles.logo}
            />
            <Typography className={styles.label}>{logo.label}</Typography>
            {logo.url ? (
              <a
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <Typography
                  color="dark"
                  variant="bodySmall"
                  as="span"
                  weight="500"
                >
                  {scopedT('link')}
                </Typography>
                <ArrowUpRightIcon className={styles.icon} />
              </a>
            ) : (
              <div className={styles.badge}>
                <Typography
                  color="dark"
                  variant="bodySmall"
                  as="span"
                  weight="500"
                >
                  {logo.label}
                </Typography>
              </div>
            )}
          </div>
        ))}
      </EmblaCarousel>
    </div>
  );
}
