"use client";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

// ProjectCard component props
type ProjectCardProps = {
  variant?: "default" | "phone" | "computer"; // Variant for different styles
  imageSrc: string; // Image source
  title: string; // Project title
  text: string; // Project description
  link: string; // Project link
  bgColor?: string; // Background color for the card
};

// ProjectCard component
export default function ProjectCard({
  variant = "default", // Default variant is default
  imageSrc,
  title,
  text,
  link,
  bgColor = "#2C2C2C", // Default background color is #2C2C2C
}: ProjectCardProps) {
  // Check if the variant is phone or computer
  const isPhone = variant === "phone";
  const isComputer = variant === "computer";

  return (
    <div
      className={`3xl:h-[550px] group relative mx-auto h-80 w-72 overflow-hidden rounded-lg shadow-lg sm:h-96 sm:w-[350px] md:h-80 md:w-72 lg:h-96 lg:w-[350px] 2xl:h-[440px] 2xl:w-[90%] ${
        isPhone || isComputer ? "" : "bg-white"
      }`}
      style={isPhone || isComputer ? { backgroundColor: bgColor } : {}}
    >
      <Link href={link}>
        <div
          className={`absolute h-full w-full cursor-pointer transition-all duration-300 ${
            isPhone // Phone img style
              ? "bottom-[-35%] left-[18%] rotate-[-10deg] scale-[1.3] group-hover:scale-[1.4]"
              : isComputer // Computer img style
                ? "bottom-[-32%] left-[-15%] scale-[1.4] group-hover:scale-150"
                : "group-hover:scale-110" // Default img style
          }`}
        >
          <Image
            src={imageSrc}
            alt={`${title} Banner`}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
        <div className="absolute top-4 mx-auto flex w-full flex-col gap-1 px-4">
          <div className="flex items-center justify-center">
            <h3 className="3xl:text-5xl font-heading text-3xl font-medium text-white lg:text-4xl">
              {title}
            </h3>
            <div className="3xl:p-4 ml-auto rounded-full bg-white p-2 lg:p-3">
              <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 xl:h-5 xl:w-5 dark:text-black" />
            </div>
          </div>
          <p className="font-body 3xl:text-lg w-10/12 text-xs font-light text-white lg:text-sm 2xl:text-base">
            {text}
          </p>
        </div>
      </Link>
    </div>
  );
}
