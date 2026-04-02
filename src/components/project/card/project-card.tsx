'use client';
import Image from 'next/image';
import { TransitionLink } from '../../utils/transition-link';
import { ProjectVariant } from '@/types/types';
import { clsx } from 'clsx';
import styles from './project-card.module.css';

type ProjectCardProps = {
  variant?: ProjectVariant;
  imageSrc: string;
  title: string;
  text: string;
  link: string;
  bgColor?: string;
  tags?: string[];
  className?: string;
};

export function ProjectCard({
  variant = 'default',
  imageSrc,
  title,
  text,
  link,
  bgColor = '#2C2C2C',
  tags = [],
  className,
}: ProjectCardProps) {
  const isPhone = variant === 'phone';
  const isComputer = variant === 'computer';
  const isPhone2 = variant === 'phone2';
  const isDefault = variant === 'default';

  return (
    <div
      className={clsx(styles.root, className)}
      style={!isDefault ? { backgroundColor: bgColor } : {}}
    >
      <TransitionLink href={link}>
        <div
          className={clsx(styles['image-wrapper'], {
            [styles['image-wrapper-phone']]: isPhone,
            [styles['image-wrapper-computer']]: isComputer,
            [styles['image-wrapper-phone2']]: isPhone2,
            [styles['image-wrapper-default']]: isDefault,
          })}
        >
          <Image
            src={imageSrc}
            alt={`${title} Banner`}
            fill
            className={styles.image}
          />
        </div>
        <div className={styles['text-overlay']}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{text}</p>
        </div>
        {/* Tags section */}
        {tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </TransitionLink>
    </div>
  );
}
