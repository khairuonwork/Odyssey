// BUAT FILE BARU/GANTI: context/Providers.tsx
"use client";

import { UserProgressProvider } from "./UserProgressContext";
import { AuthProvider } from "./AuthContext"; // Impor AuthProvider
import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  // AuthProvider harus membungkus UserProgressProvider
  return (
    <AuthProvider>
      <UserProgressProvider>{children}</UserProgressProvider>
    </AuthProvider>
  );
}