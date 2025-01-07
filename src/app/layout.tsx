import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation";

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
        {children}
      </body>
    </html>
  );
}
