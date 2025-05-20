'use client';

import { Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export function Reviews() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const testimonials = [
    {
      id: 1,
      rating: 5,
      content: "This AI platform has transformed our data processing workflow. The accuracy and speed are unparalleled, saving us countless hours each week.",
      author: "Johnathan Smith",
      role: "CTO, TechNova Solutions",
      avatar: "/avatars/johnathan-smith.jpg",
      initials: "JS",
      highlight: false
    },
    {
      id: 2,
      rating: 5,
      content: "We've tried multiple AI solutions, but none compare to this platform. The intuitive interface and powerful features have exceeded all expectations.",
      author: "Sarah Williams",
      role: "Data Science Lead, InnovateX",
      avatar: "/avatars/sarah-williams.jpg",
      initials: "SW",
      highlight: true
    },
    {
      id: 3,
      rating: 4,
      content: "Remarkable results with minimal setup. Our team was able to integrate the API within days and saw immediate improvements in our analytics.",
      author: "Michael Chen",
      role: "Product Director, FutureTech",
      avatar: "/avatars/michael-chen.jpg",
      initials: "MC",
      highlight: false
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Trusted by Innovators
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Join industry leaders who have transformed their operations with our platform
          </p>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              variants={item}
              whileHover={{ y: -5 }}
            >
              <Card 
                className={`p-8 h-full flex flex-col transition-all duration-300 ${testimonial.highlight ? 
                  'bg-gradient-to-br from-primary/5 to-background border-primary/30 shadow-lg' : 
                  'bg-background border-muted/50'}`}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? 
                        'fill-yellow-400 text-yellow-400' : 
                        'fill-muted/30 text-muted/30'}`} 
                    />
                  ))}
                </div>
                
                <blockquote className="text-lg leading-relaxed text-foreground mb-8 flex-grow">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center gap-4 mt-auto">
                  <Avatar className="h-12 w-12 border-2 border-primary/20">
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback className="bg-primary/10 font-medium text-primary">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground inline-flex items-center gap-1 bg-muted/20 px-4 py-2 rounded-full border border-muted/30">
            <span className="text-primary">★</span> Rated 4.9/5 across 1,200+ professional reviews
          </p>
        </motion.div>
      </div>
    </section>
  );
}