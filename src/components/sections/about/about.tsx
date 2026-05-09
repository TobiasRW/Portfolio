import { getScopedI18n } from '@/locales/server';
import styles from './about.module.css';
import { Container, Flex, Typography } from 'wolmar-ui';

export async function About() {
  const scopedT = await getScopedI18n('frontPage.about');
  return (
    <Container
      as="section"
      id="about"
      width={{ mobile: '83.333%', tablet: '91.666%' }}
      className={styles.root}
    >
      <Flex direction="column" gap="8">
        <Typography variant="h2" as="h3" weight="600" className={styles.title}>
          {scopedT('title')}
        </Typography>
        <Flex direction="column" gap="4">
          <Typography weight="300">{scopedT('text.intro')}</Typography>
          <Typography weight="300">{scopedT('text.paragraph1')}</Typography>
          <Typography weight="300">{scopedT('text.paragraph2')}</Typography>
          <Typography weight="300">{scopedT('text.paragraph3')}</Typography>
          <Typography weight="300">{scopedT('text.paragraph4')}</Typography>
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
