"use client";

import { ArrowUpRightIcon } from "@phosphor-icons/react";
import useDarkMode from "@/hooks/useDarkMode";
import { skillLogos, getLogo } from "@/data/logos";
import Image from "next/image";
import { useScopedI18n } from "@/locales/client";
import EmblaCarousel from "./embla-carousel";
import { Logo } from "@/types/types";

export default function Skills() {
  const isDarkMode = useDarkMode();

  const skills = skillLogos;

  return (
    <div className="bg-whitebg w-full rounded-b-[40px] pt-10 pb-20 md:pt-14 md:pb-24 lg:rounded-b-[50px] lg:pb-28 xl:pt-20 xl:pb-32 2xl:rounded-b-[70px] dark:bg-[#1a1a1a]">
      <div className="container mx-auto max-w-[1920px]">
        <div className="flex flex-col gap-10 md:gap-14 2xl:gap-20">
          <h2 className="font-heading text-center text-2xl font-semibold sm:text-3xl md:text-4xl xl:text-5xl">
            Skills
          </h2>
          <Cards skills={skills} isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Carousel({
  skills,
  isDarkMode,
}: {
  skills: Logo[];
  isDarkMode: boolean;
}) {
  const scopedT = useScopedI18n("frontPage.skills");
  return (
    <div className="relative xl:mx-auto xl:w-10/12">
      <div className="from-whitebg pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r to-transparent md:w-24 lg:w-28 2xl:w-32 dark:from-[#1a1a1a]"></div>
      <div className="from-whitebg pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l to-transparent md:w-24 lg:w-28 2xl:w-32 dark:from-[#1a1a1a]"></div>
      <EmblaCarousel>
        {skills.map((logo, index) => (
          <div
            key={index}
            className="group relative flex aspect-square items-center justify-center rounded-lg bg-[#EBEBEB] p-4 transition-all duration-300 hover:scale-95 sm:p-6 dark:bg-[#2C2C2C]"
          >
            <Image
              src={getLogo(logo, isDarkMode)}
              alt={logo.label}
              width={64}
              height={64}
              className="h-4/6 w-4/6 transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-90 group-hover:opacity-0 sm:h-12 sm:w-12 md:h-14 md:w-14 2xl:h-16 2xl:w-16"
            />
            <p className="font-heading text-foreground/80 absolute bottom-1 text-[8px] font-medium opacity-0 transition-all duration-300 group-hover:bottom-2 group-hover:opacity-100 sm:bottom-1 sm:text-xs md:text-sm">
              {logo.label}
            </p>
            {logo.url ? (
              <a
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading xs:text-[10px] absolute flex translate-y-4 items-center justify-center rounded-full bg-[#f5f5f5] px-3 py-1 text-[8px] font-bold text-black opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:text-xs md:px-4 md:py-2 lg:text-sm dark:bg-[#f5f5f5]"
              >
                {scopedT("link")}
                <ArrowUpRightIcon className="xs:h-3 xs:w-3 h-2 w-2 md:h-4 md:w-4" />
              </a>
            ) : (
              <div className="font-heading absolute flex translate-y-4 items-center justify-center rounded-full bg-[#f5f5f5] px-3 py-1 text-xs font-bold text-black opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:px-4 md:py-2 lg:text-sm">
                {logo.label}
              </div>
            )}
          </div>
        ))}
      </EmblaCarousel>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Cards({
  skills,
  isDarkMode,
}: {
  skills: Logo[];
  isDarkMode: boolean;
}) {
  const scopedT = useScopedI18n("frontPage.skills");

  return (
    <div className="mx-auto grid w-11/12 grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
      {skills.map((logo, index) => (
        <div
          key={index}
          className="group relative flex items-center gap-2 rounded bg-[#EBEBEB] p-2 transition-all duration-300 hover:scale-95 2xl:p-3 dark:bg-[#2C2C2C]"
        >
          <div
            className="bg-foreground/10 xs:p-2 rounded p-[6px]"
            style={{
              backgroundColor: isDarkMode
                ? logo.bgDark || logo.bgLight
                : logo.bgLight,
            }}
          >
            <Image
              src={getLogo(logo, isDarkMode)}
              alt={logo.label}
              width={64}
              height={64}
              className="xs:h-5 xs:w-5 h-4 w-4 lg:h-6 lg:w-6 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-heading xs:text-sm text-xs transition-opacity duration-500 group-hover:opacity-0 md:text-base xl:text-lg">
              {logo.label}
            </p>
            <span className="font-body text-[8px] font-extralight italic transition-opacity duration-500 group-hover:opacity-0 sm:text-[10px] lg:text-xs 2xl:text-sm dark:xl:font-thin">
              {logo.tag}
            </span>
          </div>
          {logo.url && (
            <a
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading xs:text-[10px] absolute right-4 flex items-center justify-center rounded-full bg-[#f5f5f5] px-3 py-1 text-[8px] font-medium text-black opacity-0 shadow-lg transition-all duration-500 group-hover:opacity-100 sm:text-xs md:px-[14px] md:py-[6px] lg:text-sm dark:bg-[#f5f5f5]"
            >
              {scopedT("link")}
              <ArrowUpRightIcon className="xs:h-3 xs:w-3 h-2 w-2 md:h-4 md:w-4" />
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
