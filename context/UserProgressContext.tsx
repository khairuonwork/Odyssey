// BUAT FILE BARU: context/UserProgressContext.tsx
"use client";

import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { allLessonsData } from "@/lib/learningData";
import { useAuth } from "./AuthContext"; // Pastikan AuthContext.tsx juga ada

interface UserProgressContextType {
  completedItems: Set<string>;
  toggleItem: (itemId: string) => void;
  progressPercent: number;
}

const UserProgressContext = createContext<UserProgressContextType | undefined>(
  undefined
);

export function UserProgressProvider({ children }: { children: ReactNode }) {
  const { currentUser, updateProgress, isAuthenticated } = useAuth();

  // State 'completedItems' sekarang HANYA berasal dari currentUser
  const completedItems = new Set(currentUser?.progress || []);

  const toggleItem = (itemId: string) => {
    if (!isAuthenticated) return; // Jangan lakukan apa-apa jika tidak login

    const newSet = new Set(completedItems);
    if (newSet.has(itemId)) {
      newSet.delete(itemId);
    } else {
      newSet.add(itemId);
    }

    // Panggil 'updateProgress' dari AuthContext untuk menyimpan
    updateProgress(newSet);
  };

  // Pastikan Anda juga memiliki file 'lib/learningData.ts'
  // Jika tidak, ganti 'allLessonsData.length' dengan angka 9 untuk sementara
  const totalLessons = allLessonsData ? allLessonsData.length : 9;
  
  const progressPercent =
    totalLessons > 0
      ? Math.round((completedItems.size / totalLessons) * 100)
      : 0;

  return (
    <UserProgressContext.Provider
      value={{ completedItems, toggleItem, progressPercent }}
    >
      {children}
    </UserProgressContext.Provider>
  );
}

// Hook kustom
export function useUserProgress() {
  const context = useContext(UserProgressContext);
  if (!context) {
    throw new Error(
      "useUserProgress must be used within a UserProgressProvider"
    );
  }
  return context;
}