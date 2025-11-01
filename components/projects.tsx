"use client";

import React from "react";
// Other imports are not needed for this static page

export default function Projects() {
  // Dummy data for DevOps projects (now in English)
  const projectData = [
    {
      id: "p1",
      title: "CI/CD Pipeline for a Static Site",
      description:
        "Set up a complete CI/CD pipeline using GitHub Actions. The pipeline should automatically build and deploy a simple static site (created with Astro or Next.js) to GitHub Pages or Vercel.",
      difficulty: "Beginner",
      tools: ["Git", "GitHub Actions", "Vercel"],
    },
    {
      id: "p2",
      title: "Containerize a Web Application",
      description:
        "Take an existing web application (e.g., a To-Do list app with Node.js/Python) and create a Dockerfile for it. Build the image and run it locally using Docker Compose.",
      difficulty: "Beginner",
      tools: ["Docker", "Docker Compose", "Node.js"],
    },
    {
      id: "p3",
      title: "Deploy Infrastructure with Terraform",
      description:
        "Use Terraform to define and provision cloud infrastructure (e.g., 1 VM, 1 S3 Bucket, and 1 Security Group) on AWS to host your web application.",
      difficulty: "Intermediate",
      tools: ["Terraform", "AWS", "IaC"],
    },
    {
      id: "p4",
      title: "Monitoring Stack with Prometheus & Grafana",
      description:
        "Deploy a monitoring stack using Prometheus and Grafana (via Docker Compose). Configure Prometheus to scrape metrics from one of your other projects and create a dashboard in Grafana.",
      difficulty: "Intermediate",
      tools: ["Prometheus", "Grafana", "Docker"],
    },
    {
      id: "p5",
      title: "Server Configuration Automation with Ansible",
      description:
        "Write an Ansible playbook to automate the setup of a new web server. The playbook should install software (like Nginx, Docker), set up the firewall, and deploy your application.",
      difficulty: "Advanced",
      tools: ["Ansible", "Nginx", "Linux", "YAML"],
    },
  ];

  return (
    <div className="flex-1 p-6 space-y-6">
      {/* Change Your Course Button (Reusable Element) */}
      <button className="w-full bg-[#213555] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1a2a44] transition-colors">
        Change Your Course
      </button>

      {/* Your Road Maps Card (Reusable Element) */}
      <div className="bg-white border-2 border-black rounded-xl shadow-lg p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-sm text-gray-600 mb-1">Your Road Maps</h2>
            <h1 className="text-3xl font-bold text-[#213555] mb-2">DevOps</h1>
            <p className="text-sm text-gray-600 mb-1">Next target: Overview</p>
            <a
              href="#"
              className="text-blue-600 text-sm underline hover:text-blue-800"
            >
              Go Calculate Roadmap
            </a>
          </div>
          <div className="text-right">
            <p className="text-4xl font-bold text-[#213555]">40%</p>
            <p className="text-xs text-gray-500">40 OF 100 DONE</p>
          </div>
        </div>
      </div>

      {/* === DevOps Projects Section (New Content) === */}
      <div className="flex items-center gap-4 py-4">
        <span className="text-xl font-semibold text-black flex-shrink-0">
          DevOps Projects
        </span>
        <div className="flex-1 h-px bg-black"></div>
      </div>

      {/* === Project List (New Content) === */}
      <div className="bg-white border-2 border-black rounded-xl shadow-lg p-6">
        <div className="divide-y divide-gray-200">
          {projectData.map((project) => (
            <div key={project.id} className="py-5 first:pt-0 last:pb-0">
              {/* Title and Difficulty */}
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-[#213555]">
                  {project.title}
                </h3>
                <span
                  className={`
                    text-xs font-medium px-2.5 py-0.5 rounded-full
                    ${
                      project.difficulty === "Beginner"
                        ? "bg-green-100 text-green-800"
                        : project.difficulty === "Intermediate"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }
                  `}
                >
                  {project.difficulty}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-3">
                {project.description}
              </p>

              {/* Tools/Technology */}
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-sm font-medium text-gray-800">
                  Key Tools:
                </span>
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-semibold bg-[#F5EFE7] text-[#213555] px-2.5 py-0.5 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
