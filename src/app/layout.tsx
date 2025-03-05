import type { Metadata } from "next";
import { Geist } from "next/font/google";
import ThemeRegistry from "../components/ThemeRegistry";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "W7 Design Flooring | Premium Flooring Solutions in Melbourne",
  description:
    "Melbourne's premier flooring specialist offering hardwood, laminate, vinyl & hybrid flooring solutions. Professional installation & expert consultation for residential & commercial spaces.",
  keywords:
    "flooring Melbounre, hardwood flooring, laminate flooring, vinyl flooring, hybrid flooring, commercial flooring, residential flooring, Melbourne flooring installation, Melbourne design flooring",
  openGraph: {
    title: "W7 Design Flooring | Premium Flooring Solutions in Melbourne",
    description: "Melbourne's premier flooring specialist offering hardwood, laminate, vinyl & hybrid flooring solutions.",
    url: "https://w7designflooring.com",
    siteName: "W7 Design Flooring",
    images: [
      {
        url: "/public/vinyl-flooring.jpg", // Add your OG image
        width: 1200,
        height: 630,
      },
    ],
  },
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
