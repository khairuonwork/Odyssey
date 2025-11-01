// Lokasi: components/OngoingCourseCard.tsx
"use client";

import { Search } from "lucide-react";
import Link from "next/link"; // Gunakan Link

// 1. Perbarui 'props' agar lebih deskriptif
interface OngoingCourseCardProps {
  roadmapName: string;
  nextTarget: string;
  progressPercent: number; // Persentase (mis: 40)
  completedCount: number; // Jumlah selesai (mis: 3)
  totalCount: number; // Total pelajaran (mis: 9)
}

export default function OngoingCourseCard({
  roadmapName,
  nextTarget,
  progressPercent,
  completedCount,
  totalCount,
}: OngoingCourseCardProps) {
  return (
    // Card wrapper
    <div className="bg-white border-2 border-black rounded-xl shadow-lg">
      {/* Bagian atas: Info dan Progress */}
      <div className="p-6 flex justify-between items-start">
        <div>
          <h3 className="text-sm font-semibold text-gray-600 mb-1">
            Your Road Maps
          </h3>
          <h2 className="text-3xl font-bold text-[#213555] mb-4">
            {roadmapName}
          </h2>
          <p className="text-sm text-gray-600">Next target: Overview</p>
          <p className="text-sm text-gray-600 font-medium">@ {nextTarget}</p>
        </div>
        <div className="text-right flex-shrink-0 ml-4">
          {/* 2. Tampilkan Persentase Progres */}
          <div className="text-4xl font-bold text-[#213555] mb-1">
            {progressPercent}%
          </div>
          {/* 3. Tampilkan Jumlah Selesai */}
          <p className="text-xs text-gray-500">
            {completedCount} OF {totalCount} DONE
          </p>
        </div>
      </div>

      {/* Garis pemisah */}
      <hr className="border-t-2 border-black" />

      {/* Bagian bawah: Link "Know More" (arahlan ke dashboard) */}
      <div className="p-4">
        <Link
          href="/dashboard" // Arahkan ke dashboard
          className="flex justify-between items-center text-sm font-medium text-gray-600 hover:text-black"
        >
          <span>Know More About {roadmapName}</span>
          <Search className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}