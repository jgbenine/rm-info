import type { Metadata } from "next";
import { Syne, Creepster, Montserrat } from "next/font/google";
// import { ContextData } from "./data/hooks/ContextData";
import "./globals.css";
import QueryProviderData from "./data/Provider/Provider";

const syne = Syne({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-syne",
});
const creepster = Creepster({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-creepster",
  weight: "400",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Rick and Morty Info",
  description: "Data API Rick and Morty",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryProviderData>
      <html
        lang="en"
        className={`${creepster.variable} ${syne.variable} ${montserrat.variable}`}
      >
        <body className="bg-sky-50">{children}</body>
      </html>
    </QueryProviderData>
  );
}
