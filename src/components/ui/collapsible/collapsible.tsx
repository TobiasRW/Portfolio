"use client";

import styles from "./collapsible.module.css";
import { CaretDownIcon } from "@phosphor-icons/react";
import clsx from "clsx";
import { useState } from "react";

type CollapsibleProps = {
  trigger: string;
  children?: React.ReactNode;
  className?: string;
};

export function Collapsible({
  trigger,
  children,
  className,
}: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={clsx(styles.root, className)}>
      <div onClick={() => setIsOpen((v) => !v)} className={styles.trigger}>
        {trigger}
        <CaretDownIcon
          className={clsx(styles.icon, {
            [styles.open]: isOpen,
          })}
        />
      </div>
      <div
        className={clsx(styles.content, {
          [styles.closed]: !isOpen,
          [styles.open]: isOpen,
        })}
      >
        <div className={styles["content-inner"]}>{children}</div>
      </div>
    </div>
  );
}
