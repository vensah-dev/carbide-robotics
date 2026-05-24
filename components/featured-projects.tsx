"use client";

import { Card } from "@/components/card";
import { useEffect, useRef } from "react";
import { ImageCard } from "./image-card";

import andoVest from "@/public/images/ando-vest.png";
import Plantanator from "@/public/images/plantanator.png";
import H2O from "@/public/images/fleet-system.png";
import laptopStand from "@/public/images/laptop-stand.png";

export function HighlightedProjects() {
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
      className="bg-background-primary px-8 py-16"
      data-animate-on-scroll
    >

      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-12">
          <h2 className="text-6xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-font-secondary text-left leading-relaxed max-w-md mb-8">
            Showcase of some of our completed projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Ando vest */}
          <ImageCard
            image={andoVest}
            title={"Ando Hypohidrosis Vests"}
            description={"An innovative non-invasive approach to effectively replacing sweat glands in persons living with Hypohidrosis"}
            BGz={2}
          />
          {/* Plantanator */}
          <ImageCard
            image={Plantanator}
            title={"Planatanator"}
            description={"An affordable, intuitive, modular and scalable solution to yield crops autonomously at both consumer and industrial levels"}
            BGz={2}
          />
          {/* Laptop Stand */}
          <ImageCard
            image={laptopStand}
            title={"Laptop Filtered Air Intake System"}
            description={"A laptop stand designed to channnel airflow in a way that reduces dust accumulation in the imternal laptop fans, reducing maintanance."}
            BGz={2}
          />
        </div>
      </div>
    </section>
  );
}