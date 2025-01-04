"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight, ArrowDown } from "@phosphor-icons/react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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

  return (
    <div className="">
      <header className="fixed z-50 flex h-20 w-screen items-center justify-between px-4">
        <p className="text-sm">tobiasrw98@gmail.com</p>
        <nav className="">
          <motion.div
            className="flex flex-col items-end gap-1"
            onClick={toggleMenu}
          >
            <motion.span
              className="z-50 block h-1 w-7 rounded-full bg-foreground"
              initial={false}
              animate={isOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 45, y: 8 },
                closed: {
                  rotate: 0,
                  y: 0,
                },
              }}
            ></motion.span>
            <motion.span
              className="z-50 block h-1 w-9 rounded-full bg-foreground"
              initial={false}
              animate={isOpen ? "open" : "closed"}
              variants={{
                open: { opacity: 0 },
                closed: {
                  opacity: 1,
                },
              }}
            ></motion.span>
            <motion.span
              className="z-50 block h-1 w-6 rounded-full bg-foreground"
              initial={false}
              animate={isOpen ? "open" : "closed"}
              variants={{
                open: { rotate: -45, y: -8, width: 28 },
                closed: {
                  rotate: 0,
                  y: 0,
                  width: 24,
                },
              }}
            ></motion.span>
          </motion.div>
          <div className="">
            <motion.div
              className="absolute right-0 top-0 z-20 h-[100vh] w-[70%] md:w-[45%]"
              variants={sideBarVariants}
              animate={isOpen ? "open" : "closed"}
              initial="closed"
            >
              <div className="absolute top-0 z-[-2] h-screen w-screen bg-whitebg bg-[radial-gradient(100%_50%_at_50%_0%,rgba(36,64,200,0.15)_20%,rgba(0,163,255,0)_80%,rgba(0,163,255,0)_100%)] dark:bg-background dark:bg-[radial-gradient(100%_50%_at_50%_0%,rgba(36,64,155,0.15)_20%,rgba(0,163,255,0)_80%,rgba(0,163,255,0)_100%)]"></div>
              <ul className="absolute right-0 top-24 z-[100] flex flex-col gap-8 font-heading text-3xl font-medium">
                <a
                  href="https://github.com/TobiasRW"
                  target="_blank"
                  className="flex items-center gap-2 pr-32"
                >
                  <p>Github</p>
                  <ArrowUpRight size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/tobias-wolmar-87991224a/"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <p>LinkedIn</p>
                  <ArrowUpRight size={28} />
                </a>
                <hr className="h-1 w-10/12 rounded-full border-none bg-gradient-to-r from-[#1a1a1a] from-30% to-[#DADEE9] dark:from-[#DADEE9] dark:to-[#1a1a1a]" />
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
          </div>
        </nav>
      </header>
    </div>
  );
}
