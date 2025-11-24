"use client";

import { GraduationCap, BookOpen, Building2, Newspaper } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const UseCases = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation();
  
  const useCases = [
    {
      icon: GraduationCap,
      title: "Students & Learners",
      items: [
        "Animated concepts make papers easier",
        "Learn anywhere, anytime",
        "Interactive figures reduce effort"
      ]
    },
    {
      icon: BookOpen,
      title: "Academic Authors",
      items: [
        "Modern, dynamic research presentation",
        "Higher visibility & citation potential",
        "Great for classes, talks, and collaborators"
      ]
    },
    {
      icon: Building2,
      title: "Institutions & Labs",
      items: [
        "Unified research showcase",
        "Stronger public presence",
        "Clear, high-impact results pages"
      ]
    },
    {
      icon: Newspaper,
      title: "Tech Media",
      items: [
        "Explain complex work more clearly",
        "Use dynamic assets directly",
        "Improve clarity and engagement"
      ]
    }
  ];

  return (
    <section id="use-cases" ref={sectionRef} className={`w-full py-12 sm:py-16 lg:py-24 bg-white dark:bg-neutral-900 ${sectionVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
      <div className="container mx-auto px-10 sm:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white text-center mb-12 sm:mb-16 lg:mb-20 px-4">
            Built for every role in research
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {useCases.map((useCase, index) => (
              <div
                key={useCase.title}
                className={`rounded-2xl border-2 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 p-6 sm:p-8 lg:p-10 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-fade-in-up ${index === 0 ? 'animation-delay-100' : index === 1 ? 'animation-delay-200' : index === 2 ? 'animation-delay-300' : 'animation-delay-400'}`}
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-primary/10 flex-shrink-0">
                    <useCase.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-900 dark:text-white">
                      {useCase.title}
                    </h3>
                    <ul className="space-y-2 sm:space-y-3">
                      {useCase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 sm:gap-3">
                          <span className="text-primary mt-1 sm:mt-1.5">•</span>
                          <span className="text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-neutral-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;

