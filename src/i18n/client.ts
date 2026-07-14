'use client';

import { useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {
  localizePath,
  LOCALE_COOKIE,
  defaultLocale,
  hasLocale,
  type Locale,
} from './config';

/**
 * Reads the active locale from the URL.
 * @returns The active locale.
 */
export function useCurrentLocale(): Locale {
  const segment = usePathname().split('/')[1];
  return hasLocale(segment) ? segment : defaultLocale;
}

/**
 * Function to change the active locale.
 * @returns A function that switches to the given locale.
 */
export function useChangeLocale() {
  const router = useRouter();
  const pathname = usePathname();

  return useCallback(
    (locale: Locale) => {
      document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=31536000;samesite=lax`;
      const barePath = pathname.replace(/^\/[^/]+/, '') || '/';
      const target = localizePath(barePath, locale);
      router.push(target, { scroll: false });
    },
    [pathname, router],
  );
}
