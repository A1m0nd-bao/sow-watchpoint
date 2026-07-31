import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://a1m0nd-bao.github.io/sow-watchpoint"),
  title: "AL的望望小铺 | 守望先锋主题同人摊",
  description: "AL的望望小铺商品图鉴：吧唧、明信片、香片、小卡立牌、光栅卡和冰箱贴。",
  openGraph: {
    title: "AL的望望小铺",
    description: "守望先锋主题同人商品图鉴与现场摊位信息。",
    images: ["https://a1m0nd-bao.github.io/sow-watchpoint/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AL的望望小铺",
    description: "守望先锋主题同人商品图鉴与现场摊位信息。",
    images: ["https://a1m0nd-bao.github.io/sow-watchpoint/og.jpg"],
  },
  icons: {
    icon: "https://a1m0nd-bao.github.io/sow-watchpoint/favicon.svg",
    shortcut: "https://a1m0nd-bao.github.io/sow-watchpoint/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
