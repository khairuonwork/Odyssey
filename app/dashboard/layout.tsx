// Lokasi: app/dashboard/layout.tsx
import type { Metadata } from "next";
import "../globals.css";
import "./roadmap.css";
// HAPUS SEMUA IMPORT LAIN (seperti Sidebar)

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your Odyssey Dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Pastikan HANYA <>{children}</> yang ada di sini.
  // JANGAN letakkan <Sidebar> di sini.
  return <>{children}</>;
}