"use client"
import { Providers } from "@/providers";
import "./globals.css";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className="bg-customBlue">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
      </Providers>
    </html>
  );
}