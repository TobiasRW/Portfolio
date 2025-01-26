"use client";

import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MagnifyingGlassPlus } from "@phosphor-icons/react";
import Image from "next/image";
import { motion } from "motion/react";

type SliderImageProps = {
  variant?: "default" | "background";
  bgColor?: string;
  images: string[];
};

export default function Slider({
  variant = "default",
  images,
  bgColor = "#2C2C2C",
}: SliderImageProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  const isBackground = variant === "background";

  return (
    <div className="relative mx-auto w-10/12 py-20 lg:py-40 xl:py-0">
      <div className="flex w-full max-w-full flex-col gap-6 px-6 sm:px-0">
        <h2 className="font-heading text-2xl font-semibold sm:text-3xl md:text-4xl xl:text-5xl">
          Snapshots
        </h2>
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                {isBackground ? (
                  <div
                    onClick={() => openModal(image)}
                    className="group relative flex aspect-video cursor-pointer items-center justify-center overflow-hidden rounded-md xl:aspect-[4/3]"
                    style={{ backgroundColor: bgColor }}
                  >
                    <Image
                      src={image}
                      alt="snapshot"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                    <div className="absolute bottom-2 right-2 hidden scale-0 cursor-pointer items-center justify-center rounded-full bg-white p-1 text-black opacity-0 shadow-md transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 sm:bottom-3 sm:right-3 sm:p-2 lg:flex">
                      <MagnifyingGlassPlus
                        weight="light"
                        className="h-[18px] w-[18px]"
                      />
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => openModal(image)}
                    className="group relative flex aspect-video cursor-pointer items-center justify-center overflow-hidden rounded-md"
                  >
                    <Image
                      src={image}
                      alt="snapshot"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-2 right-2 hidden scale-0 cursor-pointer items-center justify-center rounded-full bg-white p-1 text-black opacity-0 shadow-md transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 sm:bottom-3 sm:right-3 sm:p-2 lg:flex">
                      <MagnifyingGlassPlus
                        weight="light"
                        className="h-[18px] w-[18px]"
                      />
                    </div>
                  </div>
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "tween" }}
            className="relative aspect-video w-10/12 sm:w-11/12 xl:w-9/12 3xl:w-8/12"
          >
            <Image
              src={selectedImage}
              alt="snapshot"
              fill
              className="cursor-pointer object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
