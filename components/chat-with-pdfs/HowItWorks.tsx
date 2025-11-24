"use client";

import {
  Upload,
  FileText,
  Sparkles,
  MessageSquare,
  Network,
  ExternalLink,
  Plus,
  CheckCircle,
  BarChart3,
  Image as ImageIcon,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { START_FOR_FREE_URL } from "./constants";
import { gtagSendEvent } from "./gtag-utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HowItWorks = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation();
  const [stage1Ref, stage1Visible] = useScrollAnimation();
  const [stage2Ref, stage2Visible] = useScrollAnimation();
  const [stage3Ref, stage3Visible] = useScrollAnimation();

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className={`w-full py-12 sm:py-16 lg:py-24 bg-white dark:bg-gradient-to-b dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 ${
        sectionVisible ? "animate-on-scroll visible" : "animate-on-scroll"
      }`}
    >
      <div className="container mx-auto px-10 sm:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto flex flex-col gap-6 sm:gap-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white">
              Three steps to transform your paper
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300">
              Upload your PDF, and LivePaper automatically transforms it into an interactive, shareable research experience.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {/* Stage 1 */}
            <div
              ref={stage1Ref}
              className={`rounded-3xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)] p-6 sm:p-8 transition-all ${
                stage1Visible ? "animate-on-scroll visible" : "animate-on-scroll"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <Upload className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                      Step 1 — Upload Your PDF
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      Drop a single PDF file—your research paper in one document.
                    </p>
                  </div>
                </div>
                <Badge variant="default" className="rounded-full px-4 py-1">
                  Step 1
                </Badge>
              </div>

              <div className="mt-6">
                <div className="rounded-2xl border-2 border-primary/30 bg-primary/5 dark:bg-primary/10 p-3 sm:p-6 flex items-center gap-2 sm:gap-4">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-primary/20 flex-shrink-0">
                    <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm sm:text-lg text-neutral-900 dark:text-white break-words">attention_is_all_you_need.pdf</p>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">2.4 MB • 15 pages • Ready to transform</p>
                  </div>
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                </div>
              </div>
            </div>

            {/* Stage 2 */}
            <div
              ref={stage2Ref}
              className={`rounded-3xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)] p-6 sm:p-8 transition-all ${
                stage2Visible ? "animate-on-scroll visible" : "animate-on-scroll"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                      Step 2 — AI Visualizes Content
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      Charts, data, and concepts are automatically extracted and made interactive.
                    </p>
                  </div>
                </div>
                <Badge variant="default" className="rounded-full px-4 py-1">
                  Step 2
                </Badge>
              </div>

              <div className="mt-6">
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {/* Interactive Chart */}
                  <div className="rounded-lg sm:rounded-xl border border-primary/20 bg-white dark:bg-neutral-800/50 p-2 sm:p-3 flex flex-col items-center justify-center min-h-[100px] sm:min-h-[140px]">
                    <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-blue-500/10 flex items-center justify-center mb-1 sm:mb-2">
                      <BarChart3 className="w-5 h-5 sm:w-8 sm:h-8 text-blue-500" />
                    </div>
                    <p className="text-[10px] sm:text-xs font-medium text-neutral-700 dark:text-neutral-300 text-center">Interactive Chart</p>
                    <p className="text-[8px] sm:text-[10px] text-neutral-500 dark:text-neutral-500 mt-0.5 hidden sm:block">Data Visualization</p>
                  </div>

                  {/* Extracted Image */}
                  <div className="rounded-lg sm:rounded-xl border border-primary/20 bg-white dark:bg-neutral-800/50 p-2 sm:p-3 flex flex-col items-center justify-center min-h-[100px] sm:min-h-[140px]">
                    <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-purple-500/10 flex items-center justify-center mb-1 sm:mb-2">
                      <ImageIcon className="w-5 h-5 sm:w-8 sm:h-8 text-purple-500" />
                    </div>
                    <p className="text-[10px] sm:text-xs font-medium text-neutral-700 dark:text-neutral-300 text-center">Diagram</p>
                    <p className="text-[8px] sm:text-[10px] text-neutral-500 dark:text-neutral-500 mt-0.5 hidden sm:block">Visual Content</p>
                  </div>

                  {/* Video Content */}
                  <div className="rounded-lg sm:rounded-xl border border-primary/20 bg-white dark:bg-neutral-800/50 p-2 sm:p-3 flex flex-col items-center justify-center min-h-[100px] sm:min-h-[140px]">
                    <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-orange-500/10 flex items-center justify-center mb-1 sm:mb-2">
                      <Play className="w-5 h-5 sm:w-8 sm:h-8 text-orange-500" />
                    </div>
                    <p className="text-[10px] sm:text-xs font-medium text-neutral-700 dark:text-neutral-300 text-center">Animation</p>
                    <p className="text-[8px] sm:text-[10px] text-neutral-500 dark:text-neutral-500 mt-0.5 hidden sm:block">Motion Graphics</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 3 */}
            <div
              ref={stage3Ref}
              className={`rounded-3xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)] p-6 sm:p-8 transition-all ${
                stage3Visible ? "animate-on-scroll visible" : "animate-on-scroll"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <Network className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                      Step 3 — Publish & Share
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      Get a hosted LivePaper page with analytics and custom domains.
                    </p>
                  </div>
                </div>
                <Badge variant="default" className="rounded-full px-4 py-1">
                  Step 3
                </Badge>
              </div>

              <div className="mt-6 space-y-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800/60 p-4">
                  <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-300">
                        LivePaper URL ready
                      </div>
                    </div>
                    <div className="flex-1 flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                      <span className="font-semibold text-neutral-900 dark:text-white">kael.livepaper.ai/paper/attention</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="secondary"
                    className="w-full sm:w-auto"
                    onClick={(e) => {
                      e.preventDefault();
                      gtagSendEvent(START_FOR_FREE_URL);
                    }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Publish LivePaper
                  </Button>
                  <Button
                    className="w-full sm:w-auto bg-neutral-400 hover:bg-neutral-400 cursor-not-allowed opacity-60"
                    disabled
                  >
                    Export as Interactive Page
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
