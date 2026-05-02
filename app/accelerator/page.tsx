import { Navbar } from "@/components/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carbide Robotics \\ STEM Accelerator",
  description: "Empowering up-and-coming passionate thinkers through robotics competitions, STEM projects, and mentorship programs. Join our mission to foster innovation.",
  keywords: "robotics, STEM, competitions, mentorship, innovation, technology, education",
  authors: [{ name: "Carbide Robotics" }],
  robots: "index, follow",
  icons: {
    icon: "/carbide-robotics/icons/icon.png",
    apple: "/carbide-robotics/icons/apple-icon.png",  // 180x180px recommended
  },
  openGraph: {
    title: "Carbide Robotics | STEM Innovation & Competition",
    description: "Empowering the next generation of STEM innovators through robotics competitions and mentorship",
    type: "website",
    images: [
      {
        url: "../icons/icon.png",  // needs full basePath prefix
        width: 1200,  // recommended OG image size
        height: 630,
        alt: "Carbide Robotics Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carbide Robotics | STEM Innovation & Competition",
    description: "Empowering the next generation of STEM innovators through robotics competitions and mentorship",
  },
};

export default function AcceleratorPage() {
  return (
    <div className="min-h-screen bg-[var(--background-primary)]">
      {/* Navigation */}
      <Navbar />

      {/* Accelerator Programme */}
      <div className="max-w-6xl mx-auto px-8 py-16 space-y-20">
        <section id="accelerator" className="space-y-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[var(--font-primary)] mb-4">STEM Accelerator Programme</h1>
            <div className="w-20 h-1 bg-[var(--accent-primary)] mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-[var(--background-secondary)] border border-[var(--border-color)] rounded-xl p-8">
            <p className="text-lg text-[var(--font-secondary)] mb-8 text-center">
              Our Accelerator Programme aims to cultivate a community where STEM and 
              Engineering projects are given the resources to flourish, by 
              letting like-minded people meet and pairing each passionate student 
              project with a mentor with experiences in the specific niches. 
              This enables students in Singapore to build a deep STEM portfolio in 
              their selected niche especially if their school is not STEM oriented.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-[var(--font-primary)] mb-4">Mentorship Opportunities</h2>
                <div className="space-y-3">
                  {["RCO 2026 PHSS Teams", "SFT 2026", "NRC 2026"].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 border-b border-[var(--border-color)] last:border-0">
                      <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full"></div>
                      <span className="text-[var(--font-secondary)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-bold text-[var(--font-primary)] mb-4">Competitions Won</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 border-b border-[var(--border-color)]">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-medium text-[var(--font-primary)]">Samsung Solve for Tomorrow - 2025</h3>
                      <p className="text-[var(--font-secondary)] text-sm">3rd Place</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 border-b border-[var(--border-color)]">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-medium text-[var(--font-primary)]">Huawei T4C - 2025</h3>
                      <p className="text-[var(--font-secondary)] text-sm">Semi Finals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 border-b border-[var(--border-color)]">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-medium text-[var(--font-primary)]">SP Hackathon - 2025</h3>
                      <p className="text-[var(--font-secondary)] text-sm">Semi Finals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-medium text-[var(--font-primary)]">WRO 2026 (US) - 2026</h3>
                      <p className="text-[var(--font-secondary)] text-sm">Quarter Finals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section id="culture" className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[var(--font-primary)] mb-4">Our Culture</h2>
            <div className="w-16 h-1 bg-[var(--accent-primary)] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏆",
                title: "Excellence",
                description: "Celebrating every achievement and milestone with pride"
              },
              {
                icon: "🌱",
                title: "Growth",
                description: "Continuous learning and skill development in supportive environment"
              },
              {
                icon: "🤝",
                title: "Community",
                description: "Collaborative spirit fostering innovation and mutual support"
              }
            ].map((value, index) => (
              <div key={index} className="bg-[var(--background-secondary)] border border-[var(--border-color)] rounded-xl p-8 text-center">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-[var(--font-primary)] mb-3">{value.title}</h3>
                <p className="text-[var(--font-secondary)]">{value.description}</p>
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
            <button className="bg-[var(--accent-primary)] text-white px-8 py-3 rounded-lg font-medium hover:bg-[var(--accent-secondary)] transition-colors">
              Get Started
            </button>
            <button className="border border-[var(--border-color)] text-[var(--font-secondary)] px-8 py-3 rounded-lg font-medium hover:bg-[var(--background-secondary)] transition-colors">
              Learn More
            </button>
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