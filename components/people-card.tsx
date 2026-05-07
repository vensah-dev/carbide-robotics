"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

export function PeopleCard({ 
  pfp, 
  name, 
  description, 
  BGz = 1,
  links
}: { 
  pfp: StaticImageData; 
  name: string; 
  description: string; 
  BGz?: number; 
  links: { icon: React.ReactNode; url: string }[];
}) {
  return (
    <div className={`${BGz === 1 ? "bg-background-primary" : BGz === 2 ? "bg-background-secondary" : "bg-background-tertiary"} border border-border-color/25 rounded-xl overflow-hidden flex flex-col hover:brightness-98 transition-all`}>

      <div className="p-8 "> 
        <div className="flex items-center gap-16 mb-8">
            <Image src={pfp} alt={name} className=" h-40 w-40 object-cover rounded-full" />
            <h3 className="text-font-primary font-semibold text-4xl">{name}</h3>
        </div>

        <p className="text-font-secondary line-clamp-3 mb-4">
          {description}
        </p>

        <div className="flex w-8 h-8 gap-4">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className="text-font-secondary hover:text-font-primary transition-colors"
            >

                {link.icon}
            </Link>
          ))}
        </div>

      </div>

    </div>
  );
}

