"use client";

import { Card } from "@/components/card";
import { useEffect, useRef } from "react";
import { ImageCard } from "./image-card";

import andoVest from "@/public/images/ando-vest.png";
import Plantanator from "@/public/images/plantanator.png";
import H2O from "@/public/images/fleet-system.png";


export function ProjectsWidget() {
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
      className="bg-background-primary px-8 py-32"
      data-animate-on-scroll
    >
      <div className="text-left mb-12">
        <h2 className="text-6xl font-bold text-gray-900 mb-4">Our Projects</h2>
        <p className="text-lg text-font-secondary text-left leading-relaxed max-w-md mb-8">
          Some of the projects that we have built and submitted for competitions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Competitions */}
        <ImageCard
          image={andoVest}
          title={"Ando Hypohidrosis Vests"}
          description={"An innovative non-invasive approach to effectively replacing sweat glands in persons living with Hypohidrosis"}
          BGz={2}
        />

        {/* STEM Accelerator */}
        <ImageCard
          image={Plantanator}
          title={"Planatanator"}
          description={"An affordable, intuitive, modular and scalable solution to yield crops autonomously at both consumer and industrial levels"}
          BGz={2}
        />

        {/* Mentorship Pipeline */}
        <ImageCard
          image={H2O}
          title={"Anti-hydrocarbon Fleet System"}
          description={"The solution to predictively combat ocean micro-spillage hotspots using autonomous fleet swarming drone fleets"}
          BGz={2}
        />
      </div>
    </section>
  );
}