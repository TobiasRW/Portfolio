'use client';
import React from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import { useCurrentLocale } from '@/i18n/client';
import { localizePath } from '@/i18n/config';

/**
 * Props for the TransitionLink component.
 */
interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

/**
 * A wrapper around Next.js's Link that adds a view transition on navigation.
 */
export const TransitionLink = ({
  children,
  href,
  className,
  ...props
}: TransitionLinkProps) => {
  const router = useRouter();
  const locale = useCurrentLocale();

  // Keep internal links within the active locale (e.g. "/en/projects").
  const localizedHref = localizePath(href, locale);

  const handleTransition = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    // Let modified clicks (open in new tab, etc.) keep their native behavior.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();

    // Fall back to a plain navigation where the API is unavailable.
    if (!document.startViewTransition) {
      router.push(localizedHref);
      return;
    }
    document.startViewTransition(() => router.push(localizedHref));
  };

  return (
    <Link
      className={className}
      onClick={handleTransition}
      href={localizedHref}
      {...props}
    >
      {children}
    </Link>
  );
};
