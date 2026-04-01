"use client";

import { getLogoByLabel } from "@/data/logos";
import useDarkMode from "@/hooks/useDarkMode";
import Image from "next/image";
import styles from "./icon.module.css";

type Props = {
  label: string;
  hasTooltip?: boolean;
};

export function Icon({ label, hasTooltip = false }: Props) {
  const isDarkMode = useDarkMode();
  const logoData = getLogoByLabel(label, isDarkMode);

  return (
    <div className={styles.root}>
      {hasTooltip && (
        <div className={styles.tooltip}>
          {label}
          <div className={styles.arrow}></div>
        </div>
      )}
      {logoData.url ? (
        <a href={logoData.url} target="_blank" rel="noopener noreferrer">
          <Image
            src={logoData.icon}
            alt={`icon-${label}`}
            width={24}
            height={24}
            className={styles.image}
          />
        </a>
      ) : (
        <Image
          src={logoData.icon}
          alt={`icon-${label}`}
          width={24}
          height={24}
          className={styles.image}
        />
      )}
    </div>
  );
}
