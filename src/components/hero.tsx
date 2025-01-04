import { Button } from "@/components/ui/button";
import { ArrowDown } from "@phosphor-icons/react/dist/ssr";

export default function Hero() {
  return (
    <div className="h-screen w-screen bg-[#1A1A1A]">
      <div className="relative flex h-2/4 w-screen items-center justify-center rounded-b-[40px] bg-background">
        <div className="absolute z-0 h-full w-full bg-[radial-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]"></div>
        <div className="z-10">
          <div className="flex gap-4">
            <Button variant="default">
              Projekter
              <ArrowDown size={32} weight="bold" />
            </Button>
            <Button variant="default">
              Om Mig
              <ArrowDown size={32} weight="bold" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
