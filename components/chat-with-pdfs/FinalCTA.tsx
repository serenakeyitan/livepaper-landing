import { Button } from "@/components/ui/button";
import { START_FOR_FREE_URL } from "./constants";
import { Check } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="pricing" className="w-full py-12 sm:py-16 lg:py-24 bg-neutral-900 dark:bg-neutral-900 relative overflow-hidden">
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
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 lg:space-y-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight animate-fade-in-up px-4">
            Ready to take your research to the next level?
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-neutral-300 animate-fade-in-up animation-delay-200 px-4">
            Join over 10,000 researchers who use Kael as their intelligent research partner.
          </p>

          <div className="flex justify-center pt-2 sm:pt-4 animate-fade-in-up animation-delay-300">
            <Button asChild variant="hero" size="lg" className="rounded-xl text-sm sm:text-base lg:text-lg px-6 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-7 hover:scale-110 transition-transform duration-300 w-full sm:w-auto">
              <a href={START_FOR_FREE_URL} target="_blank" rel="noopener noreferrer">
              Get 1 month Pro Plan for free ➜
              </a>
            </Button>
          </div>

          <p className="text-sm sm:text-base text-neutral-400 px-4">
            No credit card required · Setup in under 1 minute
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-x-4 sm:gap-x-8 gap-y-3 sm:gap-y-4 justify-center items-center pt-4 sm:pt-6 text-sm sm:text-base px-4">
            <div className="flex items-center gap-2 text-white">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
              <span>7-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
              <span>Fully encrypted data</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
