'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeftIcon, ArrowRightIcon } from '@phosphor-icons/react/dist/ssr';
import styles from './slider.module.css';
import { Button, Typography } from 'wolmar-ui';

type EmblaSliderProps = {
  children?: React.ReactNode;
};

export function Slider({ children }: EmblaSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <section className={styles.root}>
      <Button
        icon
        size={{ mobile: 'sm', desktop: 'md' }}
        onClick={() => emblaApi?.scrollPrev()}
        className={styles.prev}
        aria-label="Go to previous slide"
      >
        <ArrowLeftIcon className={styles.icon} />
      </Button>

      <div className={styles.container} ref={emblaRef}>
        <div className={styles.track}>
          {React.Children.toArray(children).map((child, index) => (
            <div key={index} className={styles.item}>
              {child}
            </div>
          ))}
        </div>
      </div>

      <Button
        icon
        size={{ mobile: 'sm', desktop: 'md' }}
        onClick={() => emblaApi?.scrollNext()}
        className={styles.next}
        aria-label="Go to next slide"
      >
        <ArrowRightIcon className={styles.icon} />
      </Button>
    </section>
  );
}
