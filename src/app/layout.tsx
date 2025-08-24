import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const hanseokbong = localFont({
  src: [
    {
      path: "./fonts/GapyeongHanseokbongR.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GapyeongHanseokbongB.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-hanseokbong",
  display: "swap",
});

export const metadata: Metadata = {
  title: "로켓AI_운세박사",
  description: "로켓AI_운세박사",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={hanseokbong.variable}>
      <body>{children}</body>
    </html>
  );
}
