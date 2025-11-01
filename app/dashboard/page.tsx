// Lokasi: app/dashboard/page.tsx
"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar"; // Sidebar di-impor di SINI
import Dashboard from "@/components/roadmap-personalization";
import LearningMaterial from "@/components/learning-material";
import SkillTracking from "@/components/skill-tracking";
import Projects from "@/components/projects";
import Profile from "@/components/profile";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

type ActiveView = "dashboard" | "learning" | "tracking" | "projects" | "profile";

export default function Home() {
  const [activeView, setActiveView] = useState<ActiveView>("dashboard");

  // --- Auth Guard ---
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Jika auth belum siap, atau jika user tidak terautentikasi, redirect
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);
  // --------------------

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
      case "profile":
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  // --- Ini adalah penyebab halaman kosong ---
  // Jika tidak terautentikasi, render 'null' selagi menunggu redirect
  if (!isAuthenticated) {
    return null;
  }

  // --- Jika Lolos Auth Guard ---
  // Tampilkan seluruh halaman, TERMASUK Sidebar
  return (
    <main className="min-h-screen">
      <Header onProfileClick={() => setActiveView("profile")} />

      <div className="max-w-6xl mx-auto flex gap-12 px-6 py-12">
        {/* Sidebar HARUS berada di dalam 'page.tsx' ini */}
        <Sidebar activeView={activeView} onNavClick={setActiveView} />
        <div className="flex-1">{renderActiveView()}</div>
      </div>
      <Footer />
    </main>
  );
}