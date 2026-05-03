"use client";

import Link from "next/link";
import { PrimaryButton } from "./primary-button";
import { SecondaryButton } from "./secondary-button";
import { GridBackground } from "./grid-background";

export function AcceleratorHero() {

  return (
    // THIS IS h-[calc(100vh-73px)] BECAUSE THE NAVBAR HEIGHT IS 73px. THIS ENSURES THE HERO SECTION TAKES UP THE FULL VIEWPORT HEIGHT MINUS THE NAVBAR.  
      <section className="flex items-center px-8 text-left h-[calc(100vh-73px)] relative">
        <GridBackground />
        
        <div className="max-w-6xl z-10">

          <h1 className="text-5xl md:text-8xl font-bold text-[var(--font-primary)] mb-3 leading-[1.15] animate-fade-in-up">
            STEM Accelerator Programme
          </h1>

          <p className="md:max-w-2xl w-[83vw] text-base md:text-xl text-[var(--font-secondary)] mb-8 leading-relaxed w-[70%] animate-fade-in-up animation-delay-300">
            Our programme aims to nurture passionate thinkers through the creation of STEM projects with assistance from a broader web of mentor coaches and like-minded students with adjacent expertise.
          </p>

          {/* <div className="flex flex-col md:flex-row gap-4 animate-fade-in-up animation-delay-500">
            <PrimaryButton text={"Accelerator Programme"} />
            <SecondaryButton text={"Contact"} />
          </div> */}

        </div>
      </section>
  );
}