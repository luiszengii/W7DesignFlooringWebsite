import type { Metadata } from "next";
import { Geist } from "next/font/google";
import ThemeRegistry from "../components/ThemeRegistry";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "W7 Design Floors - Hard Flooring Specialists",
  description:
    "Australia's largest wholesale supplier of timber & timber look flooring",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
