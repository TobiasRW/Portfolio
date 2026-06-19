import { NextRequest, NextResponse } from 'next/server';
import {
  defaultLocale,
  hasLocale,
  locales,
  LOCALE_COOKIE,
  type Locale,
} from '@/i18n/config';

// Determines the visitor's preferred locale: cookie first, then the
// browser's Accept-Language header, falling back to the default locale.
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

  // The default locale is canonical at the prefix-less URL, so redirect any
  // explicit /da or /da/... request to its clean equivalent.
  if (
    pathname === `/${defaultLocale}` ||
    pathname.startsWith(`/${defaultLocale}/`)
  ) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(`/${defaultLocale}`.length) || '/';
    return NextResponse.redirect(url);
  }

  // Is a non-default locale already present in the URL (e.g. /en or /en/...)?
  const urlLocale = locales.find(
    (locale) =>
      locale !== defaultLocale &&
      (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)),
  );

  if (urlLocale) {
    // Path already carries its locale — serve it and expose the locale
    // to server components via a request header.
    const headers = new Headers(request.headers);
    headers.set('x-locale', urlLocale);
    return NextResponse.next({ request: { headers } });
  }

  // No locale prefix: this is a default-locale (Danish) URL.
  const preferred = resolveLocale(request);

  if (preferred !== defaultLocale) {
    // Visitor prefers a prefixed locale — redirect to its URL.
    const url = request.nextUrl.clone();
    url.pathname =
      pathname === '/' ? `/${preferred}` : `/${preferred}${pathname}`;
    return NextResponse.redirect(url);
  }

  // Serve the default locale by internally rewriting to /da/... while
  // keeping the clean, prefix-less URL in the browser.
  const url = request.nextUrl.clone();
  url.pathname =
    pathname === '/' ? `/${defaultLocale}` : `/${defaultLocale}${pathname}`;

  const headers = new Headers(request.headers);
  headers.set('x-locale', defaultLocale);
  return NextResponse.rewrite(url, { request: { headers } });
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
};
