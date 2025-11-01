// Lokasi: components/roadmap-personalization.tsx
"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { useUserProgress } from "@/context/UserProgressContext";
// --- PERBAIKI JALUR IMPORT DI SINI ---
import RoadmapProgressCard from "@/components/RoadmapProgressCard";

export default function RoadmapPersonalization() {
  const [searchQuery, setSearchQuery] = useState("");
  const { completedItems, toggleItem } = useUserProgress();

  const roadmapData = {
    fundamentals: [
      { id: "f1", title: "Git (Version Control)", description: "Learn basic commands..." },
      { id: "f2", title: "Linux & Shell Scripting", description: "Master the terminal..." },
      { id: "f3", title: "Networking Basics", description: "Understand TCP/IP, DNS..." },
    ],
    intermediate: [
      { id: "i1", title: "Containerization (Docker)", description: "Build, manage, and run..." },
      { id: "i2", title: "CI/CD Pipelines (GitHub Actions)", description: "Automate your build..." },
      { id: "i3", title: "Infrastructure as Code (Terraform)", description: "Define and provision..." },
    ],
    advanced: [
      { id: "a1", title: "Orchestration (Kubernetes)", description: "Manage containerized apps..." },
      { id: "a2", title: "Monitoring (Prometheus)", description: "Collect and query metrics..." },
      { id: "a3", title: "Visualization (Grafana)", description: "Create dashboards..." },
    ],
  };

  return (
    <div className="flex-1 p-6 space-y-6">
      <button className="w-full bg-[#213555] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1a2a44] transition-colors">
        Change Your Course
      </button>

      {/* Ganti kartu statis dengan komponen dinamis baru */}
      <RoadmapProgressCard />

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Know More About DevOps"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#213555]"
        />
      </div>

      {/* Roadmaps Section */}
      <div className="bg-white border-2 border-black rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-[#213555] mb-6">Roadmaps</h2>

        {/* Fundamentals */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Fundamentals</h3>
          <div className="grid grid-cols-3 gap-4">
            {roadmapData.fundamentals.map((item) => (
              <div
                key={item.id}
                className="border border-gray-300 rounded-lg p-4 hover:border-[#213555] hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-2 mb-2">
                  <input
                    type="checkbox"
                    id={item.id}
                    className="mt-1 w-4 h-4 accent-[#213555] cursor-pointer"
                    checked={completedItems.has(item.id)}
                    onChange={() => toggleItem(item.id)}
                  />
                  <label htmlFor={item.id} className="cursor-pointer">
                    <h4 className="font-semibold text-sm text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">
                      {item.description}
                    </p>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Intermediate */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Intermediate</h3>
          <div className="grid grid-cols-3 gap-4">
            {roadmapData.intermediate.map((item) => (
              <div key={item.id} className="border border-gray-300 rounded-lg p-4 ...">
                <div className="flex items-start gap-2 mb-2">
                  <input
                    type="checkbox"
                    id={item.id}
                    className="mt-1 w-4 h-4 accent-[#213555] cursor-pointer"
                    checked={completedItems.has(item.id)}
                    onChange={() => toggleItem(item.id)}
                  />
                  <label htmlFor={item.id} className="cursor-pointer">
                    <h4 className="font-semibold text-sm text-gray-800">{item.title}</h4>
                    <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-3">Advanced</h3>
          <div className="grid grid-cols-3 gap-4">
            {roadmapData.advanced.map((item) => (
              <div key={item.id} className="border border-gray-300 rounded-lg p-4 ...">
                <div className="flex items-start gap-2 mb-2">
                  <input
                    type="checkbox"
                    id={item.id}
                    className="mt-1 w-4 h-4 accent-[#213555] cursor-pointer"
                    checked={completedItems.has(item.id)}
                    onChange={() => toggleItem(item.id)}
                  />
                  <label htmlFor={item.id} className="cursor-pointer">
                    <h4 className="font-semibold text-sm text-gray-800">{item.title}</h4>
                    <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}