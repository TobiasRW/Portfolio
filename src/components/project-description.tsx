"use client";

import { getLogoByLabel } from "@/data/logos";
import useDarkMode from "@/hooks/useDarkMode";

type ProjectDescriptionProps = {
  title: string;
  text: string;
  iconLabels: string[];
  highlightWords?: string[]; // Optional
  testUser?: string; // Optional
};

export default function ProjectDescription({
  title,
  text,
  iconLabels,
  highlightWords = [],
  testUser,
}: ProjectDescriptionProps) {
  const isDarkMode = useDarkMode();

  const highlightText = (text: string) => {
    const lowerHighlightWords = highlightWords.map((hw) => hw.toLowerCase()); // Normaliser
    return text.split(" ").map((word, index) => {
      const cleanWord = word.replace(/[,!?]/g, "").toLowerCase(); // Fjern tegnsætning og normaliser
      const isHighlighted = lowerHighlightWords.includes(cleanWord);

      return (
        <span key={index} className={isHighlighted ? "font-normal italic" : ""}>
          {word}
          {index < text.split(" ").length - 1 && " "} {/* Tilføj mellemrum */}
        </span>
      );
    });
  };

  return (
    <div className="w-full rounded-b-[40px] bg-whitebg pb-10 pt-10 md:pb-24 md:pt-14 lg:rounded-b-[50px] lg:pb-28 xl:pb-32 xl:pt-20 2xl:rounded-b-[70px] dark:bg-[#1a1a1a]">
      {/* Project Description Section */}
      <div className="mx-auto flex w-10/12 flex-col gap-6">
        <h3 className="font-heading text-2xl font-semibold sm:text-3xl md:text-4xl xl:text-5xl">
          {title}
        </h3>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-14 xl:justify-between 2xl:gap-20">
          <div className="">
            <p className="font-body text-sm font-light leading-normal md:text-base">
              {text.split("\n").map((line, index) => (
                <span key={index}>
                  {highlightText(line)}
                  <br />
                </span>
              ))}
            </p>
            <p>{testUser}</p>
          </div>

          <hr className="h-[1px] border-none bg-foreground lg:hidden" />

          {/* Icons Section */}
          <div className="flex flex-wrap gap-4 rounded-2xl lg:h-full lg:w-full lg:gap-6 lg:bg-[#EDECEC] lg:p-4 xl:w-4/6 xl:p-6 3xl:w-2/6 lg:dark:bg-background">
            {iconLabels.map((iconLabel, index) => {
              const logoData = getLogoByLabel(iconLabel, isDarkMode);
              return (
                <div
                  key={index}
                  className="lg:dark:bg-[#1A1A1A flex items-center justify-center gap-2 rounded-full bg-[#EDECEC] p-4 lg:bg-whitebg dark:bg-[#2C2C2C]"
                >
                  <a
                    href={logoData.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={logoData.icon}
                      alt={`icon-${index}`}
                      className="h-6 w-6 transition-all duration-300 hover:scale-90 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
