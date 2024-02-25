import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ReactNode } from "react";
import { barlow } from "./fonts";
import Header from "@/app/components/Header";
import Footer from "./components/Footer";
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
        className={`${barlow.className}bg-white text-black`}
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
