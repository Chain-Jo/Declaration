import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import { Header } from "./header";

import { LetterModal } from "@/components/modals/letter-modal";


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
  title: "Para ti",
  description: "Quizás esto es muy cursi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Header>
        </Header> */}
        <LetterModal />

        <main className="flex-1 flex flex-col items-center justify-center">
        {children}
        </main>
      </body>
    </html>
  );
}
