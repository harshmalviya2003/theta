'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function CoreComponents() {
  const panelsContainerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement[]>([]);
  const tweenRef = useRef<GSAPTween | null>(null);

  useEffect(() => {
    const panelsContainer = panelsContainerRef.current;
    const panels = panelsRef.current;

    if (!panelsContainer || panels.length === 0) return;

    // Mobile detection and adjustment
    const isMobile = window.innerWidth < 768;
    const panelWidth = isMobile ? window.innerWidth : panels[0].offsetWidth;

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
        end: () => isMobile ? `+=${panelWidth * (panels.length - 1)}` : `+=${panelsContainer.offsetWidth - window.innerWidth}`,
      },
    });

    tweenRef.current = tween;

    // Handle window resize
    const handleResize = () => {
      tween.scrollTrigger?.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      tween.scrollTrigger?.kill();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const addPanelRef = (el: HTMLDivElement | null) => {
    if (el && !panelsRef.current.includes(el)) {
      panelsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen font-light">
      <main className="overflow-x-hidden">
        {/* Intro Section - Mobile Optimized */}
        <section
          id="intro"
          className="flex flex-col items-center justify-center min-h-screen bg-black text-white pt-20 px-4 relative"
        >
          <div className="text-center max-w-4xl z-10 px-4">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 md:mb-8">The Core Components</h1>
            <p className="text-lg md:text-2xl mb-6 md:mb-8 leading-relaxed">
              Discover the foundational elements that power our platform's exceptional performance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-12">
              <div className="bg-white/10 p-4 md:p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">Intelligent Memory</h3>
                <p className="text-sm md:text-base">Self-learning system that evolves with every interaction</p>
              </div>
              <div className="bg-white/10 p-4 md:p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">Adaptive Processing</h3>
                <p className="text-sm md:text-base">Dynamic response to complex requirements</p>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="clouds w-full h-full bg-[url('/clouds-layer-1.png')] animate-clouds opacity-50" />
            <div className="clouds w-full h-full bg-[url('/clouds-layer-2.png')] animate-clouds-slow opacity-30" />
          </div>
        </section>

        {/* Panels Section - Mobile Optimized */}
        <section id="panels">
          <div
            id="panels-container"
            ref={panelsContainerRef}
            className="flex flex-nowrap min-h-screen bg-white"
            style={{ width: '200vw' }}
          >
            {/* Panel 1 - Memory */}
            <article
              id="panel-1"
              ref={addPanelRef}
              className="panel flex items-center justify-center min-h-screen w-screen md:w-full bg-white text-black px-4"
            >
              <div className="w-full max-w-4xl mx-auto border-4 border-black p-4 md:p-8 bg-white/90 backdrop-blur-sm">
                <div className="flex flex-col border-2 border-black p-4 md:p-8">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-center">Intelligent Memory System</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">Continuous Learning</h3>
                      <p className="text-base md:text-lg leading-relaxed">
                        Our memory architecture learns from every interaction, automatically improving its performance.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">Zero Configuration</h3>
                      <p className="text-base md:text-lg leading-relaxed">
                        Works immediately with your existing setup. No additional training data required.
                      </p>
                    </div>
                  </div>
                  {/* Mobile-only features */}
                  <div className="md:hidden mt-6">
                    <div className="bg-black text-white p-3 rounded">
                      <h4 className="font-semibold mb-1">Key Benefit:</h4>
                      <p className="text-sm">Reduces setup time by 90% compared to traditional systems</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Panel 2 - Processing */}
            <article
              id="panel-2"
              ref={addPanelRef}
              className="panel flex items-center justify-center min-h-screen w-screen md:w-full bg-white text-black px-4"
            >
              <div className="w-full max-w-4xl mx-auto border-4 border-black p-4 md:p-8 bg-white/90 backdrop-blur-sm">
                <div className="flex flex-col border-2 border-black p-4 md:p-8">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-center">Adaptive Processing Engine</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">Dynamic Optimization</h3>
                      <p className="text-base md:text-lg leading-relaxed">
                        Automatically adjusts processing strategies based on workload.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">Fault-Tolerant</h3>
                      <p className="text-base md:text-lg leading-relaxed">
                        Built with redundancy for uninterrupted service.
                      </p>
                    </div>
                  </div>
                  {/* Mobile-only features */}
                  <div className="md:hidden mt-6">
                    <div className="bg-black text-white p-3 rounded">
                      <h4 className="font-semibold mb-1">Key Benefit:</h4>
                      <p className="text-sm">Maintains 99.9% uptime even during peak loads</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}