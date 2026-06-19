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

// Seeds client components with the active locale and the client subset of the
// dictionary. Only this slice (built by `pickClientDictionary`) is serialized
// to the browser, keeping server-only page content out of the client bundle.
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

export function useCurrentLocale(): Locale {
  return useI18nContext().locale;
}

// Returns the typed client dictionary for the active locale, so client
// components access translations with the same `dict.x.y` shape as the
// server (typos and missing keys are caught at compile time).
export function useDictionary(): ClientDictionary {
  return useI18nContext().dictionary;
}

// Persists the chosen locale in a cookie and navigates to the same page
// in the new locale (default locale has no URL prefix).
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
