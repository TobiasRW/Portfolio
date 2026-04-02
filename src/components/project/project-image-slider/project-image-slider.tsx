'use client';

import { useState } from 'react';
import { MagnifyingGlassPlusIcon } from '@phosphor-icons/react';
import Image from 'next/image';
import { SliderVariant } from '@/types/types';
import { Slider as EmblaSlider } from '@/components/embla';
import clsx from 'clsx';
import styles from './project-image-slider.module.css';

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
        <h2 className={styles.title}>Snapshots</h2>
        <EmblaSlider>
          {images.map((image, index) => (
            <div key={index}>
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
                  className={styles.image}
                />
                <div className={styles['icon-hover']}>
                  <MagnifyingGlassPlusIcon
                    weight="light"
                    className={styles.icon}
                  />
                </div>
              </div>
            </div>
          ))}
        </EmblaSlider>
      </div>

      {/* Modal */}
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
