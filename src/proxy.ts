import { NextRequest, NextResponse } from 'next/server';
import {
  defaultLocale,
  hasLocale,
  locales,
  LOCALE_COOKIE,
  type Locale,
} from '@/i18n/config';

/**
 * Determines the visitor's preferred locale: cookie first, then the browser's
 * Accept-Language header, falling back to the default locale.
 * @param request The incoming request.
 * @returns The resolved locale.
 */
function resolveLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (hasLocale(cookie)) return cookie;

  const accept = request.headers.get('accept-language');
  if (accept) {
    const preferred = accept
      .split(',')
      .map((part) => part.split(';')[0].trim().toLowerCase().split('-')[0]);
    const match = preferred.find((lang) => locales.includes(lang as Locale));
    if (hasLocale(match)) return match;
  }

  return defaultLocale;
}

/**
 * Routing middleware that implements prefix-all locale routing: every locale
 * lives under its own segment (/da, /en). Paths that already carry a supported
 * locale are served as-is; prefix-less paths are redirected to the visitor's
 * preferred locale (cookie / Accept-Language / default).
 * @param request The incoming request.
 * @returns The redirect or pass-through response.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Path already carries a supported locale — serve it as-is.
  const hasPrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasPrefix) return NextResponse.next();

  // No locale prefix — redirect to the visitor's preferred locale.
  const locale = resolveLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
};
