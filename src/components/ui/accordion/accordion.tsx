'use client';

import { ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import { getLogoByLabel } from '@/data/logos';
import useDarkMode from '@/hooks/useDarkMode';
import { AccordionEntry } from '@/types/types';
import { Collapsible } from '../collapsible/collapsible';
import styles from './accordion.module.css';

type AccordionTechProps = {
  title: string;
  items: AccordionEntry[];
};

export function Accordion({ title, items }: AccordionTechProps) {
  const isDarkMode = useDarkMode();

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{title}</h2>

      {items.map((item, index) => (
        <Collapsible key={`collapsible-item-${index}`} trigger={item.iconLabel}>
          <div className={styles.content}>
            <p className={styles.text}>{item.content}</p>
            <div className={styles.icon}>
              <Image
                src={getLogoByLabel(item.iconLabel, isDarkMode).icon}
                alt={`${item.iconLabel} logo`}
                width={24}
                height={24}
                className={styles.logo}
                loading="lazy"
              />
              {item.website && (
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <ArrowUpRightIcon className={styles.arrow} />
                </a>
              )}
            </div>
          </div>
        </Collapsible>
      ))}
    </div>
  );
}
