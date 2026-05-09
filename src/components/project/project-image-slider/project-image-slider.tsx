'use client';

import { useState } from 'react';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MagnifyingGlassPlusIcon,
} from '@phosphor-icons/react';
import Image from 'next/image';
import { SliderVariant } from '@/types/types';
import clsx from 'clsx';
import styles from './project-image-slider.module.css';
import { Carousel, Flex, Typography } from 'wolmar-ui';

type SliderImageProps = {
  variant?: SliderVariant;
  bgColor?: string;
  images: string[];
};

export function ProjectImageSlider({
  variant = 'default',
  images,
  bgColor = '#2C2C2C',
}: SliderImageProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  const isBackground = variant === 'background';

  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <Typography variant="h2" weight="600">
          Snapshots
        </Typography>
        <Carousel.Root options={{ loop: true }}>
          <Carousel.Content className={styles['carousel-content']}>
            {images.map((image, index) => (
              <Carousel.Slide key={index} className={styles['carousel-slide']}>
                <div
                  className={clsx(styles['image-container'], {
                    [styles.background]: isBackground,
                  })}
                  onClick={() => openModal(image)}
                  style={isBackground ? { backgroundColor: bgColor } : {}}
                >
                  <Image
                    src={image}
                    alt="snapshot"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.image}
                  />
                  <div className={styles['icon-hover']}>
                    <MagnifyingGlassPlusIcon
                      weight="light"
                      className={styles.icon}
                    />
                  </div>
                </div>
              </Carousel.Slide>
            ))}
          </Carousel.Content>
          <Carousel.PrevButton
            iconSize={12}
            iconFill="currentColor"
            size={{ mobile: 'sm', tablet: 'md' }}
            className={styles.prev}
          />

          <Carousel.NextButton
            iconSize={12}
            iconFill="currentColor"
            size={{ mobile: 'sm', tablet: 'md' }}
            className={styles.next}
          />

          <Flex justify="start" gap="2">
            <Carousel.Dots />
          </Flex>
        </Carousel.Root>
      </div>

      {selectedImage && (
        <div onClick={closeModal} className={clsx(styles.modal, 'fade-in')}>
          <div className={styles['modal-content']}>
            <Image
              src={selectedImage}
              alt="snapshot"
              fill
              className={styles['modal-image']}
            />
          </div>
        </div>
      )}
    </div>
  );
}
