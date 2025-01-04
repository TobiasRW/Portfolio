import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "@phosphor-icons/react/dist/ssr";

export default function Hero() {
  return (
    <div className="h-screen w-screen bg-[#1A1A1A]">
      <div className="relative flex h-2/4 w-screen items-center justify-center rounded-b-[40px] bg-background">
        <div className="absolute z-0 h-full w-full bg-[radial-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]"></div>
        <div className="z-10 mx-auto flex w-10/12 flex-col gap-6 pt-10">
          <div className="relative mx-auto w-80">
            <div className="mx-auto h-36 w-36 overflow-hidden rounded-full border-2 border-whitebg bg-gradient-to-tr from-[#d9d9d9] to-[#d1cccc] dark:border-none dark:from-[#1A1A1A] dark:to-[#2D2D2D]">
              <Image
                src="/images/portrait.webp"
                alt="Hero"
                width={200}
                height={200}
                className=""
              />
            </div>
            <div className="absolute -right-1 top-8 -rotate-12 rounded-full bg-whitebg px-3 py-2 font-heading text-base font-medium shadow-lg dark:bg-[#1d1d1d]">
              Tobias Wolmar 👋🏻
            </div>
          </div>
          <h1 className="bg-gradient-to-br from-foreground from-50% to-background bg-clip-text text-center text-2xl font-semibold text-transparent">
            Passioneret webudvikler med speciale i frontend-udvikling
          </h1>
          <div className="flex justify-center gap-4">
            <Button variant="default">
              Projekter
              <ArrowDown size={32} weight="bold" />
            </Button>
            <Button variant="default">
              Om mig
              <ArrowDown size={32} weight="bold" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
