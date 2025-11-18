"use client";

import { HelpCircle } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What types of papers does Kael support?",
      answer: "Kael supports all academic papers in PDF format—especially those with complex formulas, charts, or data. You can also import directly from arXiv, bioRxiv, and other preprint platforms.",
    },
    {
      question: "Can I edit my site after conversion?",
      answer: "Yes. After conversion, you can freely edit content, adjust styles, add multimedia, or update data. Kael also supports version control for publishing new updates anytime.",
    },
    {
      question: "Do I need to upload raw data for interactive charts?",
      answer: "Not necessarily. Kael's AI extracts data points automatically from your PDF charts. However, uploading your original CSV or JSON will enhance accuracy and interactivity.",
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. All uploaded papers and data are encrypted and accessible only to you. You can choose to publish publicly or keep them private—Kael never uses your papers for any other purpose.",
    },
    {
      question: "Can I use my own domain?",
      answer: "Yes. Custom domains (like paper.yourlab.edu) are available in the Professional and Institutional plans, so your site fits seamlessly into your academic brand.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes. New users can convert one paper for free—with full access to all features, including interactive charts and custom themes. No credit card required.",
    },
  ];

  return (
    <section id="faq" className="w-full py-8 sm:py-12 lg:py-24 bg-neutral-900 dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-5xl">
        <div className="flex flex-col items-start">
          {/* Icon */}
          <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 lg:mb-8 animate-scale-in">
            <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary" strokeWidth={2.5} />
          </div>
          
          {/* Title and Subtitle */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 lg:mb-4 animate-fade-in-up animation-delay-100 px-4 sm:px-0">
            FAQ
          </h2>
          <p className="text-xs sm:text-sm lg:text-lg text-neutral-300 mb-6 sm:mb-8 lg:mb-12 px-4 sm:px-0">
            Everything you need to know before your first conversion.
          </p>

          {/* Accordion */}
          <div className="w-full px-4 sm:px-0">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-neutral-700"
                >
                  <AccordionTrigger className="text-sm sm:text-base lg:text-lg font-medium text-white hover:no-underline py-4 sm:py-5 lg:py-6 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-neutral-300 leading-relaxed pb-4 sm:pb-5 lg:pb-6 text-left">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
