import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const twkLausanne = localFont({
  src: "../../public/fonts/TWKLausannePan-300.otf",
  variable: "--font-twk-lausanne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Record Down Under",
  description: "William Goodge is running coast to coast across Australia — Cottesloe to Bondi — chasing a transcontinental record and raising funds for cancer charities. 4,000 km of pain, purpose, and proving what's possible.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${twkLausanne.variable}`}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
