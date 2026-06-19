import type { Dictionary } from '@/i18n/config';
import styles from './about.module.css';
import { Container, Flex, Typography } from 'wolmar-ui';

export async function About({ dict }: { dict: Dictionary }) {
  const about = dict.frontPage.about;
  return (
    <Container
      as="section"
      id="about"
      width={{ mobile: '83.333%', tablet: '91.666%' }}
      className={styles.root}
    >
      <Flex direction="column" gap="8">
        <Typography
          variant={{ mobile: 'h3', tablet: 'h2' }}
          as="h2"
          weight="600"
          className={styles.title}
        >
          {about.title}
        </Typography>
        <Flex direction="column" gap="4">
          <Typography weight="300">{about.intro}</Typography>
          {about.paragraphs.map((paragraph, index) => (
            <Typography weight="300" key={index}>
              {paragraph}
            </Typography>
          ))}
        </Flex>
        <Flex
          direction={{ mobile: 'column', desktop: 'row' }}
          gap={{ mobile: '4', desktop: '8' }}
        >
          <Typography
            as="a"
            href="mailto:tobiasrw98@gmail.com"
            underline
            weight="300"
            color="link"
            target="_blank"
            className={styles.link}
          >
            tobiasrw98@gmail.com
          </Typography>
          <Typography
            as="a"
            href="tel:30305154"
            underline
            weight="300"
            color="link"
            target="_blank"
            className={styles.link}
          >
            Tlf: 30 30 51 54
          </Typography>
          <Typography
            as="a"
            color="link"
            underline
            weight="300"
            href="https://www.linkedin.com/in/tobias-wolmar-87991224a/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </Typography>
        </Flex>
      </Flex>
    </Container>
  );
}
