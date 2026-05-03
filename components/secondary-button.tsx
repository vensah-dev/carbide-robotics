"use client";

import Link from "next/link";

export function SecondaryButton({ 
  text, 
}: { 
  text: string; 
}) {
  return (
    <Link className="border border-accent-primary text-accent-primary px-8 py-3 rounded-lg font-medium text-sm md:text-base hover:bg-accent-primary/10 transition-colors" href={"/contact"}>
      {text}
    </Link>
  );
}

