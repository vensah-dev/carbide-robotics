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
            Growing a community of passionate youth to share resources and knowledge to support niche STEM areas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Competitions */}
          <Card
            icon={"👋"}
            title={"Community"}
            description={"We believe there are no stupid ideas. We don't fear failure, in fact we encourage it. Driven by the shared passion for STEM, We aim to stretch each other's capabilities to make an impact."}
            colorClass={"bg-amber-500/15"}
            BGz={3}
          />
          {/* STEM Accelerator */}
          <Card
            icon={"🌱"}
            title={"Accelerator Programme"}
            description={"A curated programme connecting students and mentors across niche STEM fields to invent new solutions, making society better one invention at a time."}
            colorClass={"bg-green-700/15"}
            BGz={3}
          />
          {/* Mentorship Pipeline */}
          <Card
            icon={"👨🏼‍🏫"}
            title={"Mentorship"}
            description={"Exceptional members go beyond their own growth, stepping up to guide newer members and shape the next inventors who will continue to move the world forward."}
            colorClass={"bg-blue-500/15"}
            BGz={3}
          />
        </div>
      </div>

    </section>
  );
}