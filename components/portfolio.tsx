"use client";

import { useEffect, useRef } from "react";

export function Portfolio() {
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

  const achievements = [
    //finished
    {
      "name": "Samsung Solve for Tomorrow",
      "status": "3rd Place",
      "year": 2025
    },
    {
      "name": "Huawei Tech4City",
      "status": "Semi Finals",
      "year": 2025
    },
    {
      "name": "Singapore Poly Hackathon",
      "status": "Semi Finals",
      "year": 2025
    },

    // Upcoming
    {
      "name": "Samsung Solve for Tomorrow",
      "status": "Upcoming",
      "year": 2026
    },
    {
      "name": "Huawei Tech4City",
      "status": "Upcoming",
      "year": 2026
    },
    {
      "name": "World Robotics Olympiad (US)",
      "status": "Upcoming",
      "year": 2026
    },
    {
      "name": "National Robotics Competition",
      "status": "Upcoming",
      "year": 2026
    },
    {
      "name": "Tan Kah Kee Young Inventors Award",
      "status": "Upcoming",
      "year": 2026
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="px-8 py-32"
      data-animate-on-scroll
    >
      <h3 className="text-6xl font-bold text-font-primary mb-12">Portfolio</h3>

      <div className="grid grid-cols-1 gap-3 pb-4">
        {achievements.map((competition, index) => (
          <div 
            key={index} 
            className="flex justify-between gap-3 pb-3 px-3 border-b border-gray-300 last:border-0 w-full animate-fade-in-up animation-delay-300"
          >
            <span className="flex gap-4">
              <span className="text-font-secondary text-md font-semibold">{competition.year}</span>
              <span className="text-font-secondary text-md">{competition.name}</span>
            </span>

            <div className={` py-1 px-3 max-h-min whitespace-nowrap w-fit text-xs ${competition.status === "Upcoming" ? "bg-amber-500/25" : "bg-green-500/25"} rounded-full`}>{competition.status}</div>
          </div>
        ))}
      </div>

    </section>
  );
}