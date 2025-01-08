import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

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
  const isBackground = variant === "background";

  return (
    <div className="relative mx-auto w-10/12 py-20 lg:py-40">
      <div className="flex w-full max-w-full flex-col gap-6 px-6">
        <h2 className="font-heading text-2xl font-semibold sm:text-3xl md:text-4xl xl:text-5xl">
          Snapshots
        </h2>
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                {isBackground ? (
                  <div
                    className="flex aspect-video items-center justify-center overflow-hidden rounded-md"
                    style={{ backgroundColor: bgColor }}
                  >
                    <Image
                      src={image}
                      alt="snapshot"
                      height={200}
                      width={200}
                      className="w-[70%]"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-video items-center justify-center overflow-hidden rounded-md">
                    <Image
                      src={image}
                      alt="snapshot"
                      height={200}
                      width={200}
                      className="h-full w-full"
                    />
                  </div>
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
