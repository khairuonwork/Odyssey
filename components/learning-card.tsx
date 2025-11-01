"use client";

import React from "react";

// Tentukan tipe props untuk LearningCard
interface LearningCardProps {
  type: string;
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
  
  // --- Logika untuk mengganti warna header sesuai desain ---
  // Ini akan mencocokkan 'type' yang dikirim dari `learningData`
  const headerBgClass =
    type === "Essential"
      ? "bg-[#213555]" // Biru tua
      : type === "Basic"
      ? "bg-[#3F5B8B]" // Biru sedang
      : "bg-[#F5EFE7]"; // Krem untuk 'Advance'

  // Teks header untuk 'Advance' harus gelap, sisanya putih
  const typeColorClass =
    type === "Advance" 
      ? "text-gray-800" 
      : "text-white";
  // --------------------------------------------------------

  return (
    // Wrapper utama kartu
    // 'h-full' dan 'flex-col' penting untuk menyamakan tinggi kartu dalam satu baris
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm flex flex-col h-full">
      
      {/* Card Header (Warna dinamis) */}
      <div className={`p-4 ${headerBgClass} ${typeColorClass}`}>
        <span className="text-sm font-semibold">{type}</span>
        <h3 className="text-xl font-bold mt-1">{title}</h3>
      </div>

      {/* Card Body (Selalu putih) */}
      {/* 'flex-1' dan 'flex-col' di sini akan mendorong info di bawah ke bagian paling bawah */}
      <div className="p-4 bg-white flex flex-col flex-1">
        
        {/* 'flex-1' pada paragraf deskripsi agar ia mengisi ruang yang tersedia */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-4 flex-1">
          {description}
        </p>
        
        {/* Info di bagian bawah kartu */}
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>
            {videos} Videos | {tests} Test
          </span>
          <span>{hours} Hours</span>
        </div>
      </div>
    </div>
  );
}