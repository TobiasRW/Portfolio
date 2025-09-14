import React from "react";
import AutoScroll, {
  type AutoScrollOptionsType,
} from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";

interface EmblaCarouselProps {
  children?: React.ReactNode;
  speed?: number;
}

export default function EmblaCarousel({
  children,
  speed = 1,
}: EmblaCarouselProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      delay: speed,
      speed,
      stopOnMouseEnter: false,
      stopOnInteraction: false,
    } as AutoScrollOptionsType),
  ]);

  return (
    <section>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-mx-2 flex md:-mx-2 lg:-mx-3">
          {React.Children.toArray(children).map((child, index) => (
            <div
              key={index}
              className="mx-2 flex-[0_0_auto] basis-1/5 md:mx-2 md:basis-1/6 lg:mx-3 lg:basis-[13%] xl:basis-[12%] 2xl:basis-[11%]"
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
