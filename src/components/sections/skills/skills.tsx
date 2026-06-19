'use client';

import { ArrowUpRightIcon } from '@phosphor-icons/react';
import useDarkMode from '@/hooks/useDarkMode';
import { skillLogos, getLogo } from '@/data/logos';
import Image from 'next/image';
import { useDictionary } from '@/i18n/client';
import styles from './skills.module.css';
import { Button, Card, Carousel, Container, Flex, Typography } from 'wolmar-ui';

export function Skills() {
  const isDarkMode = useDarkMode();
  const skills = skillLogos;
  const t = useDictionary().frontPage.skills;

  return (
    <Container
      as="section"
      paddingBlock={{ mobile: '10', tablet: '14', desktop: '16' }}
      className={styles.root}
    >
      <Container
        paddingBottom={{ mobile: '6', tablet: '8', desktop: '12' }}
        className={styles.container}
      >
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
          <div className={styles.wrapper}>
            <div className={styles.left} />
            <div className={styles.right} />
            <Carousel.Root
              options={{ loop: true, skipSnaps: true, dragFree: true }}
              autoScroll={{
                enabled: true,
                stopOnHover: false,
                stopOnInteraction: false,
              }}
            >
              <Carousel.Content className={styles['carousel-content']}>
                {skills.map((logo, index) => (
                  <Carousel.Slide
                    key={index}
                    className={styles['carousel-slide']}
                  >
                    <Card
                      as={Flex}
                      align="center"
                      justify="center"
                      padding="7"
                      className={styles.card}
                    >
                      <Image
                        src={getLogo(logo, isDarkMode)}
                        alt={logo.label}
                        width={64}
                        height={64}
                        className={styles.logo}
                      />
                      <Typography className={styles.label}>
                        {logo.label}
                      </Typography>

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
                          {t.link}
                        </Typography>
                        <ArrowUpRightIcon className={styles.icon} />
                      </Button>
                    </Card>
                  </Carousel.Slide>
                ))}
              </Carousel.Content>
            </Carousel.Root>
          </div>
        </Flex>
      </Container>
    </Container>
  );
}
