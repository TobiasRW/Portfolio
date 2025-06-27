"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
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
    <div className="flex gap-2 lg:gap-4">
      {/* Danish Toggle */}
      <TogglePrimitive.Root
        pressed={locale === "da"}
        onPressedChange={() => handleLocaleChange("da")}
        className={cn(
          "flex items-center justify-center font-thin transition-all",
          locale === "da" && "font-medium text-foreground",
        )}
      >
        <div className="cursor-pointer">DA</div>
      </TogglePrimitive.Root>

      {/* English Toggle */}
      <TogglePrimitive.Root
        pressed={locale === "en"}
        onPressedChange={() => handleLocaleChange("en")}
        className={cn(
          "flex items-center justify-center font-thin transition-all",
          locale === "en" && "font-medium text-foreground",
        )}
      >
        <div className="cursor-pointer">EN</div>
      </TogglePrimitive.Root>
    </div>
  );
}
