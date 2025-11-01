"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export default function RoadmapPersonalization() {
  const [searchQuery, setSearchQuery] = useState("");

  const roadmapData = {
    fundamentals: [
      {
        title: "Learn a programming Language",
        description: "For Beginner, Python is often recommended",
      },
      {
        title: "Operating system",
        description:
          "Understand OS basics and manage various file systems and OS...",
      },
      {
        title: "Terminal Knowledge",
        description: "Learn bash basic and common commands and how editor...",
      },
    ],
    intermediate: [
      {
        title: "Learn a programming Language",
        description: "For Beginner, Python is often recommended",
      },
      {
        title: "Operating system",
        description:
          "Understand OS basics and manage various file systems and OS...",
      },
      {
        title: "Terminal Knowledge",
        description: "Complex system (CLI) and command line interface tools",
      },
    ],
    advanced: [
      {
        title: "Learn a programming Language",
        description: "For Beginner, Python is often recommended",
      },
      {
        title: "Operating system",
        description:
          "Understand OS basics and manage various file systems and OS...",
      },
      {
        title: "Terminal Knowledge",
        description: "Use Bash, administrate (advanced) and shell scripting",
      },
    ],
  };

  return (
    <div className="flex-1 p-6 space-y-6">
      {/* Change Your Course Button */}
      <button className="w-full bg-[#213555] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1a2a44] transition-colors">
        Change Your Course
      </button>

      {/* Your Road Maps Card */}
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
            {roadmapData.fundamentals.map((item, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg p-4 hover:border-[#213555] hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-start gap-2 mb-2">
                  <input
                    type="radio"
                    name="fundamentals"
                    className="mt-1 w-4 h-4 accent-[#213555]"
                  />
                  <div>
                    <h4 className="font-semibold text-sm text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Intermediate */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Intermediate</h3>
          <div className="grid grid-cols-3 gap-4">
            {roadmapData.intermediate.map((item, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg p-4 hover:border-[#213555] hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-start gap-2 mb-2">
                  <input
                    type="radio"
                    name="intermediate"
                    className="mt-1 w-4 h-4 accent-[#213555]"
                  />
                  <div>
                    <h4 className="font-semibold text-sm text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-3">Advanced</h3>
          <div className="grid grid-cols-3 gap-4">
            {roadmapData.advanced.map((item, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg p-4 hover:border-[#213555] hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-start gap-2 mb-2">
                  <input
                    type="radio"
                    name="advanced"
                    className="mt-1 w-4 h-4 accent-[#213555]"
                  />
                  <div>
                    <h4 className="font-semibold text-sm text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
