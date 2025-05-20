'use client';

import { Bot, ArrowUpRight } from 'lucide-react';
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
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const sections = [
    {
      title: "Product",
      links: [
        { name: "Memory SDK", href: "#memory" },
        { name: "Evaluations", href: "#evaluations" },
        { name: "Pricing", href: "#pricing" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Book Demo", href: "#demo" }
      ]
    },
    {
      title: "Connect",
      links: [
        { name: "Contact", href: "mailto:founders@thetasoftware.ai" },
        { name: "LinkedIn", href: "https://www.linkedin.com/company/thetasoftware" },
        { name: "Twitter/X", href: "https://x.com/thetasoftware" },
        { name: "GitHub", href: "https://github.com/thetasoftware" }
      ]
    }
  ];

  return (
    <footer 
      ref={ref}
      className="border-t py-16 mt-auto bg-background/80 backdrop-blur-lg relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8"
      >
        <motion.div variants={item}>
          <div className="flex items-center mb-4">
            <motion.div 
              whileHover={{ rotate: 10 }}
              className="flex items-center"
            >
              <Bot className="h-6 w-6 mr-2 text-primary" />
              <span className="font-bold text-black text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Theta
              </span>
            </motion.div>
          </div>
          <motion.p 
            className="text-sm text-muted-foreground mb-4"
            whileHover={{ x: 2 }}
          >
            The intelligent memory layer for AI agents to learn and adapt in real-time
          </motion.p>
          <motion.div 
            className="flex items-center gap-2 text-sm text-muted-foreground"
            whileHover={{ x: 2 }}
          >
            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded">YC S25</span>
            <div className="h-4 w-4 bg-orange-500 flex items-center justify-center text-white font-bold text-xs rounded-sm">
              Y
            </div>
            Backed by Y Combinator
          </motion.div>
        </motion.div>

        {sections.map((section) => (
          <motion.div key={section.title} variants={item}>
            <h3 className="font-semibold mb-4 text-foreground">{section.title}</h3>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 3 }}
                >
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground flex items-center transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                    {link.href.startsWith('http') && (
                      <ArrowUpRight className="h-3 w-3 ml-1" />
                    )}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5 }}
        className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-muted/20 text-center text-sm text-muted-foreground"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            © 2025 Theta Software Inc. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}