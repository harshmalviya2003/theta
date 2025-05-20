// components/ScrollSmootherDemo.tsx
"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

export default function ScrollSmootherDemo() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      normalizeScroll: true,
      wrapper: wrapperRef.current,
      content: contentRef.current,
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <main 
      ref={wrapperRef}
      className="w-full h-screen " // Changed to white background
      id="smooth-wrapper"
    >
      <div 
        ref={contentRef}
        id="smooth-content"
        className="overflow-visible w-full h-[200vh]"
      >
        <div className="flex items-center justify-around relative w-3/4 top-[75vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className={`relative w-1/5 aspect-square max-w-[124px] bg-no-repeat bg-contain filter grayscale contrast-200 ${
                item === 1 ? "bg-[url('https://assets.codepen.io/16327/scroll-flair-1.png')]" :
                item === 2 ? "bg-[url('https://assets.codepen.io/16327/scroll-flair-2.png')]" :
                item === 3 ? "bg-[url('https://assets.codepen.io/16327/scroll-flair-3.png')]" :
                item === 4 ? "bg-[url('https://assets.codepen.io/16327/scroll-flair-4.png')]" :
                "bg-[url('https://assets.codepen.io/16327/flair.png')]"
              }`}
              data-speed={
                item === 1 ? "clamp(1.25)" :
                item === 2 ? "0.8" :
                item === 3 ? "1" :
                item === 4 ? "1.2" :
                "clamp(0.9)"
              }
            >
              <span className="absolute text-gray-800 top-[-2rem] w-full text-center block text-base font-mono">
                {item === 1 ? "clamp(1.25)" :
                 item === 2 ? "0.8" :
                 item === 3 ? "1" :
                 item === 4 ? "1.2" :
                 "clamp(0.9)"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}