import { ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr';
import { getLogoByLabel } from '@/data/logos';
import { LogoImage } from '../logo-image/logo-image';
import { AccordionEntry } from '@/types/types';
import { Collapsible, Flex, Typography } from 'wolmar-ui';
import styles from './accordion.module.css';

type AccordionTechProps = {
  title: string;
  items: AccordionEntry[];
};

export function Accordion({ title, items }: AccordionTechProps) {
  return (
    <Flex direction="column" gap="4" className={styles.root}>
      <Typography variant="h2" weight="600">
        {title}
      </Typography>

      {items.map((item, index) => {
        const logo = getLogoByLabel(item.iconLabel);
        return (
          <Collapsible.Root key={`collapsible-item-${index}`}>
            <Collapsible.Trigger>
              <Typography italic>{item.iconLabel}</Typography>
            </Collapsible.Trigger>
            <Collapsible.Content>
              <Typography weight="300">{item.content}</Typography>
              <div className={styles.icon}>
                {logo && (
                  <LogoImage
                    logo={logo}
                    alt={`${item.iconLabel} logo`}
                    width={24}
                    height={24}
                    className={styles.logo}
                    loading="lazy"
                  />
                )}
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
        );
      })}
    </Flex>
  );
}
