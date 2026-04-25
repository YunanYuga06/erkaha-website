import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";

// 1. Inisialisasi Font Utama (Sans Serif)
const fontSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-sans", // Membuat variabel CSS
  display: 'swap',
});

// 2. Inisialisasi Font Aksen (Serif)
const fontSerif = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-serif",
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Erkaha Cloth | Konveksi Kaos & Seragam Kustom",
  description: "Wujudkan kaos komunitas dan seragam perusahaan impianmu dengan jahitan presisi dan bahan premium bersama Erkaha Cloth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Tambahkan class scroll-smooth dan variabel font di tag HTML
    <html lang="id" className="scroll-smooth">
      <body 
        className={`${fontSans.variable} ${fontSerif.variable} font-sans bg-[#111111] text-white antialiased selection:bg-yellow-400 selection:text-black`}
      >

        {children}
      </body>
    </html>
  );
}

