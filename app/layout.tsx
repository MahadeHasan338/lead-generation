import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ReactNode } from "react";
import { barlow } from "./fonts";
import Header from "@/app/components/Header";
import "./globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Pearl Lemon Leads",
  description: "Lead generation based website",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${barlow.className} bg-gray-100/50 text-black overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
