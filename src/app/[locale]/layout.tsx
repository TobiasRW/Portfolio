import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import './globals.css';

import { hasLocale, locales, pickClientDictionary } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { I18nProvider } from '@/i18n/client';
import { Footer, Nav } from '@/components/layout';
import { ToTop } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Tobias Wolmar',
  description: 'Portfolio af Tobias Wolmar',
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<'/[locale]'>) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const clientDictionary = pickClientDictionary(await getDictionary(locale));

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <I18nProvider locale={locale} dictionary={clientDictionary}>
          <Nav />
          <ToTop />
          {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
