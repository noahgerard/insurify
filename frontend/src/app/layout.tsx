import type { Metadata } from "next";
import { Halant } from 'next/font/google';
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "./components/Navbar/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

 

const halantFont = Halant({
  weight: "400",
  subsets: ["latin"],
  variable: '--font-halant',
});

export const metadata: Metadata = {
  title: "Insurify",
  description: "Simplified Auto Insurance Claims",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`flex flex-col ${halantFont.className} antialiased min-h-screen`}
        >
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
