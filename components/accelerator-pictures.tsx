"use client";

import { Card } from "@/components/card";
import { useEffect, useRef } from "react";
import { ImageCard } from "./image-card";

import andoVest from "@/public/images/ando-vest.png";
import Plantanator from "@/public/images/plantanator.png";
import H2O from "@/public/images/fleet-system.png";
import laptopStand from "@/public/images/laptop-stand.png";
import SFTWin from "@/public/images/SFT-win.png";
import plantantorPresentation from "@/public/images/plantanator-presentation.png";
import glacialPlanters from "@/public/images/glacial-planters.png";


export function AcceleratorPictures() {
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
      {/* <div className="text-left mb-12">
        <h2 className="text-6xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-lg text-font-secondary text-left leading-relaxed max-w-md mb-8">
          Carbide Robotics is a student-led community focused on building niche and deep STEM portfolios.
        </p>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <ImageCard
          image={plantantorPresentation}
        />

        <ImageCard
          image={SFTWin}
        />

        <ImageCard
          image={glacialPlanters}
        />

      </div>
    </section>
  );
}