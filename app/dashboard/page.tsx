"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar"; // Pastikan path ini benar

import Dashboard from "@/components/roadmap-personalization";
import LearningMaterial from "@/components/learning-material";
import SkillTracking from "@/components/skill-tracking";
import Projects from "@/components/projects";

// Tentukan tipe untuk view agar lebih aman
type ActiveView = "dashboard" | "learning" | "tracking" | "projects";

export default function Home() {
  // Gunakan state untuk melacak tombol/view yang aktif
  const [activeView, setActiveView] = useState<ActiveView>("dashboard");

  // Helper function untuk merender komponen yang benar
  const renderActiveView = () => {
    switch (activeView) {
      case "dashboard":
        return <Dashboard />;
      case "learning":
        return <LearningMaterial />;
      case "tracking":
        return <SkillTracking />;
      case "projects":
        return <Projects />;
      default:
        return <Dashboard />; // Default ke dashboard
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto flex gap-12 px-6 py-12">
        {/* Kirim state aktif dan fungsi untuk mengubahnya ke Sidebar.
          Saya ganti px-50 Anda ke px-6 agar konsisten dengan header.
        */}
        <Sidebar activeView={activeView} onNavClick={setActiveView} />

        {/* Main Content */}
        <div className="flex-1">
          {/* Render komponen berdasarkan state yang aktif */}
          {renderActiveView()}
        </div>
      </div>
      <Footer />
    </main>
  );
}
