"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import icon from '@/public/icons/icon.svg';

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full py-5 px-8 flex justify-between items-center border-b border-gray-300/25">

      {/* logo and title */}
      <Link href="/" className="flex items-center gap-2">
        <Image src={icon} width={32} height={32} alt="Carbide Labs Logo" className="rounded-full"/>
        <span className="text-xl font-semibold text-gray-900">Carbide Labs</span>
      </Link>

      <div className="flex items-center gap-8">

        <Link 
          href="/" 
          className={`font-medium ${pathname === '/' ? 'text-orange-500' : 'text-gray-600 hover:text-gray-900 transition-colors'}`}
        >
          About
        </Link>

        <Link 
          href="/accelerator" 
          className={`font-medium ${pathname === '/accelerator' ? 'text-orange-500' : 'text-gray-600 hover:text-gray-900 transition-colors'}`}
        >
          Accelerator
        </Link>

        <Link 
          href="/contact" 
          className={`font-medium ${pathname === '/contact' ? 'text-orange-500' : 'text-gray-600 hover:text-gray-900 transition-colors'}`}
        >
          Contact
        </Link>
        
      </div>
    </nav>
  );
}