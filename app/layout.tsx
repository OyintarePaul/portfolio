import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Egrenbido Oyintare Paul",
  description: "Senior Fullstack Next.js Developer, React Native Expert.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${josefinSans.className} antialiased dark`}>
        {children}
      </body>
    </html>
  );
}
