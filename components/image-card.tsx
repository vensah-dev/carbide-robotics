"use client";

import Image, { StaticImageData } from "next/image";

export function ImageCard({ 
  image, 
  title, 
  description, 
  BGz = 1 
}: { 
  image: StaticImageData; 
  title: string; 
  description: string; 
  BGz?: number; 
}) {
  return (
    <div className={`${BGz === 1 ? "bg-background-primary" : BGz === 2 ? "bg-background-secondary" : "bg-background-tertiary"} border border-border-color/25 rounded-xl overflow-hidden flex flex-col`}>
      <Image src={image} alt={title} className="h-full object-cover " />

      <div className="p-8 "> 
        <h3 className="text-font-primary font-semibold text-2xl mb-4">{title}</h3>
        <p className="text-font-secondary line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
}

