"use client";

import Link from "next/link";

export function Hero() {

  return (
      <section className="flex items-center px-8 text-left h-[calc(100vh-81px)]">
        <div className="max-w-6xl ">
          <h1 className="text-5xl md:text-8xl font-bold text-[var(--font-primary)] mb-3 leading-[1.15]">
            Engineered by students,  for students.
          </h1>
          <p className="md:max-w-2xl w-full text-sm md:text-xl text-[var(--font-secondary)] mb-8 leading-relaxed w-[70%]">
            Carbide Labs is a student-led R&D organisation, a community of passionate innovators and a mentorship platform to nurture talents.
          </p>
          <div className="flex flex gap-4 justify-start">

            <Link className="bg-[var(--accent-primary)] text-white px-8 py-3 rounded-lg font-medium text-sm md:text-base hover:bg-[var(--accent-secondary)] transition-colors" href={"/accelerator"}>
              Accelerator Programme
            </Link>

            <Link className="border border-[var(--border-color)] text-[var(--font-secondary)] px-8 py-3 rounded-lg font-medium text-sm md:text-base hover:bg-[var(--background-secondary)] transition-colors" href={"/contact"}>
              Contact
            </Link>

          </div>
        </div>
      </section>
  );
}