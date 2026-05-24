"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import icon from '@/public/icons/icon-svg.svg';
import { useState, useEffect } from 'react';

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Close menu when clicking outside or on a link
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navbar = document.getElementById('navbar-mobile-menu');
      if (navbar && !navbar.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigation items configuration
  const navItems = [
    { title: "About", path: "/" },
    { title: "Accelerator", path: "/accelerator" },
    // { title: "Projects", path: "/projects" },
    { title: "Contact", path: "/contact" }
  ];

  return (
    <nav className="w-full py-5 px-8 flex justify-between items-center border-b border-gray-300/25">
      {/* logo and title */}
      <Link href="/" className="flex items-center gap-2">
        <Image src={icon} width={32} height={32} alt="Carbide Robotics Logo" className="rounded-full"/>
        <span className="text-xl font-semibold text-font-primary">Carbide Robotics</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link 
            key={item.path}
            href={item.path} 
            className={`font-medium ${pathname === item.path ? 'text-orange-500' : 'text-font-secondary hover:text-font-primary transition-colors'}`}
          >
            {item.title}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-font-primary focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          ) : (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          )}
        </svg>
      </button>

      {/* Mobile Full-Screen Menu */}
      {isMenuOpen && (
        <div 
          id="navbar-mobile-menu"
          className="md:hidden fixed inset-0 bg-gray-50 z-50 flex flex-col"
        >
          <div className="flex justify-end p-4">
            <button 
              onClick={toggleMenu}
              className="text-gray-900 focus:outline-none"
              aria-label="Close menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col items-center justify-center flex-grow gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                href={item.path} 
                className={`text-2xl font-medium ${pathname === item.path ? 'text-orange-500' : 'text-font-secondary hover:text-font-primary transition-colors'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}