"use client";

import { Search } from "lucide-react";

interface YourRoadmapsProps {
  selectedRoadmap: string;
}

const roadmapData = {
  devops: {
    name: "DevOps",
    nextTarget: "Operating system",
    progress: 40,
    total: 100,
  },
  frontend: {
    name: "Frontend",
    nextTarget: "JavaScript Fundamentals",
    progress: 55,
    total: 100,
  },
  backend: {
    name: "Backend",
    nextTarget: "Database Design",
    progress: 35,
    total: 100,
  },
};

export default function YourRoadmaps({ selectedRoadmap }: YourRoadmapsProps) {
  const roadmap = roadmapData[selectedRoadmap as keyof typeof roadmapData];

  return (
    <div className="px-6 py-8 bg-card border-b border-border">
      <div className="max-w-5xl flex gap-6">
        {/* Road Map Card */}
        <div className="flex-1 border-2 border-foreground rounded-xl p-6 bg-card">
          <h3 className="text-sm font-semibold text-foreground mb-1">
            Your Road Maps
          </h3>
          <h2 className="text-3xl font-bold text-foreground mb-6">
            {roadmap.name}
          </h2>
          <p className="text-sm text-muted-foreground mb-2">
            <span className="text-primary font-medium">Next target</span>{" "}
            {roadmap.nextTarget}
          </p>
        </div>

        {/* Progress Display */}
        <div className="w-48 border-2 border-foreground rounded-xl p-6 bg-card flex flex-col justify-center items-end">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-1">
              {roadmap.progress}%
            </div>
            <p className="text-xs text-muted-foreground">
              {roadmap.progress} of {roadmap.total} Done
            </p>
          </div>
        </div>
      </div>

      {/* Search Box */}
      <div className="max-w-5xl mt-6">
        <div className="relative">
          <input
            type="text"
            placeholder={`Know More About ${roadmap.name}`}
            className="w-full px-4 py-3 border-2 border-foreground rounded-xl bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
}
