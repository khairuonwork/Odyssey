// Lokasi: app/video_feed/[slug]/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";
import { allLessonsData } from "@/lib/learningData";
import { notFound } from "next/navigation";
import { use } from "react";
import { useUserProgress } from "@/context/UserProgressContext";
import Link from "next/link";

export default function LessonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const router = useRouter();

  // "Buka" Promise
  const resolvedParams = use(params);

  // Ambil data dari Context
  const { completedItems, toggleItem } = useUserProgress();

  const lesson = allLessonsData.find(
    (item) => item.id === resolvedParams.slug
  );

  if (!lesson) {
    notFound();
  }

  // Tentukan pelajaran selanjutnya
  const currentIndex = allLessonsData.findIndex((l) => l.id === lesson.id);
  const nextLesson =
    currentIndex < allLessonsData.length - 1
      ? allLessonsData[currentIndex + 1]
      : null;

  // Cek apakah pelajaran ini sudah selesai
  const isCompleted = completedItems.has(lesson.id);

  const videoSrc = `https://www.youtube.com/embed/${lesson.youtubeId}`;

  return (
    <main className="min-h-screen bg-[#f7f3ec] text-black flex flex-col">
      <Header />

      <section className="flex-1 py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Button
            variant="outline"
            className="border border-[#1e1e1e] text-[#1e1e1e] rounded-md px-6 py-2 mb-10 hover:bg-[#1e1e1e] hover:text-white transition-colors"
            onClick={() => router.back()}
          >
            Back to previously
          </Button>

          <div className="border border-[#1e1e1e] rounded-md bg-white p-8">
            <h1 className="text-3xl font-bold mb-6 text-[#1e1e1e]">
              {lesson.title}
            </h1>
            <div className="bg-gray-300 rounded-md w-full aspect-video overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={videoSrc}
                title={`YouTube video player for ${lesson.title}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Tombol Aksi di Bawah Video */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => toggleItem(lesson.id)}
              className={`
                flex-1 py-3 px-6 rounded-lg font-semibold text-white transition-colors
                ${
                  isCompleted
                    ? "bg-gray-500 hover:bg-gray-600"
                    : "bg-[#213555] hover:bg-[#1a2a44]"
                }
              `}
            >
              {isCompleted ? "Mark as Incomplete" : "Mark as Complete"}
            </Button>

            {nextLesson && (
              <Button asChild className="flex-1" variant="outline">
                <Link
                  href={`/video_feed/${nextLesson.id}`}
                  className="py-3 px-6 rounded-lg font-semibold border-2 border-[#213555] text-[#213555] hover:bg-[#f5efe7]"
                >
                  Next Lesson: {nextLesson.title}
                </Link>
              </Button>
            )}
          </div>

          <h2 className="text-[25px] font-semibold mt-8">
            What is {lesson.title} Use for ?
          </h2>
          <p className="text-justify">{lesson.longDescription}</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}