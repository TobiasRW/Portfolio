'use client';

import { ArrowDownIcon } from '@phosphor-icons/react/dist/ssr';
import { Button, Flex, Typography } from 'wolmar-ui';
import type { Dictionary } from '@/i18n/config';
import styles from './hero-buttons.module.css';

type HeroButtonsProps = {
  labels: Dictionary['frontPage']['hero']['button'];
};

export function HeroButtons({ labels }: HeroButtonsProps) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Flex justify="center" gap={{ mobile: '4', desktop: '6' }}>
      <Button
        className={styles.button}
        onClick={() => scrollToSection('projects')}
      >
        <Typography variant="body" as="span" color="dark" weight="500">
          {labels.projects}
        </Typography>
        <ArrowDownIcon weight="bold" className={styles.arrow} />
      </Button>
      <Button
        className={styles.button}
        onClick={() => scrollToSection('about')}
      >
        <Typography variant="body" as="span" color="dark" weight="500">
          {labels.about}
        </Typography>
        <ArrowDownIcon weight="bold" className={styles.arrow} />
      </Button>
    </Flex>
  );
}
