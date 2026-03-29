"use client";
import Image from "next/image";
import {
  ArrowDownIcon,
  MapPinSimpleIcon,
} from "@phosphor-icons/react/dist/ssr";
import Dots from "./visuals/dots/dots";
import { useScopedI18n } from "@/locales/client";
import Button from "./ui/button";

export default function Hero() {
  const scopedT = useScopedI18n("frontPage.hero");

  // Utility function to scroll to a given element ID
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-whitebg w-screen dark:bg-[#1A1A1A]">
      <div className="bg-background 3xl:h-[700px] relative flex h-[420px] w-screen items-center justify-center rounded-b-[40px] sm:h-[450px] lg:h-[550px] lg:rounded-b-[50px] xl:h-[600px] 2xl:rounded-b-[70px]">
        <Dots />
        <div className="z-10 mx-auto flex w-10/12 flex-col gap-6 pt-10 lg:gap-8 lg:pt-16">
          <div className="relative mx-auto flex w-72 flex-col items-center justify-center gap-4 sm:w-80">
            <div className="border-whitebg mx-auto h-32 w-32 overflow-hidden rounded-full border-2 bg-gradient-to-tr from-[#d9d9d9] to-[#d1cccc] sm:h-36 sm:w-36 lg:h-40 lg:w-40 xl:h-44 xl:w-44 dark:border-none dark:from-[#1A1A1A] dark:to-[#2D2D2D]">
              <Image
                src="/images/portrait.webp"
                alt="Hero"
                width={200}
                height={200}
                className=""
              />
            </div>
            <div className="flex">
              <MapPinSimpleIcon
                weight="fill"
                className="text-foreground mt-1"
              />
              <p>{scopedT("location")}</p>
            </div>
            <div className="bg-whitebg font-heading absolute top-8 right-3 z-20 -rotate-12 rounded-full px-3 py-2 text-xs font-medium shadow-lg sm:right-1 sm:text-sm lg:-right-3 lg:text-base xl:top-10 dark:bg-[#1d1d1d]">
              Tobias Wolmar 👋🏻
            </div>
          </div>
          <h1 className="from-foreground to-background bg-gradient-to-br from-50% bg-clip-text text-center text-2xl font-semibold text-transparent sm:text-3xl md:mx-auto md:w-9/12 lg:text-4xl xl:w-4/6 xl:text-5xl">
            {scopedT("title")}
          </h1>
          <div className="flex justify-center gap-4 lg:gap-6 xl:gap-8">
            <Button
              className="group"
              onClick={() => scrollToSection("projects")}
            >
              {scopedT("button.projects")}
              <ArrowDownIcon
                weight="bold"
                className="transition-transform duration-500 ease-in-out group-hover:translate-y-[2px]"
              />
            </Button>
            <Button className="group" onClick={() => scrollToSection("about")}>
              {scopedT("button.about")}
              <ArrowDownIcon
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
