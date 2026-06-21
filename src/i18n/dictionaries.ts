import 'server-only';
import { type Dictionary, type Locale } from './config';

// Each locale is loaded lazily so only the requested dictionary is bundled
// into the request that needs it.
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  da: () => import('@/locales/da').then((module) => module.default),
  en: () => import('@/locales/en').then((module) => module.default),
};

/**
 * Loads the full dictionary for a locale.
 * @param locale The locale to load.
 * @returns The dictionary for the locale.
 */
export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
