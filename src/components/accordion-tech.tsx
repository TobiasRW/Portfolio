"use client";

import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { getLogoByLabel } from "@/data/logos";
import useDarkMode from "@/hooks/useDarkMode";
import { AccordionEntry } from "@/types/types";
import Collapsible from "./ui/collapsible";

type AccordionTechProps = {
  title: string;
  items: AccordionEntry[];
};

export default function AccordionTech({ title, items }: AccordionTechProps) {
  const isDarkMode = useDarkMode();

  return (
    <div className="mx-auto flex w-10/12 flex-col gap-4 px-6 sm:px-0 xl:w-full">
      <h2 className="font-heading text-2xl font-semibold sm:text-3xl md:text-4xl xl:text-5xl">
        {title}
      </h2>

      {items.map((item, index) => (
        <Collapsible key={`collapsible-item-${index}`} trigger={item.iconLabel}>
          <div className="flex flex-col gap-4 md:gap-6">
            <p className="font-thin">{item.content}</p>
            <div className="flex items-center gap-4">
              <Image
                src={getLogoByLabel(item.iconLabel, isDarkMode).icon}
                alt={`${item.iconLabel} logo`}
                width={24}
                height={24}
                className="h-6 w-6 sm:h-7 sm:w-7 2xl:h-8 2xl:w-8"
                loading="lazy"
              />
              {item.website && (
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-full bg-[#EDECEC] p-[6px] transition-all duration-200 hover:bg-gray-200 2xl:p-2"
                >
                  <ArrowUpRightIcon className="h-3 w-3 sm:h-4 sm:w-4 dark:text-black" />
                </a>
              )}
            </div>
          </div>
        </Collapsible>
      ))}
    </div>
  );
}
