"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar";
import RoadmapPersonalization from "@/components/roadmap-personalization";

export default function Home() {
  const [selectedRoadmap, setSelectedRoadmap] = useState("devops");

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto flex gap-12 px-50 py-12">
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1">
          <RoadmapPersonalization />
        </div>
      </div>
      <Footer />
    </main>
  );
}
