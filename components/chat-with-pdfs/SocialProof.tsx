"use client";

import { Users, FileText, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PROFILE_ZHANG = "/chat-with-pdfs/profile-zhang.jpg";
const PROFILE_SARAH = "/chat-with-pdfs/profile-sarah.jpg";
const PROFILE_LIMING = "/chat-with-pdfs/profile-liming.jpg";
const SCHOOL_LOGOS = {
  tsinghua: "/chat-with-pdfs/logos/tsinghua-new.png",
  peking: "/chat-with-pdfs/logos/Peking_University.png",
  stanford: "/chat-with-pdfs/logos/Stanford_Cardinal_logo.svg.png",
  mit: "/chat-with-pdfs/logos/mit-full.png",
} as const;

const SocialProof = () => {
  const [trustRef, trustVisible] = useScrollAnimation();
  const [testimonialsRef, testimonialsVisible] = useScrollAnimation();
  const stats = [
    {
      icon: FileText,
      value: "5,000+",
      label: "LivePapers published",
    },
    {
      icon: Users,
      value: "Higher",
      label: "reader comprehension",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "satisfaction score",
    },
  ];

  const testimonials = [
    {
      quote: "It's the first time I've truly understood a complex model.",
      detail: "",
      author: "Li Ming",
      title: "CS Master's, Peking University",
      profilePic: PROFILE_LIMING,
      schoolLogo: SCHOOL_LOGOS.peking,
    },
    {
      quote: "Colleagues understand and discuss our research much more easily on social media.",
      detail: "",
      author: "Dr. Sarah Chen",
      title: "ML Researcher, Stanford University",
      profilePic: PROFILE_SARAH,
      schoolLogo: SCHOOL_LOGOS.stanford,
    },
    {
      quote: "This is an entirely new way to express academic work.",
      detail: "",
      author: "Prof. Zhang Wei",
      title: "AI Director, Tsinghua University",
      profilePic: PROFILE_ZHANG,
      schoolLogo: SCHOOL_LOGOS.tsinghua,
    },
  ];

  return (
    <>
      {/* Trust Section */}
      <section ref={trustRef} className={`w-full py-12 sm:py-16 lg:py-20 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700/50 ${trustVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
        <div className="container mx-auto px-10 sm:px-12 lg:px-16">
          <h2 className="text-center text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-white mb-8 sm:mb-12 lg:mb-16 px-4">
            Trusted by Researchers Worldwide
          </h2>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`text-center space-y-3 sm:space-y-4 lg:space-y-5 animate-scale-in ${index === 0 ? 'animation-delay-100' : index === 1 ? 'animation-delay-200' : 'animation-delay-300'}`}>
                <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 mb-2 sm:mb-3 lg:mb-4 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-float`} style={{animationDelay: `${index * 0.2}s`}}>
                  <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 text-primary" strokeWidth={2.5} />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-neutral-300 font-medium px-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className={`w-full py-12 sm:py-16 lg:py-24 transition-colors dark:bg-neutral-900 ${testimonialsVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{backgroundImage: 'linear-gradient(to bottom, white 0%, rgb(229 229 229) 15%, rgb(163 163 163) 35%, rgb(115 115 115) 55%, rgb(64 64 64) 75%, rgb(23 23 23) 100%)'}}>
        <div className="container mx-auto px-10 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto items-stretch">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.author} className={`relative h-full animate-fade-in-up ${index === 0 ? 'animation-delay-200' : 'animation-delay-400'}`}>
                <Card className="border-2 border-neutral-300 dark:border-neutral-700 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-visible h-full flex flex-col bg-white dark:bg-neutral-800/50">
                  <CardContent className="p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-5 lg:space-y-6 flex flex-col h-full">
                    <div className="flex gap-1 mb-2 sm:mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="space-y-3 sm:space-y-4 lg:space-y-5 flex-grow">
                      <p className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-900 dark:text-white leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      {testimonial.detail && (
                        <p className="text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                          {testimonial.detail}
                        </p>
                      )}
                    </blockquote>
                    <div className="pt-3 sm:pt-4 lg:pt-5 border-t border-neutral-200 dark:border-neutral-700 flex flex-row items-center justify-between gap-2 sm:gap-3">
                      <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                        <img
                          src={testimonial.profilePic}
                          alt={testimonial.author}
                          className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-primary/20 flex-shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <div className="font-bold text-neutral-900 dark:text-white text-base sm:text-lg">
                            {testimonial.author}
                          </div>
                          <div className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
                            {testimonial.title}
                          </div>
                        </div>
                      </div>
                      <img
                        src={testimonial.schoolLogo}
                        alt="University Logo"
                        className="h-7 sm:h-9 lg:h-10 object-contain opacity-70 flex-shrink-0"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialProof;
