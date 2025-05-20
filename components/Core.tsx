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

    return () => {
      tween.scrollTrigger?.kill();
      document.querySelectorAll('.anchor').forEach((anchor) => {
        anchor.removeEventListener('click', () => {});
      });
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
        {/* Intro Section */}
        <section
          id="intro"
          className="flex flex-col items-center justify-center min-h-screen bg-black text-white pt-20 px-4 relative"
        >
          <div className="text-center max-w-4xl z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">The Core Components</h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Discover the foundational elements that power our platform's exceptional performance. 
              These carefully engineered components work in harmony to deliver seamless experiences 
              and unparalleled efficiency.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-semibold mb-3">Intelligent Memory</h3>
                <p>Self-learning system that evolves with every interaction</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-semibold mb-3">Adaptive Processing</h3>
                <p>Dynamic response to complex requirements</p>
              </div>
              {/* <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-semibold mb-3">Seamless Integration</h3>
                <p>Works effortlessly with your existing infrastructure</p>
              </div> */}
            </div>
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="clouds w-full h-full bg-[url('/clouds-layer-1.png')] animate-clouds opacity-50" />
            <div className="clouds w-full h-full bg-[url('/clouds-layer-2.png')] animate-clouds-slow opacity-30" />
          </div>
        </section>

        {/* Panels Section */}
        <section id="panels">
          <div
            id="panels-container"
            ref={panelsContainerRef}
            className="flex flex-nowrap min-h-screen bg-white"
            style={{ width: '200%' }}
          >
            {/* Panel 1 - Memory */}
            <article
              id="panel-1"
              ref={addPanelRef}
              className="panel flex items-center justify-center min-h-screen w-full bg-white text-black"
            >
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-4 border-black p-8 bg-white/90 backdrop-blur-sm">
                <div className="flex flex-col border-2 border-black p-8">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Intelligent Memory System</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">Continuous Learning</h3>
                      <p className="text-lg leading-relaxed">
                        Our memory architecture learns from every interaction, automatically improving its performance without manual intervention.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">Zero Configuration</h3>
                      <p className="text-lg leading-relaxed">
                        Works immediately with your existing setup. No additional training data required.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Panel 2 - Processing */}
            <article
              id="panel-2"
              ref={addPanelRef}
              className="panel flex items-center justify-center min-h-screen w-full bg-white text-black"
            >
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-4 border-black p-8 bg-white/90 backdrop-blur-sm">
                <div className="flex flex-col border-2 border-black p-8">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Adaptive Processing Engine</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">Dynamic Optimization</h3>
                      <p className="text-lg leading-relaxed">
                        Automatically adjusts processing strategies based on workload and complexity.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">Fault-Tolerant</h3>
                      <p className="text-lg leading-relaxed">
                        Built with redundancy and self-healing capabilities for uninterrupted service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Seamless Integration Section */}
        {/* <section id="integration" className="min-h-screen bg-gradient-to-br from-blue-900 to-black text-white py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Seamless Integration</h2>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Works effortlessly with your existing infrastructure, reducing implementation time from weeks to hours
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-10">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center">
                    <span className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center mr-4">1</span>
                    Universal Compatibility
                  </h3>
                  <p className="text-lg text-gray-300">
                    Our system integrates with all major platforms and frameworks, whether you're using modern microservices or legacy systems. 
                    We've built adapters for every common technology stack.
                  </p>
                </div>

                <div className="mb-10">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center">
                    <span className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center mr-4">2</span>
                    API-First Design
                  </h3>
                  <p className="text-lg text-gray-300">
                    Clean, well-documented RESTful APIs with comprehensive SDKs available for all popular programming languages. 
                    Swagger documentation included for easy implementation.
                  </p>
                </div>

                <div className="bg-black/30 p-6 rounded-xl border border-gray-700">
                  <h4 className="text-xl font-semibold mb-3">Integration Benefits</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Reduces implementation time by 80% compared to alternatives</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Maintains compatibility during system updates</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Provides detailed integration analytics</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
                <div className="mockup-code bg-gray-900 text-sm">
                  <pre className="px-4 py-3"><code className="text-green-400">npm install @ourplatform/integration</code></pre>
                  <pre className="px-4 py-3"><code className="text-blue-400">import {"{ Integration }"} from '@ourplatform/integration'</code></pre>
                  <pre className="px-4 py-3"><code className="text-purple-400">const integration = new Integration({"{"}</code></pre>
                  <pre className="px-4 py-3"><code className="text-gray-400">  apiKey: 'YOUR_API_KEY',</code></pre>
                  <pre className="px-4 py-3"><code className="text-gray-400">  environment: 'production'</code></pre>
                  <pre className="px-4 py-3"><code className="text-purple-400">{"})"}</code></pre>
                  <pre className="px-4 py-3"><code className="text-yellow-400">integration.connect()</code></pre>
                  <pre className="px-4 py-3"><code className="text-gray-500">// That's it! Ready to use</code></pre>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-black/40 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-blue-400">100+</div>
                    <div className="text-sm">Pre-built connectors</div>
                  </div>
                  <div className="bg-black/40 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-green-400">24h</div>
                    <div className="text-sm">Average setup time</div>
                  </div>
                  <div className="bg-black/40 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-purple-400">99.9%</div>
                    <div className="text-sm">Uptime guarantee</div>
                  </div>
                  <div className="bg-black/40 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-yellow-400">1</div>
                    <div className="text-sm">Simple API call</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}