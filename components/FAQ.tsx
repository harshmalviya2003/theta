import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
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

const faqItems = [
  {
    id: "item-1",
    question: "How does your AI technology differ from competitors?",
    answer: "Our platform leverages proprietary neural architectures combined with industry-leading transformer models, delivering 98.7% accuracy in benchmark tests. Unlike basic solutions, we implement multi-modal learning that adapts to your specific use case through continuous feedback loops."
  },
  {
    id: "item-2",
    question: "What enterprise-grade security measures are implemented?",
    answer: "We maintain SOC 2 Type II compliance with end-to-end AES-256 encryption, zero-trust architecture, and regular third-party penetration testing. All data processing occurs in our ISO 27001-certified facilities with optional private cloud deployment for regulated industries."
  },
  {
    id: "item-3",
    question: "Can the system integrate with our existing tech stack?",
    answer: "Yes, our platform offers RESTful APIs with comprehensive documentation and SDKs for all major languages. Typical integrations with CRM, ERP, and data warehouse systems are completed in under 2 weeks, supported by our dedicated solutions engineering team."
  },
  {
    id: "item-4",
    question: "What level of customization do you support?",
    answer: "We provide white-label solutions with fully customizable models that can be fine-tuned on your proprietary data. Our professional services team works closely with you to develop domain-specific features while maintaining core system integrity."
  },
  {
    id: "item-5",
    question: "How do you handle data privacy and compliance?",
    answer: "Our data governance framework exceeds GDPR, CCPA, and HIPAA requirements. We implement data minimization principles, provide full audit trails, and offer regional data residency options. All AI models can operate in privacy-preserving modes when required."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our enterprise AI platform
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <AccordionItem value={item.id} className="border-muted/50">
                  <AccordionTrigger className="text-left hover:no-underline px-6 py-5 bg-background rounded-lg hover:bg-muted/20 transition-colors group">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                      </div>
                      <span className="font-semibold text-lg">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Still have questions?
          </p>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2">
            Contact our solutions team
          </button>
        </motion.div>
      </div>
    </section>
  );
}