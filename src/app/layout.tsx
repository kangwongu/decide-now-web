import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "동전 던지기 - 고민 그만, 행동하자",
  description:
    "동전 던지기로 결정을 도와주는 웹 서비스. 시카고대 경제학자 Steven Levitt의 연구에 따르면, 동전 던지기로 변화를 선택한 사람들이 더 높은 행복도를 보고했습니다.",
  openGraph: {
    title: "동전 던지기 - 고민 그만, 행동하자",
    description:
      "고민이 있다면 동전을 던져보세요. 완벽한 결정보다 행동이 중요합니다.",
    url: "https://decide-now-web.vercel.app",
    siteName: "동전 던지기",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <meta name="google-site-verification" content="Reimb0PKEg9WIqTcvw4HtdwcVps1YzLd3GxFXXA1Uks" />
        <meta name="google-adsense-account" content="ca-pub-2013386973554991" />
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-[var(--bg)] text-[var(--text)] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
