import 'server-only';
import { defaultLocale, type Dictionary, type Locale } from './config';

// Each locale is loaded lazily so only the requested dictionary is bundled
// into the request that needs it.
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  da: () => import('@/locales/da').then((m) => m.default),
  en: () => import('@/locales/en').then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const load = dictionaries[locale] ?? dictionaries[defaultLocale];
  return load();
}
