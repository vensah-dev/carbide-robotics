"use client";

import Link from "next/link";
import { PrimaryButton } from "./primary-button";
import { SecondaryButton } from "./secondary-button";
import { GridBackground } from "./grid-background";
import Image from "next/image";
import bgImage from "@/public/images/accelerator-hero-bg.png";


export function ContactHero() {

  return (
    // THIS IS h-[calc(100vh-73px)] BECAUSE THE NAVBAR HEIGHT IS 73px. THIS ENSURES THE HERO SECTION TAKES UP THE FULL VIEWPORT HEIGHT MINUS THE NAVBAR.  
      <section className="flex items-center px-8 text-left h-[calc(100vh-73px)] relative">
        <GridBackground />
        
        <div className="max-w-6xl z-10">

          <h1 className="text-5xl md:text-8xl font-bold text-font-primary mb-3 leading-[1.15] animate-fade-in-up">
            Contact Us
          </h1>

          <p className="md:max-w-xl w-[83vw] text-base md:text-xl text-font-secondary mb-8 leading-relaxed w-[70%] animate-fade-in-up animation-delay-300">
            Have questions or want to learn more about our programmes? Get in touch with us!
          </p>

          <div className="flex flex-col md:flex-row gap-4 animate-fade-in-up animation-delay-500">
            <PrimaryButton text={"Join Us"} href="https://forms.gle/qwe7wQ18xN9iNwTZ7" />
            <SecondaryButton text={"contact@carbiderobotics.com"} href="mailto:contact@carbiderobotics.com" />
          </div>

        </div>
      </section>
  );
}