"use client";

import Link from "next/link";
import { PrimaryButton } from "./primary-button";
import { SecondaryButton } from "./secondary-button";
import { GridBackground } from "./grid-background";

export function Hero(
  {
    title,
    tagline,
    buttons,
  }:{
    title: React.ReactNode,
    tagline: React.ReactNode,
    buttons?: React.ReactNode[]
  }
  ){

  return (
    // THIS IS h-[calc(100vh-73px)] BECAUSE THE NAVBAR HEIGHT IS 73px. THIS ENSURES THE HERO SECTION TAKES UP THE FULL VIEWPORT HEIGHT MINUS THE NAVBAR.  
      <section className="flex items-center px-8 text-left h-[calc(100vh-73px)] relative">
        <GridBackground />
        
        <div className="w-7xl mx-auto z-10">

          <h1 className="text-5xl w-6xl 2xl:w-360 md:text-8xl 2xl:text-9xl font-bold text-font-primary mb-3 leading-[1.15] animate-fade-in-up">
            {title}
          </h1>

          <p className="md:max-w-2xl 2xl:max-w-3xl text-base md:text-xl 2xl:text-2xl text-font-secondary mb-8 leading-relaxed w-[70%] animate-fade-in-up animation-delay-300">
            {tagline}
          </p>

          {buttons && (
            <div className="flex flex-col md:flex-row gap-4 animate-fade-in-up animation-delay-500">
              {buttons}
            </div>
          )}

        </div>
      </section>
  );
}