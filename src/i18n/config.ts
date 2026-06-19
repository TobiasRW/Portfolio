// Central i18n configuration shared by server, client and middleware.
// No "server-only"/"use client" pragmas here so it can be imported anywhere.

export const locales = ['da', 'en'] as const;

export type Locale = (typeof locales)[number];

// Danish is the default locale and is served without a URL prefix.
export const defaultLocale: Locale = 'da';

// The cookie used to remember the visitor's preferred locale.
export const LOCALE_COOKIE = 'NEXT_LOCALE';

// The full shape of a dictionary is inferred from the Danish locale file.
// (en.ts is checked against this shape via `satisfies Dictionary`.)
export type Dictionary = (typeof import('@/locales/da'))['default'];

// The subset of the dictionary that client components actually use. Only this
// slice is serialized to the browser via the I18nProvider — project page
// content (paragraphs, accordions, briefs) stays server-only.
export type ClientDictionary = {
  navigation: Dictionary['navigation'];
  frontPage: {
    hero: Dictionary['frontPage']['hero'];
    skills: Dictionary['frontPage']['skills'];
  };
  testUser: Dictionary['testUser'];
};

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

export function hasLocale(value: unknown): value is Locale {
  return typeof value === 'string' && locales.includes(value as Locale);
}

// Removes a leading locale segment from a pathname, returning the
// "bare" path (the path as it looks for the default locale).
// e.g. "/en/projects" -> "/projects", "/en" -> "/", "/projects" -> "/projects"
export function stripLocale(pathname: string): string {
  for (const locale of locales) {
    if (pathname === `/${locale}`) return '/';
    if (pathname.startsWith(`/${locale}/`))
      return pathname.slice(locale.length + 1);
  }
  return pathname;
}

// Builds the public URL for a bare path in a given locale.
// The default locale gets no prefix; other locales are prefixed.
// e.g. localizePath("/projects", "en") -> "/en/projects"
//      localizePath("/projects", "da") -> "/projects"
//      localizePath("/", "en")         -> "/en"
export function localizePath(barePath: string, locale: Locale): string {
  if (locale === defaultLocale) return barePath;
  return barePath === '/' ? `/${locale}` : `/${locale}${barePath}`;
}
