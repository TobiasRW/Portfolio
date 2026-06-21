import Image from 'next/image';
import { MapPinSimpleIcon } from '@phosphor-icons/react/dist/ssr';
import type { Dictionary } from '@/i18n/config';
import { Container, DotBackground, Flex, Typography } from 'wolmar-ui';
import { HeroButtons } from './hero-buttons';
import styles from './hero.module.css';

export function Hero({ dict }: { dict: Dictionary }) {
  const t = dict.frontPage.hero;

  return (
    <Container as="section" width="100vw" className={styles.root}>
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
              <Typography as="span">{t.location}</Typography>
            </Flex>
          </Flex>

          <Flex direction="column" gap="2" align="center" justify="center">
            <Typography
              variant={{ mobile: 'h3', tablet: 'h2', desktop: 'h1' }}
              as="h1"
              weight="600"
              className={styles.title}
            >
              {t.title}
            </Typography>

            <Typography className={styles.workplace}>{t.workplace}</Typography>
          </Flex>

          <HeroButtons labels={t.button} />
        </Flex>
      </Flex>
    </Container>
  );
}
