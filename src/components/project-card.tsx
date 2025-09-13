"use client";
import Image from "next/image";
import { TransitionLink } from "./utils/transition-link";
import { ProjectVariant } from "@/types/types";

// ProjectCard component props
type ProjectCardProps = {
  variant?: ProjectVariant; // Variant for different styles
  imageSrc: string; // Image source
  title: string; // Project title
  text: string; // Project description
  link: string; // Project link
  bgColor?: string; // Background color for the card
  tags?: string[]; // Optional tags for the project
};

// ProjectCard component
export default function ProjectCard({
  variant = "default", // Default variant is default
  imageSrc,
  title,
  text,
  link,
  bgColor = "#2C2C2C", // Default background color is #2C2C2C
  tags = [], // Default tags is an empty array
}: ProjectCardProps) {
  // Check if the variant is phone or computer
  const isPhone = variant === "phone";
  const isComputer = variant === "computer";
  const isPhone2 = variant === "phone2";

  return (
    <div
      className={`group relative mx-auto h-[365px] w-10/12 overflow-hidden rounded-lg shadow-lg xs:h-96 xs:w-[350px] sm:h-96 md:h-72 md:w-full lg:h-[350px] lg:w-11/12 xl:h-[420px] xl:w-[90%] xl:max-w-[450px] 2xl:h-[480px] ${
        isPhone || isComputer ? "" : "bg-white"
      }`}
      style={
        isPhone || isComputer || isPhone2 ? { backgroundColor: bgColor } : {}
      }
    >
      <TransitionLink href={link}>
        <div
          className={`absolute h-full w-[110%] cursor-pointer transition-all duration-300 ${
            isPhone // Phone img style
              ? "bottom-[-35%] left-[18%] rotate-[-10deg] scale-[1.3] group-hover:scale-[1.4] md:scale-[1.2] md:group-hover:scale-[1.3] xl:scale-[1.3] xl:group-hover:scale-[1.4]"
              : isComputer // Computer img style
                ? "bottom-[-32%] left-[-20%] scale-[1.3] group-hover:scale-[1.4] xs:scale-[1.4] xs:group-hover:scale-150 md:bottom-[-35%] md:left-[-22%] md:scale-[1.2] md:group-hover:scale-[1.3] xl:bottom-[-32%] xl:scale-[1.4] xl:group-hover:scale-150"
                : isPhone2 // Phone2 img style
                  ? "bottom-[-18%] left-[20%] scale-[1.5] group-hover:scale-[1.6] md:scale-[1.3] md:group-hover:scale-[1.4] xl:left-[15%] xl:scale-[1.5] xl:group-hover:scale-[1.6]"
                  : "left-[-5%] group-hover:scale-110" // Default img style
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
          <div className="flex items-center">
            <h3 className="font-heading text-3xl font-medium text-white md:text-2xl lg:text-4xl 3xl:text-5xl">
              {title}
            </h3>
          </div>
          <p className="w-10/12 font-body text-xs font-light text-white lg:text-sm 2xl:text-base 3xl:text-lg">
            {text}
          </p>
        </div>
        {/* Tags section */}
        {tags.length > 0 && (
          <div className="absolute bottom-0 flex w-full flex-wrap gap-2 bg-gradient-to-t pb-2 pl-2 pt-6 md:pl-1 lg:pl-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-foreground/80 px-2 py-1 text-xs text-whitebg md:gap-1 md:text-[10px] lg:gap-2 lg:text-xs dark:bg-background/80"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </TransitionLink>
    </div>
  );
}
