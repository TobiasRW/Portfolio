"use client";

import { useCurrentLocale, useChangeLocale } from "@/locales/client";
import clsx from "clsx";

export default function Toggle() {
  const locale = useCurrentLocale(); // Get current locale
  const changeLocale = useChangeLocale(); // Function to change locale

  return (
    <div className="flex gap-2 lg:gap-4">
      <button
        onClick={() => changeLocale("da")}
        className={clsx(
          "text-foreground flex cursor-pointer items-center justify-center transition-all",
          { ["font-medium"]: locale === "da", ["font-thin"]: locale !== "da" },
        )}
      >
        DA
      </button>
      <button
        onClick={() => changeLocale("en")}
        className={clsx(
          "text-foreground flex cursor-pointer items-center justify-center transition-all",
          { ["font-medium"]: locale === "en", ["font-thin"]: locale !== "en" },
        )}
      >
        EN
      </button>
    </div>
  );
}
