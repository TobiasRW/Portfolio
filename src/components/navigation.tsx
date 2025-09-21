"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { TransitionLink } from "./utils/transition-link";
import {
  ArrowUpRightIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
} from "@phosphor-icons/react";
import { useScopedI18n } from "@/locales/client";
import Toggle from "./ui/toggle";
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
    <>
      <header
        className={clsx(
          "fixed z-50 flex h-20 w-screen items-center justify-between px-4 transition-all duration-300 lg:px-10 xl:px-16",
          {
            ["bg-background dark:text-white"]: scrolled,
            ["bg-transparent dark:text-white"]: !scrolled,
            ["-translate-y-full transform opacity-0"]: hidden,
            ["translate-y-0 transform opacity-100"]: !hidden,
          },
        )}
      >
        <nav className="flex items-center gap-4 lg:gap-6">
          {pathname === "/" || pathname === "/da" || pathname === "/en" ? (
            <a
              href="mailto:tobiasrw98@gmail.com"
              className="text-xs md:text-sm lg:text-base"
            >
              tobiasrw98@gmail.com
            </a>
          ) : (
            <TransitionLink
              href="/"
              className="group font-heading flex items-center justify-center gap-2 lg:text-lg"
            >
              <ArrowLeftIcon
                size={18}
                className="cursor-pointer transition-transform duration-200 group-hover:-translate-x-1"
              />{" "}
              {scopedT("back")}
            </TransitionLink>
          )}
          <div className="flex gap-2">
            <Toggle />
          </div>
          <div className="xs:flex hidden">
            {pathname === "/" || pathname === "/da" ? (
              <a
                href="/pdfs/cv-danish.pdf"
                download
                className="font-heading text-foreground dark:text-background rounded-full bg-white px-3 text-sm transition-all duration-300 lg:px-4 lg:text-base"
              >
                CV
              </a>
            ) : (
              <a
                href="/pdfs/cv-english.pdf"
                download
                className="font-heading text-foreground dark:text-background rounded-full bg-white px-3 text-sm transition-all duration-300 lg:px-4 lg:text-base"
              >
                CV
              </a>
            )}
          </div>
        </nav>
        <div className="">
          {/* Hamburger Menu */}
          <div
            className="flex flex-col items-end gap-1 lg:hidden"
            onClick={toggleMenu}
          >
            <span
              className={clsx(
                "bg-foreground z-50 h-[3px] w-6 rounded-full transition-all duration-300",
                {
                  ["translate-y-[7px] rotate-45"]: isOpen,
                  ["translate-y-0 rotate-0"]: !isOpen,
                },
              )}
            />
            <span
              className={clsx(
                "bg-foreground z-50 h-[3px] w-8 rounded-full transition-opacity duration-300",
                {
                  ["opacity-0"]: isOpen,
                  ["opacity-100"]: !isOpen,
                },
              )}
            />
            <span
              className={clsx(
                "bg-foreground z-50 h-[3px] rounded-full transition-all duration-300",
                {
                  ["w-6 -translate-y-[7px] -rotate-45"]: isOpen,
                  ["w-5 translate-y-0 rotate-0"]: !isOpen,
                },
              )}
            />
          </div>

          {/* Menu items */}
          <div
            className={clsx(
              "absolute top-0 right-0 z-20 h-[100vh] w-[70%] transition-transform duration-300 ease-in-out md:w-[45%] lg:static lg:h-auto lg:w-auto lg:items-center lg:gap-10 lg:text-xl",
              {
                ["translate-x-0"]: isOpen,
                ["translate-x-full lg:translate-x-0"]: !isOpen,
              },
            )}
          >
            <div className="bg-whitebg dark:bg-background absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(36,64,200,0.08)_20%,rgba(0,163,255,0)_80%,rgba(0,163,255,0)_100%)] lg:hidden dark:bg-[radial-gradient(100%_50%_at_50%_0%,rgba(36,64,155,0.15)_20%,rgba(0,163,255,0)_80%,rgba(0,163,255,0)_100%)]"></div>
            <ul className="font-heading absolute top-24 left-10 z-[100] flex w-3/4 flex-col gap-8 text-2xl font-medium sm:left-20 sm:gap-12 sm:text-3xl lg:static lg:top-auto lg:left-auto lg:w-auto lg:flex-row lg:gap-10 lg:text-xl lg:font-normal">
              <li>
                <a
                  href={links.github}
                  target="_blank"
                  className="group flex items-center gap-2"
                >
                  <p>Github</p>
                  <ArrowUpRightIcon className="h-7 w-7 lg:mt-1 lg:h-4 lg:w-4 lg:transition-transform lg:duration-200 lg:group-hover:translate-x-[2px] lg:group-hover:translate-y-[-2px] lg:group-hover:scale-110" />
                </a>
              </li>
              <li>
                <a
                  href={links.linkedin}
                  target="_blank"
                  className="group flex items-center gap-2"
                >
                  <p>LinkedIn</p>
                  <ArrowUpRightIcon className="h-7 w-7 lg:mt-1 lg:h-4 lg:w-4 lg:transition-transform lg:duration-200 lg:group-hover:translate-x-[2px] lg:group-hover:translate-y-[-2px] lg:group-hover:scale-110" />
                </a>
              </li>
              {/* Conditionally render only on homepage */}
              {(pathname === "/" ||
                pathname === "/da" ||
                pathname === "/en") && (
                <>
                  <li
                    className="flex items-center gap-2 lg:hidden"
                    onClick={() => scrollToSection("projects")}
                  >
                    <p>{scopedT("projects")}</p>
                    <ArrowDownIcon size={28} />
                  </li>
                  <li
                    className="flex items-center gap-2 lg:hidden"
                    onClick={() => scrollToSection("about")}
                  >
                    <p>{scopedT("about")}</p>
                    <ArrowDownIcon size={28} />
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
