"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Button from "./ui/button";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";

type EmblaSliderProps = {
  children?: React.ReactNode;
};

export default function EmblaSlider({ children }: EmblaSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <section className="relative">
      <Button
        variant="slider"
        size="icon"
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute -left-8 top-1/2 -translate-y-1/2 md:-left-12"
      >
        <ArrowLeft className="h-4 w-4 text-foreground" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <div className="w-full overflow-hidden" ref={emblaRef}>
        <div className="-px-2 flex">
          {React.Children.toArray(children).map((child, index) => (
            <div key={index} className="flex-[0_0_auto] basis-full px-2">
              {child}
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="slider"
        size="icon"
        onClick={() => emblaApi?.scrollNext()}
        className="absolute -right-8 top-1/2 -translate-y-1/2 md:-right-12"
      >
        <ArrowRight className="h-4 w-4 text-foreground" />
        <span className="sr-only">Next slide</span>
      </Button>
    </section>
  );
}
