'use client';

import type { TestUser } from '@/types/types';
import { Icon } from '../../ui';
import { useDictionary } from '@/i18n/client';
import styles from './project-description.module.css';
import { Badge, Container, Flex, Tooltip, Typography } from 'wolmar-ui';

type ProjectDescriptionProps = {
  title: string;
  disclaimer?: string;
  text: string[];
  techStack: string[];
  badges?: string[];
  testUser?: TestUser;
};

export function ProjectDescription({
  title,
  disclaimer,
  text,
  techStack,
  badges = [],
  testUser,
}: ProjectDescriptionProps) {
  const t = useDictionary().testUser;

  return (
    <Container
      as="section"
      paddingBlock={{ mobile: '10', tablet: '14', desktop: '16' }}
      className={styles.root}
    >
      {/* Project Description Section */}
      <Flex direction="column" gap="6" className={styles['content-wrapper']}>
        <Flex direction="column" gap="2">
          <Typography variant="h2" weight="600">
            {title}
          </Typography>
          {badges.length > 0 && (
            <Flex wrap="wrap" gap="2">
              {badges.map((badge, index) => (
                <Badge key={index} asChild>
                  <Typography variant="caption">{badge}</Typography>
                </Badge>
              ))}
            </Flex>
          )}
        </Flex>

        <Flex
          direction={{ mobile: 'column', desktop: 'row' }}
          gap={{ mobile: '6', desktop: '16' }}
          align="center"
        >
          <Flex direction="column" gap="4">
            {disclaimer && (
              <Typography weight="300">
                <Typography as="span" weight="400">
                  Disclaimer:
                </Typography>{' '}
                {disclaimer}
              </Typography>
            )}

            {text.map((paragraph, index) => (
              <Typography weight="300" key={index}>
                {paragraph}
              </Typography>
            ))}

            {testUser && (
              <div>
                <Typography weight="400">{t.heading}</Typography>
                {testUser.email && (
                  <Typography weight="300">
                    <Typography weight="400" as="span">
                      {t.email}
                    </Typography>{' '}
                    {testUser.email}
                  </Typography>
                )}
                {testUser.username && (
                  <Typography weight="300">
                    <Typography weight="400" as="span">
                      {t.user}
                    </Typography>{' '}
                    {testUser.username}
                  </Typography>
                )}
                <Typography weight="300">
                  <Typography weight="400" as="span">
                    {t.password}
                  </Typography>{' '}
                  {testUser.password}
                </Typography>
              </div>
            )}
          </Flex>

          {/* Icons Section */}
          <Flex direction="column" gap="4" className={styles['tech-section']}>
            <Typography variant="h4" as="h3">
              Techstack
            </Typography>
            <Flex gap="4" wrap="wrap">
              {techStack.map((item) => (
                <Tooltip key={item} content={item}>
                  <Icon label={item} />
                </Tooltip>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}
