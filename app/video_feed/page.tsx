import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function LessonPage() {
    return (
        <main className="min-h-screen bg-[#f7f3ec] text-black flex flex-col">
            <Header />

            <section className="flex-1 py-12 px-6 md:px-12">
                <div className="max-w-5xl mx-auto">
                    {/* Back Button */}
                    <Button
                        variant="outline"
                        className="border border-[#1e1e1e] text-[#1e1e1e] rounded-md px-6 py-2 mb-10 hover:bg-[#1e1e1e] hover:text-white transition-colors"
                    >
                        Back to previously
                    </Button>

                    {/* Lesson Card */}
                    <div className="border border-[#1e1e1e] rounded-md bg-white p-8">
                        {/* Title */}
                        <h1 className="text-3xl font-bold mb-6 text-[#1e1e1e]">
                            Version Control System
                        </h1>

                        {/* Placeholder (video or image area) */}
                        <div className="w-full aspect-video rounded-md overflow-hidden border border-gray-300">
                            <iframe
                                src="https://www.youtube.com/embed/K5KVEU3aaeQ?si=EO3VZAxanlQd2iiu"
                                title="Version Control System"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>

                    {/* Question below */}
                    <h2 className="text-[25px] font-semibold mt-8">
                        What is Version Control System Use for ?
                    </h2>
                    <p className="text-justify">
                        Version control systems (VCS) are tools that track changes to code and files over time, enabling multiple users to collaborate on projects, maintain history, and manage different versions of codebases. They help in tracking modifications, merging changes, and resolving conflicts. There are two main types of VCS: centralized and distributed. Centralized systems (like Subversion and CVS) rely on a single central repository, while distributed systems (like Git and Mercurial) allow each user to have a complete copy of the repository, including its history. Distributed VCSs, such as Git, are particularly popular for their flexibility, branching capabilities, and robust support for collaborative workflows.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
