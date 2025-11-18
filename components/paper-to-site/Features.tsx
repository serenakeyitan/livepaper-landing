"use client";

import { useState } from "react";
import { Check, FileText, Image, Search, Palette, Share2, Eye, BarChart3, Globe, Smartphone, Moon, Sun, RefreshCw, X, CheckCircle, Monitor, Tablet, Maximize2, Code, Type, Zap, TrendingUp, Users, FileCheck, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import { START_FOR_FREE_URL } from "./constants";

const MODAL_NET_19 = "/paper-to-site/ModalNet-19.png";
const MODAL_NET_21 = "/paper-to-site/ModalNet-21.png";
const LATEX_ATTENTION = "/paper-to-site/latex_attention.png";
const ATTENTION_PAPER = "/paper-to-site/attention_paper.png";

const Features = () => {
  const [feature1Ref, feature1Visible] = useScrollAnimation();
  const [feature2Ref, feature2Visible] = useScrollAnimation();
  const [feature3Ref, feature3Visible] = useScrollAnimation();
  const [feature4Ref, feature4Visible] = useScrollAnimation();
  
  // Feature 1: Conversion preview state
  const [selectedView, setSelectedView] = useState<'text' | 'images' | 'formulas'>('images');
  
  // Feature 2: Device preview state
  const [selectedDevice, setSelectedDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Feature 3: Analytics tabs
  const [analyticsTab, setAnalyticsTab] = useState<'overview' | 'seo' | 'social'>('overview');
  
  // Feature 4: Theme selector
  const [selectedTheme, setSelectedTheme] = useState<'modern' | 'minimalist' | 'editorial'>('editorial');
  
  return (
    <section id="features" className="w-full py-8 sm:py-12 lg:py-24 bg-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        {/* Feature 1: No Detail Lost */}
        <div ref={feature1Ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-20 items-center mb-12 sm:mb-16 lg:mb-40 max-w-[1800px] mx-auto ${feature1Visible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
          <div className="lg:pr-8 order-1 lg:order-1">
            <div className="flex w-full max-w-[576px] mx-auto flex-col items-start rounded-xl sm:rounded-2xl border-2 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {/* Conversion Preview Interface */}
              <div className="w-full border-b border-neutral-200 dark:border-neutral-700 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h4 className="text-sm sm:text-base lg:text-xl font-bold text-neutral-900 dark:text-white">Conversion Preview</h4>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-neutral-500">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-neutral-500" />
                    <span>100% Complete</span>
                  </div>
                </div>
                <div className="flex gap-1.5 sm:gap-2">
                  <button
                    onClick={() => setSelectedView('images')}
                    className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[10px] sm:text-xs lg:text-sm font-medium transition-colors ${
                      selectedView === 'images'
                        ? 'bg-neutral-600 dark:bg-neutral-500 text-white'
                        : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-600'
                    }`}
                  >
                    Images
                  </button>
                  <button
                    onClick={() => setSelectedView('formulas')}
                    className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[10px] sm:text-xs lg:text-sm font-medium transition-colors ${
                      selectedView === 'formulas'
                        ? 'bg-neutral-600 dark:bg-neutral-500 text-white'
                        : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-600'
                    }`}
                  >
                    Formulas
                  </button>
                  <button
                    onClick={() => setSelectedView('text')}
                    className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[10px] sm:text-xs lg:text-sm font-medium transition-colors ${
                      selectedView === 'text'
                        ? 'bg-neutral-600 dark:bg-neutral-500 text-white'
                        : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-600'
                    }`}
                  >
                    Text
                  </button>
                </div>
              </div>
              
              <div className="w-full p-3 sm:p-4 lg:p-6 bg-neutral-50 dark:bg-neutral-900 h-[240px] sm:h-[280px] lg:h-[360px] flex flex-col">
                {selectedView === 'text' && (
                  <div className="space-y-2 sm:space-y-3 flex flex-col h-full">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 flex-shrink-0">
                      <FileCheck className="w-3 h-3 sm:w-4 sm:h-4 text-neutral-500" />
                      <span>All text preserved (2,847 words)</span>
                    </div>
                    <div className="bg-white dark:bg-neutral-800 rounded-lg p-2 sm:p-3 lg:p-4 border border-neutral-200 dark:border-neutral-700 flex-1 overflow-auto">
                      <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        <strong className="text-neutral-900 dark:text-white">Abstract:</strong> The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. Experiments on two machine translation tasks show these models to be superior in quality while being more parallelizable and requiring significantly less time to train...
                      </p>
                    </div>
                  </div>
                )}
                {selectedView === 'images' && (
                  <div className="space-y-2 sm:space-y-3 flex flex-col h-full">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 flex-shrink-0">
                      <Image className="w-3 h-3 sm:w-4 sm:h-4 text-neutral-500" />
                      <span>6 high-res images detected</span>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 sm:gap-2 flex-1 min-h-0">
                      <div className="rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 flex items-center justify-center bg-white dark:bg-neutral-800">
                        <img src={MODAL_NET_19} alt="ModalNet architecture diagram" className="w-full h-full object-contain max-h-full" />
                      </div>
                      <div className="rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 flex items-center justify-center bg-white dark:bg-neutral-800">
                        <img src={MODAL_NET_21} alt="ModalNet architecture diagram" className="w-full h-full object-contain max-h-full" />
                      </div>
                    </div>
                    <div className="text-[10px] sm:text-xs text-neutral-500 text-center flex-shrink-0">All images at original resolution</div>
                  </div>
                )}
                {selectedView === 'formulas' && (
                  <div className="space-y-2 sm:space-y-3 flex flex-col h-full">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 flex-shrink-0">
                      <Code className="w-3 h-3 sm:w-4 sm:h-4 text-neutral-500" />
                      <span>47 LaTeX formulas rendered</span>
                    </div>
                    <div className="bg-white dark:bg-neutral-800 rounded-lg p-2 sm:p-3 lg:p-4 border border-neutral-200 dark:border-neutral-700 flex-1 flex flex-col min-h-0">
                      <div className="flex-1 flex items-center justify-center min-h-0 overflow-hidden">
                        <img src={LATEX_ATTENTION} alt="Attention formula" className="w-full h-full object-contain max-h-full" />
                      </div>
                      <div className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-neutral-500 flex-shrink-0">Perfectly rendered LaTeX</div>
                    </div>
              </div>
                )}
              </div>
            </div>
          </div>
          <div className="space-y-3 sm:space-y-4 lg:space-y-6 order-2 lg:order-2">
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight">
                No <span className="text-primary">Detail Lost</span>
              </h3>
              <p className="text-sm sm:text-base lg:text-xl text-neutral-300 font-semibold">
                Every element, perfectly recreated.
              </p>
            </div>
            <p className="text-xs sm:text-sm lg:text-lg text-neutral-300 leading-relaxed font-semibold">
              Kael doesn't "convert" your paper—it <strong className="text-white font-semibold">rebuilds it with precision</strong>. Every word, figure, and formula appears exactly as in the original, with zero loss in quality or structure.
            </p>
            <div className="space-y-1.5 sm:space-y-2 lg:space-y-3 pt-1 sm:pt-2 lg:pt-3">
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-xs sm:text-sm lg:text-lg">Text 100% preserved</span>
              </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-xs sm:text-sm lg:text-lg">High-resolution images</span>
              </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-xs sm:text-sm lg:text-lg">Full LaTeX formula rendering</span>
              </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-xs sm:text-sm lg:text-lg">Accurate tables, citations, and footnotes</span>
              </div>
            </div>
            <div className="pt-3 sm:pt-4 lg:pt-6">
              <Button
                asChild
                variant="hero"
                size="lg"
                className="rounded-xl text-xs sm:text-sm lg:text-lg px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-6 w-full sm:w-auto"
              >
                <a href={START_FOR_FREE_URL} target="_blank" rel="noopener noreferrer">
                  Start Free Conversion
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Feature 2: Seamless Reading Everywhere */}
        <div ref={feature2Ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-20 items-center mb-12 sm:mb-16 lg:mb-40 max-w-[1800px] mx-auto ${feature2Visible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1 animate-fade-in-up">
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight">
                Seamless Reading <span className="text-primary">Everywhere</span>
              </h3>
              <p className="text-sm sm:text-base lg:text-xl text-neutral-300 font-semibold">
                Beautifully displayed on desktop, tablet, and mobile.
              </p>
            </div>
            <p className="text-xs sm:text-sm lg:text-lg text-neutral-300 leading-relaxed font-semibold">
              No more pinching and zooming through rigid PDFs. Kael <strong className="text-white font-semibold">adapts your paper's layout for any screen</strong>—making academic reading smooth, focused, and immersive.
            </p>
            <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary flex-shrink-0" />
                <span className="text-white font-semibold text-xs sm:text-sm lg:text-lg">Optimized for all devices</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary flex-shrink-0" />
                <span className="text-white font-semibold text-xs sm:text-sm lg:text-lg">Night mode & eye-comfort design</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary flex-shrink-0" />
                <span className="text-white font-semibold text-xs sm:text-sm lg:text-lg">Reading progress syncs across devices</span>
              </div>
            </div>
            <div className="pt-3 sm:pt-4 lg:pt-6">
              <Button
                asChild
                variant="hero"
                size="lg"
                className="rounded-xl text-xs sm:text-sm lg:text-lg px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-6 w-full sm:w-auto"
              >
                <a href={START_FOR_FREE_URL} target="_blank" rel="noopener noreferrer">
                  Start Free Conversion
                </a>
              </Button>
            </div>
          </div>
          <div className="lg:pr-8 order-1 lg:order-2">
            <div className="flex w-full max-w-[576px] mx-auto flex-col items-start rounded-xl sm:rounded-2xl border-2 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {/* Device Preview Interface */}
              <div className="w-full border-b border-neutral-200 dark:border-neutral-700 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h4 className="text-sm sm:text-base lg:text-xl font-bold text-neutral-900 dark:text-white">Responsive Preview</h4>
                  <div className="flex items-center gap-0.5 sm:gap-1">
                    <button
                      onClick={() => setSelectedDevice('desktop')}
                      className={`p-1.5 sm:p-2 rounded-lg transition-colors ${
                        selectedDevice === 'desktop'
                          ? 'bg-neutral-600 dark:bg-neutral-500 text-white'
                          : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700'
                      }`}
                    >
                      <Monitor className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                    <button
                      onClick={() => setSelectedDevice('tablet')}
                      className={`p-1.5 sm:p-2 rounded-lg transition-colors ${
                        selectedDevice === 'tablet'
                          ? 'bg-neutral-600 dark:bg-neutral-500 text-white'
                          : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700'
                      }`}
                    >
                      <Tablet className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                    <button
                      onClick={() => setSelectedDevice('mobile')}
                      className={`p-1.5 sm:p-2 rounded-lg transition-colors ${
                        selectedDevice === 'mobile'
                          ? 'bg-neutral-600 dark:bg-neutral-500 text-white'
                          : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700'
                      }`}
                    >
                      <Smartphone className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                  </div>
                </div>
                
              <div className="w-full p-3 sm:p-4 lg:p-6 bg-neutral-50 dark:bg-neutral-900">
                <div className={`mx-auto rounded-lg shadow-lg transition-all duration-300 ${
                  selectedDevice === 'desktop' ? 'w-full max-w-full' :
                  selectedDevice === 'tablet' ? 'w-full max-w-md' :
                  'w-full max-w-[280px]'
                } ${isDarkMode ? 'bg-neutral-800' : 'bg-white'}`}>
                  <div className={`border-b px-4 py-2 flex items-center gap-2 ${isDarkMode ? 'border-neutral-700' : 'border-neutral-200'}`}>
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className={`flex-1 text-center text-xs ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      paper.kael.im/research-paper
                    </div>
                    <button
                      onClick={() => setIsDarkMode(!isDarkMode)}
                      className="p-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                      aria-label="Toggle dark mode"
                    >
                      {isDarkMode ? (
                        <Sun className="w-4 h-4 text-neutral-400" />
                      ) : (
                        <Moon className="w-4 h-4 text-neutral-400" />
                      )}
                    </button>
                  </div>
                  <div className={`p-2 sm:p-3 lg:p-4 space-y-2 sm:space-y-3 ${isDarkMode ? 'bg-neutral-800' : 'bg-white'}`}>
                    <h5 className={`text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2 ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>Attention Is All You Need</h5>
                    <div className={`h-3 sm:h-4 rounded w-3/4 ${isDarkMode ? 'bg-neutral-700' : 'bg-neutral-200'}`}></div>
                    <div className={`h-3 sm:h-4 rounded w-full ${isDarkMode ? 'bg-neutral-700' : 'bg-neutral-200'}`}></div>
                    <div className={`h-3 sm:h-4 rounded w-5/6 ${isDarkMode ? 'bg-neutral-700' : 'bg-neutral-200'}`}></div>
                    <div className={`h-20 sm:h-24 lg:h-32 rounded-lg mt-2 sm:mt-4 flex items-center justify-center ${isDarkMode ? 'bg-neutral-700' : 'bg-neutral-200'}`}>
                      <Image className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${isDarkMode ? 'text-neutral-500' : 'text-neutral-400'}`} />
                    </div>
                    <div className={`h-3 sm:h-4 rounded w-full mt-2 sm:mt-4 ${isDarkMode ? 'bg-neutral-700' : 'bg-neutral-200'}`}></div>
                    <div className={`h-3 sm:h-4 rounded w-4/5 ${isDarkMode ? 'bg-neutral-700' : 'bg-neutral-200'}`}></div>
                  </div>
                </div>
                <div className="mt-2 sm:mt-4 flex items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-neutral-500">
                  <div className="flex items-center gap-1">
                    <RefreshCw className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    <span>Sync enabled</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Moon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    <span>Dark mode</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
              
        {/* Feature 3: Amplify Your Reach */}
        <div ref={feature3Ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-20 items-center mb-12 sm:mb-16 lg:mb-40 max-w-[1800px] mx-auto ${feature3Visible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
          <div className="lg:pl-8 order-1 lg:order-1">
            <div className="flex w-full max-w-[576px] mx-auto flex-col items-start rounded-xl sm:rounded-2xl border-2 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {/* Analytics Dashboard */}
              <div className="w-full border-b border-neutral-200 dark:border-neutral-700 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h4 className="text-sm sm:text-base lg:text-xl font-bold text-neutral-900 dark:text-white">Analytics Dashboard</h4>
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                </div>
                <div className="flex gap-1.5 sm:gap-2">
                  <button
                    onClick={() => setAnalyticsTab('overview')}
                    className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[10px] sm:text-xs lg:text-sm font-medium transition-colors ${
                      analyticsTab === 'overview'
                        ? 'bg-neutral-600 dark:bg-neutral-500 text-white'
                        : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-600'
                    }`}
                  >
                    Overview
                  </button>
                  <button 
                    onClick={() => setAnalyticsTab('seo')}
                    className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[10px] sm:text-xs lg:text-sm font-medium transition-colors ${
                      analyticsTab === 'seo'
                        ? 'bg-neutral-600 dark:bg-neutral-500 text-white'
                        : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-600'
                    }`}
                  >
                    SEO
                  </button>
                  <button 
                    onClick={() => setAnalyticsTab('social')}
                    className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[10px] sm:text-xs lg:text-sm font-medium transition-colors ${
                      analyticsTab === 'social'
                        ? 'bg-neutral-600 dark:bg-neutral-500 text-white'
                        : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-600'
                    }`}
                  >
                    Social
                  </button>
                </div>
              </div>
              
              <div className="w-full p-3 sm:p-4 lg:p-6 bg-neutral-50 dark:bg-neutral-900 h-[280px] sm:h-[300px] overflow-y-auto">
                {analyticsTab === 'overview' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white dark:bg-neutral-800 rounded-lg p-3 border border-neutral-200 dark:border-neutral-700">
                        <div className="text-xs text-neutral-500 mb-1">Total Views</div>
                        <div className="text-2xl font-bold text-neutral-900 dark:text-white">12.4K</div>
                        <div className="text-xs text-green-500 flex items-center gap-1 mt-1">
                          <TrendingUp className="w-3 h-3" />
                          +23%
                        </div>
                      </div>
                      <div className="bg-white dark:bg-neutral-800 rounded-lg p-3 border border-neutral-200 dark:border-neutral-700">
                        <div className="text-xs text-neutral-500 mb-1">Citations</div>
                        <div className="text-2xl font-bold text-neutral-900 dark:text-white">47</div>
                        <div className="text-xs text-green-500 flex items-center gap-1 mt-1">
                          <TrendingUp className="w-3 h-3" />
                          +12%
                        </div>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-neutral-800 rounded-lg p-3 border border-neutral-200 dark:border-neutral-700">
                      <div className="text-xs text-neutral-500 mb-2">Traffic Sources</div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-neutral-700 dark:text-neutral-300">Google Scholar</span>
                          <span className="text-sm font-semibold text-neutral-900 dark:text-white">42%</span>
                        </div>
                        <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{width: '42%'}}></div>
              </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-neutral-700 dark:text-neutral-300">Social Media</span>
                          <span className="text-sm font-semibold text-neutral-900 dark:text-white">28%</span>
              </div>
                        <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{width: '28%'}}></div>
            </div>
          </div>
        </div>
                    </div>
                  )}
                {analyticsTab === 'seo' && (
                  <div className="space-y-2.5 h-full flex flex-col">
                    {/* Combined SEO Score & Key Metrics - Compact */}
                    <div className="bg-white dark:bg-neutral-800 rounded-lg p-2.5 border border-neutral-200 dark:border-neutral-700 flex-shrink-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Search className="w-4 h-4 text-primary" />
                        <span className="text-xs font-semibold text-neutral-900 dark:text-white">SEO Score</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-2xl font-bold text-primary">94/100</div>
                        <div className="grid grid-cols-4 gap-2 flex-1">
                          <div className="bg-neutral-100 dark:bg-neutral-900 rounded-lg p-2 border border-neutral-200 dark:border-neutral-700">
                            <div className="text-[10px] text-neutral-500 mb-1">Monthly Visits</div>
                            <div className="text-sm font-bold text-neutral-900 dark:text-white">12.4K</div>
                          </div>
                          <div className="bg-neutral-100 dark:bg-neutral-900 rounded-lg p-2 border border-neutral-200 dark:border-neutral-700">
                            <div className="text-[10px] text-neutral-500 mb-1">Bounce Rate</div>
                            <div className="text-sm font-bold text-neutral-900 dark:text-white">31.2%</div>
                          </div>
                          <div className="bg-neutral-100 dark:bg-neutral-900 rounded-lg p-2 border border-neutral-200 dark:border-neutral-700">
                            <div className="text-[10px] text-neutral-500 mb-1">Pages/Visit</div>
                            <div className="text-sm font-bold text-neutral-900 dark:text-white">3.84</div>
                          </div>
                          <div className="bg-neutral-100 dark:bg-neutral-900 rounded-lg p-2 border border-neutral-200 dark:border-neutral-700">
                            <div className="text-[10px] text-neutral-500 mb-1">Avg. Duration</div>
                            <div className="text-sm font-bold text-neutral-900 dark:text-white">06:25</div>
                          </div>
                  </div>
                </div>
                    </div>

                    {/* Combined Visits Over Time & Traffic Sources - Side by side */}
                    <div className="grid grid-cols-2 gap-2.5 flex-1 min-h-0">
                      {/* Visits Over Time Line Chart - Smaller */}
                      <div className="bg-white dark:bg-neutral-800 rounded-lg p-2 border border-neutral-200 dark:border-neutral-700 flex flex-col">
                        <div className="text-[10px] font-semibold text-neutral-900 dark:text-white mb-1 flex-shrink-0">Visits Over Time</div>
                        <div className="relative flex-1 bg-neutral-50 dark:bg-neutral-900 rounded-lg p-1.5 min-h-0">
                          {/* Y-axis labels */}
                          <div className="absolute left-0.5 top-1 text-[7px] text-neutral-400 font-medium">
                            <div>20K</div>
                            <div className="mt-5">0</div>
                          </div>
                          {/* Line chart area */}
                          <div className="flex-1 ml-5 mr-1 relative h-full">
                            {/* SVG for line chart */}
                            <svg className="absolute inset-0 w-full h-full text-primary" viewBox="0 0 100 100" preserveAspectRatio="none">
                              {/* Line connecting the three points */}
                              <polyline
                                points="5,74 50,38 95,6.5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              {/* Data points */}
                              <circle cx="5" cy="74" r="2.5" fill="currentColor" />
                              <circle cx="50" cy="38" r="2.5" fill="currentColor" />
                              <circle cx="95" cy="6.5" r="2.5" fill="currentColor" />
                            </svg>
                            {/* Month labels and values */}
                            <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end">
                              <div className="flex flex-col items-center">
                                <div className="text-[7px] text-neutral-500">Aug</div>
                                <div className="text-[6px] text-neutral-400">5.2K</div>
                              </div>
                              <div className="flex flex-col items-center">
                                <div className="text-[7px] text-neutral-500">Sep</div>
                                <div className="text-[6px] text-neutral-400">12.4K</div>
                              </div>
                              <div className="flex flex-col items-center">
                                <div className="text-[7px] text-neutral-500">Oct</div>
                                <div className="text-[6px] text-neutral-400">18.7K</div>
                              </div>
                            </div>
                    </div>
                  </div>
                </div>
                
                      {/* Traffic Sources - Compact */}
                      <div className="bg-white dark:bg-neutral-800 rounded-lg p-2 border border-neutral-200 dark:border-neutral-700 flex flex-col">
                        <div className="text-[10px] font-semibold text-neutral-900 dark:text-white mb-1 flex-shrink-0">Traffic Sources</div>
                        <div className="space-y-0.5 flex-1 overflow-y-auto">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                              <span className="text-[9px] text-neutral-700 dark:text-neutral-300">Direct</span>
                            </div>
                            <span className="text-[9px] font-semibold text-neutral-900 dark:text-white">76.80%</span>
                          </div>
                          <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-0.5">
                            <div className="bg-blue-500 h-0.5 rounded-full" style={{width: '76.80%'}}></div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                              <span className="text-[9px] text-neutral-700 dark:text-neutral-300">Search</span>
                            </div>
                            <span className="text-[9px] font-semibold text-neutral-900 dark:text-white">18.26%</span>
                          </div>
                          <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-0.5">
                            <div className="bg-red-500 h-0.5 rounded-full" style={{width: '18.26%'}}></div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                              <span className="text-[9px] text-neutral-700 dark:text-neutral-300">Referrals</span>
                            </div>
                            <span className="text-[9px] font-semibold text-neutral-900 dark:text-white">4.29%</span>
                          </div>
                          <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-0.5">
                            <div className="bg-green-500 h-0.5 rounded-full" style={{width: '4.29%'}}></div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                              <span className="text-[9px] text-neutral-700 dark:text-neutral-300">Social</span>
                            </div>
                            <span className="text-[9px] font-semibold text-neutral-900 dark:text-white">0.32%</span>
                          </div>
                          <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-0.5">
                            <div className="bg-purple-500 h-0.5 rounded-full" style={{width: '0.32%'}}></div>
                          </div>
                </div>
              </div>
                    </div>
                    </div>
                  )}
                {analyticsTab === 'social' && (
                  <div className="space-y-2">
                    <div className="bg-white dark:bg-neutral-800 rounded-lg p-2.5 border border-neutral-200 dark:border-neutral-700">
                      <div className="text-xs font-semibold text-neutral-900 dark:text-white mb-2">Social Preview</div>
                      <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
                        <div className="h-24 bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
                          <img 
                            src={ATTENTION_PAPER} 
                            alt="Attention Is All You Need - Transformer Architecture"
                            className="w-full h-full object-cover"
                          />
                </div>
                        <div className="p-2 bg-white dark:bg-neutral-900">
                          <div className="text-xs font-semibold text-neutral-900 dark:text-white mb-0.5">Attention Is All You Need</div>
                          <div className="text-[10px] text-neutral-600 dark:text-neutral-400">Auto-generated preview card</div>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center gap-3 text-[10px] text-neutral-500">
                        <div className="flex items-center gap-1">
                          <Share2 className="w-3 h-3" />
                          <span>128 shares</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          <span>2.1K views</span>
                        </div>
                        </div>
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>
          <div className="space-y-3 sm:space-y-4 lg:space-y-6 order-2 lg:order-2">
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight">
                Amplify Your <span className="text-primary">Reach</span>
              </h3>
              <p className="text-sm sm:text-base lg:text-xl text-neutral-300 font-semibold">
                Get discovered, shared, and cited more.
              </p>
            </div>
            <p className="text-xs sm:text-sm lg:text-lg text-neutral-300 leading-relaxed font-semibold">
              Kael <strong className="text-white font-semibold">optimizes your paper for SEO</strong>, generates social previews, and tracks engagement—helping your research reach the audience it deserves.
            </p>
            <div className="space-y-1.5 sm:space-y-2 lg:space-y-3 pt-1 sm:pt-2 lg:pt-3">
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-xs sm:text-sm lg:text-lg">SEO & structured metadata</span>
              </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-xs sm:text-sm lg:text-lg">Auto-generated social cards</span>
              </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-xs sm:text-sm lg:text-lg">Read & citation analytics</span>
              </div>
            </div>
            <div className="pt-3 sm:pt-4 lg:pt-6">
              <Button
                asChild
                variant="hero"
                size="lg"
                className="rounded-xl text-xs sm:text-sm lg:text-lg px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-6 w-full sm:w-auto"
              >
                <a href={START_FOR_FREE_URL} target="_blank" rel="noopener noreferrer">
                  Start Free Conversion
                </a>
              </Button>
            </div>
          </div>
        </div>
                
        {/* Feature 4: Designed to Impress */}
        <div ref={feature4Ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-20 items-center max-w-[1800px] mx-auto ${feature4Visible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1 animate-fade-in-up">
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight">
                Designed to <span className="text-primary">Impress</span>
              </h3>
              <p className="text-sm sm:text-base lg:text-xl text-neutral-300 font-semibold">
                Academic doesn't have to mean boring.
              </p>
            </div>
            <p className="text-xs sm:text-sm lg:text-lg text-neutral-300 leading-relaxed font-semibold">
              Choose from <strong className="text-white font-semibold">modern, geek, or editorial themes</strong>—or customize fonts and colors to match your personal or lab brand.
            </p>
            <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary flex-shrink-0" />
                <span className="text-white font-semibold text-xs sm:text-sm lg:text-lg">5+ professional preset themes</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary flex-shrink-0" />
                <span className="text-white font-semibold text-xs sm:text-sm lg:text-lg">Custom brand palette</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary flex-shrink-0" />
                <span className="text-white font-semibold text-xs sm:text-sm lg:text-lg">20+ font options (English & Chinese)</span>
              </div>
            </div>
            <div className="pt-3 sm:pt-4 lg:pt-6">
              <Button
                asChild
                variant="hero"
                size="lg"
                className="rounded-xl text-xs sm:text-sm lg:text-lg px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-6 w-full sm:w-auto"
              >
                <a href={START_FOR_FREE_URL} target="_blank" rel="noopener noreferrer">
                  Start Free Conversion
                </a>
              </Button>
            </div>
          </div>
          <div className="lg:pr-8 order-1 lg:order-2">
            <div className="flex w-full max-w-[576px] mx-auto flex-col items-start rounded-xl sm:rounded-2xl border-2 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {/* Theme Customizer */}
              <div className="w-full border-b border-neutral-200 dark:border-neutral-700 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h4 className="text-sm sm:text-base lg:text-xl font-bold text-neutral-900 dark:text-white">Theme Customizer</h4>
                  <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="flex gap-1.5 sm:gap-2">
                  <button
                    onClick={() => setSelectedTheme('editorial')}
                    className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[10px] sm:text-xs lg:text-sm font-medium transition-colors ${
                      selectedTheme === 'editorial'
                        ? 'bg-neutral-600 dark:bg-neutral-500 text-white'
                        : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-600'
                    }`}
                  >
                    Editorial
                  </button>
                  <button 
                    onClick={() => setSelectedTheme('minimalist')}
                    className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[10px] sm:text-xs lg:text-sm font-medium transition-colors ${
                      selectedTheme === 'minimalist'
                        ? 'bg-neutral-600 dark:bg-neutral-500 text-white'
                        : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-600'
                    }`}
                  >
                    Geek
                  </button>
                  <button 
                    onClick={() => setSelectedTheme('modern')}
                    className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[10px] sm:text-xs lg:text-sm font-medium transition-colors ${
                      selectedTheme === 'modern'
                        ? 'bg-neutral-600 dark:bg-neutral-500 text-white'
                        : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-600'
                    }`}
                  >
                    Modern
                  </button>
                </div>
              </div>
              
              <div className="w-full p-3 sm:p-4 lg:p-6 bg-neutral-50 dark:bg-neutral-900 h-[260px] sm:h-[280px] lg:h-[300px]">
                <div className={`rounded-lg p-6 h-full flex flex-col transition-all duration-300 shadow-sm ${
                  selectedTheme === 'editorial'
                    ? 'bg-[#fefcf8] dark:bg-[#1a1815] border border-neutral-300 dark:border-neutral-700'
                    : selectedTheme === 'modern' 
                    ? 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-md'
                    : 'bg-[#0d1117] dark:bg-[#0d1117] border border-neutral-700 dark:border-neutral-600'
                }`}>
                  <div className={`flex flex-col h-full ${
                    selectedTheme === 'editorial' ? 'font-serif' :
                    selectedTheme === 'modern' ? 'font-sans' :
                    'font-mono'
                  }`}>
                    {/* Editorial - NYT Newspaper Style */}
                    {selectedTheme === 'editorial' && (
                      <>
                        <div className="text-xl font-bold mb-4 text-neutral-900 dark:text-neutral-100 leading-tight tracking-tight" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>
                          Attention Is All You Need
                        </div>
                        <div className="h-0.5 bg-neutral-400 dark:bg-neutral-600 mb-4"></div>
                        <div className="text-sm leading-relaxed flex-1 text-neutral-800 dark:text-neutral-200" style={{fontFamily: 'Georgia, "Times New Roman", serif', lineHeight: '1.8'}}>
                          <span className="font-semibold text-neutral-900 dark:text-neutral-100">Abstract:</span> The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism.
                        </div>
                        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-neutral-300 dark:border-neutral-700">
                          <div className="flex gap-2">
                            <Type className="w-4 h-4 text-neutral-500" />
                            <span className="text-xs text-neutral-600 dark:text-neutral-400">Font: Georgia</span>
                          </div>
                          <div className="flex gap-2">
                            <Palette className="w-4 h-4 text-neutral-500" />
                            <span className="text-xs text-neutral-600 dark:text-neutral-400">Classic palette</span>
                          </div>
                        </div>
                      </>
                    )}
                    
                    {/* Modern - Typora/Notion Style */}
                    {selectedTheme === 'modern' && (
                      <>
                        <div className="text-xl font-semibold mb-4 text-neutral-900 dark:text-neutral-50 leading-tight">
                          Attention Is All You Need
                        </div>
                        <div className="h-px bg-neutral-200 dark:bg-neutral-700 mb-4"></div>
                        <div className="text-sm leading-relaxed flex-1 text-neutral-700 dark:text-neutral-300">
                          <span className="font-semibold text-neutral-900 dark:text-neutral-50">Abstract:</span> The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism.
                        </div>
                        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                          <div className="flex gap-2">
                            <Type className="w-4 h-4 text-neutral-400" />
                            <span className="text-xs text-neutral-500 dark:text-neutral-400">Font: Inter</span>
                          </div>
                          <div className="flex gap-2">
                            <Palette className="w-4 h-4 text-neutral-400" />
                            <span className="text-xs text-neutral-500 dark:text-neutral-400">Clean palette</span>
                          </div>
                        </div>
                      </>
                    )}
                    
                    {/* Geek - Coding Style */}
                    {selectedTheme === 'minimalist' && (
                      <>
                        <div className="text-base font-semibold mb-3 text-[#58a6ff] dark:text-[#58a6ff] leading-tight">
                          Attention Is All You Need
                        </div>
                        <div className="h-px bg-neutral-700 dark:bg-neutral-600 mb-3"></div>
                        <div className="text-xs leading-relaxed flex-1 text-[#c9d1d9] dark:text-[#c9d1d9] font-mono">
                          <span className="text-[#79c0ff] dark:text-[#79c0ff] font-semibold">Abstract:</span> The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism.
                        </div>
                        <div className="flex items-center gap-4 mt-4 pt-3 border-t border-neutral-700 dark:border-neutral-600">
                          <div className="flex gap-2">
                            <Type className="w-4 h-4 text-[#8b949e]" />
                            <span className="text-xs text-[#8b949e] font-mono">Font: JetBrains Mono</span>
                          </div>
                          <div className="flex gap-2">
                            <Palette className="w-4 h-4 text-[#8b949e]" />
                            <span className="text-xs text-[#8b949e] font-mono">Dark theme</span>
                      </div>
                    </div>
                      </>
                  )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
