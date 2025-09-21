import Image from "next/image";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
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
        className={`xs:h-56 3xl:h-[550px] relative flex h-52 flex-col sm:h-64 lg:h-96 xl:h-[420px] 2xl:h-[470px]`}
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
            className={clsx({
              ["absolute object-cover object-[50%_70%]"]: isDefault,
              ["3xl:-ml-28 mt-14 scale-150 -rotate-[10deg] object-contain sm:mt-20 sm:scale-[1.9] lg:-ml-10 lg:scale-[1.6] xl:mt-24 xl:-ml-16"]:
                isPhone,
              ["xs:-ml-[25%] xs:scale-[1.8] 3xl:mt-36 mt-14 -ml-[20%] scale-150 -rotate-[5deg] object-contain sm:-ml-[30%] lg:mt-24 lg:-ml-[25%] xl:mt-28 xl:scale-[1.9] 2xl:mt-32"]:
                isPc,
              ["3xl:-ml-12 mt-10 ml-10 scale-[1.7] -rotate-[5deg] object-contain sm:mt-7 sm:ml-14 sm:scale-[1.9] lg:-ml-8 lg:scale-[1.7] xl:mt-10 xl:-ml-14 xl:scale-[1.8]"]:
                isPhone2,
            })}
          />
          {/* Name and button - Laptop */}
          <div className="absolute top-5 right-10 hidden h-1/6 lg:flex lg:flex-col lg:gap-2 xl:top-6 xl:right-14 xl:gap-3">
            <h3 className="text-4xl font-medium text-white xl:text-5xl">
              {title}
            </h3>
            <div className="ml-auto flex gap-2 xl:gap-4">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  aria-label="Github link"
                  className="3xl:p-4 flex items-center justify-center rounded-full bg-white p-3 transition-all duration-300 hover:scale-95"
                >
                  <Image
                    src="/icons/github.svg"
                    alt="Github logo"
                    width={16}
                    height={16}
                    className="3xl:h-5 3xl:w-5 h-4 w-4"
                  />
                </a>
              )}
              <a
                href={website}
                target="_blank"
                aria-label="Website link"
                className="group 3xl:p-4 flex items-center justify-center rounded-full bg-white p-3 transition-all duration-300 hover:scale-95"
              >
                <ArrowUpRightIcon className="3xl:h-5 3xl:w-5 h-4 w-4 dark:text-black" />
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
            <ArrowUpRightIcon className="h-3 w-3 sm:h-4 sm:w-4 dark:text-black" />
          </a>
        </div>
      </div>
    </div>
  );
}
