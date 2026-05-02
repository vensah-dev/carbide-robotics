"use client";

import { Navbar } from "@/components/navbar";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background-primary)]">
      {/* Minimal Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex items-center px-8 text-left h-[calc(100vh-81px)]">
        <div className="max-w-6xl ">
          <h1 className="text-5xl md:text-8xl font-bold text-[var(--font-primary)] mb-4 leading-[1.15]">
            Engineered by students,  for students.
          </h1>
          <p className="md:max-w-2xl w-full text-sm md:text-xl text-[var(--font-secondary)] mb-12 leading-relaxed w-[70%]">
            Carbide Robotics is a student-led R&D organisation, a community of passionate innovators and a mentorship platform to nurture talents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">

            <Link className="bg-[var(--accent-primary)] text-white px-8 py-3 rounded-lg font-medium hover:bg-[var(--accent-secondary)] transition-colors" href={"/accelerator"}>
              Accelerator Programme
            </Link>

            <Link className="border border-[var(--border-color)] text-[var(--font-secondary)] px-8 py-3 rounded-lg font-medium hover:bg-[var(--background-secondary)] transition-colors" href={"/contact"}>
              Contact
            </Link>

          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="w-screen py-16 space-y-20">
        {/* Overview Card */}
        <section id="overview" className="bg-[var(--background-secondary)] border border-[var(--border-color)] px-8 py-32">

          <div className="text-left mb-12">
            <h2 className="text-6xl font-bold text-[var(--font-primary)] mb-4">Our Mission</h2>
            {/* <div className="w-16 h-1 bg-[var(--accent-primary)] mx-auto rounded-full"></div> */}
            <p className="text-lg text-[var(--font-secondary)] text-left leading-relaxed max-w-md mb-8">
              Carbide Robotics is a student-led community focused on building niche and deep STEM portfolios.
            </p>
          </div>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Competitions */}
            <div className="bg-[var(--background-tertiary)] border border-[var(--border-color)] rounded-xl p-8">
              <div className="bg-amber-500/15 w-min rounded-2xl mb-4">
                <h3 className="text-2xl md:text-5xl font-bold text-[var(--font-primary)] p-4 w-min">🏆</h3>
              </div>
              
              <h3 className="text-[var(--font-secondary)] font-semibold text-2xl">Competitions</h3>

              <h3 className="text-[var(--font-tertiary)]">
                Multi-disciplinary R&D teams from Carbide Robotics participate in national and international robotics competitions.
                Coached by experienced team managers.
              </h3>
            </div>

            {/* STEM Accelerator */}
            <div className="bg-[var(--background-tertiary)] border border-[var(--border-color)] rounded-xl p-8">
              <div className="bg-green-700/15 w-min rounded-2xl mb-4">
                <h3 className="text-2xl md:text-5xl font-bold text-[var(--font-primary)] p-4 w-min">🌱</h3>
              </div>
              
              <h3 className="text-[var(--font-secondary)] font-semibold text-2xl">Accelerator</h3>

              <h3 className="text-[var(--font-tertiary)]">
                A curated programme connecting passionate students with mentor coaches across engineering, 
                programming, and design. Participants build personal STEM project with real support.
              </h3>
            </div>

            {/* Mentorship Pipeline */}
            <div className="bg-[var(--background-tertiary)] border border-[var(--border-color)] rounded-xl p-8">
              <div className="bg-blue-500/15 w-min rounded-2xl mb-4">
                <h3 className="text-2xl md:text-5xl font-bold text-[var(--font-primary)] p-4 w-min">👨🏼‍🏫</h3>
              </div>
              
              <h3 className="text-[var(--font-secondary)] font-semibold text-2xl">Mentorship</h3>

              <h3 className="text-[var(--font-tertiary)]">
                Multi-disciplinary R&D teams from Carbide Robotics participate in national and international robotics competitions.
                Coached by experienced team managers.
              </h3>
            </div>

          </div>

        </section>

        {/* Portfolio Section */}
        <section className="px-8 py-16">
          <h3 className="text-6xl font-bold text-[var(--font-primary)] mb-12">Portfolio</h3>
          <div className="grid grid-cols-1 gap-3 pb-4">
            <h3 className="text-3xl font-bold text-font-primary]">Achievements</h3>
            {[
              "Samsung Solve for Tomorrow - 3rd Place",
              "Huawei Tech4City - Semi Finals",
              "Singapore Poly Hackathon - Semi Finals",
            ].map((competition, index) => (
              <div key={index} className="flex items-center gap-3 pb-3 px-3 border-b border-[var(--border-color)] last:border-0">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-[var(--font-secondary)] text-md">{competition}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-3">
            <h3 className="text-3xl font-bold text-font-primary]">Upcoming</h3>
            {[
              "Samsung Solve for Tomorrow 2026",
              "Huawei Tech4City 2026",
              "World Robotics Omypiad 2026 (US)",
              "National Robotics Competition 2026",
              "Tan Kah Kee Young Inventors Award 2026"
            ].map((competition, index) => (
              <div key={index} className="flex items-center gap-3 pb-3 px-3 border-b border-[var(--border-color)] last:border-0">
                <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full"></div>
                <span className="text-[var(--font-secondary)] text-md">{competition}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16">
          <h2 className="text-3xl font-bold text-[var(--font-primary)] mb-6">Ready to Innovate?</h2>
          
          <p className="text-lg text-[var(--font-secondary)] mb-8 max-w-2xl mx-auto">
            Join our mission to empower the next generation of STEM leaders through 
            cutting-edge robotics competitions and transformative mentorship programs.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-6">
            <Link className="bg-[var(--accent-primary)] text-white px-8 py-3 rounded-lg font-medium hover:bg-[var(--accent-secondary)] transition-colors" href={"/accelerator"}>
              Accelerator Programme
            </Link>

            <Link className="border border-[var(--border-color)] text-[var(--font-secondary)] px-8 py-3 rounded-lg font-medium hover:bg-[var(--background-secondary)] transition-colors" href={"/contact"}>
              Contact
            </Link>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="w-full py-12 px-8 border-t border-[var(--border-color)] bg-[var(--footer-bg)]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[var(--footer-font)]">
            © 2024 Carbide Robotics. Empowering STEM innovation through robotics competitions and mentorship.
          </p>
        </div>
      </footer>
    </div>
  );
}