'use client';

import { MessageSquare, BrainCircuit, Zap, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

export function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: <BrainCircuit className="h-8 w-8" />,
      title: "Intelligent Memory Layer",
      description: "Compatible with your existing agent stack, our SDK starts learning from the data you already have, improving with every run without changes to your agent stack.",
      cta: "Explore Memory SDK"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Evaluations for Learning",
      description: "Evals provide valuable data for your agent to learn from, offering detailed telemetry and post-training insights in our specialized eval environments.",
      cta: "Learn about Evaluations"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Real-Time Adaptation",
      description: "Agents learn and adapt in real-time by analyzing every run to identify mistakes, critical actions, and optimizations with a simple four-line code addition.",
      cta: "See Real-Time Learning"
    }
  ];

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold tracking-tight sm:text-5xl mb-6"
            whileHover={{ scale: 1.02 }}
          >
            Core Components for AI Agents
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-lg text-muted-foreground"
            whileHover={{ scale: 1.01 }}
          >
            Empowering agents to remember, learn, and adapt with minimal integration
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
            >
              <Card 
                className="p-8 bg-background border border-muted/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg"
              >
                <motion.div 
                  className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary mb-6 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {feature.icon}
                </motion.div>
                
                <h3 className="text-xl font-semibold tracking-tight mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {feature.description}
                </p>
                
                <Button 
                  variant="link" 
                  className="px-0 text-primary hover:text-primary/80 group-hover:translate-x-1 transition-transform"
                >
                  {feature.cta}
                  <motion.span 
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.span>
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary/5 relative overflow-hidden"
          >
            <motion.span 
              className="absolute inset-0 bg-primary/5"
              whileHover={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative">Explore all components</span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}