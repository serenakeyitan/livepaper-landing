"use client";

import { Check, CheckSquare, FileText, Search, Square, Upload, X, ArrowRight, BookOpen, Box, CheckCircle, Link, MessageSquare, Repeat, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { START_FOR_FREE_URL } from "./constants";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Features = () => {
  // State for multi-file selector
  const [selectedPapers, setSelectedPapers] = useState<Set<string>>(new Set([
    "Attention Is All You Need",
    "BERT: Pre-training of Deep Bidirectional Transformers",
    "Deep Residual Learning for Image Recognition"
  ]));
  
  // State for RNN explanation steps toggle
  const [openStep, setOpenStep] = useState<number>(1);

  const papers = [
    { title: "Attention Is All You Need", author: "Vaswani et al.", pages: 15 },
    { title: "BERT: Pre-training of Deep Bidirectional Transformers", author: "Devlin et al.", pages: 16 },
    { title: "GPT-4 Technical Report", author: "OpenAI", pages: 100 },
    { title: "Deep Residual Learning for Image Recognition", author: "He et al.", pages: 12 },
    { title: "ImageNet Classification with Deep CNNs", author: "Krizhevsky et al.", pages: 9 },
  ];

  const togglePaper = (title: string) => {
    setSelectedPapers(prev => {
      const newSet = new Set(prev);
      if (newSet.has(title)) {
        newSet.delete(title);
      } else {
        newSet.add(title);
      }
      return newSet;
    });
  };

  const selectedCount = selectedPapers.size;
  const totalPages = papers
    .filter(p => selectedPapers.has(p.title))
    .reduce((sum, p) => sum + p.pages, 0);
  
  const [feature1Ref, feature1Visible] = useScrollAnimation();
  const [feature2Ref, feature2Visible] = useScrollAnimation();
  
  return (
    <section id="features" className="w-full py-12 sm:py-16 lg:py-24 bg-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        {/* Feature 1 */}
        <div ref={feature1Ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center mb-16 sm:mb-24 lg:mb-40 max-w-[1800px] mx-auto ${feature1Visible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Deep <span className="text-primary">Multi-Document</span> Understanding in{" "}
                <span className="text-primary">One Chat</span>
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-neutral-300 font-semibold">
                Consistent quality across every paper
              </p>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed font-semibold">
              Upload up to <strong className="text-white font-semibold">10 papers (500+ pages)</strong> in PDF, DOC, or slides. Kael <strong className="text-white font-semibold">manages context intelligently</strong>, keeping answers precise even across large collections.
            </p>
            <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-3">
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">Multi-document and long-text support</span>
              </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">Cross-paper reference tracking</span>
              </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">Smart context management</span>
              </div>
            </div>
            <div className="pt-4 sm:pt-6">
              <Button asChild variant="hero" size="lg" className="rounded-xl text-sm sm:text-base lg:text-lg px-6 py-4 sm:px-8 sm:py-6 w-full sm:w-auto">
                <a href={START_FOR_FREE_URL} target="_blank" rel="noopener noreferrer">
                  Start for Free
                </a>
              </Button>
            </div>
          </div>
          <div className="lg:pl-8 animate-fade-in-right animation-delay-200">
            <div className="flex w-full max-w-[576px] mx-auto flex-col items-start rounded-2xl border-2 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex w-full items-start border-b border-solid border-neutral-300 dark:border-neutral-700 px-4 sm:px-6 py-3 sm:py-4">
                <div className="flex flex-col items-start gap-1">
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-900 dark:text-white">
                    Select Papers
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                    Upload up to 10 papers (500+ pages)
                  </span>
                </div>
              </div>
              
              <div className="flex w-full flex-col items-start gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Search papers..."
                    className="w-full h-10 sm:h-12 pl-9 sm:pl-10 pr-4 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-700 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
                  />
                </div>
              </div>
              
              <div className="flex max-h-[300px] sm:max-h-[384px] w-full flex-col items-start gap-2 px-4 sm:px-6 py-2 overflow-auto">
                {papers.map((paper) => {
                  const isSelected = selectedPapers.has(paper.title);
                  return (
                    <button
                      key={paper.title}
                      onClick={() => togglePaper(paper.title)}
                      className={`flex w-full items-center gap-2 sm:gap-3 rounded-lg px-3 sm:px-4 py-2 sm:py-3 transition-all cursor-pointer hover:scale-[1.02] hover:shadow-md ${
                        isSelected
                          ? "border-2 border-solid border-primary bg-primary/5"
                          : "bg-neutral-100 dark:bg-neutral-700/50 border-2 border-transparent"
                      }`}
                    >
                      {isSelected ? (
                        <CheckSquare className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                      ) : (
                        <Square className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400 flex-shrink-0" />
                      )}
                      <div className={`flex h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-lg ${
                        isSelected
                          ? "bg-primary/10"
                          : "bg-neutral-200 dark:bg-neutral-600"
                      }`}>
                        <FileText className={`w-4 h-4 sm:w-5 sm:h-5 ${
                          isSelected
                            ? "text-primary"
                            : "text-neutral-600 dark:text-neutral-400"
                        }`} />
                      </div>
                      <div className="flex grow flex-col items-start gap-1 min-w-0">
                        <span className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white text-left truncate w-full">
                          {paper.title}
                        </span>
                        <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                          {paper.author} • {paper.pages} pages
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
              
              <div className="flex w-full flex-col items-start gap-2 sm:gap-3 border-t border-solid border-neutral-300 dark:border-neutral-700 px-4 sm:px-6 py-3 sm:py-4">
                <Button className="h-10 sm:h-12 w-full text-sm sm:text-base" size="lg" disabled={selectedCount === 0}>
                  <Upload className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Add {selectedCount} {selectedCount === 1 ? 'Paper' : 'Papers'}
                </Button>
                <span className="w-full text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 text-center">
                  {selectedCount} of 10 papers selected • {totalPages} total pages
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div ref={feature2Ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center max-w-[1800px] mx-auto ${feature2Visible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
          <div className="lg:pr-8 order-2 lg:order-1">
            <div className="flex w-full max-w-[576px] mx-auto flex-col items-start rounded-2xl border-2 border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex w-full flex-col items-start gap-4 sm:gap-6 px-4 sm:px-6 py-4 sm:py-6">
                <div className="flex w-full items-start gap-2">
                  <div className="flex flex-col items-start gap-1 sm:gap-2 min-w-0 flex-1">
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-900 dark:text-white">
                      RNN Encoder–Decoder
                    </span>
                    <span className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300">
                      Selected formulas from sequence-to-sequence model architecture.
                    </span>
                  </div>
                </div>
                
                <div className="flex w-full flex-col items-start gap-4">
                  <div className="flex w-full flex-col items-start gap-3 rounded-lg bg-white dark:bg-neutral-800 px-4 py-4 border border-neutral-200 dark:border-neutral-700 overflow-visible">
                    <span className="text-xs font-semibold uppercase text-neutral-600 dark:text-neutral-300">
                      LATEX
                    </span>
                    <div className="w-full overflow-visible p-2">
                      <img
                        className="w-full flex-none hover:scale-105 transition-transform duration-300"
                        src="https://res.cloudinary.com/subframe/image/upload/v1762819130/uploads/29575/u8p1wyybrqqlokztj1mn.png"
                        alt="RNN Encoder formula"
                      />
                    </div>
                    <div className="w-full overflow-visible p-2">
                      <img
                        className="w-full flex-none hover:scale-105 transition-transform duration-300"
                        src="https://res.cloudinary.com/subframe/image/upload/v1762819145/uploads/29575/xnyczbgnrkihprx9htrk.png"
                        alt="RNN Decoder formula"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex w-full items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 dark:bg-primary/20 text-primary border border-primary/20 dark:border-primary/30">
                    LSTM
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 dark:bg-primary/20 text-primary border border-primary/20 dark:border-primary/30">
                    GRU
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-600">
                    Recurrent Network
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-600">
                    Hidden State
                  </span>
                </div>
              </div>
              
              <div className="flex max-h-[300px] sm:max-h-[350px] lg:max-h-[384px] w-full flex-col items-start gap-3 sm:gap-4 border-t border-solid border-neutral-300 dark:border-neutral-600 px-4 sm:px-6 py-4 sm:py-6 overflow-y-auto bg-neutral-50 dark:bg-neutral-900">
                {/* Step 1 */}
                <div className="flex w-full flex-col items-start gap-3">
                  <button 
                    onClick={() => setOpenStep(1)}
                    className="flex w-full items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    <Box className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                    <span className="text-base sm:text-lg lg:text-xl font-bold text-neutral-900 dark:text-white flex-1 text-left">
                      Step 1: Recognize
                    </span>
                    {openStep === 1 ? (
                      <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-600 dark:text-neutral-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-600 dark:text-neutral-400 flex-shrink-0" />
                    )}
                  </button>
                  {openStep === 1 && (
                    <div className="w-full pl-7 sm:pl-9 space-y-2">
                      <span className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white block">
                        🧩 Detected Components
                      </span>
                      <span className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 block">
                        Kael identifies two RNN cells — one encoder (RNN_enc) and one decoder (RNN_dec). Each computes a hidden state (h_t, s_t) based on previous context and current token embedding (x_t, y_t).
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Step 2 */}
                <div className="flex w-full flex-col items-start gap-3">
                  <button 
                    onClick={() => setOpenStep(2)}
                    className="flex w-full items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    <Repeat className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                    <span className="text-base sm:text-lg lg:text-xl font-bold text-neutral-900 dark:text-white flex-1 text-left">
                      Step 2: Interpret Relationships
                    </span>
                    {openStep === 2 ? (
                      <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-600 dark:text-neutral-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-600 dark:text-neutral-400 flex-shrink-0" />
                    )}
                  </button>
                  {openStep === 2 && (
                    <div className="w-full pl-7 sm:pl-9 space-y-2">
                      <span className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white block">
                        🔁 Data Flow
                      </span>
                      <div className="flex flex-col items-start gap-2">
                        <div className="flex w-full items-start gap-2">
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300">
                            x_t → fed into encoder → updates h_t
                          </span>
                        </div>
                        <div className="flex w-full items-start gap-2">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300">
                            h_t captures meaning of input sequence up to time t
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300">
                            y_t → fed into decoder → updates s_t
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300">
                            s_t generates or predicts the next token
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Step 3 */}
                <div className="flex w-full flex-col items-start gap-3">
                  <button 
                    onClick={() => setOpenStep(3)}
                    className="flex w-full items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                    <span className="text-base sm:text-lg lg:text-xl font-bold text-neutral-900 dark:text-white flex-1 text-left">
                      Step 3: Plain Language Summary
                    </span>
                    {openStep === 3 ? (
                      <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-600 dark:text-neutral-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-600 dark:text-neutral-400 flex-shrink-0" />
                    )}
                  </button>
                  {openStep === 3 && (
                    <div className="w-full pl-7 sm:pl-9 space-y-2">
                      <span className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white block">
                        🗣️ Explanation
                      </span>
                      <span className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 block">
                        The encoder compresses the meaning of the input sequence step by step, while the decoder unfolds it to generate an output sequence. Both rely on hidden states (h_t, s_t) that carry temporal memory.
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Reference Links */}
                <div className="flex w-full flex-col items-start gap-3">
                  <button 
                    onClick={() => setOpenStep(4)}
                    className="flex w-full items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                    <span className="text-base sm:text-lg lg:text-xl font-bold text-neutral-900 dark:text-white flex-1 text-left">
                      Reference Links
                    </span>
                    {openStep === 4 ? (
                      <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-600 dark:text-neutral-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-600 dark:text-neutral-400 flex-shrink-0" />
                    )}
                  </button>
                  {openStep === 4 && (
                    <div className="w-full pl-7 sm:pl-9 space-y-2">
                      <span className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white block">
                        📚 Learn More
                      </span>
                      <div className="flex w-full flex-col items-start gap-2 sm:gap-3">
                        <div className="flex items-start gap-2">
                          <Link className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base text-neutral-900 dark:text-neutral-200">
                            LSTM — Long Short-Term Memory (Hochreiter & Schmidhuber, 1997)
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Link className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base text-neutral-900 dark:text-neutral-200">
                            GRU — Learning Phrase Representations using RNN Encoder-Decoder for Statistical Machine Translation (Cho et al., 2014)
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6 order-1 lg:order-2 animate-fade-in-up">
            <div className="space-y-4">
              <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Formula & Data Interpretation in{" "}
                <span className="text-primary">Plain Language</span>
              </h3>
              <p className="text-xl text-neutral-300 font-semibold">
                Understand every formula, every figure
              </p>
            </div>
            <p className="text-lg text-neutral-300 leading-relaxed font-semibold">
              Kael <strong className="text-white font-semibold">reads and explains LaTeX formulas</strong>, figures, and tables—<strong className="text-white font-semibold">step by step</strong>, in plain language—turning complex math and data into clear insights.
            </p>
            <div className="space-y-3 pt-3">
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-white font-semibold text-lg">LaTeX formula recognition</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-white font-semibold text-lg">Data extraction from figures</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-white font-semibold text-lg">Step-by-step explanation</span>
              </div>
            </div>
            <div className="pt-4 sm:pt-6">
              <Button asChild variant="hero" size="lg" className="rounded-xl text-sm sm:text-base lg:text-lg px-6 py-4 sm:px-8 sm:py-6 w-full sm:w-auto">
                <a href={START_FOR_FREE_URL} target="_blank" rel="noopener noreferrer">
                  Start for Free
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
