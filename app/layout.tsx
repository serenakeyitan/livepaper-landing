import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://www.kael.im";
const defaultTitle = "Kael AI 论文助手";
const defaultDescription =
  "Kael 是面向研究者的 AI 论文助手，帮助你进行多文档深度阅读、精准公式解析与智能论文推荐，让科研与写作更高效。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s｜Kael AI 论文助手",
  },
  description: defaultDescription,
  keywords: [
    "Kael",
    "AI 论文助手",
    "科研助手",
    "多文档阅读",
    "学术搜索",
    "论文推荐",
    "公式解析",
  ],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: siteUrl,
    siteName: "Kael AI 论文助手",
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "zh-CN": siteUrl,
      "en-US": "https://www.kael.im/en",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W5F1Y6479G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-W5F1Y6479G');`}
        </Script>
        {children}
      </body>
    </html>
  );
}
