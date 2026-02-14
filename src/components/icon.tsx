"use client";

import { getLogoByLabel } from "@/data/logos";
import useDarkMode from "@/hooks/useDarkMode";
import Image from "next/image";

type Props = {
  label: string;
  hasTooltip?: boolean;
};

export default function Icon({ label, hasTooltip = false }: Props) {
  const isDarkMode = useDarkMode();
  const logoData = getLogoByLabel(label, isDarkMode);

  return (
    <div className="group relative flex h-12 w-12 items-center justify-center gap-2 rounded-full bg-[#EDECEC] p-4 lg:h-14 lg:w-14 dark:bg-[#2C2C2C]">
      {hasTooltip && (
        <div className="absolute bottom-full left-1/2 mb-2 hidden w-max -translate-x-1/2 rounded bg-[#EDECEC] px-2 py-1 text-xs drop-shadow-sm group-hover:block dark:bg-[#2C2C2C]">
          {label}
          <div className="absolute top-full left-1/2 h-0 w-0 -translate-x-1/2 border-t-4 border-r-4 border-l-4 border-t-[#EDECEC] border-r-transparent border-l-transparent dark:border-t-[#2C2C2C]"></div>
        </div>
      )}
      {logoData.url ? (
        <a href={logoData.url} target="_blank" rel="noopener noreferrer">
          <Image
            src={logoData.icon}
            alt={`icon-${label}`}
            width={24}
            height={24}
            className="h-6 w-6 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8"
          />
        </a>
      ) : (
        <Image
          src={logoData.icon}
          alt={`icon-${label}`}
          width={24}
          height={24}
          className="h-6 w-6 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8"
        />
      )}
    </div>
  );
}
