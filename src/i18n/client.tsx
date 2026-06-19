'use client';

import { createContext, useCallback, useContext, useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {
  localizePath,
  stripLocale,
  LOCALE_COOKIE,
  type ClientDictionary,
  type Locale,
} from './config';

type I18nContextValue = {
  locale: Locale;
  dictionary: ClientDictionary;
};

const I18nContext = createContext<I18nContextValue | null>(null);

/**
 * Seeds client components with the active locale and the client subset of the
 * dictionary. Only this slice (built by `pickClientDictionary`) is serialized
 * to the browser, keeping server-only page content out of the client bundle.
 * @param locale The active locale.
 * @param dictionary The client subset of the dictionary for the active locale.
 * @param children The subtree that can read the i18n context.
 * @returns The provider wrapping its children.
 */
export function I18nProvider({
  locale,
  dictionary,
  children,
}: {
  locale: Locale;
  dictionary: ClientDictionary;
  children: React.ReactNode;
}) {
  const value = useMemo(() => ({ locale, dictionary }), [locale, dictionary]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

function useI18nContext(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('i18n hooks must be used within <I18nProvider>');
  }
  return ctx;
}

/**
 * Reads the active locale from the i18n context.
 * @returns The active locale.
 */
export function useCurrentLocale(): Locale {
  return useI18nContext().locale;
}

/**
 * Reads the typed client dictionary for the active locale, so client components
 * access translations with the same `dict.x.y` shape as the server (typos and
 * missing keys are caught at compile time).
 * @returns The client dictionary for the active locale.
 */
export function useDictionary(): ClientDictionary {
  return useI18nContext().dictionary;
}

/**
 * Provides a callback that persists the chosen locale in a cookie and navigates
 * to the same page in the new locale (default locale has no URL prefix).
 * @returns A function that switches to the given locale.
 */
export function useChangeLocale() {
  const router = useRouter();
  const pathname = usePathname();

  return useCallback(
    (locale: Locale) => {
      document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=31536000;samesite=lax`;
      const target = localizePath(stripLocale(pathname), locale);
      router.push(target);
      router.refresh();
    },
    [pathname, router],
  );
}
