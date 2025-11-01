// GANTI FILE: components/profile.tsx
"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Profile() {
  const { currentUser, updateProfile } = useAuth();

  // State lokal untuk form
  const [fullName, setFullName] = useState(currentUser?.fullName || "");
  const [status, setStatus] = useState(currentUser?.status || "");
  const [avatar, setAvatar] = useState(currentUser?.avatar || "");
  const [message, setMessage] = useState("");

  if (!currentUser) {
    return (
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-[#213555]">
          Please log in to view your profile.
        </h1>
      </div>
    );
  }

  // PERBAIKAN: Beri tipe 'e'
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      fullName,
      status,
      avatar,
    });
    setMessage("Profile updated successfully!");
  };

  return (
    <div className="flex-1 p-6 space-y-6">
      {/* Judul Halaman */}
      <div className="flex items-center gap-4 py-4">
        <span className="text-xl font-semibold text-black flex-shrink-0">
          Your Profile
        </span>
        <div className="flex-1 h-px bg-black"></div>
      </div>

      {/* Konten Form */}
      <div className="bg-white border-2 border-black rounded-xl shadow-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {message && <p className="text-sm text-green-600">{message}</p>}

          {/* Avatar */}
          <div className="flex items-center gap-4">
            <Image
              src={avatar || "/default/default_profile.png"}
              alt="Avatar"
              width={80}
              height={80}
              className="rounded-full border-2 border-black object-cover"
            />
            <div className="flex-1">
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700"
              >
                Avatar URL
              </label>
              <Input
                id="avatar"
                type="text"
                value={avatar}
                // PERBAIKAN: Beri tipe 'e'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setAvatar(e.target.value)
                }
                placeholder="/default/default_profile.png"
                className="mt-1"
              />
            </div>
          </div>

          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <Input
              id="fullName"
              type="text"
              value={fullName}
              // PERBAIKAN: Beri tipe 'e'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFullName(e.target.value)
              }
              className="mt-1"
            />
          </div>

          {/* Status */}
          <div>
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Status (e.g., Student, Developer)
            </label>
            <Input
              id="status"
              type="text"
              value={status}
              // PERBAIKAN: Beri tipe 'e'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setStatus(e.target.value)
              }
              className="mt-1"
            />
          </div>

          {/* Email (Read-only) */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email (Cannot be changed)
            </label>
            <Input
              id="email"
              type="email"
              value={currentUser.email}
              disabled
              className="mt-1 bg-gray-100"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#213555] text-white hover:bg-[#1a2a44] py-2"
          >
            Save Changes
          </Button>
        </form>
      </div>
    </div>
  );
}