'use client';

import styles from './navigation.module.css';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { TransitionLink } from '../../utils/transition-link';
import { ArrowUpRightIcon, ArrowLeftIcon } from '@phosphor-icons/react';
import {
  useChangeLocale,
  useCurrentLocale,
  useScopedI18n,
} from '@/locales/client';
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

  const scopedT = useScopedI18n('navigation');

  const pathname = usePathname();

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
    <header
      className={clsx(
        styles.root,
        scrolled ? styles.scrolled : styles.top,
        hidden ? styles.hidden : styles.visible,
      )}
    >
      <div className={styles.container}>
        <nav className={styles.nav}>
          {pathname === '/' || pathname === '/da' || pathname === '/en' ? (
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
              {scopedT('back')}
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
              pathname === '/' || pathname === '/da'
                ? '/pdfs/cv-danish.pdf'
                : '/pdfs/cv-english.pdf'
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </Button>
        </nav>
        <div>
          <Button
            variant="ghost"
            size="sm"
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
            <ul className={styles.list}>
              <li>
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                >
                  <p className={styles.text}>GitHub</p>
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
                  <p className={styles.text}>LinkedIn</p>
                  <ArrowUpRightIcon className={styles.arrow} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
