"use client";
import { ArrowUpIcon } from "@phosphor-icons/react";
import clsx from "clsx";
import { useEffect, useState } from "react";
import styles from "./to-top.module.css";

export function ToTop() {
  const [hidden, setHidden] = useState<boolean>(false);

  useEffect(() => {
    let lastScrollY = 0;

    // Function to handle scroll events
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isHidden = currentScrollY > lastScrollY && currentScrollY > 400;
      setHidden(isHidden);
      lastScrollY = currentScrollY;
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className={clsx(styles.root, {
          [styles.hidden]: !hidden,
          [styles.visible]: hidden,
        })}
        aria-label="Scroll to top"
      >
        <ArrowUpIcon className={styles.icon} />
      </button>
    </>
  );
}
