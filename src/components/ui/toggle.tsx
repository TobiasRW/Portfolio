"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useCurrentLocale, useChangeLocale } from "@/locales/client";

export function Toggle() {
  const locale = useCurrentLocale(); // Get current locale
  const changeLocale = useChangeLocale(); // Function to change locale

  // Ensure type safety
  const handleLocaleChange = (value: string) => {
    if (value === "da" || value === "en") {
      changeLocale(value);
    }
  };

  return (
    <div className="flex rounded-full bg-white dark:bg-[#EDECEC]">
      {/* Danish Toggle */}
      <TogglePrimitive.Root
        pressed={locale === "da"}
        onPressedChange={() => handleLocaleChange("da")}
        className={cn(
          "flex items-center justify-center rounded-l-full p-1 pr-2 transition-all",
          "lg:hover:bg-[#e2e2e2] lg:dark:hover:bg-whitebg", // Hover & Focus Effects
          locale === "da" && "text-white", // Active State
        )}
      >
        <Image
          src="/icons/da-flag.svg"
          alt="Danish Flag"
          width={24}
          height={24}
          className={cn("w-3 lg:w-4", locale === "en" && "grayscale")}
        />
      </TogglePrimitive.Root>

      {/* English Toggle */}
      <TogglePrimitive.Root
        pressed={locale === "en"}
        onPressedChange={() => handleLocaleChange("en")}
        className={cn(
          "flex items-center justify-center rounded-r-full p-1 pl-2 transition-all",
          "lg:hover:bg-[#EDECEC] lg:dark:hover:bg-whitebg", // Hover & Focus Effects
          locale === "en" && "text-white", // Active State
        )}
      >
        <Image
          src="/icons/en-flag.svg"
          alt="English Flag"
          width={24}
          height={24}
          className={cn("w-3 lg:w-4", locale === "da" && "grayscale")}
        />
      </TogglePrimitive.Root>
    </div>
  );
}
