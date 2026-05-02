"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full py-6 px-8 flex justify-between items-center border-b border-[var(--border-color)]">
      <div className="flex items-center gap-2">
        <Image src="@/public/icons/icon.png" width={32} height={32} alt="Carbide Robotics Logo" />
        <span className="text-xl font-semibold text-[var(--font-primary)]">Carbide Robotics</span>
      </div>
      <div className="flex items-center gap-8">
        <Link 
          href="/" 
          className={`font-medium ${pathname === '/' ? 'text-[var(--accent-primary)]' : 'text-[var(--font-secondary)] hover:text-[var(--font-primary)] transition-colors'}`}
        >
          About
        </Link>
        <Link 
          href="/accelerator" 
          className={`font-medium ${pathname === '/accelerator' ? 'text-[var(--accent-primary)]' : 'text-[var(--font-secondary)] hover:text-[var(--font-primary)] transition-colors'}`}
        >
          Accelerator
        </Link>
      </div>
    </nav>
  );
}