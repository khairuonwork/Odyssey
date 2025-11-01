// Tambahkan "use client" jika Anda akan mengambil data (fetch) di sini
"use client";

import React from "react";
import Image from "next/image"; // Impor Next.js Image

// Asumsi logo ada di /public/logo/odyssey_logo.png
const LOGO_URL = "/logo/odyssey_logo.png";
// AVATAR_URL Fetch dari DB
const AVATAR_URL = "";
// Sediakan gambar default jika AVATAR_URL kosong
const DEFAULT_AVATAR = "/default/default_profile.png"; // Ganti dengan path Anda

export default function Header() {
  const displayAvatarUrl = AVATAR_URL || DEFAULT_AVATAR;

  return (
    <header className="w-full border-b-3 border-black bg-[#F5EFE7] sticky top-0 z-10 backdrop-blur-sm font-semibold">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* === Item 1: Logo (Kiri) === */}
        <a href="/" className="flex items-center gap-2.5">
          <Image
            src={LOGO_URL}
            alt="Odyssey Logo"
            width={75} // Setel width/height (dari w-20 h-20)
            height={75}
            priority // Prioritaskan logo karena penting
          />
          <div>
            <span className="block text-[32px] font-bold text-[#213555] leading-tight">
              Odyssey
            </span>
            <p className="text-[14px] text-black  font-semibold">
              Embark For Knowledge
            </p>
          </div>
        </a>
        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <a
                href="/learn"
                className="text-[22px] font-medium text-[#213555] hover:text-blue-800 transition-colors font-semibold"
              >
                Learn Path
              </a>
            </li>
            <li>
              <a
                href="/course"
                className="text-[22px] font-medium text-[#213555] hover:text-blue-800 transition-colors font-semibold"
              >
                Course
              </a>
            </li>
          </ul>
        </nav>

        {/* === Item 3: Profil (Kanan) === */}
        <div className="flex items-center gap-3">
          {/* Profile Text */}
          <div className="text-right">
            <p className="text-[20px] font-semibold text-black">
              Mirae Nakamura
            </p>
            <p className="text-[14px] text-gray-500">Student</p>
          </div>

          {/* Avatar + Notification Dot */}
          <div className="relative w-10 h-10">
            <Image
              src={displayAvatarUrl}
              alt="Profile avatar"
              fill
              className="rounded-full border-2 border-black object-cover"
              sizes="40px"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
