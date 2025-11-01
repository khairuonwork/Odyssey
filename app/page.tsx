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
    { id: 9, role: "Networking" },
    { id: 10, role: "Marketing" },
    { id: 11, role: "Mineral Water" },
    { id: 12, role: "Aqua" },

  ];

  return (
    <main className="min-h-screen bg-[#f7f3ec] text-black">
      <Header />

      {/* Hero Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto border border-[#1e1e1e] rounded-md bg-white p-10 md:p-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">

            {/* Left content */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1e1e1e] mb-4">
                One Place To learn Many
              </h1>
              <p className="text-lg text-[#1e1e1e] mb-8">
                A Online solution to Improve your skills
              </p>
              <Button className="bg-[#0f1e3b] text-white hover:bg-[#1e2a3a] px-8 py-3 text-base rounded-sm shadow-sm">
                See Courses
              </Button>
            </div>

            {/* Right image */}
            <div className="flex-1 flex justify-center">
              <img
                  src="/homepage/homepage_1.png"
                  alt="Learning illustration"
                  className="w-full max-w-sm md:max-w-md object-contain"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Courses Section */}
      {/* Courses Section (Roadmaps) */}
      <section className="bg-[#f2ece5] py-[100px]">
        <div className="container mx-auto px-6">
          {/* Title */}
          <h2 className="text-[64px] font-semibold text-center mb-[80px] text-[#1e1e1e]">
            See our best course with road maps
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-[10px] mb-[66px]">
            <hr className="flex-grow border-t-[3px] border-[#1e1e1e]" />
            <span className="text-[32px] font-semibold text-[#1e2a3a] whitespace-nowrap">
        Role-Based RoadMaps
      </span>
            <hr className="flex-grow border-t-[3px] border-[#1e1e1e]" />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-4 gap-x-[80px] gap-y-[33px] max-w-6xl mx-auto">
            {roadmaps.map((r) => (
                <div
                    key={r.id}
                    className="flex justify-between items-center px-[30px] py-[24px] bg-[#1e2a3a] border-[3px] border-[#1e1e1e] rounded-[15px] cursor-pointer transition-transform hover:scale-105 text-center"
                >
                  <span className="text-[24px] font-semibold text-white">{r.role}</span>

                </div>
            ))}
          </div>
        </div>
      </section>



      {/* Testimonial Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <blockquote className="text-3xl font-semibold text-black italic">
            “ Familiarity with your craft is everything ”
          </blockquote>
          <p className="text-gray-700 mt-2">- Ralph Waldo Emerson -</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 justify-center">
          <div className="flex-1">
            <img
                src="/homepage/Group_37.png"
                alt="Illustration"
                className="w-full max-w-sm mx-auto"
            />
          </div>
          <div className="flex-1 text-left">
            <h3 className="text-2xl font-bold mb-6 text-black">Lorem Ipsum</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-200 rounded-lg h-48"></div>
              <div className="bg-gray-200 rounded-lg h-48"></div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </main>
  );
}
