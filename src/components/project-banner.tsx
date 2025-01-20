import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

// Define the type for the component's props
type ProjectBannerProps = {
  variant?: "default" | "phone" | "pc"; // Variants for different styles
  imageSrc: string; // Image source
  title: string; // Project title
  website: string; // Project link
  github: string; // Github link
  bgColor?: string; // Background color for the card
};

// ProjectBanner component
export default function ProjectBanner({
  variant = "default", // Default variant is "default"
  imageSrc,
  title,
  website,
  github,
  bgColor = "#2C2C2C", // Default background color
}: ProjectBannerProps) {
  const isPhone = variant === "phone";
  const isPc = variant === "pc";

  return (
    <div className="z-10 mx-auto flex w-10/12 flex-col gap-4 md:w-4/6 xl:w-[60%] 2xl:w-[55%]">
      <div
        className={`relative flex h-52 flex-col xs:h-56 sm:h-64 lg:h-96 xl:h-[420px] 2xl:h-[470px]`}
      >
        <div
          className={`relative h-full w-full overflow-hidden rounded-3xl shadow-xl ${
            isPhone || isPc ? "bg-[#2C2C2C]" : ""
          }`}
          style={{ backgroundColor: isPhone || isPc ? bgColor : "" }}
        >
          {isPhone ? (
            <div className="absolute bottom-[-35%] left-[5%] h-full w-full rotate-[-10deg] scale-[1.1] xs:scale-75 sm:bottom-[-30%] sm:scale-75 md:bottom-[-35%] md:scale-[.8] lg:bottom-[-30%] lg:left-0 lg:scale-100 xl:-left-10 xl:bottom-[-25%] xl:scale-90">
              <Image
                src={imageSrc}
                alt={`${title} Banner`}
                fill
                style={{ objectFit: "cover" }}
                className="overflow-visible"
              />
            </div>
          ) : isPc ? (
            <div className="absolute bottom-[-30%] left-[-15%] h-full w-full scale-[1.3] xs:left-[-10%] xs:rotate-[-5deg] xs:scale-[1.2] sm:left-[-20%] sm:scale-[1.1] md:bottom-[-35%] md:scale-[1.2] lg:bottom-[-35%] lg:left-[-25%] lg:scale-[1.1] xl:bottom-[-25%]">
              <Image
                src={imageSrc}
                alt={`${title} Banner`}
                fill
                style={{ objectFit: "cover" }}
                className="overflow-visible"
              />
            </div>
          ) : (
            <Image
              src={imageSrc}
              alt={`${title} Banner`}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "50% 70%",
              }}
              className="absolute"
            />
          )}
          {/* Name and button - Laptop */}
          <div className="absolute right-10 top-5 hidden h-1/6 lg:flex lg:flex-col lg:gap-2 xl:right-14 xl:top-6 xl:gap-3">
            <h3 className="text-4xl font-medium text-white xl:text-5xl">
              {title}
            </h3>
            <div className="ml-auto flex gap-2 xl:gap-4">
              <a
                href={github}
                target="_blank"
                className="flex items-center justify-center rounded-full bg-white p-3 3xl:p-4"
              >
                <img
                  src="/icons/github.svg"
                  alt="Github logo"
                  className="h-4 w-4 xl:h-5 xl:w-5"
                />
              </a>
              <a
                href={website}
                target="_blank"
                className="flex items-center justify-center rounded-full bg-white p-3 3xl:p-4"
              >
                <ArrowUpRight className="h-4 w-4 xl:h-5 xl:w-5 dark:text-black" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Name and buttons - Mobile */}
      <div className="flex w-full items-center justify-center lg:hidden">
        <h3 className="text-3xl font-semibold">{title}</h3>
        <div className="ml-auto flex gap-4">
          <a
            href={github}
            target="_blank"
            className="flex items-center justify-center rounded-full bg-white p-3"
          >
            <img
              src="/icons/github.svg"
              alt="Github logo"
              className="h-3 w-3 sm:h-4 sm:w-4"
            />
          </a>
          <a
            href={website}
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
