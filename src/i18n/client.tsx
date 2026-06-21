'use client';

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
} from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {
  localizePath,
  LOCALE_COOKIE,
  type ClientDictionary,
  type Locale,
} from './config';

type I18nContextProps = {
  locale: Locale;
  dictionary: ClientDictionary;
} & PropsWithChildren;

type I18nContextValue = Omit<I18nContextProps, 'children'>;

const I18nContext = createContext<I18nContextValue | null>(null);

/**
 * The provider that wraps the app and makes the i18n context available.
 * @param locale The active locale.
 * @param dictionary The client subset of the dictionary for the active locale.
 * @param children The subtree that can read the i18n context.
 * @returns The provider wrapping its children.
 */
export function I18nProvider(props: I18nContextProps) {
  const { locale, dictionary, children } = props;
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
 * Hook to read the client dictionary from the i18n context.
 * @returns The client dictionary for the active locale.
 */
export function useDictionary(): ClientDictionary {
  return useI18nContext().dictionary;
}

/**
 * Hook to change the active locale.
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
      router.push(target);
      router.refresh();
    },
    [pathname, router],
  );
}
