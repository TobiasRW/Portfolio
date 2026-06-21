import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import './globals.css';

import { hasLocale, locales } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
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
  const dict = await getDictionary(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <Nav labels={dict.navigation} />
        <ToTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
