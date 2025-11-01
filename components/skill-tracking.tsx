"use client";

import React from "react";
import { useState } from "react";
// Impor 'LearningCard' dan 'Search' tidak lagi diperlukan

export default function SkillTracking() {
  // Data dummy untuk progress skill (ganti dengan data asli Anda)
  const skillData = [
    {
      id: "s1",
      name: "Version Control (Git)",
      progress: 90,
      level: "Advanced",
    },
    {
      id: "s2",
      name: "Repo Hosting (GitHub)",
      progress: 75,
      level: "Intermediate",
    },
    {
      id: "s3",
      name: "Networking Protocols",
      progress: 40,
      level: "Fundamental",
    },
    {
      id: "s4",
      name: "CI/CD Pipelines",
      progress: 55,
      level: "Intermediate",
    },
    {
      id: "s5",
      name: "Containerization (Docker)",
      progress: 65,
      level: "Intermediate",
    },
    {
      id: "s6",
      name: "Orchestration (Kubernetes)",
      progress: 20,
      level: "Fundamental",
    },
  ];

  return (
    <div className="flex-1 p-6 space-y-6">
      {/* Change Your Course Button (Elemen yang Digunakan Kembali) */}
      <button className="w-full bg-[#213555] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1a2a44] transition-colors">
        Change Your Course
      </button>

      {/* Your Road Maps Card (Elemen yang Digunakan Kembali) */}
      <div className="bg-white border-2 border-black rounded-xl shadow-lg p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-sm text-gray-600 mb-1">Your Road Maps</h2>
            <h1 className="text-3xl font-bold text-[#213555] mb-2">DevOps</h1>
            <p className="text-sm text-gray-600 mb-1">Next target: Overview</p>
            <a
              href="#"
              className="text-blue-600 text-sm underline hover:text-blue-800"
            >
              Go Calculate Roadmap
            </a>
          </div>
          <div className="text-right">
            <p className="text-4xl font-bold text-[#213555]">40%</p>
            <p className="text-xs text-gray-500">40 OF 100 DONE</p>
          </div>
        </div>
      </div>

      {/* === Your Skills Section (Konten Baru) === */}
      <div className="flex items-center gap-4 py-4">
        <span className="text-xl font-semibold text-black flex-shrink-0">
          Your Skills
        </span>
        <div className="flex-1 h-px bg-black"></div>
      </div>

      {/* === Skills Progress List (Konten Baru) === */}
      <div className="bg-white border-2 border-black rounded-xl shadow-lg p-6">
        <div className="space-y-6">
          {skillData.map((skill) => (
            <div key={skill.id}>
              {/* Skill Label + Percentage */}
              <div className="flex justify-between items-end mb-1">
                <span className="text-base font-medium text-gray-800">
                  {skill.name}
                </span>
                <span className="text-sm font-bold text-[#213555]">
                  {skill.progress}%
                </span>
              </div>

              {/* Progress Bar Background */}
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                {/* Progress Bar Foreground */}
                <div
                  className="bg-[#213555] h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${skill.progress}%` }} // Lebar dinamis berdasarkan progress
                ></div>
              </div>

              {/* Skill Level (Opsional) */}
              <p className="text-xs text-gray-500 mt-1">Level: {skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
