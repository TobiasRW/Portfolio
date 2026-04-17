'use client';
import Image from 'next/image';
import {
  ArrowDownIcon,
  MapPinSimpleIcon,
} from '@phosphor-icons/react/dist/ssr';
import { useScopedI18n } from '@/locales/client';
import { Button, DotBackground, Typography } from 'wolmar-ui';
import styles from './hero.module.css';

export function Hero() {
  const scopedT = useScopedI18n('frontPage.hero');

  // Utility function to scroll to a given element ID
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.hero}>
        <DotBackground size="sm" />
        <div className={styles.content}>
          <div className={styles.profile}>
            <div className={styles.image}>
              <Image
                src="/images/portrait.webp"
                alt="profile picture"
                width={200}
                height={200}
                loading="eager"
              />
            </div>

            <div className={styles.location}>
              <MapPinSimpleIcon weight="fill" className={styles.icon} />
              <Typography as="span">{scopedT('location')}</Typography>
            </div>
          </div>

          <div className={styles['title-container']}>
            <Typography variant="h1" weight="600" className={styles.title}>
              {scopedT('title')}
            </Typography>

            <Typography className={styles.workplace}>
              {scopedT('workplace')}
            </Typography>
          </div>

          <div className={styles.buttons}>
            <Button
              className={styles.button}
              onClick={() => scrollToSection('projects')}
            >
              <Typography variant="body" as="span" color="dark">
                {scopedT('button.projects')}
              </Typography>
              <ArrowDownIcon weight="bold" className={styles.arrow} />
            </Button>
            <Button
              className={styles.button}
              onClick={() => scrollToSection('about')}
            >
              <Typography variant="body" as="span" color="dark">
                {scopedT('button.about')}
              </Typography>
              <ArrowDownIcon weight="bold" className={styles.arrow} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
