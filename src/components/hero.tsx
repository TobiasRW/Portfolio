"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "@phosphor-icons/react/dist/ssr";
import { motion, useDragControls, useMotionValue, animate } from "motion/react";
import Dots from "./dots";
import { useScopedI18n } from "@/locales/client";

export default function Hero() {
  const scopedT = useScopedI18n("frontPage.hero");

  const controls = useDragControls();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useMotionValue(-12);

  const handleDragEnd = () => {
    animate(x, 0, { type: "spring", stiffness: 300, damping: 20 });
    animate(y, 0, { type: "spring", stiffness: 300, damping: 20 });
    animate(rotate, -12, { type: "spring", stiffness: 300, damping: 20 });
  };

  // Utility function to scroll to a given element ID
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-screen bg-whitebg dark:bg-[#1A1A1A]">
      <div className="relative flex h-[420px] w-screen items-center justify-center rounded-b-[40px] bg-background sm:h-[450px] lg:h-[550px] lg:rounded-b-[50px] xl:h-[600px] 2xl:rounded-b-[70px] 3xl:h-[700px]">
        <Dots />
        <div className="z-10 mx-auto flex w-10/12 flex-col gap-6 pt-10 lg:gap-10 lg:pt-16">
          <div className="relative mx-auto flex w-72 items-center justify-center sm:w-80">
            <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border-2 border-whitebg bg-gradient-to-tr from-[#d9d9d9] to-[#d1cccc] sm:h-36 sm:w-36 lg:h-40 lg:w-40 xl:h-44 xl:w-44 dark:border-none dark:from-[#1A1A1A] dark:to-[#2D2D2D]">
              <Image
                src="/images/portrait.webp"
                alt="Hero"
                width={200}
                height={200}
                className=""
              />
            </div>
            <motion.div
              className="absolute right-3 top-8 z-20 -rotate-12 cursor-pointer rounded-full bg-whitebg px-3 py-2 font-heading text-xs font-medium shadow-lg sm:right-1 sm:text-sm lg:-right-3 lg:text-base xl:top-10 dark:bg-[#1d1d1d]"
              drag
              dragControls={controls}
              style={{ x, y, rotate }}
              onDragEnd={handleDragEnd}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Tobias Wolmar 👋🏻
            </motion.div>
          </div>
          <h1 className="bg-gradient-to-br from-foreground from-50% to-background bg-clip-text text-center text-2xl font-semibold text-transparent sm:text-3xl md:mx-auto md:w-9/12 lg:text-4xl xl:w-4/6 xl:text-5xl">
            {scopedT("title")}
          </h1>
          <div className="flex justify-center gap-4 lg:gap-6 xl:gap-8">
            <Button
              variant="default"
              className="group"
              onClick={() => scrollToSection("projects")}
            >
              {scopedT("button.projects")}
              <ArrowDown
                size={32}
                weight="bold"
                className="transition-transform duration-500 ease-in-out group-hover:translate-y-[2px]"
              />
            </Button>
            <Button
              variant="default"
              className="group"
              onClick={() => scrollToSection("about")}
            >
              {scopedT("button.about")}
              <ArrowDown
                size={32}
                weight="bold"
                className="transition-transform duration-500 ease-in-out group-hover:translate-y-[2px]"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
