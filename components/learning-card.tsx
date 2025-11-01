"use client";

import React from "react";

// Tentukan tipe props untuk LearningCard
interface LearningCardProps {
  type: string; // <-- SUDAH DIPERBAIKI
  title: string;
  description: string;
  videos: number;
  tests: number;
  hours: number;
}

export default function LearningCard({
  type,
  title,
  description,
  videos,
  tests,
  hours,
}: LearningCardProps) {
  // Logika ini tetap aman karena 'Advance' menjadi kasus default
  const headerBgClass =
    type === "Essential"
      ? "bg-[#213555]"
      : type === "Basic"
      ? "bg-[#3F5B8B]"
      : "bg-[#F5EFE7] text-gray-800";

  const typeColorClass = type === "Advance" ? "text-gray-800" : "text-white";

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
      {/* Card Header */}
      <div className={`p-4 ${headerBgClass} ${typeColorClass}`}>
        <span className="text-sm font-semibold">{type}</span>
        <h3 className="text-xl font-bold mt-1">{title}</h3>
      </div>

      {/* Card Body */}
      <div className="p-4 bg-white">
        <p className="text-sm text-gray-600 mb-4 line-clamp-4">{description}</p>
        <div className="flex justify-between text-xs text-gray-500">
          <span>
            {videos} Videos | {tests} Test
          </span>
          <span>{hours} Hours</span>
        </div>
      </div>
    </div>
  );
}
