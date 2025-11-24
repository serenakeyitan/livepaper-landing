import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Which papers are supported?",
      answer: "Any PDF, especially those with figures, models, or workflows.",
    },
    {
      question: "Can I edit the dynamic content?",
      answer: "Yes—adjust charts, animations, and annotations freely.",
    },
    {
      question: "Do I need raw data?",
      answer: "No. AI extracts data automatically. Raw data improves accuracy but is optional.",
    },
    {
      question: "How is data secured?",
      answer: "Everything is encrypted and accessible only to you.",
    },
    {
      question: "Can I use a custom domain?",
      answer: "Available for Pro and Institutional plans.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes. New users can convert 1 full paper for free.",
    },
  ];

  return (
    <section id="faq" className="w-full py-12 sm:py-16 lg:py-24 bg-neutral-900 dark:bg-neutral-900">
      <div className="container mx-auto px-10 sm:px-12 lg:px-16 max-w-5xl">
        <div className="flex flex-col items-start">
          {/* Icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 sm:mb-8 animate-scale-in">
            <HelpCircle className="w-8 h-8 sm:w-10 sm:h-10 text-primary" strokeWidth={2.5} />
          </div>
          
          {/* Title and Subtitle */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 animate-fade-in-up animation-delay-100 px-4 sm:px-0">
            Frequently Asked Questions
          </h2>

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
