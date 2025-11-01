import type { Metadata } from "next";
import "../globals.css";
import "./roadmap.css"; // Impor CSS ini sudah benar

// Hapus font, karena sudah ada di layout utama
// Hapus metadata, karena kita bisa atur di page.tsx jika perlu

export default function DashboardLayout({ // Ubah nama fungsi agar lebih spesifik
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Hapus <html> dan <body>
    // Cukup kembalikan children, atau bungkus dengan <section> jika perlu
    <>{children}</>
  );
}