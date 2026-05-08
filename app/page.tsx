"use client";

import { Navbar } from "@/components/navbar";
import { Mission } from "@/components/mission";
import { Portfolio } from "@/components/portfolio";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { CallToAction } from "@/components/call-to-action";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { HighlightedProjects } from "@/components/highlighted-projects";
import { WhoAreWe } from "@/components/who-are-we";
import { SecondaryButton } from "@/components/secondary-button";
import { PrimaryButton } from "@/components/primary-button";

export default function Home() {
  const ctaSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in-view");
        }
      },
      { threshold: 0.1 }
    );

    if (ctaSectionRef.current) {
      observer.observe(ctaSectionRef.current);
    }

    return () => {
      if (ctaSectionRef.current) {
        observer.unobserve(ctaSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background-primary)]">
      {/* Minimal Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero 
        title={<>Engineered by students, for students.</>}
        tagline={<>Carbide Robotics is a student-led R&D organisation, a community of passionate innovators and a mentorship platform to nurture talents.</>}
        buttons={[
          <PrimaryButton text="Accelerator Programme" href="/accelerator" key="/accelerator"/>,
          <SecondaryButton text="Contact" href="/contact" key="/contact" />
        ]}
      />

      {/* Content Sections */}
      <div className="w-screen">
        {/* Overview Card */}
        <Mission />

        {/* Projects Section */}
        <HighlightedProjects />

        {/* CTA Section */}
        <CallToAction ref={ctaSectionRef} />

      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}