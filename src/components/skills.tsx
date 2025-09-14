"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import useDarkMode from "@/hooks/useDarkMode";
import { skillLogos, getLogo } from "@/data/logos";
import Image from "next/image";
import { useScopedI18n } from "@/locales/client";
import EmblaCarousel from "./embla-carousel";

export const Skills = () => {
  const isDarkMode = useDarkMode();

  const scopedT = useScopedI18n("frontPage.skills");

  const skills = skillLogos;

  return (
    <div className="w-full rounded-b-[40px] bg-whitebg pb-20 pt-10 md:pb-24 md:pt-14 lg:rounded-b-[50px] lg:pb-28 xl:pb-32 xl:pt-20 2xl:rounded-b-[70px] dark:bg-[#1a1a1a]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 md:gap-14 xl:gap-16 2xl:gap-20">
          <h2 className="text-center font-heading text-2xl font-semibold sm:text-3xl md:text-4xl xl:text-5xl">
            Skills
          </h2>
          <div className="relative xl:mx-auto xl:w-10/12">
            {/* Fading effect */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-whitebg to-transparent md:w-24 lg:w-28 2xl:w-32 dark:from-[#1a1a1a]"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-whitebg to-transparent md:w-24 lg:w-28 2xl:w-32 dark:from-[#1a1a1a]"></div>
            <EmblaCarousel>
              {skills.map((logo, index) => (
                <div
                  className="group relative flex aspect-square items-center justify-center rounded-lg bg-[#EBEBEB] p-4 transition-all duration-300 hover:scale-95 sm:p-6 dark:bg-[#2C2C2C]"
                  key={index}
                >
                  <Image
                    src={getLogo(logo, isDarkMode)}
                    alt={logo.label}
                    width={64}
                    height={64}
                    className="h-4/6 w-4/6 transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-90 group-hover:opacity-0 sm:h-12 sm:w-12 md:h-14 md:w-14 2xl:h-16 2xl:w-16"
                  />
                  <p className="absolute bottom-1 font-heading text-[8px] font-medium text-foreground/80 opacity-0 transition-all duration-300 group-hover:bottom-2 group-hover:opacity-100 sm:bottom-1 sm:text-xs md:text-sm">
                    {logo.label}
                  </p>
                  {logo.url ? (
                    <a
                      href={logo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute flex translate-y-4 items-center justify-center rounded-full bg-[#f5f5f5] px-3 py-1 font-heading text-[8px] font-bold text-black opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 xs:text-[10px] sm:text-xs md:px-4 md:py-2 lg:text-sm dark:bg-[#f5f5f5]"
                    >
                      {scopedT("link")}
                      <ArrowUpRight className="h-2 w-2 xs:h-3 xs:w-3 md:h-4 md:w-4" />
                    </a>
                  ) : (
                    <div className="absolute flex translate-y-4 items-center justify-center rounded-full bg-[#f5f5f5] px-3 py-1 font-heading text-xs font-bold text-black opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:px-4 md:py-2 lg:text-sm">
                      {logo.label}
                    </div>
                  )}
                </div>
              ))}
            </EmblaCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
