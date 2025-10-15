"use client";
import Image from "next/image";
import { TransitionLink } from "./utils/transition-link";
import { ProjectVariant } from "@/types/types";
import { clsx } from "clsx";

type ProjectCardProps = {
  variant?: ProjectVariant;
  imageSrc: string;
  title: string;
  text: string;
  link: string;
  bgColor?: string;
  tags?: string[];
  className?: string;
};

export default function ProjectCard({
  variant = "default",
  imageSrc,
  title,
  text,
  link,
  bgColor = "#2C2C2C",
  tags = [],
  className,
}: ProjectCardProps) {
  const isPhone = variant === "phone";
  const isComputer = variant === "computer";
  const isPhone2 = variant === "phone2";
  const isDefault = variant === "default";

  return (
    <div
      className={clsx(
        "group xs:h-96 xs:w-[350px] relative mx-auto h-[365px] w-11/12 max-w-[450px] overflow-hidden rounded-lg shadow-lg sm:h-96 md:h-72 md:w-full lg:h-[350px] xl:h-[420px] 2xl:h-[480px]",
        className,
      )}
      style={!isDefault ? { backgroundColor: bgColor } : {}}
    >
      <TransitionLink href={link}>
        <div
          className={clsx(
            "absolute h-full w-[110%] cursor-pointer transition-all duration-300",
            {
              ["bottom-[-35%] left-[18%] scale-[1.3] rotate-[-10deg] group-hover:scale-[1.4] md:scale-[1.2] md:group-hover:scale-[1.3] xl:scale-[1.3] xl:group-hover:scale-[1.4]"]:
                isPhone,
              ["xs:scale-[1.4] xs:group-hover:scale-150 bottom-[-32%] left-[-20%] scale-[1.3] group-hover:scale-[1.4] md:bottom-[-35%] md:left-[-22%] md:scale-[1.2] md:group-hover:scale-[1.3] xl:bottom-[-32%] xl:scale-[1.4] xl:group-hover:scale-150"]:
                isComputer,
              ["bottom-[-18%] left-[20%] scale-[1.5] group-hover:scale-[1.6] md:scale-[1.3] md:group-hover:scale-[1.4] xl:left-[15%] xl:scale-[1.5] xl:group-hover:scale-[1.6]"]:
                isPhone2,
              ["left-[-5%] group-hover:scale-110"]: isDefault,
            },
          )}
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
            <h3 className="font-heading text-3xl font-medium text-white md:text-2xl lg:text-4xl">
              {title}
            </h3>
          </div>
          <p className="font-body w-10/12 text-xs font-light text-white lg:text-sm 2xl:text-base">
            {text}
          </p>
        </div>
        {/* Tags section */}
        {tags.length > 0 && (
          <div className="absolute bottom-0 flex w-full flex-wrap gap-2 bg-gradient-to-t pt-6 pb-2 pl-2 md:pl-1 lg:pl-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-foreground/80 text-whitebg dark:bg-background/80 rounded-full px-2 py-1 text-xs md:gap-1 md:text-[10px] lg:gap-2 lg:text-xs"
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
