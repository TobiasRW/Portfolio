"use client";

import styles from "./navigation.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { TransitionLink } from "../../utils/transition-link";
import { ArrowUpRightIcon, ArrowLeftIcon } from "@phosphor-icons/react";
import { useScopedI18n } from "@/locales/client";
import Toggle from "../../ui/toggle";
import clsx from "clsx";

// stored links
const links = {
  github: "https://github.com/TobiasRW",
  linkedin: "https://www.linkedin.com/in/tobias-wolmar-87991224a/",
};

// Navigation component
export default function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const scopedT = useScopedI18n("navigation");

  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = 0;

    // Function to handle scroll events
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if the navbar should be hidden or shown
      const isHidden = currentScrollY > lastScrollY && currentScrollY > 100;
      const isScrolled = currentScrollY > 400;

      setHidden(isHidden);
      setScrolled(isScrolled);

      // Update lastScrollY to the current position
      lastScrollY = currentScrollY;
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu: React.MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen(!isOpen);
  };

  // Utility function to scroll to a given element ID
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={clsx(
        styles.root,
        scrolled ? styles.scrolled : styles.top,
        hidden ? styles.hidden : styles.visible,
      )}
    >
      <div className={styles.container}>
        <nav className={styles.nav}>
          {pathname === "/" || pathname === "/da" || pathname === "/en" ? (
            <a href="mailto:tobiasrw98@gmail.com" className={styles.email}>
              tobiasrw98@gmail.com
            </a>
          ) : (
            <TransitionLink href="/" className={styles["return-link"]}>
              <ArrowLeftIcon size={18} className={styles["return-icon"]} />
              {scopedT("back")}
            </TransitionLink>
          )}
          <div className={styles.controls}>
            <Toggle />
          </div>
          <a
            href={
              pathname === "/" || pathname === "/da"
                ? "/pdfs/cv-danish.pdf"
                : "/pdfs/cv-english.pdf"
            }
            download
            className={styles.cv}
          >
            CV
          </a>
        </nav>
        <div>
          <div className={styles.hamburger} onClick={toggleMenu}>
            <span
              className={clsx(styles.line1, isOpen ? styles.open : undefined)}
            />
            <span
              className={clsx(styles.line2, isOpen ? styles.open : undefined)}
            />
            <span
              className={clsx(styles.line3, isOpen ? styles.open : undefined)}
            />
          </div>

          <div className={clsx(styles.menu, isOpen ? styles.open : undefined)}>
            <ul className={styles.list}>
              <li>
                <a
                  href={links.github}
                  target="_blank"
                  className={styles.social}
                >
                  <p>Github</p>
                  <ArrowUpRightIcon className={styles.arrow} />
                </a>
              </li>
              <li>
                <a
                  href={links.linkedin}
                  target="_blank"
                  className={styles.social}
                >
                  <p>LinkedIn</p>
                  <ArrowUpRightIcon className={styles.arrow} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
