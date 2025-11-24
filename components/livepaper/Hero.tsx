"use client";

import { Button } from "@/components/ui/button";
import { START_FOR_FREE_URL } from "./constants";
import { gtagSendEvent } from "./gtag-utils";
import { Check } from "lucide-react";

const HERO_IMAGE = "/livepaper/kael_full_page.png";
const WEB_EXTENSION_ICON = "/livepaper/web-extension-icon.png";
const LOGOS = {
  tsinghua: "/livepaper/logos/tsinghua.png",
  mit: "/livepaper/logos/mit.png",
  peking: "/livepaper/logos/peking.png",
  stanford: "/livepaper/logos/Stanford_Cardinal_logo.svg.png",
  berkeley: "/livepaper/logos/berkeley.png",
} as const;

const Hero = () => {
  return (
    <>
      <section className="w-full pt-20 sm:pt-24 lg:pt-24 pb-12 sm:pb-16 lg:pb-12 bg-gradient-to-b from-[#D6EBFF] via-[#E8F4FF] to-white dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-800 transition-colors">
        <div className="container mx-auto px-10 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-10 sm:gap-14 lg:gap-16 items-center max-w-[1900px] mx-auto">
            {/* Left Column - Text Content */}
            <div className="space-y-0 lg:space-y-10 animate-fade-in-up text-center lg:text-left">
              {/* Main Heading - Mobile: Bigger and more prominent */}
              <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[80px] font-extrabold tracking-tight leading-[1.15] sm:leading-[1.1] text-neutral-900 dark:text-white max-w-2xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-100 mb-8 lg:mb-12">
                Turn Your Research Paper Into Motion
              </h1>
              
              {/* Subtitle */}
              <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-200 mb-10 lg:mb-0 px-2 sm:px-0">
                Upload a PDF and LivePaper transforms static research into an animated, interactive experience.
              </p>

              {/* Feature Checkmarks */}
              <div className="flex flex-col gap-3 mb-8 lg:mb-0 lg:pt-8 animate-fade-in-up animation-delay-250 max-w-xl mx-auto lg:mx-0">
                <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={3} />
                  <span className="text-base sm:text-lg">Interactive visuals</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={3} />
                  <span className="text-base sm:text-lg">Concept animations</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={3} />
                  <span className="text-base sm:text-lg">Multimodal knowledge</span>
                </div>
              </div>

              {/* CTA Button - Mobile: Bigger and centered */}
              <div className="mb-6 lg:mb-8 lg:pt-12 animate-fade-in-up animation-delay-300 flex justify-center lg:justify-start w-full">
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full sm:w-auto lg:w-auto rounded-xl text-lg sm:text-lg lg:text-lg px-8 py-6 sm:px-10 sm:py-6 lg:px-10 lg:py-7 h-auto hover:scale-105 transition-transform duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                  onClick={(e) => {
                    e.preventDefault();
                    gtagSendEvent(START_FOR_FREE_URL);
                  }}
                >
                  <img
                    src={WEB_EXTENSION_ICON}
                    alt="Web Extension"
                    className="w-8 h-8 sm:w-7 sm:h-7 lg:w-9 lg:h-9 mr-3 sm:mr-3 object-contain"
                  />
                  Get 1 Month Pro Plan for Free
                </Button>
              </div>

              {/* Free tier label */}
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative animate-fade-in-right animation-delay-200 mt-4 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={HERO_IMAGE}
                  alt="Kael.im - Interactive quaternion visualization showing dynamic research paper"
                  className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="w-full bg-white dark:bg-neutral-900 pt-12 sm:pt-16 lg:pt-8 pb-16 sm:pb-20 lg:pb-20 transition-colors">
        <div className="container mx-auto px-10 sm:px-12 lg:px-16">
          <div className="max-w-[1800px] mx-auto text-center space-y-10 sm:space-y-14 lg:space-y-16">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-neutral-900 dark:text-white animate-fade-in-up animation-delay-200 px-4">
              Trusted by researchers worldwide
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
                    <img src={LOGOS.tsinghua} alt="Tsinghua University" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-20 sm:w-24 lg:w-32 flex-shrink-0">
                    <img src={LOGOS.mit} alt="MIT" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-20 sm:w-24 lg:w-32 flex-shrink-0">
                    <img src={LOGOS.peking} alt="Peking University" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-20 sm:w-24 lg:w-32 flex-shrink-0">
                    <img src={LOGOS.stanford} alt="Stanford University" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-20 sm:w-24 lg:w-32 flex-shrink-0">
                    <img src={LOGOS.berkeley} alt="UC Berkeley" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
                  </div>
                </div>
                {/* Second set of logos */}
                <div className="flex items-center opacity-50 grayscale gap-8 sm:gap-12 lg:gap-16 ml-8 sm:ml-12 lg:ml-16">
                  <div className="flex items-center justify-center w-20 sm:w-24 lg:w-32 flex-shrink-0">
                    <img src={LOGOS.tsinghua} alt="Tsinghua University" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-20 sm:w-24 lg:w-32 flex-shrink-0">
                    <img src={LOGOS.mit} alt="MIT" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-20 sm:w-24 lg:w-32 flex-shrink-0">
                    <img src={LOGOS.peking} alt="Peking University" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-20 sm:w-24 lg:w-32 flex-shrink-0">
                    <img src={LOGOS.stanford} alt="Stanford University" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-20 sm:w-24 lg:w-32 flex-shrink-0">
                    <img src={LOGOS.berkeley} alt="UC Berkeley" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
                  </div>
                </div>
                {/* Third set of logos */}
                <div className="flex items-center opacity-50 grayscale gap-8 sm:gap-12 lg:gap-16 ml-8 sm:ml-12 lg:ml-16">
                  <div className="flex items-center justify-center w-20 sm:w-24 lg:w-32 flex-shrink-0">
                    <img src={LOGOS.tsinghua} alt="Tsinghua University" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-20 sm:w-24 lg:w-32 flex-shrink-0">
                    <img src={LOGOS.mit} alt="MIT" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-20 sm:w-24 lg:w-32 flex-shrink-0">
                    <img src={LOGOS.peking} alt="Peking University" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-20 sm:w-24 lg:w-32 flex-shrink-0">
                    <img src={LOGOS.stanford} alt="Stanford University" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-20 sm:w-24 lg:w-32 flex-shrink-0">
                    <img src={LOGOS.berkeley} alt="UC Berkeley" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
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
