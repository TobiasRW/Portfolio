"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { getLogoByLabel } from "@/data/logos";
import useDarkMode from "@/hooks/useDarkMode";

type AccordionItemProps = {
  content: string;
  website?: string;
  iconLabel: string; // Reference to the label in the logos.ts file
};

type AccordionTechProps = {
  items: AccordionItemProps[];
};

export default function AccordionTech({ items }: AccordionTechProps) {
  const isDarkMode = useDarkMode();

  return (
    <div className="mx-auto flex w-10/12 flex-col gap-6 px-6 sm:px-0 xl:w-full">
      <h2 className="font-heading text-2xl font-semibold sm:text-3xl md:text-4xl xl:text-5xl">
        Teknologier
      </h2>
      <Accordion
        type="single"
        collapsible
        className="flex flex-col gap-4 md:gap-5 xl:gap-4"
      >
        {items.map((item, index) => (
          <AccordionItem
            key={`accordion-item-${index}`}
            value={`item-${index + 1}`}
          >
            <AccordionTrigger>{item.iconLabel}</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-4 md:gap-6">
                {item.content}
                <div className="flex items-center gap-4">
                  <Image
                    src={getLogoByLabel(item.iconLabel, isDarkMode)}
                    alt={`icon-${index}`}
                    width={24}
                    height={24}
                    className="h-6 w-6 sm:h-7 sm:w-7 xl:h-8 xl:w-8"
                    loading="lazy"
                  />
                  {item.website && (
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center rounded-full bg-[#EDECEC] p-2 transition-all duration-200 hover:bg-gray-200"
                    >
                      <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 xl:h-3 xl:w-3 dark:text-black" />
                    </a>
                  )}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
