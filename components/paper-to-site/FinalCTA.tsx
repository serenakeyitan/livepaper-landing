"use client";

import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";

import { START_FOR_FREE_URL } from "./constants";

const FinalCTA = () => {
  return (
    <section id="pricing" className="w-full py-8 sm:py-12 lg:py-24 bg-neutral-900 dark:bg-neutral-900 relative overflow-hidden">
      {/* Decorative background squares */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-primary/10 rounded-2xl hidden sm:block" />
        <div className="absolute top-32 left-1/4 w-12 h-12 bg-primary/5 rounded-2xl hidden sm:block" />
        <div className="absolute top-10 right-20 w-20 h-20 bg-primary/8 rounded-2xl hidden sm:block" />
        <div className="absolute top-40 right-1/3 w-14 h-14 bg-primary/6 rounded-2xl hidden sm:block" />
        <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-primary/7 rounded-2xl hidden sm:block" />
        <div className="absolute bottom-32 right-10 w-18 h-18 bg-primary/9 rounded-2xl hidden sm:block" />
        <div className="absolute top-1/2 left-20 w-10 h-10 bg-primary/5 rounded-2xl hidden sm:block" />
        <div className="absolute bottom-40 right-1/4 w-12 h-12 bg-primary/6 rounded-2xl hidden sm:block" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 lg:space-y-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight animate-fade-in-up px-4">
            Ready to transform your paper?
          </h2>
          
          <p className="text-sm sm:text-base lg:text-xl text-neutral-300 animate-fade-in-up animation-delay-200 px-4">
            Join 5,000+ researchers already giving their work the visibility it deserves.
          </p>

          <div className="flex justify-center pt-2 sm:pt-4 animate-fade-in-up animation-delay-300">
            <Button
              asChild
              variant="hero"
              size="lg"
              className="rounded-xl text-xs sm:text-sm lg:text-lg px-5 py-3 sm:px-6 sm:py-4 lg:px-10 lg:py-7 hover:scale-110 transition-transform duration-300 w-full sm:w-auto"
            >
              <a href={START_FOR_FREE_URL} target="_blank" rel="noopener noreferrer">
                Start Free Conversion →
              </a>
            </Button>
          </div>

          <p className="text-xs sm:text-sm lg:text-base text-neutral-400 px-4">
            No credit card required · Your first paper is completely free
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-x-3 sm:gap-x-6 lg:gap-x-8 gap-y-2 sm:gap-y-3 lg:gap-y-4 justify-center items-center pt-3 sm:pt-4 lg:pt-6 text-xs sm:text-sm lg:text-base px-4">
            <div className="flex items-center gap-1.5 sm:gap-2 text-white">
              <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-primary flex-shrink-0" />
              <span>First paper free</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-white">
              <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-primary flex-shrink-0" />
              <span>Encrypted data storage</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-white">
              <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-primary flex-shrink-0" />
              <span>Export or delete anytime</span>
            </div>
          </div>

          <div className="pt-3 sm:pt-4 lg:pt-6 px-4">
            <p className="text-sm sm:text-base lg:text-lg text-primary font-medium text-white">
              💡 <strong>Bonus:</strong> Sign up now and get <strong>3 papers</strong> converted for free.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
