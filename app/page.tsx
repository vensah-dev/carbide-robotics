"use client";

import { Navbar } from "@/components/navbar";
import { Mission } from "@/components/mission";
import { Portfolio } from "@/components/portfolio";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";

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
            Join our mission to empower the next generation of STEM leaders through 
            cutting-edge robotics competitions and transformative mentorship programs.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-6">
            <Link className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors" href={"/accelerator"}>
              Accelerator Programme
            </Link>

            <Link className="border border-gray-300 text-gray-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors" href={"/contact"}>
              Contact
            </Link>
          </div>
        </section>

      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}