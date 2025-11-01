// Lokasi: app/course/page.tsx
"use client"; // 1. Tambahkan "use client"

import Header from "@/components/header";
import Footer from "@/components/footer";
import OngoingCourseCard from "@/components/OngoingCourseCard";
import AvailableCourseCard from "@/components/AvailableCourseCard";
import { useUserProgress } from "@/context/UserProgressContext"; // 2. Impor hook progres
import { allLessonsData } from "@/lib/learningData"; // 3. Impor data pelajaran
import { useAuth } from "@/context/AuthContext"; // 4. Impor hook auth
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CoursePage() {
  // 5. Ambil data progres dinamis dari Context
  const { progressPercent, completedItems } = useUserProgress();
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  // 6. Proteksi halaman, jika belum login, lempar ke /login
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  // Dapatkan total pelajaran dari data kita
  const totalLessons = allLessonsData.length;

  // 7. Buat data untuk "On-going Course" secara dinamis
  // Karena kita hanya punya 1 roadmap (DevOps), kita tampilkan 1 kartu
  const ongoingCourse = {
    roadmapName: "DevOps",
    nextTarget: "Operating system", // Ini bisa kita buat lebih dinamis nanti
    progressPercent: progressPercent,
    completedCount: completedItems.size,
    totalCount: totalLessons,
  };

  // Data dummy untuk "Available Course" (sesuai desain Anda)
  const availableCourses = [
    {
      title: "Web development",
      description:
        "Web development is the process of building websites and web apps that live on the internet. It involves front-end, back-end, or full-stack development...",
      lessons: 200,
      href: "#", // Belum ada, jadi non-aktifkan
    },
    {
      title: "Data Science",
      description:
        "Data science helps us make informed decisions. Taking a data-driven approach means you're able to realize what you can produce every day...",
      lessons: 200,
      href: "#",
    },
    {
      title: "Web Design",
      description:
        "Our web design courses will help you build beautiful, responsive websites. Learn user experience (UX), user interface (UI) design, navigation design, and more...",
      lessons: 200,
      href: "#",
    },
    {
      title: "AI",
      description:
        "Artificial intelligence (AI) allows computers and other machines to accomplish tasks associated with the human mind – like problem-solving and decision-making.",
      lessons: 200,
      href: "#",
    },
  ];

  // Tampilkan 'null' selagi redirect
  if (!isAuthenticated) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#f7f3ec] text-black flex flex-col">
      <Header />

      {/* Wrapper Konten Utama */}
      <div className="flex-1 w-full max-w-6xl mx-auto py-12 px-6">
        {/* Bagian On-going Course */}
        <h2 className="text-3xl font-bold text-black mb-6">On-going Course</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* 8. Render kartu "On-going Course" dengan data dinamis
            (Desain Anda ada 2 kartu, tapi secara logis 
             kita hanya tampilkan 1 course yang sedang diikuti)
          */}
          <OngoingCourseCard
            key={ongoingCourse.roadmapName}
            roadmapName={ongoingCourse.roadmapName}
            nextTarget={ongoingCourse.nextTarget}
            progressPercent={ongoingCourse.progressPercent}
            completedCount={ongoingCourse.completedCount}
            totalCount={ongoingCourse.totalCount}
          />
        </div>

        {/* Bagian Available Course */}
        <h2 className="text-3xl font-bold text-black mb-6">Available Course</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {availableCourses.map((course) => (
            <AvailableCourseCard
              key={course.title}
              title={course.title}
              description={course.description}
              lessons={course.lessons}
              href={course.href}
            />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}