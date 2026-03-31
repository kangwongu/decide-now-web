import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "동전 던지기 - 고민 그만, 행동하자",
  description:
    "동전 던지기로 결정을 도와주는 웹 서비스. Steven Levitt 연구: 동전 던지기로 결정한 사람의 63%가 실행하고 행복도가 높아졌다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
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
