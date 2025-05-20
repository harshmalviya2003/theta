'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Reviews } from '@/components/Reviews';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { MemoryLayer } from '@/components/MemoryLayer';
import CoreComponents from '@/components/Core';

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };
  
  return (
<div className=" bg-theta-gradient bg-grid-fade">    
    <Header  />
      <Hero />  
      <Features />  
      <MemoryLayer/>
      <CoreComponents/>
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
}