'use client';

import { ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import { getLogoByLabel } from '@/data/logos';
import useDarkMode from '@/hooks/useDarkMode';
import { AccordionEntry } from '@/types/types';
import { Collapsible, Flex, Typography } from 'wolmar-ui';
import styles from './accordion.module.css';

type AccordionTechProps = {
  title: string;
  items: AccordionEntry[];
};

export function Accordion({ title, items }: AccordionTechProps) {
  const isDarkMode = useDarkMode();

  return (
    <Flex direction="column" gap="4" className={styles.root}>
      <Typography variant="h2" weight="600">
        {title}
      </Typography>

      {items.map((item, index) => (
        <Collapsible.Root key={`collapsible-item-${index}`}>
          <Collapsible.Trigger>
            <Typography italic>{item.iconLabel}</Typography>
          </Collapsible.Trigger>
          <Collapsible.Content>
            <Typography weight="300">{item.content}</Typography>
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
          </Collapsible.Content>
        </Collapsible.Root>
      ))}
    </Flex>
  );
}
