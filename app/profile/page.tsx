"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/header"; //
import Footer from "@/components/footer"; //
import { Button } from "@/components/ui/button"; //
import { Globe } from "lucide-react"; //

// State for the progress toggle
type ProgressView = "all" | "none";

export default function ProfilePage() {
  // BEST PRACTICE: Initialize all form fields with an empty string ""
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [headline, setHeadline] = useState("");
  const [username, setUsername] = useState("");
  const [showEmail, setShowEmail] = useState(true);
  const [progressView, setProgressView] = useState<ProgressView>("all");

  // Simulate fetching user data when the component mounts
  useEffect(() => {
    const fetchedData = {
      name: "Mirae Nakamura",
      email: "mirae.nakamura@email.com",
      headline: "Full Stack Developer",
      username: "mirae",
    };

    setName(fetchedData.name);
    setEmail(fetchedData.email);
    setHeadline(fetchedData.headline);
    setUsername(fetchedData.username);
  }, []); // The empty array [] means this runs only once

  return (
    <main className="min-h-screen bg-background text-black flex flex-col">
      <Header />

      {/* Content Section */}
      <section className="flex-1 py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Page Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[#213555]">
                Skill Profile
              </h1>
              <p className="text-gray-600 mt-1">
                Create your skill profile to showcase your skills.
              </p>
            </div>
            <Button
              variant="outline"
              className="border-2 border-black text-sm h-9"
            >
              <Globe className="w-4 h-4 mr-2" />
              Public
            </Button>
          </div>

          {/* Main Profile Card */}
          <div className="bg-white border-2 border-black rounded-xl shadow-lg p-6 md:p-10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Handle form submission logic here
                alert("Profile settings saved!");
              }}
            >
              {/* Profile Picture Section */}
              <div className="flex items-center gap-6 mb-8">
                <div className="relative w-24 h-24">
                  <Image
                    src="/default/default_profile.png" //
                    alt="Profile avatar"
                    width={100}
                    height={100}
                    className="rounded-full border-2 border-black object-cover"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    className="absolute bottom-0 right-0 h-7 text-xs px-2 border-2 border-black bg-white"
                  >
                    Edit
                  </Button>
                </div>
                <p className="text-sm text-gray-600">
                  Upload your profile picture
                </p>
              </div>

              {/* Form Fields */}
              <div className="space-y-6">
                {/* Full Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-800 mb-1.5"
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-4 pr-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#213555]"
                  />
                </div>

                {/* Email Field (Now Editable) */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-800 mb-1.5"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email} // <-- Controlled
                    onChange={(e) => setEmail(e.target.value)} // <-- Now editable
                    className="w-full pl-4 pr-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#213555]" // <-- Style matches other inputs
                  />
                  <div className="flex items-center justify-start mt-2">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="showEmail"
                        checked={showEmail}
                        onChange={(e) => setShowEmail(e.target.checked)}
                        className="h-4 w-4 accent-[#213555]"
                      />
                      <label
                        htmlFor="showEmail"
                        className="text-sm text-gray-700"
                      >
                        Show my email on profile
                      </label>
                    </div>
                    {/* Link removed as requested */}
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-gray-800 mb-1.5"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter a new password (optional)"
                    className="w-full pl-4 pr-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#213555]"
                  />
                </div>

                {/* Headline Field */}
                <div>
                  <label
                    htmlFor="headline"
                    className="block text-sm font-semibold text-gray-800 mb-1.5"
                  >
                    Headline
                  </label>
                  <input
                    type="text"
                    id="headline"
                    value={headline}
                    onChange={(e) => setHeadline(e.target.value)}
                    className="w-full pl-4 pr-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#213555]"
                  />
                </div>

                {/* Profile URL Field */}
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-semibold text-gray-800 mb-1.5"
                  >
                    Profile URL
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-4 py-3 border-2 border-r-0 border-black rounded-l-lg bg-gray-100 text-gray-600 text-sm">
                      odyssey.dev/u/
                    </span>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full pl-4 pr-4 py-3 border-2 border-black rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#213555] -ml-px"
                    />
                  </div>
                </div>

                {/* Roadmap Progress Section */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Which roadmap progresses do you want to show on your
                    profile?
                  </label>
                  <div className="flex gap-2 mb-3">
                    <Button
                      type="button"
                      variant={progressView === "all" ? "default" : "outline"}
                      onClick={() => setProgressView("all")}
                      className={
                        progressView === "all"
                          ? "bg-[#213555] text-white"
                          : "border-2 border-black text-black"
                      }
                    >
                      All Progress
                    </Button>
                    <Button
                      type="button"
                      variant={progressView === "none" ? "default" : "outline"}
                      onClick={() => setProgressView("none")}
                      className={
                        progressView === "none"
                          ? "bg-[#213555] text-white"
                          : "border-2 border-black text-black"
                      }
                    >
                      Hide my Progress
                    </Button>
                  </div>
                  <p className="text-sm text-gray-700">
                    Or select the roadmaps you want to show.
                  </p>
                  <div className="mt-3 bg-[#F5EFE7] border border-[#D4A574] text-[#213555] p-3 rounded-lg text-sm">
                    Update your progress on roadmaps to show your learning
                    activity.
                  </div>
                </div>
              </div>

              {/* Form Footer */}
              <div className="mt-10 pt-6 border-t border-gray-200 flex justify-end">
                <Button
                  type="submit"
                  className="bg-[#0f1e3b] text-white hover:bg-[#1e2a3a] px-8 py-3 text-base rounded-sm shadow-sm"
                >
                  Save Changes
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
