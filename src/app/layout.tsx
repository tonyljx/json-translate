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
  title: "Json Translate",
  description: "json translate | ai/gpt motivated json translation",
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
        <Script
          async
          src="https://umami.runningpig.top/script.js"
          data-website-id="20e0c6e6-3daf-42a7-8143-6681c0b03cb4"
        ></Script>
      </body>
    </html>
  );
}
