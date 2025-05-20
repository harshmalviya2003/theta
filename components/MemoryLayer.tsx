
'use client';

import { Card } from '@/components/ui/card';

export function MemoryLayer() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              The intelligent memory layer for agents to remember and learn from previous interactions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We analyze every run to identify mistakes, critical actions, and optimizations. Real-time learning means these insights are continuously refined and passed on to your agent. With a simple four-line addition to your existing code, your agent becomes smarter, faster, and more adaptive to dynamic workflows.
            </p>
          </div>

          {/* Stats */}
          <Card className="p-8 bg-background border border-muted/50 shadow-lg">
            <div className="grid grid-cols-1 gap-6">
              <div className="text-center">
                <p className="text-5xl font-bold text-primary">43%</p>
                <p className="text-lg text-muted-foreground mt-2">better accuracy</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-primary">7x</p>
                <p className="text-lg text-muted-foreground mt-2">less steps than base OpenAI Operator</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
