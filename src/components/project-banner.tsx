import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { ProjectBannerVariant } from "@/types/types";
import clsx from "clsx";

type ProjectBannerProps = {
  variant?: ProjectBannerVariant;
  imageSrc: string;
  title: string;
  website: string;
  github?: string;
  bgColor?: string;
};

export default function ProjectBanner({
  variant = "default",
  imageSrc,
  title,
  website,
  github,
  bgColor = "#2C2C2C",
}: ProjectBannerProps) {
  const isPhone = variant === "phone";
  const isPc = variant === "pc";
  const isPhone2 = variant === "phone2";
  const isDefault = variant === "default";

  return (
    <div className="z-10 mx-auto flex w-10/12 flex-col gap-4 md:w-4/6 xl:w-[60%] 2xl:w-[55%]">
      <div
        className={`relative flex h-52 flex-col xs:h-56 sm:h-64 lg:h-96 xl:h-[420px] 2xl:h-[470px] 3xl:h-[550px]`}
      >
        <div
          className="relative h-full w-full shadow-xl"
          style={{
            backgroundColor: bgColor,
            borderRadius: "1rem", // fallback radius
            clipPath: "inset(0 round 1rem)", // actual clipping
          }}
        >
          <Image
            src={imageSrc}
            alt={`${title} Banner`}
            fill
            priority={true}
            className={clsx(
              {
                ["absolute object-cover object-[50%_70%]"]: isDefault,
              },
              {
                ["mt-14 -rotate-[10deg] scale-150 object-contain sm:mt-20 sm:scale-[1.9] lg:-ml-10 lg:scale-[1.6] xl:-ml-16 xl:mt-24 3xl:-ml-28"]:
                  isPhone,
              },
              {
                ["-ml-[20%] mt-14 -rotate-[5deg] scale-150 object-contain xs:-ml-[25%] xs:scale-[1.8] sm:-ml-[30%] lg:-ml-[25%] lg:mt-24 xl:mt-28 xl:scale-[1.9] 2xl:mt-32 3xl:mt-36"]:
                  isPc,
              },
              {
                ["ml-10 mt-10 -rotate-[5deg] scale-[1.7] object-contain sm:ml-14 sm:mt-7 sm:scale-[1.9] lg:-ml-8 lg:scale-[1.7] xl:-ml-14 xl:mt-10 xl:scale-[1.8] 3xl:-ml-12"]:
                  isPhone2,
              },
            )}
          />
          {/* Name and button - Laptop */}
          <div className="absolute right-10 top-5 hidden h-1/6 lg:flex lg:flex-col lg:gap-2 xl:right-14 xl:top-6 xl:gap-3">
            <h3 className="text-4xl font-medium text-white xl:text-5xl">
              {title}
            </h3>
            <div className="ml-auto flex gap-2 xl:gap-4">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  aria-label="Github link"
                  className="flex items-center justify-center rounded-full bg-white p-3 transition-all duration-300 hover:scale-95 3xl:p-4"
                >
                  <Image
                    src="/icons/github.svg"
                    alt="Github logo"
                    width={16}
                    height={16}
                    className="h-4 w-4 3xl:h-5 3xl:w-5"
                  />
                </a>
              )}
              <a
                href={website}
                target="_blank"
                aria-label="Website link"
                className="group flex items-center justify-center rounded-full bg-white p-3 transition-all duration-300 hover:scale-95 3xl:p-4"
              >
                <ArrowUpRight className="h-4 w-4 3xl:h-5 3xl:w-5 dark:text-black" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Name and buttons - Mobile */}
      <div className="flex w-full items-center justify-center lg:hidden">
        <h3 className="text-3xl font-semibold">{title}</h3>
        <div className="ml-auto flex gap-4">
          {github && (
            <a
              href={github}
              aria-label="Github link"
              target="_blank"
              className="flex items-center justify-center rounded-full bg-white p-3"
            >
              <Image
                src="/icons/github.svg"
                alt="Github logo"
                width={16}
                height={16}
                className="h-3 w-3 sm:h-4 sm:w-4"
              />
            </a>
          )}
          <a
            href={website}
            aria-label="Website link"
            target="_blank"
            className="flex items-center justify-center rounded-full bg-white p-3"
          >
            <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 dark:text-black" />
          </a>
        </div>
      </div>
    </div>
  );
}
