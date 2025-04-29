import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavigationGuardProvider } from "next-naviguard";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "next-naviguard Example",
  description:
    "Demo for next-naviguard library which provides a navigation guard for Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavigationGuardProvider>{children}</NavigationGuardProvider>
      </body>
    </html>
  );
}
