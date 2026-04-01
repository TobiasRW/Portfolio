"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "../../ui";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import styles from "./slider.module.css";

type EmblaSliderProps = {
  children?: React.ReactNode;
};

export function Slider({ children }: EmblaSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <section className={styles.root}>
      <Button
        variant="slider"
        size="icon"
        onClick={() => emblaApi?.scrollPrev()}
        className={styles.prev}
      >
        <ArrowLeftIcon className={styles.icon} />
        <span className={styles["sr-only"]}>Previous slide</span>
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
        variant="slider"
        size="icon"
        onClick={() => emblaApi?.scrollNext()}
        className={styles.next}
      >
        <ArrowRightIcon className={styles.icon} />
        <span className={styles["sr-only"]}>Next slide</span>
      </Button>
    </section>
  );
}
