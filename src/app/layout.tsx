import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soft99bike Store - متجر الدراجات النارية",
  description: "متجر متخصص في الدراجات النارية وقطع الغيار والإكسسوارات",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
