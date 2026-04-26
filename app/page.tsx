export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background-primary)]">
      {/* Minimal Navigation */}
      <nav className="w-full py-6 px-8 flex justify-center items-center border-b border-[var(--border-color)]">
        <div className="flex items-center gap-8">
          <a href="/" className="text-[var(--accent-primary)] font-medium">About</a>
          <a href="/accelerator" className="text-[var(--font-secondary)] hover:text-[var(--font-primary)] transition-colors font-medium">Accelerator</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--font-primary)] mb-6">
            Carbide Robotics
          </h1>
          <p className="text-lg md:text-xl text-[var(--font-secondary)] mb-8 leading-relaxed">
            Empowering the next generation of STEM innovators through cutting-edge 
            robotics competitions and transformative mentorship programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[var(--accent-primary)] text-white px-8 py-3 rounded-lg font-medium hover:bg-[var(--accent-secondary)] transition-colors">
              Explore Programs
            </button>
            <button className="border border-[var(--border-color)] text-[var(--font-secondary)] px-8 py-3 rounded-lg font-medium hover:bg-[var(--background-secondary)] transition-colors">
              View Competitions
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-8 py-16 space-y-20">
        {/* Overview Card */}
        <section id="overview" className="bg-[var(--background-secondary)] border border-[var(--border-color)] rounded-xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--font-primary)] mb-4">Our Mission</h2>
            <div className="w-16 h-1 bg-[var(--accent-primary)] mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-[var(--font-secondary)] text-center leading-relaxed max-w-3xl mx-auto">
            Carbide Robotics nurtures up-and-coming passionate thinkers through the creation of 
            innovative STEM projects. We provide access to a comprehensive network of mentor 
            coaches and like-minded students with adjacent expertise, fostering excellence in 
            robotics competitions and technological innovation.
          </p>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[var(--font-primary)] mb-4">Competition Portfolio</h2>
            <div className="w-16 h-1 bg-[var(--accent-primary)] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 2025 Achievements */}
            <div className="bg-[var(--background-secondary)] border border-[var(--border-color)] rounded-xl p-8">
              <h3 className="text-xl font-bold text-[var(--font-primary)] mb-6">2025 Achievements</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 border-b border-[var(--border-color)]">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-[var(--font-secondary)]">Samsung Solve for Tomorrow - 3rd Place</span>
                </div>
                <div className="flex items-center gap-4 p-4 border-b border-[var(--border-color)]">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-[var(--font-secondary)]">Huawei T4C - Semi Finals</span>
                </div>
                <div className="flex items-center gap-4 p-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-[var(--font-secondary)]">SP Hackathon - Semi Finals</span>
                </div>
              </div>
            </div>

            {/* 2026 Projections */}
            <div className="bg-[var(--background-secondary)] border border-[var(--border-color)] rounded-xl p-8">
              <h3 className="text-xl font-bold text-[var(--font-primary)] mb-6">2026 Projections</h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Samsung Solve for Tomorrow 2026",
                  "T4C 2026",
                  "WRO 2026 (US)",
                  "NRC 2026",
                  "TKKYIA 2026"
                ].map((competition, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 border-b border-[var(--border-color)] last:border-0">
                    <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full"></div>
                    <span className="text-[var(--font-secondary)] text-sm">{competition}</span>
                  </div>
                ))}
              </div>
            </div>
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