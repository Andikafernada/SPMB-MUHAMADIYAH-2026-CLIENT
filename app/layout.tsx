// 1. Tambahkan import Metadata di sini
import type { Metadata } from "next"; 
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 2. Sekarang variabel ini tidak akan error lagi
export const metadata: Metadata = {
  title: "SMP Muhammadiyah | Cerdas, Islami, Berteknologi Tinggi",
  description: "Portal resmi pendaftaran dan informasi SMP Muhammadiyah.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body>
        {children}
      </body>
    </html>
  );
}