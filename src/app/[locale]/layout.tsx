import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation";
import ToTop from "@/components/to-top";
import Footer from "@/components/footer";
import { I18nProviderClient } from "@/locales/client";

export const metadata: Metadata = {
  title: "Tobias Wolmar",
  description: "Portfolio af Tobias Wolmar",
};

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
        </I18nProviderClient>
        <ToTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
