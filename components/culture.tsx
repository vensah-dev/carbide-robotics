"use client";

import { Card } from "@/components/card";
import { useEffect, useRef } from "react";

export function Culture() {
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
          <h2 className="text-6xl font-bold text-gray-900 mb-4">Our Culture</h2>
          <p className="text-lg text-font-secondary text-left leading-relaxed max-w-md mb-8">
            Carbide Robotics is a student-led community focused on building niche and deep STEM portfolios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Competitions */}
          <Card
            icon={"💪"}
            title={"Resilience"}
            description={"Crazy ideas and impossible problems are what we aim solve. We treat fear indifferently, we cultivate the guts to continue until impossible becomes reality."}
            colorClass={"bg-amber-700/15"}
            BGz={3}
          />
          {/* STEM Accelerator */}
          <Card
            icon={"✊"}
            title={"Empowerment"}
            description={"We empower our members to take ownership of their growth. By providing resources, mentorship, and a supportive community, we enable students to stretch their capabilities."}
            colorClass={"bg-purple-700/15"}
            BGz={3}
          />
          {/* Mentorship Pipeline */}
          <Card
            icon={"🎗️"}
            title={"Altruism"}
            description={"Students don't build just to satiate their curiosity and learn, they build to make an impact. Every invention started with someone determined to fix an issue to improve this world."}
            colorClass={"bg-blue-500/15"}
            BGz={3}
          />
        </div>

      </div>

    </section>
  );
}