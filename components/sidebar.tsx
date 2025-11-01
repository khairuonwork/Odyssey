"use client";

import { LayoutDashboard, BookOpen, Target, FolderOpen } from "lucide-react";

// Tentukan tipe untuk props yang diterima dari app/dashboard/page.tsx
type ActiveView = "dashboard" | "learning" | "tracking" | "projects";

interface SidebarProps {
  activeView: ActiveView; // State yang sedang aktif
  onNavClick: (view: ActiveView) => void; // Fungsi untuk mengubah state
}

// TERIMA props activeView dan onNavClick
export default function Sidebar({ activeView, onNavClick }: SidebarProps) {
  const menuItems = [
    // TAMBAHKAN properti 'view' untuk identifikasi state
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      view: "dashboard" as ActiveView,
    },
    {
      icon: BookOpen,
      label: "Learning Material",
      view: "learning" as ActiveView,
    },
    {
      icon: Target,
      label: "Skill tracking",
      view: "tracking" as ActiveView,
    },
    {
      icon: FolderOpen,
      label: "Projects",
      view: "projects" as ActiveView,
    },
  ];

  return (
    <aside className="w-56 top-20 h-fit ml-6 mt-6">
      <div className="bg-white border-2 border-black rounded-xl shadow-lg p-6">
        <h3 className="text-base font-bold text-[#213555] mb-4">
          Your Control
        </h3>
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              // GANTI <a> menjadi <button>
              // TAMBAHKAN onClick untuk mengubah state di page.tsx
              <button
                key={item.label}
                onClick={() => onNavClick(item.view)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-[#F5EFE7] transition-colors group w-full" // w-full agar tombolnya selebar kontainer
              >
                <Icon className="w-5 h-5 text-gray-600 group-hover:text-[#213555]" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}