// BUAT FILE BARU / GANTI: components/AuthLayout.tsx
"use client"; // Tambahkan "use client" jika tidak ada

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Pastikan Anda memiliki 'export default' di sini
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Latar belakang krem
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#f7f3ec] p-6">
      {/* Logo */}
      <div className="mb-8 text-center">
        <Link href="/" className="flex flex-col items-center gap-2">
          <Image
            src="/logo/odyssey_logo.png"
            alt="Odyssey Logo"
            width={80}
            height={80}
            priority
          />
          <span className="block text-4xl font-bold text-[#213555] leading-tight">
            Odyssey
          </span>
          <p className="text-sm text-black font-semibold">
            Embark For Knowledge
          </p>
        </Link>
      </div>

      {/* Kontainer Form (Kartu Putih) */}
      <div className="w-full max-w-md rounded-xl border-2 border-black bg-white p-8 shadow-lg">
        {children}
      </div>
    </main>
  );
}