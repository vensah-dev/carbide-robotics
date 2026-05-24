"use client";

import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { projects } from "@/lib/projects";
import Image from "next/image";
import { BsChevronCompactDown } from "react-icons/bs";
import { PrimaryButton } from "@/components/primary-button";
import { SecondaryButton } from "@/components/secondary-button";

export default function ProjectsPage() {

  // #region
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [snapping, setSnapping] = useState(false);
  const [snapDuration, setSnapDuration] = useState(1000);
  const [snapDirection, setSnapDirection] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(0);
  const progressRef = useRef(0);
  const wheelEndTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const featuredProjects = projects.slice(0, 5);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (wheelEndTimer.current) clearTimeout(wheelEndTimer.current);
      setSnapping(false);

      const delta = e.deltaY;
      let p = progressRef.current + delta/1000;
      let idx = currentIndexRef.current;

      if (p >= 1 && idx < featuredProjects.length - 1) {
        idx += 1;
        p -= 1;
      } else if (p <= -1 && idx > 0) {
        idx -= 1;
        p += 1;
      }

      if (idx === 0 && p < 0) p = 0;
      if (idx === featuredProjects.length - 1 && p > 0) p = 0;

      currentIndexRef.current = idx;
      progressRef.current = p;
      setCurrentIndex(idx);
      setProgress(p);

      wheelEndTimer.current = setTimeout(() => {
        const snap =
          progressRef.current >= 0.5 && currentIndexRef.current < featuredProjects.length - 1
            ? { p: 1, idx: currentIndexRef.current }
            : progressRef.current <= -0.5 && currentIndexRef.current > 0
            ? { p: -1, idx: currentIndexRef.current }
            : { p: 0, idx: currentIndexRef.current };

        const remaining = Math.abs(snap.p - progressRef.current);
        const duration = Math.round(remaining * 1000);

        const dir = progressRef.current > 0 ? 1 : progressRef.current < 0 ? -1 : 0;
        setSnapDirection(dir);
        setSnapping(true);
        setSnapDuration(duration);

        requestAnimationFrame(() => {
          progressRef.current = snap.p;
          setProgress(snap.p);

          setTimeout(() => {
            if (snap.p === 1) {
              currentIndexRef.current = snap.idx + 1;
              setCurrentIndex(snap.idx + 1);
            } else if (snap.p === -1) {
              currentIndexRef.current = snap.idx - 1;
              setCurrentIndex(snap.idx - 1);
            }
            progressRef.current = 0;
            setProgress(0);
            setSnapping(false);
          }, duration);
        });
      }, 420);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [featuredProjects.length]);

  const getSlideStyle = (idx: number): React.CSSProperties => {
    const p = progress;
    const cur = currentIndex;
    const transition = snapping
      ? `clip-path ${snapDuration}ms cubic-bezier(0.76, 0, 0.24, 1)`
      : "none";

    const zDir = snapping ? snapDirection : p;

    if (idx === cur) {
      const clipPath =
        p >= 0
          ? `inset(0 0 ${p * 100}% 0)`
          : `inset(${Math.abs(p) * 100}% 0 0 0)`;
      return { clipPath, transition, zIndex: 10 };
    }

    if (idx === cur + 1) {
      return { clipPath: "inset(0 0 0% 0)", zIndex: zDir >= 0 ? 5 : 1 };
    }

    if (idx === cur - 1) {
      return { clipPath: "inset(0 0 0% 0)", zIndex: zDir < 0 ? 5 : 1 };
    }

    return {
      clipPath: idx > cur ? "inset(0 0 100% 0)" : "inset(100% 0 0 0)",
      zIndex: 1,
    };
  };

  // #endregion

  return (
    <div className="w-screen bg-background-primary">
      <Navbar />

      <div className="flex flex-col items-center justify-center h-[calc(100vh-73px)] relative gap-8">
        {/* projects carousel */}
        <div className="flex flex-col w-full aspect-1728/832 overflow-hidden relative self-center">
          <main
            ref={containerRef}
            className="grow relative overflow-hidden"
          >
            {featuredProjects.map((project, idx) => (
              <div
                key={project.key}
                className="absolute inset-0"
                style={getSlideStyle(idx)}
              >
                <Image
                  src={project.fullPoster}
                  alt={project.title}
                  fill
                  priority={idx === 0}
                  className="object-cover"
                />
              </div>
            ))}
          </main>
          <div
            className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 transition-opacity duration-500 pointer-events-none ${
              currentIndex === 0 && progress === 0 ? "opacity-100" : "opacity-0"
            }`}
          >
            <BsChevronCompactDown className="text-3xl text-white/70 animate-bounce" />
          </div>
        </div>

        <div className="flex md:flex-row gap-4 animate-fade-in-up animation-delay-300">
          <SecondaryButton text="View more" href="/projects/all" key="/projects/all"/>
        </div>

      </div>

      <Footer />
    </div>
  );
}