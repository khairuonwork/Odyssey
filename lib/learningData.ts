// Simpan sebagai: lib/learningData.ts

// Definisikan struktur data untuk setiap pelajaran
export interface Lesson {
  id: string; // ID unik (f1, f2, i1, dll.)
  type: "Essential" | "Basic" | "Advance";
  title: string;
  description: string; // Deskripsi singkat untuk kartu
  longDescription: string; // Deskripsi panjang untuk halaman video
  videos: number;
  tests: number;
  hours: number;
  youtubeId: string; // ID Video YouTube yang akan disematkan
}

// Gabungkan semua data pelajaran ke dalam satu array
export const allLessonsData: Lesson[] = [
  // --- FUNDAMENTAL ---
  {
    id: "f1",
    type: "Essential",
    title: "Git (Version Control)",
    description: "Learn the core concepts of Git and version control.",
    longDescription:
      "Version control systems (VCS) like Git are essential tools that track changes to code and files over time. They enable developers to collaborate on projects, maintain history, and manage different versions of codebase. This module covers the fundamental commands you'll use every day.",
    videos: 10,
    tests: 2,
    hours: 8,
    youtubeId: "8JJ101D3knE", // Video: Git Tutorial for Beginners (Programming with Mosh)
  },
  {
    id: "f2",
    type: "Basic",
    title: "Linux & Shell Scripting",
    description: "Master the Linux terminal and automate tasks with bash.",
    longDescription:
      "The Linux command line is the backbone of DevOps. This section teaches you essential shell commands, file system navigation, permissions, and how to write basic bash scripts to automate repetitive tasks and manage servers effectively.",
    videos: 15,
    tests: 3,
    hours: 14,
    youtubeId: "SPwyp2NG-bE", // Video: you need to learn BASH Scripting RIGHT NOW!! (NetworkChuck)
  },
  {
    id: "f3",
    type: "Advance",
    title: "Networking Basics",
    description: "Understand TCP/IP, DNS, HTTP, and common ports.",
    longDescription:
      "Before managing infrastructure, you must understand how services communicate. This module covers the fundamentals of networking, including the TCP/IP model, what DNS is, how HTTP/S works, and the roles of firewalls and common ports.",
    videos: 8,
    tests: 1,
    hours: 6,
    youtubeId: "_IOZ8_cPgu8", // Video: Networking Basics (IT k Funde)
  },

  // --- INTERMEDIATE ---
  {
    id: "i1",
    type: "Essential",
    title: "Containerization (Docker)",
    description: "Build, ship, and run any application, anywhere.",
    longDescription:
      "Docker revolutionized how applications are built and deployed. Learn to package your applications and their dependencies into isolated containers using Dockerfiles, manage images, and run them consistently across any environment.",
    videos: 20,
    tests: 4,
    hours: 18,
    youtubeId: "pg19Z8LL06w", // Video: Docker Crash Course (TechWorld with Nana)
  },
  {
    id: "i2",
    type: "Basic",
    title: "CI/CD Pipelines",
    description: "Automate your build, test, and deployment workflows.",
    longDescription:
      "Continuous Integration and Continuous Deployment (CI/CD) pipelines are the core of modern DevOps. Learn how to use tools like GitHub Actions to automatically build, test, and deploy your containerized applications whenever you push new code.",
    videos: 12,
    tests: 2,
    hours: 10,
    youtubeId: "R8_veQiYBjI", // Video: GitHub Actions Tutorial (TechWorld with Nana)
  },
  {
    id: "i3",
    type: "Advance",
    title: "Infrastructure as Code (Terraform)",
    description: "Define and manage your infrastructure using code.",
    longDescription:
      "Stop managing servers by hand. With Infrastructure as Code (IaC) tools like Terraform, you can define your entire cloud infrastructure (servers, databases, networks) in configuration files, allowing you to build, change, and version your infrastructure safely and efficiently.",
    videos: 14,
    tests: 2,
    hours: 12,
    youtubeId: "l5k1ai_GBDE", // Video: Terraform explained in 15 mins (TechWorld with Nana)
  },

  // --- ADVANCED ---
  {
    id: "a1",
    type: "Essential",
    title: "Orchestration (Kubernetes)",
    description: "Manage, scale, and automate containerized applications.",
    longDescription:
      "When you have many containers, you need an orchestrator. Kubernetes (K8s) is the industry standard for automating the deployment, scaling, and management of containerized applications. This module introduces core concepts like Pods, Services, and Deployments.",
    videos: 25,
    tests: 5,
    hours: 30,
    youtubeId: "PziYflu8cB8", // Video: Kubernetes Explained in 100 Seconds (Fireship)
  },
  {
    id: "a2",
    type: "Basic",
    title: "Monitoring (Prometheus)",
    description: "Collect time-series metrics from your applications.",
    longDescription:
      "You can't manage what you can't see. Prometheus is a powerful open-source monitoring and alerting toolkit. Learn how to scrape metrics from your services, understand system health, and query data using PromQL.",
    videos: 10,
    tests: 2,
    hours: 9,
    youtubeId: "h4Sl21AKiDg", // Video: How Prometheus Monitoring works (TechWorld with Nana)
  },
  {
    id: "a3",
    type: "Advance",
    title: "Visualization (Grafana)",
    description: "Build powerful, interactive dashboards for your metrics.",
    longDescription:
      "Grafana is the leading platform for observability. Connect it to Prometheus (and other data sources) to build beautiful, informative dashboards. Learn to visualize your system's performance and set up alerts when things go wrong.",
    videos: 8,
    tests: 1,
    hours: 7,
    youtubeId: "lILY8eSspEo", // Video: Grafana Explained in Under 5 Minutes (Tech and Beyond With Moss)
  },
];