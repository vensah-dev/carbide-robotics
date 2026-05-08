"use client"; // This must be at the top for useState/useEffect

import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { projects } from "@/lib/projects";
import { GridBackground } from "@/components/grid-background";

// Note: Metadata cannot be in the same file as "use client". 
// You should move the metadata export to a separate layout.tsx 
// or a parent page.tsx to avoid Next.js build errors.

export default function ProjectsPage() {
  const [rows, setRows] = useState<any>({ row1: [], row2: [], row3: [] });

  useEffect(() => {
    var shuffle = (array: any) => [...array].sort(() => Math.random() - 0.5);

    setRows({
      row1: [...projects].sort(() => Math.random() - 0.5),
      row2: [...projects].sort(() => Math.random() - 0.5),
      row3: [...projects].sort(() => Math.random() - 0.5),
    });
  }, []);

  const ScrollingRow = ({ items, speed }: any) => (
    <div className="flex w-full h-1/3 overflow-hidden">
      <div className={`flex ${speed === 'slow' ? 'animate-scroll-left-slow' : 'animate-scroll-left'}`}>

        {items.map((project: any, i: number) => (
          <div key={`a-${project.id}-${i}`} className="h-60 aspect-video p-1 flex-shrink-0">
            <img
              src={project.fullPoster}
              alt={project.title}
              className="w-full h-full object-cover rounded-lg transition-all duration-500"
            />
          </div>
        ))}

        {items.map((project: any, i: number) => (
          <div key={`b-${project.id}-${i}`} className="h-60 aspect-video p-1 flex-shrink-0">
            <img
              src={project.fullPoster}
              alt={project.title}
              className="w-full h-full object-cover rounded-lg transition-all duration-500"
            />
          </div>
        ))}

      </div>
    </div>
  );

  return (
    <div className="">
      <Navbar />

      <div className="absolute w-screen h-[50vh] overflow-hidden z-0">

        <div className="relative w-screen overflow-hidden -mt-35 animate-fade-in-up">
          <div className="relative w-screen h-full bg-background-primary overflow-hidden left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
            <div className="flex flex-col">
              <ScrollingRow items={rows.row1} speed="fast" />
              <ScrollingRow items={rows.row2} speed="slow" />
              <ScrollingRow items={rows.row3} speed="fast" />
            </div>
            <div className="absolute inset-y-0 left-0 w-screen bg-gradient-to-r from-background-primary from-25% to-transparent z-10" />
            {/* <div className="absolute inset-y-0 right-0 w-screen bg-gradient-to-l from-background-primary to-transparent z-10" /> */}
          </div>
        </div>

      </div>


      <div className="flex items-center px-8 text-left h-[50vh] relative">
        <div className="w-7xl 2xl:w-360 mx-auto z-50 ">
          <h1 className="text-5xl md:text-8xl 2xl:text-9xl font-bold text-font-primary mb-3 leading-[1.15] animate-fade-in-up">
            STEM projects
          </h1>
          <p className="md:max-w-2xl 2xl:max-w-3xl text-base md:text-xl 2xl:text-2xl text-font-secondary mb-8 leading-relaxed w-[70%] animate-fade-in-up animation-delay-300">
            A collection of all the projects our members and students have created, ranging from basic personal projects to competition winning projects.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}