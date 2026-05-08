import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

// Import projects data
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Carbide Robotics \\ Projects",
  description: "Explore our collection of student-led STEM projects and innovations.",
  keywords: "robotics, STEM, projects, innovation, technology, education",
  authors: [{ name: "Carbide Robotics" }, { name: "vensah" }, { name: "vensah-dev" }],
  robots: "index, follow",
  icons: {
    icon: "/carbide-robotics/icons/icon.png",
    apple: "/carbide-robotics/icons/apple-icon.png",
  },
  openGraph: {
    title: "Carbide Robotics \\ Projects",
    description: "Explore our collection of student-led STEM projects and innovations.",
    type: "website",
    images: [
      {
        url: "../icons/icon.png",
        width: 1200,
        height: 630,
        alt: "Carbide Robotics Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carbide Robotics \\ Projects",
    description: "Explore our collection of student-led STEM projects and innovations.",
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />

      {/* Projects Section */}
      <div className="w-screen py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-font-primary mb-12 text-center">Our Projects</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link 
                href={`/projects/${project.key}`} 
                key={project.key}
                className="bg-background-primary border border-border-color/25 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-font-primary">{project.title}</h2>
                    <span className="text-sm text-font-tertiary">{project.year}</span>
                  </div>
                  <p className="text-font-secondary text-sm line-clamp-2">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}