"use client";
import { ArrowUpIcon } from "@phosphor-icons/react";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function ToTop() {
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
        className={clsx(
          "group bg-whitebg fixed right-6 bottom-14 z-30 cursor-pointer rounded-full p-3 shadow-lg transition-all duration-300 xl:p-4",
          {
            ["translate-y-5 opacity-0"]: !hidden,
            ["translate-y-0 opacity-100"]: hidden,
          },
        )}
        aria-label="Scroll to top"
      >
        <ArrowUpIcon className="3xl:h-5 3xl:w-5 h-4 w-4 text-[#1a1a1a] transition-all duration-300 group-hover:-translate-y-1" />
      </button>
    </>
  );
}
