// Simpan sebagai: app/course/page.tsx
import Header from "@/components/header";
import Footer from "@/components/footer";
import OngoingCourseCard from "@/components/OngoingCourseCard"; // Komponen baru
import AvailableCourseCard from "@/components/AvailableCourseCard"; // Komponen baru

export default function CoursePage() {
  // Data dummy untuk On-going Courses (sesuai desain, ada 2)
  const ongoingCourses = [
    {
      roadmapName: "DevOps",
      nextTarget: "Operating system",
      progress: 40,
      total: 100,
    },
    {
      roadmapName: "DevOps",
      nextTarget: "Operating system",
      progress: 40,
      total: 100,
    },
  ];

  // Data dummy untuk Available Courses
  const availableCourses = [
    {
      title: "Web development",
      description:
        "Web development is the process of building websites and web apps that live on the internet. It involves front-end, back-end, or full-stack development...",
      lessons: 200,
      href: "/dashboard", // Dari sini baru ke dashboard
    },
    {
      title: "Data Science",
      description:
        "Data science helps us make informed decisions. Taking a data-driven approach means you're able to realize what you can produce every day...",
      lessons: 200,
      href: "/dashboard",
    },
    {
      title: "Web Design",
      description:
        "Our web design courses will help you build beautiful, responsive websites. Learn user experience (UX), user interface (UI) design, navigation design, and more...",
      lessons: 200,
      href: "/dashboard",
    },
    {
      title: "AI",
      description:
        "Artificial intelligence (AI) allows computers and other machines to accomplish tasks associated with the human mind – like problem-solving and decision-making.",
      lessons: 200,
      href: "/dashboard",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f3ec] text-black flex flex-col">
      <Header />

      {/* Wrapper Konten Utama */}
      <div className="flex-1 w-full max-w-6xl mx-auto py-12 px-6">
        {/* Bagian On-going Course */}
        <h2 className="text-3xl font-bold text-black mb-6">On-going Course</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {ongoingCourses.map((course, index) => (
            <OngoingCourseCard
              key={index}
              roadmapName={course.roadmapName}
              nextTarget={course.nextTarget}
              progress={course.progress}
              total={course.total}
            />
          ))}
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