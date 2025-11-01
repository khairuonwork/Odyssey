import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  const roadmaps = [
    { id: 1, role: "Front-End" },
    { id: 2, role: "Back-End" },
    { id: 3, role: "DevOps" },
    { id: 4, role: "FullStack" },
    { id: 5, role: "Machine Learning" },
    { id: 6, role: "Artificial Intelligence" },
    { id: 7, role: "Production Management" },
    { id: 8, role: "CyberSecurity" },
    { id: 9, role: "Network Engineer" },
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 border border-black rounded-lg">
        {" "}
        {/* <-- Perubahan di sini */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 text-balance">
                One Place To learn Many
              </h1>
              <p className="text-lg text-black mb-8">
                A Online solution to improve your skills
              </p>
              <Button className="bg-primary text-primary-black hover:bg-primary/90 px-8 py-6 text-base">
                See Courses
              </Button>
            </div>

            {/* Right Illustration */}
            <div className="flex-1">
              <img
                src="/laptop-with-books-and-design-elements-illustration.jpg"
                alt="Learning illustration"
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="px-6 py-16 md:py-24 bg-accent/5">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
              See our best course with road maps
            </h2>
          </div>

          {/* Role Based Roadmaps Label */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex-1 h-px bg-border"></div>
            <span className="text-black font-medium text-sm">
              Role Based Roadmaps
            </span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          {/* Roadmap Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {roadmaps.map((roadmap) => (
              <div
                key={roadmap.id}
                className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="bg-primary text-primary-black px-3 py-1 rounded inline-block text-sm font-medium">
                  {roadmap.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Quote Section */}
          <div className="text-center mb-16">
            <blockquote className="text-2xl md:text-3xl font-semibold text-black mb-4 italic">
              "Familiarity with your craft is everything"
            </blockquote>
            <p className="text-black">Ralph Waldo Emerson</p>
          </div>

          {/* Content Grid */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Illustration */}
            <div className="flex-1">
              <img
                src="/person-sitting-on-books-with-laptop-illustration.jpg"
                alt="Learning person illustration"
                className="w-full max-w-md"
              />
            </div>

            {/* Right Content Cards */}
            <div className="flex-1 space-y-6">
              <h3 className="text-2xl font-bold text-black">Lorem Ipsum</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-muted rounded-lg h-48"></div>
                <div className="bg-muted rounded-lg h-48"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
