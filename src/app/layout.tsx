import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import "@/app/globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.panaplumbing.com.au"),
  title: "Pana Plumbing | Sydney Plumbing Services",
  description: "Professional plumbing services across Sydney. Emergency plumbing, blocked drains, hot water systems, and more."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jakarta.variable} font-sans`}>
        <Header />
        <div className="pb-20 md:pb-0">{children}</div>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
