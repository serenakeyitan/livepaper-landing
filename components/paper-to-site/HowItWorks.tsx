"use client";

import { Upload, FileText, Sparkles, Globe, Link as LinkIcon, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HowItWorks = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation();
  const [stage1Ref, stage1Visible] = useScrollAnimation();
  const [stage2Ref, stage2Visible] = useScrollAnimation();
  const [stage3Ref, stage3Visible] = useScrollAnimation();
  
  return (
    <section id="how-it-works" ref={sectionRef} className={`w-full py-8 sm:py-12 lg:py-24 bg-white dark:bg-gradient-to-b dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 ${sectionVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex w-full max-w-[900px] mx-auto flex-col items-center gap-4 sm:gap-6 lg:gap-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-neutral-900 dark:text-white text-center animate-fade-in-up px-4">
            How It Works
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-neutral-600 dark:text-neutral-400 text-center px-4">
            Three steps to bring your paper to life
          </p>
          
          <div className="flex w-full flex-col items-center gap-1">
            {/* Stage 1: Upload your PDF */}
            <div ref={stage1Ref} className={`flex w-full flex-col items-start gap-4 sm:gap-6 rounded-xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-30 border-2 border-solid border-primary/30 bg-neutral-100 dark:bg-neutral-800/90 backdrop-blur-md ring-2 ring-primary/20 ring-inset hover:scale-[1.01] transition-transform duration-300 ${stage1Visible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
              <div className="flex w-full items-center gap-2 sm:gap-3">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-primary/10 flex-shrink-0">
                  <Upload className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="flex grow flex-col items-start gap-1 min-w-0">
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-900 dark:text-white">
                    Stage 1: Upload your PDF
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                    Drag and drop your paper or paste a link. Kael also supports direct imports from arXiv and other preprint platforms.
                  </span>
                </div>
                <Badge variant="default" className="text-xs sm:text-sm flex-shrink-0">Step 1</Badge>
              </div>
              
              <div className="flex w-full items-center gap-2 sm:gap-4 flex-wrap">
                <div className="flex items-center gap-2 sm:gap-3 rounded-lg border border-solid border-neutral-300 dark:border-neutral-600 px-3 sm:px-4 py-3 sm:py-4 shadow-sm bg-neutral-50 dark:bg-neutral-700/50 backdrop-blur-sm">
                  <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
                  <div className="flex flex-col items-start gap-1 min-w-0">
                    <span className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white truncate">
                      research_paper.pdf
                    </span>
                    <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                      Drag & drop or paste link
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <span>or</span>
                </div>
                
                <div className="flex items-center gap-2 sm:gap-3 rounded-lg border border-solid border-neutral-300 dark:border-neutral-600 px-3 sm:px-4 py-3 sm:py-4 shadow-sm bg-neutral-50 dark:bg-neutral-700/50 backdrop-blur-sm">
                  <LinkIcon className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
                  <div className="flex flex-col items-start gap-1 min-w-0">
                    <span className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white truncate">
                      arXiv / bioRxiv
                    </span>
                    <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                      Direct import
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 2: AI Conversion */}
            <div ref={stage2Ref} className={`flex w-full flex-col items-start gap-4 sm:gap-6 rounded-xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-20 border-2 border-solid border-primary/30 bg-neutral-100 dark:bg-neutral-800/90 backdrop-blur-md ring-2 ring-primary/20 ring-inset hover:scale-[1.01] transition-transform duration-300 ${stage2Visible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
              <div className="flex w-full items-center gap-2 sm:gap-3">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-primary/10 flex-shrink-0">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="flex grow flex-col items-start gap-1 min-w-0">
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-900 dark:text-white">
                    Stage 2: AI Conversion
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                    Kael automatically rebuilds your paper into a responsive website—recreating structure, charts, and layout within minutes.
                  </span>
                </div>
                <Badge variant="default" className="text-xs sm:text-sm flex-shrink-0">Step 2</Badge>
              </div>
              
              <div className="flex w-full flex-col items-start gap-3 sm:gap-4">
                <div className="flex w-full items-center gap-3 rounded-lg border border-solid border-neutral-300 dark:border-neutral-600 px-3 sm:px-4 py-3 sm:py-4 shadow-sm bg-neutral-50 dark:bg-neutral-700/50 backdrop-blur-sm">
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-bold flex-shrink-0">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex grow flex-col items-start gap-2 min-w-0">
                    <span className="text-sm sm:text-base text-neutral-900 dark:text-white">
                      AI is processing your paper...
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.2s'}} />
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.4s'}} />
                      </div>
                      <span className="text-xs sm:text-sm italic text-neutral-700 dark:text-neutral-300">Extracting formulas, figures, and structure...</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex w-full items-center gap-2 text-neutral-600 dark:text-neutral-400">
                  <ArrowRight className="w-4 h-4" />
                  <span className="text-xs sm:text-sm">Rebuilding with responsive layout...</span>
                </div>
              </div>
            </div>

            {/* Stage 3: Publish & Share */}
            <div ref={stage3Ref} className={`flex w-full flex-col items-start gap-4 sm:gap-6 rounded-xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-10 border-2 border-solid border-primary/30 bg-neutral-100 dark:bg-neutral-800/90 backdrop-blur-md ring-2 ring-primary/20 ring-inset hover:scale-[1.01] transition-transform duration-300 ${stage3Visible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
              <div className="flex w-full items-center gap-2 sm:gap-3">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-primary/10 flex-shrink-0">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="flex grow flex-col items-start gap-1 min-w-0">
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-900 dark:text-white">
                    Stage 3: Publish & Share
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                    Get your own link, customize the domain, and share it instantly. Your research is now live, readable, and discoverable.
                  </span>
                </div>
                <Badge variant="default" className="text-xs sm:text-sm flex-shrink-0">Step 3</Badge>
              </div>
              
              <div className="flex w-full items-center justify-center gap-2 sm:gap-3 lg:gap-4 rounded-lg border border-solid border-neutral-300 dark:border-neutral-600 px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8 shadow-sm bg-neutral-50 dark:bg-neutral-700/50 backdrop-blur-sm">
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div className="flex items-center gap-2 text-primary">
                    <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white">
                      paper.kael.im/your-paper
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                    Your paper is live!
                  </div>
                </div>
              </div>
              
              <div className="flex w-full items-center justify-center gap-2 sm:gap-4 flex-wrap">
                <Button size="sm" className="gap-2 text-xs sm:text-sm px-3 sm:px-4 w-full sm:w-auto">
                  <LinkIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                  Share Link
                </Button>
                <Button variant="secondary" size="sm" className="gap-2 text-xs sm:text-sm px-3 sm:px-4 w-full sm:w-auto">
                  Customize Domain
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
