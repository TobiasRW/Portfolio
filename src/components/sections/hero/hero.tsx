'use client';
import Image from 'next/image';
import {
  ArrowDownIcon,
  MapPinSimpleIcon,
} from '@phosphor-icons/react/dist/ssr';
import { useScopedI18n } from '@/locales/client';
import { Dots } from '@/components/visuals';
import { Button } from '@/components/ui';
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
        <Dots />
        <div className={styles.content}>
          <div className={styles.profile}>
            <div className={styles.image}>
              <Image
                src="/images/portrait.webp"
                alt="profile picture"
                width={200}
                height={200}
              />
            </div>

            <div className={styles.location}>
              <MapPinSimpleIcon weight="fill" className={styles.icon} />
              <p>{scopedT('location')}</p>
            </div>
          </div>

          <div className={styles['title-container']}>
            <h1 className={styles.title}>{scopedT('title')}</h1>

            <p className={styles.workplace}>{scopedT('workplace')}</p>
          </div>

          <div className={styles.buttons}>
            <Button
              className={styles.button}
              onClick={() => scrollToSection('projects')}
            >
              {scopedT('button.projects')}
              <ArrowDownIcon weight="bold" className={styles.arrow} />
            </Button>
            <Button
              className={styles.button}
              onClick={() => scrollToSection('about')}
            >
              {scopedT('button.about')}
              <ArrowDownIcon weight="bold" className={styles.arrow} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
