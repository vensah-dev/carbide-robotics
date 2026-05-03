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
    <div className="min-h-screen bg-gray-50">
      {/* Minimal Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Content Sections */}
      <div className="w-screen py-16 space-y-20">
        {/* Overview Card */}
        <Mission />

        {/* Portfolio Section */}
        <Portfolio />

        {/* CTA Section */}
        <section className="text-center py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Innovate?</h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our mission to empower the talents of tomorrow and enhance STEM education through 
            competitions and transformative mentorship programmes.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-6">
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