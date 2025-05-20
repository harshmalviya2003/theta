'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import ScrollSmootherDemo from './ScrollFlair';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function CoreComponents() {
  const panelsContainerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement[]>([]);
  const tweenRef = useRef<GSAPTween | null>(null);

  // GSAP Animation Setup
  useEffect(() => {
    const panelsContainer = panelsContainerRef.current;
    const panels = panelsRef.current;

    if (!panelsContainer || panels.length === 0) return;

    // Horizontal scrolling animation
    const tween = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: panelsContainer,
        pin: true,
        start: 'top top',
        scrub: 1,
        snap: {
          snapTo: 1 / (panels.length - 1),
          inertia: false,
          duration: { min: 0.1, max: 0.1 },
        },
        end: () => `+=${panelsContainer.offsetWidth - window.innerWidth}`,
      },
    });

    tweenRef.current = tween;

    // Anchor navigation
    document.querySelectorAll('.anchor').forEach((anchor) => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const targetId = (e.target as HTMLAnchorElement).getAttribute('href');
        if (!targetId || !tween.scrollTrigger) return;
        
        const targetElem = document.querySelector(targetId) as HTMLElement;
        if (!targetElem) return;

        let y: number | HTMLElement = targetElem;
        if (targetElem && panelsContainer.contains(targetElem)) {
          const totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start;
          const totalMovement = (panels.length - 1) * targetElem.offsetWidth;
          y = Math.round(tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
        }
        
        gsap.to(window, {
          scrollTo: { y, autoKill: false },
          duration: 1,
        });
      });
    });

    // Cleanup on unmount
    return () => {
      tween.scrollTrigger?.kill();
      document.querySelectorAll('.anchor').forEach((anchor) => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  // Add panel refs
  const addPanelRef = (el: HTMLDivElement | null) => {
    if (el && !panelsRef.current.includes(el)) {
      panelsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen font-light">
      {/* Header */}
      

      {/* Main Content */}
      <main className="overflow-x-hidden">
        {/* Intro Section */}
        <section
          id="intro"
          className="flex flex-col items-center justify-center min-h-screen bg-black text-white pt-20"
        >
          <h1 className="text-5xl font-bold">The Core Components
          </h1>
          <div className="absolute inset-0 overflow-hidden">
            <div className="clouds w-full h-full bg-[url('/clouds-layer-1.png')] animate-clouds" />
            <div className="clouds w-full h-full bg-[url('/clouds-layer-2.png')] animate-clouds-slow" />
          </div>
          {/* <ScrollSmootherDemo/> */}
        </section>

        {/* Panels Section */}
        <section id="panels">
          <div
            id="panels-container"
            ref={panelsContainerRef}
            className="flex flex-nowrap min-h-screen bg-white"
            style={{ width: '200%' }}
          >
            {/* Panel 1 */}
            <article
              id="panel-1"
              ref={addPanelRef}
              className="panel flex items-center justify-center min-h-screen w-full bg-white text-black"
            >
              <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 border-4 border-black p-8">
                  
                  <div className="flex flex-col border-2 border-black p-4">
                    <h2 className="text-4xl font-bold mb-4 text-center">Memory</h2>
                    <p className="text-lg text-black leading-relaxed">
                      Compatible with your existing agent stack, our SDK starts learning from the data you already have. Our memory layer improves with every run—requiring zero changes to your agent stack, zero additional data, and zero human guidance.
                    </p>
                   
                  </div>
              </div>
            </article>
            <article
              id="panel-2"
              ref={addPanelRef}
              className="panel flex items-center justify-center min-h-screen w-full bg-white text-black"
            >
              <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 border-4 border-black p-8">
                
                  <div className="flex flex-col border-2 border-black p-4">
                    <h2 className="text-4xl font-bold mb-4 text-center">Memory</h2>
                    <p className="text-lg text-black leading-relaxed">
                      Compatible with your existing agent stack, our SDK starts learning from the data you already have. Our memory layer improves with every run—requiring zero changes to your agent stack, zero additional data, and zero human guidance.
                    </p>
                    
                  </div>
                
              </div>
            </article>
          </div>
        </section>
        
      </main>
    </div>
  );
}