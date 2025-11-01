// Lokasi: components/header.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { Button } from "./ui/button";

const LOGO_URL = "/logo/odyssey_logo.png";
const DEFAULT_AVATAR = "/default/default_profile.png";

// 1. Tambahkan prop onProfileClick
interface HeaderProps {
  onProfileClick?: () => void;
}

export default function Header({ onProfileClick }: HeaderProps) {
  const { isAuthenticated, currentUser, logout } = useAuth();

  // 2. Tentukan apakah profil bisa diklik (jika fungsi diberikan)
  const isProfileClickable = !!onProfileClick;

  return (
    <header className="bg-[#f7f3ec] border-b border-[#1e1e1e]">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src={LOGO_URL}
            alt="Odyssey Logo"
            width={75}
            height={75}
            priority
          />
          <div>
            <span className="block text-[32px] font-bold text-[#213555] leading-tight">
              Odyssey
            </span>
            <p className="text-[14px] text-black  font-semibold">
              Embark For Knowledge
            </p>
          </div>
        </Link>
        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <Link
                href="/dashboard"
                className="text-[22px] font-medium text-[#213555] hover:text-blue-800 transition-colors font-semibold"
              >
                Learn Path
              </Link>
            </li>
            <li>
              <Link
                href="/course"
                className="text-[22px] font-medium text-[#213555] hover:text-blue-800 transition-colors font-semibold"
              >
                Course
              </Link>
            </li>
          </ul>
        </nav>

        {/* Tampilkan UI secara kondisional */}
        <div className="flex items-center gap-3">
          {isAuthenticated && currentUser ? (
            // --- Tampilan Jika Sudah Login ---
            <>
              {/* 3. Bungkus info user dengan <button> yang memanggil onProfileClick */}
              <button
                onClick={onProfileClick}
                disabled={!isProfileClickable} // Nonaktifkan jika tidak ada fungsi
                className={`flex items-center gap-3 ${
                  isProfileClickable
                    ? "cursor-pointer rounded-lg p-1 hover:bg-gray-200"
                    : "cursor-default"
                }`}
              >
                <div className="text-right">
                  <p className="text-[20px] font-semibold text-black">
                    {currentUser.fullName}
                  </p>
                  <p className="text-[14px] text-gray-500">
                    {currentUser.status}
                  </p>
                </div>
                <div className="relative w-10 h-10">
                  <Image
                    src={currentUser.avatar || DEFAULT_AVATAR}
                    alt="Profile avatar"
                    fill
                    className="rounded-full border-2 border-black object-cover"
                    sizes="40px"
                  />
                </div>
              </button>
              
              <Button onClick={logout} variant="ghost" size="sm">
                Logout
              </Button>
            </>
          ) : (
            // --- Tampilan Jika Belum Login ---
            <Button asChild>
              <Link
                href="/login"
                className="bg-[#213555] text-white hover:bg-[#1a2a44]"
              >
                Login
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}