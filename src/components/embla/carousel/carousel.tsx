import React from 'react';
import AutoScroll, {
  type AutoScrollOptionsType,
} from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './carousel.module.css';

interface EmblaCarouselProps {
  children?: React.ReactNode;
  speed?: number;
}

export function Carousel({ children, speed = 1 }: EmblaCarouselProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true, skipSnaps: true }, [
    AutoScroll({
      delay: speed,
      speed,
      stopOnMouseEnter: false,
      stopOnInteraction: false,
    } as AutoScrollOptionsType),
  ]);

  return (
    <section>
      <div className={styles.container} ref={emblaRef}>
        <div className={styles.track}>
          {React.Children.toArray(children).map((child, index) => (
            <div key={index} className={styles.item}>
              {child}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
