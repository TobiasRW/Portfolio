import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation";
import ToTop from "@/components/to-top";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Tobias Wolmar",
  description: "Portfolio af Tobias Wolmar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Navigation />
        <ToTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
