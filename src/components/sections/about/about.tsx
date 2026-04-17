import { getScopedI18n } from '@/locales/server';
import styles from './about.module.css';
import { Typography } from 'wolmar-ui';

export async function About() {
  const scopedT = await getScopedI18n('frontPage.about');
  return (
    <section id="about" className={styles.root}>
      <div className={styles.content}>
        <Typography variant="h2" as="h3" weight="600" className={styles.title}>
          {scopedT('title')}
        </Typography>
        <div className={styles.paragraphs}>
          <Typography weight="300">{scopedT('text.intro')}</Typography>
          <Typography weight="300">{scopedT('text.paragraph1')}</Typography>
          <Typography weight="300">{scopedT('text.paragraph2')}</Typography>
          <Typography weight="300">{scopedT('text.paragraph3')}</Typography>
          <Typography weight="300">{scopedT('text.paragraph4')}</Typography>
        </div>
        <div className={styles.links}>
          <a
            href="mailto:tobiasrw98@gmail.com"
            target="_blank"
            className={styles.link}
          >
            tobiasrw98@gmail.com
          </a>
          <a href="tel:30305154" target="_blank" className={styles.link}>
            Tlf: 30 30 51 54
          </a>
          <a
            href="https://www.linkedin.com/in/tobias-wolmar-87991224a/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
