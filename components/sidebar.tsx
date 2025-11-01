// Lokasi: components/sidebar.tsx
"use client";

// 1. Hapus 'User' dari impor
import { LayoutDashboard, BookOpen, Target, FolderOpen } from "lucide-react";

// 2. Hapus 'profile' dari tipe
type ActiveView = "dashboard" | "learning" | "tracking" | "projects";

interface SidebarProps {
  activeView: ActiveView;
  onNavClick: (view: ActiveView) => void;
}

export default function Sidebar({ activeView, onNavClick }: SidebarProps) {
  const menuItems = [
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
    // 3. Hapus item menu 'Profile' dari sini
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
            const isActive = activeView === item.view;

            return (
              <button
                key={item.label}
                onClick={() => onNavClick(item.view)}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-[#F5EFE7] transition-colors group w-full text-left
                  ${isActive ? "bg-[#F5EFE7]" : ""} 
                `}
              >
                <Icon
                  className={`
                    w-5 h-5 text-gray-600 group-hover:text-[#213555]
                    ${isActive ? "text-[#213555]" : ""}
                  `}
                />
                <span
                  className={`
                    text-sm font-medium
                    ${isActive ? "font-bold text-[#213555]" : ""}
                  `}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}