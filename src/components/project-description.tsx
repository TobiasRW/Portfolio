"use client";

import { getLogoByLabel } from "@/data/logos";
import useDarkMode from "@/hooks/useDarkMode";
import highlightText from "@/helpers/highlightText";
import Badge from "./badge";
import Image from "next/image";

type ProjectDescriptionProps = {
  title: string;
  text: string;
  iconLabels: string[];
  highlightWords?: string[];
  badges?: string[];
  testUser?: string;
};

export default function ProjectDescription({
  title,
  text,
  iconLabels,
  highlightWords = [],
  badges = [],
  testUser,
}: ProjectDescriptionProps) {
  const isDarkMode = useDarkMode();

  return (
    <div className="w-full rounded-b-[40px] bg-whitebg pb-10 pt-10 md:pb-24 md:pt-14 lg:rounded-b-[50px] lg:pb-28 xl:pb-32 xl:pt-20 2xl:rounded-b-[70px] dark:bg-[#1a1a1a]">
      {/* Project Description Section */}
      <div className="mx-auto flex w-10/12 flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-2xl font-semibold sm:text-3xl md:text-4xl xl:text-5xl">
            {title}
          </h3>
          {badges.length > 0 && (
            <div className="flex flex-wrap gap-2 xl:gap-3">
              {badges.map((badge, index) => (
                <Badge key={index} title={badge} />
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-14 xl:justify-between 2xl:gap-20">
          <div className="">
            <p className="font-body text-sm font-light leading-normal md:text-base">
              {text.split("\n").map((line, index) => (
                <span key={index}>
                  {highlightText(line, highlightWords)}
                  <br />
                </span>
              ))}
            </p>
            <p>{testUser}</p>
          </div>

          <hr className="h-[1px] border-none bg-foreground lg:hidden" />

          {/* Icons Section */}
          <div className="flex flex-col gap-4 rounded-2xl lg:w-full lg:self-start xl:w-4/6 3xl:w-2/6">
            <p className="hidden font-heading text-2xl font-semibold lg:block">
              Techstack
            </p>
            <div className="flex flex-wrap gap-4">
              {iconLabels.map((iconLabel, index) => {
                const logoData = getLogoByLabel(iconLabel, isDarkMode);
                return (
                  <div
                    key={index}
                    className="group relative flex h-12 w-12 items-center justify-center gap-2 rounded-full bg-[#EDECEC] p-4 lg:h-14 lg:w-14 dark:bg-[#2C2C2C]"
                  >
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 mb-2 hidden w-max -translate-x-1/2 rounded bg-[#EDECEC] px-2 py-1 text-xs drop-shadow-sm group-hover:block dark:bg-[#2C2C2C]">
                      {iconLabel}
                      <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#EDECEC] dark:border-t-[#2C2C2C]"></div>
                    </div>
                    {/* Logo */}
                    <a
                      href={logoData.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={logoData.icon}
                        alt={`icon-${index}`}
                        width={24}
                        height={24}
                        className="h-6 w-6 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8"
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
