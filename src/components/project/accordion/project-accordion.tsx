import { ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr';
import { getLogoByLabel } from '@/data/logos';
import { LogoImage } from '../../ui';
import type { Project, ProjectContent } from '@/types/types';
import { Collapsible, Flex, Typography } from 'wolmar-ui';
import styles from './project-accordion.module.css';

type ProjectAccordionProps = {
  tech: Project['tech'];
  content: ProjectContent['accordion'];
};

export function ProjectAccordion({ tech, content }: ProjectAccordionProps) {
  const items = tech.map((item, index) => ({
    ...item,
    content: content.items[index],
  }));

  return (
    <Flex direction="column" gap="4" className={styles.root}>
      <Typography variant="h2" weight="600">
        {content.heading}
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
