"use client";

import Link from "next/link";

export function PrimaryButton({ 
  text, 
}: { 
  text: string; 
}) {
  return (
    <Link className="bg-accent-primary text-white px-8 py-3 rounded-lg font-medium text-sm md:text-base hover:bg-accent-secondary transition-colors" href={"/accelerator"}>
      {text}
    </Link>
  );
}

