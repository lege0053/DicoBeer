import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/NavBar";
import Footbar from "./components/Footbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: 'DicoBeer | %s',
    default: 'DicoBeer',
  },
  description: "Site web de recherche de bière",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footbar />
      </body>
    </html>
  );
}
