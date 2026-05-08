"use client";
import { PrimaryButton } from "./primary-button";
import { SecondaryButton } from "./secondary-button";
import { forwardRef } from "react";

export const CallToAction = forwardRef<HTMLDivElement>((props, ref) => {
  return (
        <div 
          ref={ref}
          className="text-center py-16 px-8 animate-fade-in-up animation-delay-700 bg-background-secondary border border-border-color/25"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--font-primary)] mb-6">Ready to Innovate?</h2>
            
            <p className="text-lg text-[var(--font-secondary)] mb-8 max-w-2xl mx-auto">
              Join our mission to empower the talents of tomorrow and enhance STEM education through
              competitions and transformative mentorship programmes.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <PrimaryButton text={"Join Us"} href="https://forms.gle/qwe7wQ18xN9iNwTZ7" />
              <SecondaryButton text={"Contact"} href="/contact" />
            </div>
          </div>

        </div>
  );
});