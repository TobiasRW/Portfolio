import clsx from "clsx";
import React from "react";

type ButtonProps = {
  variant?: "default" | "fancy" | "slider";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "default", size = "default", className, children, ...rest },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "font-heading inline-flex cursor-pointer items-center justify-center gap-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50 md:text-base xl:text-lg [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&:not(:hover):before]:duration-200",
          className,
          {
            ["bg-whitebg relative flex items-center justify-center text-[#2C2C2C] drop-shadow-sm transition-all"]:
              variant === "default",
            ["hover:border-2-whitebg border-whitebg bg-whitebg before:bg-background hover:text-foreground relative flex items-center justify-center overflow-hidden border-2 text-[#2C2C2C] transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:duration-1000 before:ease-out hover:before:h-56 hover:before:w-56"]:
              variant === "fancy",
            ["bg-whitebg text-background lg:transition-all lg:hover:scale-110 dark:bg-[#2c2c2c]"]:
              variant === "slider",
          },
          {
            ["h-9 px-4 py-2"]: size === "default",
            ["h-8 px-3 text-xs"]: size === "sm",
            ["h-10 px-8"]: size === "lg",
            ["h-8 w-8"]: size === "icon",
          },
        )}
        {...rest}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
