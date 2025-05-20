'use client';

import { ArrowRight, Play, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {  
  return (
    <section className="relative w-full h-screen overflow-hidden bg-background">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20 scale-y-[-1]"
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background/90" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32 lg:py-40">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-black">
            Self-Learning
            <br className="hidden sm:block" /> for AI Agents
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Agents don't learn from their mistakes. Theta is building the infra for agents to learn and adapt in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="gap-2 group hover:shadow-lg transition-all duration-300 hover:scale-105 px-8 py-6 text-lg"
            >
              Book Demo
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 group hover:shadow-lg transition-all duration-300 hover:scale-105 px-8 py-6 text-lg"
            >
              {/* Custom YC Logo */}
              <div className="h-5 w-5 bg-orange-500 flex items-center justify-center text-white font-bold text-xs rounded-sm">
                Y
              </div>
              Launch YC
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16">
          {[
            { value: "43%", label: "Better Accuracy" },
            { value: "7x", label: "Less Steps" },
            { value: "0", label: "Code Changes" },
            { value: "100%", label: "Real-Time Learning" }
          ].map((stat, index) => (
            <div key={index} className="bg-background/80 backdrop-blur-sm p-4 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="flex justify-center gap-6 mt-12">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
            <Twitter className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Backed by Y Combinator
          </div>
        </div>
      </div>
    </section>
  );
}