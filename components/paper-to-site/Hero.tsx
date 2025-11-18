import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";

import { START_FOR_FREE_URL } from "./constants";

const HERO_IMAGE = "/paper-to-site/multi-device.png";
const TSINGHUA_LOGO = "/paper-to-site/logos/tsinghua.png";
const MIT_LOGO = "/paper-to-site/logos/mit.png";
const PEKING_LOGO = "/paper-to-site/logos/peking.png";
const STANFORD_LOGO = "/paper-to-site/logos/Stanford_Cardinal_logo.svg.png";
const BERKELEY_LOGO = "/paper-to-site/logos/berkeley.png";

const Hero = () => {
  return (
    <>
      <section className="w-full pt-8 sm:pt-12 lg:pt-24 pb-6 sm:pb-8 lg:pb-12 bg-gradient-to-b from-[#D6EBFF] via-[#E8F4FF] to-white dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-800 transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-6 sm:gap-8 lg:gap-16 items-center max-w-[1900px] mx-auto">
            {/* Left Column - Text Content */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-10 animate-fade-in-up text-center lg:text-left">
              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[72px] xl:text-[80px] font-extrabold tracking-tight leading-[1.15] sm:leading-[1.1] lg:leading-[1.05] text-neutral-900 dark:text-white max-w-2xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-100">
                Your paper, beautifully presented on every device.
              </h1>
              
              {/* Subtitle */}
              <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-200">
                Upload your paper PDF and Kael instantly turns it into a responsive website. Every formula, figure, and detail stays perfectly intact—built for effortless reading and sharing.
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 lg:gap-4 text-xs sm:text-sm lg:text-base text-neutral-600 dark:text-neutral-300 animate-fade-in-up animation-delay-250">
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-primary flex-shrink-0" />
                  Responsive layout
                </span>
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-primary flex-shrink-0" />
                  Interactive charts
                </span>
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-primary flex-shrink-0" />
                  SEO-ready
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-300">
                <Button
                  asChild
                  variant="hero"
                  size="lg"
                  className="rounded-xl text-xs sm:text-sm lg:text-lg px-5 py-3 sm:px-6 sm:py-4 lg:px-10 lg:py-7 h-auto hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
                >
                  <a href={START_FOR_FREE_URL} target="_blank" rel="noopener noreferrer">
                    Start Free Conversion →
                  </a>
                </Button>
              </div>

              {/* Free tier label */}
              <div className="flex items-start sm:items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm lg:text-lg text-neutral-600 dark:text-neutral-300 animate-fade-in-up animation-delay-400">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span>Upload your first paper and unlock full features</span>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative animate-fade-in-right animation-delay-200 mt-4 lg:mt-0">
              <img 
                src={HERO_IMAGE} 
                alt="Research paper displayed in light and dark themes - Paper conversion preview" 
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="w-full bg-white dark:bg-neutral-900 pt-6 sm:pt-8 pb-12 sm:pb-16 lg:pb-20 transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="max-w-[1800px] mx-auto text-center space-y-8 sm:space-y-12 lg:space-y-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white animate-fade-in-up animation-delay-200 px-4">
              Trusted by Researchers Worldwide
            </h2>
            
            {/* University Logos - Scrolling */}
            <div className="relative overflow-hidden py-4">
              <style>{`
                @keyframes scroll {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(calc(-100% / 3));
                  }
                }
                .animate-scroll {
                  animation: scroll 30s linear infinite;
                  display: flex;
                  width: fit-content;
                }
                .animate-scroll:hover {
                  animation-play-state: paused;
                }
              `}</style>
              <div className="animate-scroll">
                {/* First set of logos */}
                <div className="flex items-center opacity-50 grayscale gap-8 sm:gap-12 lg:gap-16">
                  <div className="flex items-center justify-center w-20 sm:w-24 lg:w-32 flex-shrink-0">
                    <img src={TSINGHUA_LOGO} alt="Tsinghua University" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-20 sm:w-24 lg:w-32 flex-shrink-0">
                    <img src={MIT_LOGO} alt="MIT" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-20 sm:w-24 lg:w-32 flex-shrink-0">
                    <img src={PEKING_LOGO} alt="Peking University" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-20 sm:w-24 lg:w-32 flex-shrink-0">
                    <img src={STANFORD_LOGO} alt="Stanford University" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-20 sm:w-24 lg:w-32 flex-shrink-0">
                    <img src={BERKELEY_LOGO} alt="UC Berkeley" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
                  </div>
                </div>
                {/* Second set of logos */}
                <div className="flex items-center opacity-50 grayscale gap-8 sm:gap-12 lg:gap-16 ml-8 sm:ml-12 lg:ml-16">
                  <div className="flex items-center justify-center w-20 sm:w-24 lg:w-32 flex-shrink-0">
                    <img src={TSINGHUA_LOGO} alt="Tsinghua University" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-20 sm:w-24 lg:w-32 flex-shrink-0">
                    <img src={MIT_LOGO} alt="MIT" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-20 sm:w-24 lg:w-32 flex-shrink-0">
                    <img src={PEKING_LOGO} alt="Peking University" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-20 sm:w-24 lg:w-32 flex-shrink-0">
                    <img src={STANFORD_LOGO} alt="Stanford University" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-20 sm:w-24 lg:w-32 flex-shrink-0">
                    <img src={BERKELEY_LOGO} alt="UC Berkeley" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
                  </div>
                </div>
                {/* Third set of logos */}
                <div className="flex items-center opacity-50 grayscale gap-8 sm:gap-12 lg:gap-16 ml-8 sm:ml-12 lg:ml-16">
                  <div className="flex items-center justify-center w-20 sm:w-24 lg:w-32 flex-shrink-0">
                    <img src={TSINGHUA_LOGO} alt="Tsinghua University" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-20 sm:w-24 lg:w-32 flex-shrink-0">
                    <img src={MIT_LOGO} alt="MIT" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-20 sm:w-24 lg:w-32 flex-shrink-0">
                    <img src={PEKING_LOGO} alt="Peking University" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-20 sm:w-24 lg:w-32 flex-shrink-0">
                    <img src={STANFORD_LOGO} alt="Stanford University" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-20 sm:w-24 lg:w-32 flex-shrink-0">
                    <img src={BERKELEY_LOGO} alt="UC Berkeley" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
