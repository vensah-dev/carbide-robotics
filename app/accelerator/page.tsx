export default function AcceleratorPage() {
  return (
    <div className="min-h-screen bg-[var(--background-primary)]">
      {/* Minimal Navigation */}
      <nav className="w-full py-6 px-8 flex justify-center items-center border-b border-[var(--border-color)]">
        <div className="flex items-center gap-8">
          <a href="/" className="text-[var(--font-secondary)] hover:text-[var(--font-primary)] transition-colors font-medium">About</a>
          <a href="/accelerator" className="text-[var(--accent-primary)] font-medium">Accelerator</a>
        </div>
      </nav>

      {/* Accelerator Programme */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <section id="accelerator" className="space-y-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[var(--font-primary)] mb-4">STEM Accelerator Programme</h1>
            <div className="w-20 h-1 bg-[var(--accent-primary)] mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-[var(--background-secondary)] border border-[var(--border-color)] rounded-xl p-8">
            <p className="text-lg text-[var(--font-secondary)] mb-8 text-center">
              Our accelerator programme aids passionate thinkers in creating innovative STEM projects 
              by providing access to expert mentor coaches and facilitating connections between 
              like-minded students for collaborative innovation.
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
                <h2 className="text-xl font-bold text-[var(--font-primary)] mb-4">Operational Model</h2>
                <ol className="space-y-3 list-decimal list-inside text-[var(--font-secondary)]">
                  <li>OPM plans competitions with team members</li>
                  <li>Recruitment through professional networks</li>
                  <li>Team formation and skill development</li>
                  <li>Continuous growth and promotion opportunities</li>
                </ol>
              </div>
            </div>
          </div>

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
                  <h4 className="text-xl font-bold text-[var(--font-primary)] mb-3">{value.title}</h4>
                  <p className="text-[var(--font-secondary)]">{value.description}</p>
                </div>
              ))}
            </div>
          </section>
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