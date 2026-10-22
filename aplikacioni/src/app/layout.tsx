import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Pwa from "@/components/Pwa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RideShare AAB",
  description: "Udhëtime drejt AAB",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sq" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Pwa />
        {children}
      </body>
    </html>
  );
}