import { NextRequest, NextResponse } from 'next/server';
import {
  defaultLocale,
  hasLocale,
  locales,
  LOCALE_COOKIE,
  type Locale,
} from '@/i18n/config';

/**
 * Determines the visitor's preferred locale.
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

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasPrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (hasPrefix) return NextResponse.next();

  const locale = resolveLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
};
