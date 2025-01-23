"use client";
import { ArrowUp } from "@phosphor-icons/react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

export default function ToTop() {
  const [hidden, setHidden] = useState<boolean>(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    const isHidden = latest > previous && latest > 400;

    setHidden(isHidden);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <motion.button
        onClick={scrollToTop}
        className="group fixed bottom-14 right-6 z-30 rounded-full bg-whitebg p-3 shadow-lg xl:p-4"
        initial="hidden"
        animate={hidden ? "visible" : "hidden"}
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "100%", opacity: 0 },
        }}
        transition={{ duration: 0.3 }}
      >
        <ArrowUp className="h-4 w-4 text-[#1a1a1a] transition-all duration-300 group-hover:-translate-y-1 3xl:h-5 3xl:w-5" />
      </motion.button>
    </>
  );
}
