import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "../styles/globals.css";

import Navbar from "../components/layout/Navbar";

export const metadata: Metadata = {
  title: "saintmrti",
  description: "Primera versión creada con Next.js",
};

const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merriweather",
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head></head>
      <body className={`${merriweather.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
