import type { Metadata } from "next";
import "@/styles/tailwind.css";
import "/public/fonts/fonts.css";

export const metadata: Metadata = {
  title: "진단기기",
  description: "진단기기 서비스입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
