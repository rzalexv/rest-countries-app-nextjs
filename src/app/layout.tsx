import React from "react";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components";

const nunito = Nunito_Sans({ subsets: ["latin"], weight: ["300", "600", "800"] });

export const metadata: Metadata = {
  title: "RestCountriesApp",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.className} dark:bg-dark bg-light transition-colors duration-300`}>
        <Providers>
          <div>
            <Header />
            <main>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
