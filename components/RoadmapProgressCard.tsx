// Simpan sebagai: components/RoadmapProgressCard.tsx
"use client";

import Link from "next/link";
import { useUserProgress } from "@/context/UserProgressContext"; // Pastikan path ini benar

export default function RoadmapProgressCard() {
  // Ambil persentase progres dari Context
  const { progressPercent, completedItems } = useUserProgress();
  const totalLessons = 9; // Hardcode total (atau ambil dari allLessonsData.length)

  return (
    <div className="bg-white border-2 border-black rounded-xl shadow-lg p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-sm text-gray-600 mb-1">Your Road Maps</h2>
          <h1 className="text-3xl font-bold text-[#213555] mb-2">DevOps</h1>
          <p className="text-sm text-gray-600 mb-1">Next target: Overview</p>
          <Link
            href="/dashboard" // Arahkan ke halaman utama dashboard
            className="text-blue-600 text-sm underline hover:text-blue-800"
          >
            Go Calculate Roadmap
          </Link>
        </div>
        <div className="text-right">
          {/* Tampilkan data dinamis */}
          <p className="text-4xl font-bold text-[#213555]">
            {progressPercent}%
          </p>
          <p className="text-xs text-gray-500">
            {completedItems.size} OF {totalLessons} DONE
          </p>
        </div>
      </div>
    </div>
  );
}