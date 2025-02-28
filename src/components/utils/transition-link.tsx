"use client";
import React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

// TransitionLink component props
interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

// Sleep function
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink = ({
  children,
  href,
  className,
  ...props
}: TransitionLinkProps) => {
  const router = useRouter();

  // Function to handle the transition
  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault(); // Prevent the default behavior (normal link click)

    const body = document.querySelector("body"); // Get the body element
    body?.classList.add("page-exit"); // Add the page-exit class to the body

    await sleep(300); // Wait for 300ms so the exit animation can play

    router.push(href); // Navigate to the new page
    body?.classList.remove("page-exit"); // Remove the page-exit class from the body
    body?.classList.add("page-enter"); // Add the page-enter class to the body

    await sleep(300); // Wait for 300ms so the enter animation can play
    body?.classList.remove("page-enter"); // Remove the page-enter class from the body
  };

  return (
    <Link
      className={className}
      onClick={handleTransition}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
};
