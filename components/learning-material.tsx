"use client";

import React from "react";
import { Search } from "lucide-react";
import { useState } from "react";
import LearningCard from "@/components/learning-card"; // Impor komponen LearningCard Anda
import Link from "next/link"; // IMPORT Link

export default function LearningMaterial() {
  // Data dummy untuk kartu pembelajaran (ganti dengan data asli Anda)
  const learningData = {
    fundamental: [
      {
        id: "f1",
        type: "Essential",
        title: "Version Control Systems",
        description:
          "Version control systems (VCS) are tools that track changes to code and other files over time. They enable developers to collaborate on projects, maintain history, and manage different versions of codebase.",
        videos: 12,
        tests: 1,
        hours: 12,
        href: "/video_feed", // TAMBAHKAN href
      },
      {
        id: "f2",
        type: "Basic",
        title: "Repo Hosting Services",
        description:
          "When working on a team, you often need a remote place to put your code so others can access it, create their own branches, and create or review pull requests.",
        videos: 12,
        tests: 1,
        hours: 12,
        href: "/video_feed", // TAMBAHKAN href
      },
      {
        id: "f3",
        type: "Advance",
        title: "Networking Protocols",
        description:
          "Understand OS basics and manage various file systems and OS.",
        videos: 12,
        tests: 1,
        hours: 12,
        href: "/video_feed", // TAMBAHKAN href
      },
    ],
    intermediate: [
      // ... (Asumsi Anda menambahkan href di sini juga)
      {
        id: "i1",
        type: "Essential",
        title: "Version Control Systems",
        description: "...",
        videos: 12,
        tests: 1,
        hours: 12,
        href: "/video_feed",
      },
      {
        id: "i2",
        type: "Basic",
        title: "Repo Hosting Services",
        description: "...",
        videos: 12,
        tests: 1,
        hours: 12,
        href: "/video_feed",
      },
      {
        id: "i3",
        type: "Advance",
        title: "Networking Protocols",
        description: "...",
        videos: 12,
        tests: 1,
        hours: 12,
        href: "/video_feed",
      },
    ],
    advanced: [
      // ... (Asumsi Anda menambahkan href di sini juga)
      {
        id: "a1",
        type: "Essential",
        title: "Version Control Systems",
        description: "...",
        videos: 12,
        tests: 1,
        hours: 12,
        href: "/video_feed",
      },
      {
        id: "a2",
        type: "Basic",
        title: "Repo Hosting Services",
        description: "...",
        videos: 12,
        tests: 1,
        hours: 12,
        href: "/video_feed",
      },
      {
        id: "a3",
        type: "Advance",
        title: "Networking Protocols",
        description: "...",
        videos: 12,
        tests: 1,
        hours: 12,
        href: "/video_feed",
      },
    ],
  };

  return (
    <div className="flex-1 p-6 space-y-6">
      {/* GANTI <button> ke <Link> */}
      <Link
        href="/" // Kembali ke homepage untuk ganti roadmap
        className="w-full bg-[#213555] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1a2a44] transition-colors block text-center"
      >
        Change Your Course
      </Link>

      {/* Your Road Maps Card */}
      <div className="bg-white border-2 border-black rounded-xl shadow-lg p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-sm text-gray-600 mb-1">Your Road Maps</h2>
            <h1 className="text-3xl font-bold text-[#213555] mb-2">DevOps</h1>
            <p className="text-sm text-gray-600 mb-1">Next target: Overview</p>
            {/* GANTI <a> ke <Link> */}
            <Link
              href="/dashboard" // Arahkan ke dashboard
              className="text-blue-600 text-sm underline hover:text-blue-800"
            >
              Go Calculate Roadmap
            </Link>
          </div>
          <div className="text-right">
            <p className="text-4xl font-bold text-[#213555]">40%</p>
            <p className="text-xs text-gray-500">40 OF 100 DONE</p>
          </div>
        </div>
      </div>

      {/* Search Input (Telah dihapus) */}

      {/* === Start Learning Section === */}
      <div className="flex items-center gap-4 py-4">
        {" "}
        {/* Tambahkan py-4 untuk spacing */}
        <span className="text-xl font-semibold text-black flex-shrink-0">
          Start Learning
        </span>
        <div className="flex-1 h-px bg-black"></div>
      </div>

      {/* === Learning Cards Grid === */}
      <div className="space-y-12">
        {" "}
        {/* Jarak antar bagian Fundamental/Intermediate/Advanced */}
        {/* Fundamental Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#213555] mb-6">
            Fundamental
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {learningData.fundamental.map((card) => (
              // BUNGKUS LearningCard dengan <Link>
              <Link href={card.href || "#"} key={card.id}>
                <LearningCard {...card} />
              </Link>
            ))}
          </div>
        </div>
        {/* Intermediate Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#213555] mb-6">
            Intermediate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {learningData.intermediate.map((card) => (
              // BUNGKUS LearningCard dengan <Link>
              <Link href={card.href || "#"} key={card.id}>
                <LearningCard {...card} />
              </Link>
            ))}
          </div>
        </div>
        {/* Advanced Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#213555] mb-6">Advanced</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {learningData.advanced.map((card) => (
              // BUNGKUS LearningCard dengan <Link>
              <Link href={card.href || "#"} key={card.id}>
                <LearningCard {...card} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}