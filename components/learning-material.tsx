// Lokasi: components/learning-material.tsx
"use client";

import React from "react";
import Link from "next/link";
import LearningCard from "@/components/learning-card";
import { allLessonsData } from "@/lib/learningData";
import RoadmapProgressCard from "@/components/RoadmapProgressCard";

export default function LearningMaterial() {
  const learningData = {
    fundamental: allLessonsData.filter((l) => l.id.startsWith("f")),
    intermediate: allLessonsData.filter((l) => l.id.startsWith("i")),
    advanced: allLessonsData.filter((l) => l.id.startsWith("a")),
  };

  return (
    <div className="flex-1 p-6 space-y-6">
      <Link
        href="/"
        className="block w-full text-center bg-[#213555] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1a2a44] transition-colors"
      >
        Change Your Course
      </Link>

      <RoadmapProgressCard />

      <div className="flex items-center gap-4 py-4">
        <span className="text-xl font-semibold text-black flex-shrink-0">
          Start Learning
        </span>
        <div className="flex-1 h-px bg-black"></div>
      </div>

      <div className="space-y-12">
        {/* Fundamental Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#213555] mb-6">
            Fundamental
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {learningData.fundamental.map((card) => (
              <Link href={`/video_feed/${card.id}`} key={card.id}>
                <LearningCard
                  type={card.type}
                  title={card.title}
                  description={card.description}
                  videos={card.videos}
                  tests={card.tests}
                  hours={card.hours}
                />
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
              <Link href={`/video_feed/${card.id}`} key={card.id}>
                <LearningCard
                  type={card.type}
                  title={card.title}
                  description={card.description}
                  videos={card.videos}
                  tests={card.tests}
                  hours={card.hours}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Advanced Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#213555] mb-6">Advanced</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {learningData.advanced.map((card) => (
              <Link href={`/video_feed/${card.id}`} key={card.id}>
                <LearningCard
                  type={card.type}
                  title={card.title}
                  description={card.description}
                  videos={card.videos}
                  tests={card.tests}
                  hours={card.hours}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}