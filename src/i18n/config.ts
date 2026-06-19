export const locales = ['da', 'en'] as const;

export type Locale = (typeof locales)[number];

// Default locale is danish.
export const defaultLocale: Locale = 'da';

// The cookie used to remember the visitor's preferred locale.
export const LOCALE_COOKIE = 'NEXT_LOCALE';

/**
 * The type of a dictionary for a specific locale.
 * This is inferred by the shape of the danish dictionary as the source of truth.
 * Other locales are checked against this shape via `satisfies Dictionary.
 */
export type Dictionary = (typeof import('@/locales/da'))['default'];

/**
 * The subset of the dictionary that client components actually use.
 */
export type ClientDictionary = {
  navigation: Dictionary['navigation'];
  frontPage: {
    hero: Dictionary['frontPage']['hero'];
    skills: Dictionary['frontPage']['skills'];
  };
  testUser: Dictionary['testUser'];
};

/**
 * Gets the client dictionary from the full dictionary, picking only the parts that are needed on the client.
 * @param dict The full dictionary for a locale.
 * @returns The client dictionary.
 */
export function pickClientDictionary(dict: Dictionary): ClientDictionary {
  return {
    navigation: dict.navigation,
    frontPage: {
      hero: dict.frontPage.hero,
      skills: dict.frontPage.skills,
    },
    testUser: dict.testUser,
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
 * Removes a leading locale segment from a pathname.
 * e.g. "/en/projects" -> "/projects", "/en" -> "/", "/projects" -> "/projects"
 * @param pathname The pathname to strip the locale from.
 * @returns The "bare" pathname (as it looks for the default locale).
 */
export function stripLocale(pathname: string): string {
  for (const locale of locales) {
    if (pathname === `/${locale}`) return '/';
    if (pathname.startsWith(`/${locale}/`))
      return pathname.slice(locale.length + 1);
  }
  return pathname;
}

/**
 * Builds the public URL for a bare path in a given locale. The default locale
 * gets no prefix; other locales are prefixed.
 * e.g. localizePath("/projects", "en") -> "/en/projects", ("/projects", "da") -> "/projects"
 * @param barePath The path without a locale prefix.
 * @param locale The locale to build the URL for.
 * @returns The locale-aware public URL.
 */
export function localizePath(barePath: string, locale: Locale): string {
  if (locale === defaultLocale) return barePath;
  return barePath === '/' ? `/${locale}` : `/${locale}${barePath}`;
}
