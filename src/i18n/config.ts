export const locales = ['da', 'en'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'da';

export const LOCALE_COOKIE = 'NEXT_LOCALE';

/**
 * The full dictionary type, inferred from the shape of the default danish dictionary.
 */
export type Dictionary = (typeof import('@/locales/da'))['default'];

/**
 * The subset of the dictionary that client components actually use.
 */
export type ClientDictionary = {
  navigation: Dictionary['navigation'];
};

/**
 * Gets the client dictionary from the full dictionary, picking only the parts that are needed on the client.
 * @param dict The full dictionary for a locale.
 * @returns The client dictionary.
 */
export function pickClientDictionary(dict: Dictionary): ClientDictionary {
  return {
    navigation: dict.navigation,
  };
}

/**
 * Checks if the locale is a valid locale.
 * @param value The locale to check
 * @returns true if the locale is valid, false otherwise.
 */
export function hasLocale(value: unknown): value is Locale {
  return typeof value === 'string' && locales.includes(value as Locale);
}

/**
 * Builds the public URL for a bare path in a given locale.
 * @param barePath The path without a locale prefix.
 * @param locale The locale to build the URL for.
 * @returns The locale-aware public URL.
 */
export function localizePath(barePath: string, locale: Locale): string {
  return barePath === '/' ? `/${locale}` : `/${locale}${barePath}`;
}
