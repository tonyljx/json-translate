import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "JSON Translate - Get the Best SEO Content for Your Website",
  description: "Looking for JSON translation and SEO optimization? Our expert service provides top-quality content tailored to your needs.",
  keywords: "JSON translate, SEO content, expert service, top-quality, tailored"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
        <Toaster />
        <Script async src="https://umami.runningpig.top/script.js" data-website-id="20e0c6e6-3daf-42a7-8143-6681c0b03cb4"></Scrip>
      </body>
    </html>
  );
}
