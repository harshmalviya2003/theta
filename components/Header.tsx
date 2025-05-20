'use client';

import { Bot, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <nav className="backdrop-blur-sm bg-white/90 border rounded-2xl h-14 flex items-center justify-between px-6 shadow-sm">
          <div className="flex items-center">
            <Bot className="h-6 w-6 mr-2 text-black" />
            <span className="text-lg font-bold text-black">AIVision</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-sm font-medium text-black hover:bg-black/10">
              Blog
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800 text-sm font-medium">
              Book Demo
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}