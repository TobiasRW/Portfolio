import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation";
import ToTop from "@/components/to-top";
import Footer from "@/components/footer";
import { I18nProviderClient } from "@/locales/client";
import { getStaticParams } from "@/locales/server";
import { LocalePrefetcher } from "@/components/locale-prefetcher";

export const metadata: Metadata = {
  title: "Tobias Wolmar",
  description: "Portfolio af Tobias Wolmar",
};

export function generateStaticParams() {
  return getStaticParams();
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body className="">
        <I18nProviderClient locale={locale}>
          <Navigation />
          <LocalePrefetcher />
        </I18nProviderClient>
        <ToTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
