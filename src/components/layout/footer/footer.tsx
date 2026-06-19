import { Flex, Typography } from 'wolmar-ui';
import styles from './footer.module.css';

export function Footer() {
  return (
    <Flex as="footer" marginTop="16" align="end" className={styles.footer}>
      <Flex
        align="center"
        justify="between"
        marginInline="auto"
        paddingBlock={{ mobile: '4', desktop: '8' }}
        className={styles.container}
      >
        <Flex gap={{ mobile: '4', tablet: '8', desktop: '10' }}>
          <Typography
            as="a"
            variant={{ mobile: 'bodyBold', tablet: 'h4', desktop: 'h3' }}
            weight="600"
            href="https://github.com/TobiasRW"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Typography>
          <Typography
            as="a"
            variant={{ mobile: 'bodyBold', tablet: 'h4', desktop: 'h3' }}
            weight="600"
            href="https://www.linkedin.com/in/tobias-wolmar-87991224a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Typography>
          <Typography
            as="a"
            variant={{ mobile: 'bodyBold', tablet: 'h4', desktop: 'h3' }}
            weight="600"
            href="mailto:tobiasrw98@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </Typography>
        </Flex>
        <Typography
          variant={{ mobile: 'bodyBold', tablet: 'h4', desktop: 'h3' }}
          as="h6"
          weight="600"
        >
          Tobias Wolmar
        </Typography>
      </Flex>
    </Flex>
  );
}
