'use client';

import { Bot, Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-6 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <nav className="backdrop-blur-sm bg-white/90 border rounded-2xl h-14 flex items-center justify-between px-6 shadow-sm">
          {/* Logo on the left */}
          <div className="flex items-center">
            <Image src="/logo.png" alt="AIVision" width={20} height={20} />
            <span className="text-lg font-bold ml-2 text-black">Theta</span>
          </div>

          {/* Centered navigation links (visible on desktop) */}
          <div className="hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
              About Us
            </Link>
            <Link href="/mission" className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
              Mission
            </Link>
            <Link href="/blog" className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
              Blog
            </Link>
          </div>

          {/* Book Demo button and Hamburger icon on the right */}
          <div className="flex items-center space-x-4">
            <Button className="bg-black rounded-xl text-white hover:bg-gray-800 text-sm font-medium">
              Book Demo
            </Button>
            {/* Hamburger menu for mobile */}
            <button className="md:hidden text-black" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu (toggleable) */}
        <div
          className={`md:hidden bg-white/90 backdrop-blur-sm border rounded-2xl mt-2 mx-4 transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link
              href="/"
              className="text-sm font-medium text-black hover:text-gray-600 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-black hover:text-gray-600 transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/mission"
              className="text-sm font-medium text-black hover:text-gray-600 transition-colors"
              onClick={toggleMenu}
            >
              Mission
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-black hover:text-gray-600 transition-colors"
              onClick={toggleMenu}
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}