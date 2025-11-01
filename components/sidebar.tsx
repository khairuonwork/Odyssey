"use client";

import { LayoutDashboard, BookOpen, Target, FolderOpen } from "lucide-react";

export default function Sidebar() {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "#" },
    { icon: BookOpen, label: "Learning Material", href: "#" },
    { icon: Target, label: "Skill tracking", href: "#" },
    { icon: FolderOpen, label: "Projects", href: "#" },
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
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-[#F5EFE7] transition-colors group"
              >
                <Icon className="w-5 h-5 text-gray-600 group-hover:text-[#213555]" />
                <span className="text-sm font-medium">{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
