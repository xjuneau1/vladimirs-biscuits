import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import BackgroundWrapper from "@/components/background/BackgroundWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vladimir's Biscuits | EST. 2025",
  description: "Kneading biscuits and never baking them since 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FDF6E3]`}
      >
        <BackgroundWrapper src="/cozy-bakery-biscuits.webp" alt="picture of bakery">
        <Navbar />
        {children}
        </BackgroundWrapper>
        
      </body>
    </html>
  );
}
