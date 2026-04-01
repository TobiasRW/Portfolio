"use client";

import styles from "./toggle.module.css";
import { useCurrentLocale, useChangeLocale } from "@/locales/client";
import clsx from "clsx";

export function Toggle() {
  const locale = useCurrentLocale(); // Get current locale
  const changeLocale = useChangeLocale(); // Function to change locale

  return (
    <div className={styles.root}>
      <button
        onClick={() => changeLocale("da")}
        className={clsx(styles.button, { [styles.active]: locale === "da" })}
      >
        DA
      </button>
      <button
        onClick={() => changeLocale("en")}
        className={clsx(styles.button, { [styles.active]: locale === "en" })}
      >
        EN
      </button>
    </div>
  );
}
