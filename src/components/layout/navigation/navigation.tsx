'use client';

import styles from './navigation.module.css';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { TransitionLink } from '@/components/ui';
import { ArrowUpRightIcon, ArrowLeftIcon } from '@phosphor-icons/react';
import {
  useChangeLocale,
  useCurrentLocale,
  useDictionary,
} from '@/i18n/client';
import { locales } from '@/i18n/config';
import clsx from 'clsx';
import { Button, Flex, LanguageToggle, Typography } from 'wolmar-ui';

const links = {
  github: 'https://github.com/TobiasRW',
  linkedin: 'https://www.linkedin.com/in/tobias-wolmar-87991224a/',
};

export function Nav() {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const t = useDictionary().navigation;

  const pathname = usePathname();

  // Home is "/<locale>" for every locale (every path is locale-prefixed).
  const isHome = locales.some((l) => pathname === `/${l}`);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const isHidden = currentScrollY > lastScrollY && currentScrollY > 100;
      const isScrolled = currentScrollY > 400;

      setHidden(isHidden);
      setScrolled(isScrolled);

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Flex
      as="header"
      align="center"
      justify="between"
      paddingInline={{ mobile: '4', tablet: '8', desktop: '16' }}
      className={clsx(
        styles.root,
        scrolled ? styles.scrolled : styles.top,
        hidden ? styles.hidden : styles.visible,
      )}
    >
      <Flex align="center" justify="between" className={styles.container}>
        <Flex as="nav" align="center" gap={{ mobile: '4', desktop: '6' }}>
          {isHome ? (
            <Typography
              as="a"
              href="mailto:tobiasrw98@gmail.com"
              className={styles.email}
            >
              tobiasrw98@gmail.com
            </Typography>
          ) : (
            <TransitionLink href="/" className={styles['return-link']}>
              <ArrowLeftIcon size={18} className={styles['return-icon']} />
              {t.back}
            </TransitionLink>
          )}

          <LanguageToggle
            gap="1"
            languages={['da', 'en']}
            activeLanguage={locale}
            onLanguageChange={changeLocale}
            uppercase
          />
          <Button
            as="a"
            size="sm"
            className={styles.cv}
            href={
              locale === 'da' ? '/pdfs/cv-danish.pdf' : '/pdfs/cv-english.pdf'
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </Button>
        </Flex>
        <div>
          <Button
            variant="ghost"
            size="sm"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className={styles.hamburger}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Flex direction="column" align="end" gap="1">
              <span
                className={clsx(styles.line1, isOpen ? styles.open : undefined)}
              />
              <span
                className={clsx(styles.line2, isOpen ? styles.open : undefined)}
              />
              <span
                className={clsx(styles.line3, isOpen ? styles.open : undefined)}
              />
            </Flex>
          </Button>

          <div className={clsx(styles.menu, isOpen ? styles.open : undefined)}>
            <Flex
              as="ul"
              direction={{ mobile: 'column', desktop: 'row' }}
              gap={{ mobile: '8', desktop: '10' }}
              className={styles.list}
            >
              <li>
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                >
                  <span className={styles.text}>GitHub</span>
                  <ArrowUpRightIcon className={styles.arrow} />
                </a>
              </li>
              <li>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                >
                  <span className={styles.text}>LinkedIn</span>
                  <ArrowUpRightIcon className={styles.arrow} />
                </a>
              </li>
            </Flex>
          </div>
        </div>
      </Flex>
    </Flex>
  );
}
