"use client";

import { Card } from "@/components/card";
import { useEffect, useRef } from "react";
import { ImageCard } from "./image-card";

import andoVest from "@/public/images/ando-vest.png";
import Plantanator from "@/public/images/plantanator.png";
import H2O from "@/public/images/fleet-system.png";
import { PeopleCard } from "./people-card";

import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


export function WhoAreWe() {
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
        <h2 className="text-6xl font-bold text-gray-900 mb-4">Who are we?</h2>
        <p className="text-lg text-font-secondary text-left leading-relaxed max-w-md mb-8">
          The people behind Carbide Robotics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PeopleCard 
          pfp={andoVest} 
          name="Yu Fei" 
          description="Co-Founder of Carbide Robotics."
          links={[
            {icon: <IoIosMail />, url: "https://twitter.com/feiyu_"},
            {icon: <FaLinkedin />, url: "https://www.linkedin.com/in/feiyu-zhang-1aabbb1b4/"}
          ]}
        />
      </div>

    </section>
  );
}