"use client";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { ArrowUpRight, ArrowDown } from "@phosphor-icons/react";

// Animation Variants
const sideBarVariants = {
  open: {
    x: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  closed: {
    x: "100%",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const hamburgerVariants = {
  line1: { open: { rotate: 45, y: 7 }, closed: { rotate: 0, y: 0 } },
  line2: { open: { opacity: 0 }, closed: { opacity: 1 } },
  line3: {
    open: { rotate: -45, y: -7, width: 24 },
    closed: { rotate: 0, y: 0, width: 20 },
  },
};

// stored links
const links = {
  github: "https://github.com/TobiasRW",
  linkedin: "https://www.linkedin.com/in/tobias-wolmar-87991224a/",
};

// Navigation component
export default function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false); // New state for background color

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    const isHidden = latest > previous && latest > 100;
    const isScrolled = latest > 400;

    setHidden(isHidden);
    setScrolled(isScrolled);
  });

  const toggleMenu: React.MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.header
        className={`fixed z-50 flex h-20 w-screen items-center justify-between px-4 transition-colors duration-300 lg:px-10 xl:px-16 ${
          scrolled
            ? "bg-background dark:text-white"
            : "bg-transparent dark:text-white"
        }`}
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 },
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <p className="md:text-s text-xs lg:text-base">tobiasrw98@gmail.com</p>
        <nav className="">
          {/* Hamburger Menu */}
          <motion.div
            className="flex flex-col items-end gap-1 lg:hidden"
            onClick={toggleMenu}
          >
            <motion.span
              className="z-50 h-[3px] w-6 rounded-full bg-foreground"
              variants={hamburgerVariants.line1}
              animate={isOpen ? "open" : "closed"}
            />
            <motion.span
              className="z-50 h-[3px] w-8 rounded-full bg-foreground"
              variants={hamburgerVariants.line2}
              animate={isOpen ? "open" : "closed"}
            />
            <motion.span
              className="z-50 h-[3px] w-5 rounded-full bg-foreground"
              variants={hamburgerVariants.line3}
              animate={isOpen ? "open" : "closed"}
            />
          </motion.div>

          {/* Menu items for laptops */}
          <div className="hidden font-heading text-xl lg:flex lg:items-center lg:gap-10">
            <a
              href={links.github}
              target="_blank"
              className="group flex items-center gap-2"
            >
              <p>Github</p>
              <ArrowUpRight
                size={16}
                className="mt-1 transition-transform duration-200 group-hover:-translate-y-1 group-hover:scale-110"
              />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              className="group flex items-center gap-2"
            >
              <p>LinkedIn</p>
              <ArrowUpRight
                size={16}
                className="mt-1 transition-transform duration-200 group-hover:-translate-y-1 group-hover:scale-110"
              />
            </a>
          </div>

          {/* Sidebar for mobile & tablet */}
          <motion.div
            className="absolute right-0 top-0 z-20 h-[100vh] w-[70%] md:w-[45%] lg:hidden"
            variants={sideBarVariants}
            animate={isOpen ? "open" : "closed"}
            initial="closed"
          >
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-whitebg bg-[radial-gradient(100%_50%_at_50%_0%,rgba(36,64,200,0.15)_20%,rgba(0,163,255,0)_80%,rgba(0,163,255,0)_100%)] dark:bg-background dark:bg-[radial-gradient(100%_50%_at_50%_0%,rgba(36,64,155,0.15)_20%,rgba(0,163,255,0)_80%,rgba(0,163,255,0)_100%)]"></div>
            <ul className="absolute left-10 top-24 z-[100] flex w-3/4 flex-col gap-8 font-heading text-2xl font-medium sm:left-20 sm:gap-12 sm:text-3xl">
              <a
                href={links.github}
                target="_blank"
                className="flex items-center gap-2"
              >
                <p>Github</p>
                <ArrowUpRight size={28} />
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                className="flex items-center gap-2"
              >
                <p>LinkedIn</p>
                <ArrowUpRight size={28} />
              </a>
              <hr className="h-1 w-10/12 rounded-full border-none bg-gradient-to-r from-[#1a1a1a] from-30% to-[#DADEE9] lg:hidden dark:from-[#DADEE9] dark:to-[#1a1a1a]" />
              <li className="flex items-center gap-2">
                <p>Projekter</p>
                <ArrowDown size={28} />
              </li>
              <li className="flex items-center gap-2">
                <p>Om mig</p>
                <ArrowDown size={28} />
              </li>
            </ul>
          </motion.div>
        </nav>
      </motion.header>
    </>
  );
}
