"use client";

import { GraduationCap, BookOpen, Building2, Newspaper } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const UseCases = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation();
  const [case1Ref, case1Visible] = useScrollAnimation();
  const [case2Ref, case2Visible] = useScrollAnimation();
  const [case3Ref, case3Visible] = useScrollAnimation();
  const [case4Ref, case4Visible] = useScrollAnimation();

  const useCases = [
    {
      icon: GraduationCap,
      title: "Graduate & PhD Students",
      subtitle: "Read papers anywhere, effortlessly.",
      benefits: [
        "No more painful zooming on mobile.",
        "Interactive charts make complex ideas easier to grasp.",
        "Learn cutting-edge research on the go.",
      ],
      ref: case1Ref,
      visible: case1Visible,
    },
    {
      icon: BookOpen,
      title: "Academic Authors",
      subtitle: "Get your research seen and cited.",
      benefits: [
        "Turn papers into beautiful, shareable sites.",
        "Boost visibility and citation rates.",
        "SEO optimization helps your work reach more readers.",
      ],
      ref: case2Ref,
      visible: case2Visible,
    },
    {
      icon: Building2,
      title: "Research Labs & Institutions",
      subtitle: "Showcase your collective achievements.",
      benefits: [
        "Unified visual identity across all papers.",
        "Strengthen your academic brand presence.",
        "Easier outreach and collaboration opportunities.",
      ],
      ref: case3Ref,
      visible: case3Visible,
    },
    {
      icon: Newspaper,
      title: "Science & Tech Media",
      subtitle: "Make complex research easy to feature.",
      benefits: [
        "Instantly grasp key results.",
        "Embed and reference interactive charts.",
        "Elevate the clarity and credibility of your stories.",
      ],
      ref: case4Ref,
      visible: case4Visible,
    },
  ];

  return (
    <section ref={sectionRef} className={`w-full py-8 sm:py-12 lg:py-24 bg-white dark:bg-neutral-900 ${sectionVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-3 sm:mb-4 px-4">
              Use Cases
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-neutral-600 dark:text-neutral-400 px-4">
              Different roles. Same breakthrough experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-10">
            {useCases.map((useCase, index) => (
              <div
                key={useCase.title}
                ref={useCase.ref}
                className={`${useCase.visible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="border-2 border-neutral-200 dark:border-neutral-700 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 h-full">
                  <CardContent className="p-6 sm:p-8 lg:p-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-primary/10 flex-shrink-0">
                        <useCase.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-900 dark:text-white mb-2">
                          {useCase.title}
                        </h3>
                        <p className="text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-neutral-400 italic">
                          {useCase.subtitle}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2 sm:space-y-3 mt-4">
                      {useCase.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 sm:gap-3">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
