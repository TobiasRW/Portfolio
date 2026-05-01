'use client';

import { ArrowUpRightIcon } from '@phosphor-icons/react';
import useDarkMode from '@/hooks/useDarkMode';
import { skillLogos, getLogo } from '@/data/logos';
import Image from 'next/image';
import { useScopedI18n } from '@/locales/client';
import { Logo } from '@/types/types';
import { Carousel as EmblaCarousel } from '@/components/embla';
import styles from './skills.module.css';
import { Button, Flex, Typography } from 'wolmar-ui';

export function Skills() {
  const isDarkMode = useDarkMode();
  const skills = skillLogos;

  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <Flex
          direction="column"
          gap={{ mobile: '10', tablet: '12', desktop: '14' }}
          align="center"
        >
          <Typography
            variant={{ mobile: 'h3', tablet: 'h2' }}
            as="h2"
            weight="600"
            className={styles.title}
          >
            Skills
          </Typography>
          <Carousel skills={skills} isDarkMode={isDarkMode} />
        </Flex>
      </div>
    </section>
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

            <Button
              as="a"
              href={logo.url ?? '#'}
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
            </Button>
          </div>
        ))}
      </EmblaCarousel>
    </div>
  );
}
