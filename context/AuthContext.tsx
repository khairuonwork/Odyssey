// BUAT FILE BARU: context/AuthContext.tsx
"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Struktur data
interface User {
  email: string;
  fullName: string;
  status: string;
  avatar: string;
  password: string; 
  progress: string[]; 
}

interface AppData {
  users: Record<string, User>; 
  currentUserEmail: string | null; 
}

interface AuthContextType {
  currentUser: User | null;
  isAuthenticated: boolean;
  login: (email: string, pass: string) => boolean;
  register: (fullName: string, email: string, pass: string) => boolean;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
  updateProgress: (newProgress: Set<string>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = "odysseyAppData";

// Struktur data kosong sebagai default awal
const getInitialDataStructure = (): AppData => ({
  users: {},
  currentUserEmail: null,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [appData, setAppData] = useState<AppData>(() =>
    getInitialDataStructure()
  );
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true); 

  // Logika untuk memuat data
  useEffect(() => {
    async function loadData() {
      const storedData = localStorage.getItem(STORAGE_KEY);
      let data: AppData;

      if (storedData) {
        // 1. Data ditemukan di LocalStorage, gunakan itu.
        data = JSON.parse(storedData);
      } else {
        // 2. Tidak ada, fetch dari file public/db.json
        try {
          console.log("Fetching default database...");
          const response = await fetch("/db.json"); // Ambil dari folder /public
          if (!response.ok) throw new Error("db.json not found");
          data = await response.json();
          // Simpan data default ini ke LocalStorage untuk sesi berikutnya
          localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (err) {
          console.error("Failed to fetch default db.json:", err);
          data = getInitialDataStructure(); // Fallback ke data kosong
        }
      }

      setAppData(data);
      if (data.currentUserEmail && data.users[data.currentUserEmail]) {
        setCurrentUser(data.users[data.currentUserEmail]);
      }
      setIsLoading(false); // Selesai loading
    }

    loadData();
  }, []); 

  // Fungsi untuk menyimpan perubahan ke state dan LocalStorage
  const updateStorage = (newData: AppData) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    setAppData(newData);
    if (newData.currentUserEmail) {
      setCurrentUser(newData.users[newData.currentUserEmail] || null);
    } else {
      setCurrentUser(null);
    }
  };

  const login = (email: string, pass: string): boolean => {
    if (isLoading) return false; 
    const user = appData.users[email];
    if (user && user.password === pass) {
      updateStorage({ ...appData, currentUserEmail: user.email });
      return true;
    }
    return false;
  };

  const register = (
    fullName: string,
    email: string,
    pass: string
  ): boolean => {
    if (isLoading) return false;
    if (appData.users[email]) {
      return false; // User sudah ada
    }
    const newUser: User = {
      email,
      fullName,
      password: pass,
      status: "Student",
      avatar: "/default/default_profile.png",
      progress: [], // Progres kosong untuk user baru
    };

    const newUsers = { ...appData.users, [email]: newUser };
    updateStorage({ users: newUsers, currentUserEmail: email });
    return true;
  };

  const logout = () => {
    updateStorage({ ...appData, currentUserEmail: null });
  };

  const updateProfile = (data: Partial<User>) => {
    if (!currentUser) return;
    const updatedUser = { ...currentUser, ...data };
    const newUsers = { ...appData.users, [currentUser.email]: updatedUser };
    updateStorage({ ...appData, users: newUsers });
  };

  const updateProgress = (newProgress: Set<string>) => {
    if (!currentUser) return;
    const updatedUser = {
      ...currentUser,
      progress: Array.from(newProgress),
    };
    const newUsers = { ...appData.users, [currentUser.email]: updatedUser };
    updateStorage({ ...appData, users: newUsers });
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7f3ec]">
        <p className="text-xl font-bold text-[#213555]">Loading Odyssey...</p>
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAuthenticated: !!currentUser,
        login,
        register,
        logout,
        updateProfile,
        updateProgress,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Hook kustom
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}