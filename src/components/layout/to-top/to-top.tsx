'use client';

import { ArrowUpIcon } from '@phosphor-icons/react';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import styles from './to-top.module.css';
import { Button } from 'wolmar-ui';

export function ToTop() {
  const [hidden, setHidden] = useState<boolean>(false);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isHidden = currentScrollY > lastScrollY && currentScrollY > 400;
      setHidden(isHidden);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Button
        icon
        size={{ mobile: 'md', desktop: 'lg' }}
        onClick={scrollToTop}
        className={clsx(styles.root, {
          [styles.hidden]: !hidden,
          [styles.visible]: hidden,
        })}
        aria-label="Scroll to top"
      >
        <ArrowUpIcon className={styles.icon} />
      </Button>
    </>
  );
}
