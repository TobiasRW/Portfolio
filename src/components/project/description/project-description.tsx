'use client';

import highlightText from '@/helpers/highlightText';
import type { TestUser, DescriptionText } from '@/types/types';
import { Badge, Icon } from '../../ui';
import { useScopedI18n } from '@/locales/client';
import styles from './project-description.module.css';

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
          <h3 className={styles.title}>{title}</h3>
          {badges.length > 0 && (
            <div className={styles.badges}>
              {badges.map((badge, index) => (
                <Badge key={index} title={badge} />
              ))}
            </div>
          )}
        </div>

        <div className={styles['main-content']}>
          <div>
            {disclaimer && (
              <p className={styles.disclaimer}>
                <span className={styles['disclaimer-label']}>Disclaimer:</span>{' '}
                {disclaimer}
              </p>
            )}

            {text.map((text, index) => (
              <p key={index} className={styles.paragraph}>
                {highlightText(text.content, text.highlightWords ?? [])}
              </p>
            ))}

            {testUser && (
              <div className={styles['test-user-section']}>
                <p className={styles['test-user-heading']}>
                  {scopedT('heading')}
                </p>
                {testUser.email && (
                  <p className={styles['test-user-item']}>
                    <span className={styles['test-user-label']}>
                      {scopedT('email')}
                    </span>{' '}
                    {testUser.email}
                  </p>
                )}
                {testUser.username && (
                  <p className={styles['test-user-item']}>
                    <span className={styles['test-user-label']}>
                      {scopedT('user')}
                    </span>{' '}
                    {testUser.username}
                  </p>
                )}
                <p className={styles['test-user-item']}>
                  <span className={styles['test-user-label']}>
                    {scopedT('password')}
                  </span>{' '}
                  {testUser.password}
                </p>
              </div>
            )}
          </div>

          {/* Icons Section */}
          <div className={styles['tech-section']}>
            <p className={styles['tech-title']}>Techstack</p>
            <div className={styles['tech-icons']}>
              {techStack.map((item, index) => {
                return <Icon key={index} label={item} hasTooltip />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
