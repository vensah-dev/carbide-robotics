"use client";

import { Card } from "@/components/card";
import { useEffect, useRef } from "react";

export function Mission() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in-view");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="overview" 
      className="bg-background-secondary border border-border-color/25 px-8 py-16"
      data-animate-on-scroll
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-12">
          <h2 className="text-6xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-font-secondary text-left leading-relaxed max-w-md mb-8">
            Carbide Robotics is a student-led community focused on building niche and deep STEM portfolios.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Competitions */}
          <Card
            icon={"🏆"}
            title={"Competitions"}
            description={"Multi-disciplinary R&D teams formed through our Carbide Robotics community participate in national and international robotics competitions. These rich talents create an excellent portfolio year after year."}
            colorClass={"bg-amber-500/15"}
            BGz={3}
          />
          {/* STEM Accelerator */}
          <Card
            icon={"🌱"}
            title={"Accelerator"}
            description={"A curated programme connecting passionate students with mentor coaches across niche STEM fields. Participants' skills are stretched by creating projects and participating in related competitions."}
            colorClass={"bg-green-700/15"}
            BGz={3}
          />
          {/* Mentorship Pipeline */}
          <Card
            icon={"👨🏼‍🏫"}
            title={"Mentorship"}
            description={"Exemplary students from our teams are given the opportunity to become mentors, guiding the next batch of students and fostering a sustainable culture of peer mentorship and knowledge sharing."}
            colorClass={"bg-blue-500/15"}
            BGz={3}
          />
        </div>
      </div>

    </section>
  );
}