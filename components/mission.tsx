"use client";

export function Mission() {

  return (
    <section id="overview" className="bg-background-secondary border border-border-color/25 px-8 py-32">


      <div className="text-left mb-12">
        <h2 className="text-6xl font-bold text-gray-900 mb-4">Our Mission</h2>
        {/* <div className="w-16 h-1 bg-[var(--accent-primary)] mx-auto rounded-full"></div> */}
        <p className="text-lg text-font-secondary text-left leading-relaxed max-w-md mb-8">
          Carbide Labs is a student-led community focused on building niche and deep STEM portfolios.
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


        {/* Competitions */}
        <div className="bg-background-tertiary border border-border-color/75 rounded-xl p-8">
          <div className="bg-amber-500/15 w-min rounded-2xl mb-4">
            <h3 className="text-2xl md:text-5xl font-bold p-4 w-min">🏆</h3>
          </div>
          
          <h3 className="text-font-primary font-semibold text-2xl">Competitions</h3>

          <h3 className="text-font-secondary">
            Multi-disciplinary R&D teams formed through our Carbide Labs community participate in national 
            and international robotics competitions. These rich talents create an excellent portfolio year after year.
            
          </h3>
        </div>


        {/* STEM Accelerator */}
        <div className="bg-background-tertiary border border-border-color/75 rounded-xl p-8">
          <div className="bg-green-700/15 w-min rounded-2xl mb-4">
            <h3 className="text-2xl md:text-5xl font-bold p-4 w-min">🌱</h3>
          </div>
          
          <h3 className="text-font-primary font-semibold text-2xl">Accelerator</h3>

          <h3 className="text-font-secondary">
            A curated programme connecting passionate students with mentor coaches across niche STEM fields.
            Participants' skills are stretched by creating projects and participating 
            in related competitions.
          </h3>
        </div>


        {/* Mentorship Pipeline */}
        <div className="bg-background-tertiary border border-border-color/75 rounded-xl p-8">
          <div className="bg-blue-500/15 w-min rounded-2xl mb-4">
            <h3 className="text-2xl md:text-5xl font-bold p-4 w-min">👨🏼‍🏫</h3>
          </div>
          
          <h3 className="text-font-primary font-semibold text-2xl">Mentorship</h3>

          <h3 className="text-font-secondary">
            Exemplary students from our teams are given the opportunity to become mentors,
            guiding the next batch of students and fostering a sustainable culture of peer mentorship and knowledge sharing.
          </h3>
        </div>


      </div>

    </section>
  );
}