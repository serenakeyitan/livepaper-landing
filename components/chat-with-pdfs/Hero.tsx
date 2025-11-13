import { Button } from "@/components/ui/button";
import { START_FOR_FREE_URL } from "./constants";
import { Check } from "lucide-react";

const HERO_IMAGE = "/chat-with-pdfs/kael_interface_1_bw.png";
const WEB_EXTENSION_ICON = "/chat-with-pdfs/web-extension-icon.png";
const LOGOS = {
  tsinghua: "/chat-with-pdfs/logos/tsinghua.png",
  mit: "/chat-with-pdfs/logos/mit.png",
  peking: "/chat-with-pdfs/logos/peking.png",
  stanford: "/chat-with-pdfs/logos/Stanford_Cardinal_logo.svg.png",
  berkeley: "/chat-with-pdfs/logos/berkeley.png",
} as const;

const Hero = () => {
  return (
    <>
      <section className="w-full pt-12 sm:pt-16 lg:pt-24 pb-8 sm:pb-12 bg-gradient-to-b from-[#D6EBFF] via-[#E8F4FF] to-white dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-800 transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 sm:gap-12 lg:gap-16 items-center max-w-[1900px] mx-auto">
            {/* Left Column - Text Content */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-10 animate-fade-in-up">
              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[72px] xl:text-[80px] font-extrabold tracking-tight leading-[1.1] sm:leading-[1.05] text-neutral-900 dark:text-white max-w-2xl animate-fade-in-up animation-delay-100">
                The AI Research Assistant for Scholars
              </h1>
              
              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl animate-fade-in-up animation-delay-200">
                Chat across multiple research papers with precise, evidence-based answers — no confusion, no noise.
              </p>

              {/* CTA Button */}
              <div className="pt-2 sm:pt-4 animate-fade-in-up animation-delay-300">
                <Button
                  asChild
                  variant="hero"
                  size="lg"
                  className="rounded-xl text-sm sm:text-base lg:text-lg px-6 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-7 h-auto hover:scale-105 transition-transform duration-300"
                >
                  <a href={START_FOR_FREE_URL} target="_blank" rel="noopener noreferrer">
                    <img
                      src={WEB_EXTENSION_ICON}
                      alt="Web Extension"
                      className="w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9 mr-2 sm:mr-3 object-contain"
                    />
                    Start for Free
                  </a>
                </Button>
              </div>

              {/* Free tier label */}
              <div className="flex items-start sm:items-center gap-2 text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-neutral-300 animate-fade-in-up animation-delay-400">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span>Free upload of up to 10 papers and 50 conversations</span>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative animate-fade-in-right animation-delay-200">
              <div className="relative rounded-2xl overflow-visible p-4">
                <img 
                  src={HERO_IMAGE} 
                  alt="AI Research Assistant Interface showing multi-document conversation" 
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="w-full bg-white dark:bg-neutral-900 pt-6 sm:pt-8 pb-12 sm:pb-16 lg:pb-20 transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="max-w-[1800px] mx-auto text-center space-y-8 sm:space-y-12 lg:space-y-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white animate-fade-in-up animation-delay-200 px-4">
              Trusted by 10,000+ researchers worldwide
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
