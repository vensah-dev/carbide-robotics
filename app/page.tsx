"use client";

import { Navbar } from "@/components/navbar";
import { Mission } from "@/components/mission";
import { Portfolio } from "@/components/portfolio";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { PrimaryButton } from "@/components/primary-button";
import { SecondaryButton } from "@/components/secondary-button";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-baclground-primary text-font-primary">
      {/* Minimal Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Content Sections */}
      <div className="w-screen">
        {/* Overview Card */}
        <Mission />

        {/* Portfolio Section */}
        <Portfolio />

        {/* CTA Section */}
        <section className="text-center py-32 px-8 bg-background-secondary border border-border-color/25">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Innovate?</h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our mission to empower the talents of tomorrow and enhance STEM education through 
            competitions and transformative mentorship programmes.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <PrimaryButton text={"Accelerator Programme"} />
            <SecondaryButton text={"Contact"} />
          </div>

        </section>

      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}