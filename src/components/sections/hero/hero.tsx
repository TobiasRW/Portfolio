'use client';
import Image from 'next/image';
import {
  ArrowDownIcon,
  MapPinSimpleIcon,
} from '@phosphor-icons/react/dist/ssr';
import { useScopedI18n } from '@/locales/client';
import { Button, DotBackground, Flex, Typography } from 'wolmar-ui';
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
    <section className={styles.root}>
      <Flex
        className={styles.hero}
        align={{ mobile: 'end', tablet: 'center' }}
        justify="center"
      >
        <DotBackground size="sm" />
        <Flex
          direction="column"
          gap={{ mobile: '6', desktop: '8' }}
          paddingBlock={{ mobile: '5', desktop: '8' }}
        >
          <Flex
            direction="column"
            gap="4"
            align="center"
            justify="center"
            className={styles.profile}
          >
            <div className={styles.image}>
              <Image
                src="/images/portrait.webp"
                alt="profile picture"
                width={200}
                height={200}
                loading="eager"
              />
            </div>

            <Flex align="center" gap="1">
              <MapPinSimpleIcon weight="fill" className={styles.icon} />
              <Typography as="span">{scopedT('location')}</Typography>
            </Flex>
          </Flex>

          <Flex direction="column" gap="2" align="center" justify="center">
            <Typography
              variant={{ mobile: 'h3', tablet: 'h2', desktop: 'h1' }}
              as="h1"
              weight="600"
              className={styles.title}
            >
              {scopedT('title')}
            </Typography>

            <Typography className={styles.workplace}>
              {scopedT('workplace')}
            </Typography>
          </Flex>

          <Flex justify="center" gap={{ mobile: '4', desktop: '6' }}>
            <Button
              className={styles.button}
              onClick={() => scrollToSection('projects')}
            >
              <Typography variant="body" as="span" color="dark" weight="500">
                {scopedT('button.projects')}
              </Typography>
              <ArrowDownIcon weight="bold" className={styles.arrow} />
            </Button>
            <Button
              className={styles.button}
              onClick={() => scrollToSection('about')}
            >
              <Typography variant="body" as="span" color="dark" weight="500">
                {scopedT('button.about')}
              </Typography>
              <ArrowDownIcon weight="bold" className={styles.arrow} />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </section>
  );
}
