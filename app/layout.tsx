import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spin a yarn",
  description: "A spider's tale",
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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body className={`${inter.className} min-h-screen p-24`}>
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
