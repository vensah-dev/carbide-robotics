"use client";

import Link from "next/link";
import { PrimaryButton } from "./primary-button";
import { SecondaryButton } from "./secondary-button";

export function Hero() {

  return (
      <div className="flex items-center px-8 text-left h-[calc(100vh-73px)]">
        <div className="max-w-6xl ">

          <h1 className="text-5xl md:text-8xl font-bold text-[var(--font-primary)] mb-3 leading-[1.15]">
            Engineered by students,  for students.
          </h1>

          <p className="md:max-w-2xl w-[83vw] text-base md:text-xl text-[var(--font-secondary)] mb-8 leading-relaxed w-[70%]">
            Carbide Robotics is a student-led R&D organisation, a community of passionate innovators and a mentorship platform to nurture talents.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <PrimaryButton text={"Accelerator Programme"} />
            <SecondaryButton text={"Contact"} />
          </div>

        </div>
      </div>
  );
}