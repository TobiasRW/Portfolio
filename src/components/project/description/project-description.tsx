'use client';

import type { TestUser, DescriptionText } from '@/types/types';
import { Icon } from '../../ui';
import { useScopedI18n } from '@/locales/client';
import styles from './project-description.module.css';
import { Badge, Tooltip, Typography } from 'wolmar-ui';

type ProjectDescriptionProps = {
  title: string;
  disclaimer?: string;
  text: DescriptionText[];
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
  const scopedT = useScopedI18n('testUser');

  return (
    <div className={styles.root}>
      {/* Project Description Section */}
      <div className={styles['content-wrapper']}>
        <div className={styles.header}>
          <Typography variant="h2" weight="600">
            {title}
          </Typography>
          {badges.length > 0 && (
            <div className={styles.badges}>
              {badges.map((badge, index) => (
                <Badge key={index} asChild>
                  <Typography variant="caption">{badge}</Typography>
                </Badge>
              ))}
            </div>
          )}
        </div>

        <div className={styles['main-content']}>
          <div className={styles['text-section']}>
            {disclaimer && (
              <Typography weight="300">
                <Typography as="span" weight="400">
                  Disclaimer:
                </Typography>{' '}
                {disclaimer}
              </Typography>
            )}

            {text.map((text, index) => (
              <Typography weight="300" key={index}>
                {text.content}
              </Typography>
            ))}

            {testUser && (
              <div>
                <Typography weight="400">{scopedT('heading')}</Typography>
                {testUser.email && (
                  <Typography weight="300">
                    <Typography weight="400" as="span">
                      {scopedT('email')}
                    </Typography>{' '}
                    {testUser.email}
                  </Typography>
                )}
                {testUser.username && (
                  <Typography weight="300">
                    <Typography weight="400" as="span">
                      {scopedT('user')}
                    </Typography>{' '}
                    {testUser.username}
                  </Typography>
                )}
                <Typography weight="300">
                  <Typography weight="400" as="span">
                    {scopedT('password')}
                  </Typography>{' '}
                  {testUser.password}
                </Typography>
              </div>
            )}
          </div>

          {/* Icons Section */}
          <div className={styles['tech-section']}>
            <Typography variant="h4" as="h3">
              Techstack
            </Typography>
            <div className={styles['tech-icons']}>
              {techStack.map((item) => (
                <Tooltip key={item} content={item}>
                  <Icon label={item} />
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
