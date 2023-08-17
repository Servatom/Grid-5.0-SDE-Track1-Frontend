import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flipkart",
  description: "Flipkart",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link
          rel="icon"
          href="https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
