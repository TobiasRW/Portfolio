"use client";

import { useState } from "react";
import { MagnifyingGlassPlusIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { SliderVariant } from "@/types/types";
import { Slider as EmblaSlider } from "@/components/embla";
import clsx from "clsx";

type SliderImageProps = {
  variant?: SliderVariant;
  bgColor?: string;
  images: string[];
};

export default function SliderComponent({
  variant = "default",
  images,
  bgColor = "#2C2C2C",
}: SliderImageProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  const isBackground = variant === "background";

  return (
    <div className="3xl:mx-0 relative mx-auto w-10/12 py-20 lg:py-40 xl:py-0">
      <div className="flex w-full max-w-full flex-col gap-6 px-6 sm:px-0">
        <h2 className="font-heading text-2xl font-semibold sm:text-3xl md:text-4xl xl:text-5xl">
          Snapshots
        </h2>
        <EmblaSlider>
          {images.map((image, index) => (
            <div key={index}>
              <div
                className={clsx(
                  "group relative flex aspect-video cursor-pointer items-center justify-center overflow-hidden rounded-md",
                  {
                    ["xl:aspect-[4/3]"]: isBackground,
                  },
                )}
                onClick={() => openModal(image)}
                style={isBackground ? { backgroundColor: bgColor } : {}}
              >
                <Image
                  src={image}
                  alt="snapshot"
                  fill
                  className={clsx({
                    ["object-contain"]: isBackground,
                    ["object-cover"]: !isBackground,
                  })}
                />
                <div className="absolute right-2 bottom-2 hidden scale-0 cursor-pointer items-center justify-center rounded-full bg-white p-1 text-black opacity-0 shadow-md transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 sm:right-3 sm:bottom-3 sm:p-2 lg:flex">
                  <MagnifyingGlassPlusIcon
                    weight="light"
                    className="h-[18px] w-[18px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </EmblaSlider>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          onClick={closeModal}
          className="fade-in fixed inset-0 z-50 items-center justify-center bg-black/70 transition-opacity duration-300"
        >
          <div className="3xl:w-8/12 pop-in relative aspect-video w-10/12 sm:w-11/12 xl:w-9/12">
            <Image
              src={selectedImage}
              alt="snapshot"
              fill
              className="cursor-pointer object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
