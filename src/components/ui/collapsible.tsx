"use client";

import { CaretDownIcon } from "@phosphor-icons/react";
import clsx from "clsx";
import { useState } from "react";

type CollapsibleProps = {
  trigger: string;
  children?: React.ReactNode;
  className?: string;
};

export default function Collapsible({
  trigger,
  children,
  className,
}: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={clsx(
        "rounded-md bg-whitebg drop-shadow-sm dark:bg-[#2C2C2C]",
        className,
      )}
    >
      <div
        onClick={() => setIsOpen((v) => !v)}
        className="flex cursor-pointer select-none items-center justify-between px-4 py-4 font-light italic sm:text-lg md:text-xl"
      >
        {trigger}
        <CaretDownIcon
          className={clsx("ml-2 transition-transform duration-300", {
            ["rotate-180"]: isOpen,
          })}
        />
      </div>
      <div
        className={clsx(
          "overflow-hidden border-t border-[#2C2C2C] transition-all duration-500 ease-in-out dark:border-[#EDECEC]",
          { ["invisible max-h-0"]: !isOpen },
          { ["visible max-h-96"]: isOpen },
        )}
      >
        <div className="px-4 py-2">{children}</div>
      </div>
    </div>
  );
}
