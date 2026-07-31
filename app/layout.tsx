import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://a1m0nd-bao.github.io/sow-watchpoint"),
  title: "SOW Watchpoint | 守望先锋主题同人摊",
  description: "守望先锋主题同人摊商品样式、价格与现场优惠展示页。",
  openGraph: {
    title: "SOW Watchpoint",
    description: "Overwatch fan merch, prints, charms and convention booth deals.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOW Watchpoint",
    description: "Overwatch fan merch, prints, charms and convention booth deals.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
