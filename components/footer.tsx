"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#F5EFE7]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-6 py-16 gap-12">
        {/* === Left Section: Brand + Copyright === */}
        <div className="flex flex-col gap-4">
          <a href="/" aria-label="Home page">
            <span className="block text-2xl font-bold text-[#213555] leading-tight">
              Odyssey
            </span>
          </a>
          <p className="text-xs text-gray-700 uppercase tracking-wider">
            Embark For Knowledge
          </p>
          <p className="text-sm text-gray-500 mt-4">
            © {new Date().getFullYear()} Odyssey. All rights reserved.
          </p>
        </div>

        {/* === Right Section: Link Columns === */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
          {/* Navigation Column */}
          <div>
            <h3 className="text-base font-semibold text-gray-900">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="/learn"
                  className="text-sm text-gray-600 hover:text-blue-800 transition-colors"
                >
                  Learn Path
                </a>
              </li>
              <li>
                <a
                  href="/course"
                  className="text-sm text-gray-600 hover:text-blue-800 transition-colors"
                >
                  Course
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-sm text-gray-600 hover:text-blue-800 transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Community Column */}
          <div>
            <h3 className="text-base font-semibold text-gray-900">Community</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-blue-800 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-blue-800 transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-blue-800 transition-colors"
                >
                  Twitter (X)
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-base font-semibold text-gray-900">Legal</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-blue-800 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-blue-800 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
