"use client";

import { FileText, Eye, Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PROFILE_ZHANG = "/paper-to-site/profile-zhang.jpg";
const PROFILE_SARAH = "/paper-to-site/profile-sarah.jpg";
const PROFILE_LIMING = "/paper-to-site/liming.jpg";
const LOGO_TSINGHUA = "/paper-to-site/logos/tsinghua-new.png";
const LOGO_STANFORD = "/paper-to-site/logos/Stanford_Cardinal_logo.svg.png";
const LOGO_PEKING = "/paper-to-site/logos/peking.png";
const LOGO_PEKING_SEAL = "/paper-to-site/Peking_University_seal.svg.png";

const SocialProof = () => {
  const [trustRef, trustVisible] = useScrollAnimation();
  const [testimonialsRef, testimonialsVisible] = useScrollAnimation();
  const stats = [
    {
      icon: FileText,
      value: "5,000+",
      label: "papers beautifully transformed",
    },
    {
      icon: Eye,
      value: "3.5×",
      label: "average readership increase",
    },
    {
      icon: Star,
      value: "4.9 / 5",
      label: "rated by academics globally",
    },
  ];

  const testimonials = [
    {
      quote: "Finally, I can read papers comfortably on my phone.",
      detail: "As a grad student, I often review papers during my commute. Traditional PDFs were a nightmare. With Kael, even my advisor's papers look perfect on mobile—interactive figures make complex concepts so much easier to grasp.",
      author: "Li Ming",
      title: "M.S. CS, Peking University",
      profilePic: PROFILE_LIMING,
      schoolLogo: LOGO_PEKING_SEAL,
    },
    {
      quote: "My paper views grew by 400%.",
      detail: "After converting my paper into a website, traffic on Google Scholar and shares on X skyrocketed. The interactive charts helped peers understand my work faster—and I've received more collaboration requests than ever.",
      author: "Dr. Sarah Chen",
      title: "Machine Learning Researcher, Stanford University",
      profilePic: PROFILE_SARAH,
      schoolLogo: LOGO_STANFORD,
    },
    {
      quote: "This feels like the future of academic publishing.",
      detail: "Our entire lab now publishes papers through Kael. The design, smooth reading experience, and interactive data don't just look good—they make our work more accessible to everyone.",
      author: "Prof. Zhang Wei",
      title: "Director, AI Lab, Tsinghua University",
      profilePic: PROFILE_ZHANG,
      schoolLogo: LOGO_TSINGHUA,
    },
  ];

  return (
    <>
      {/* Trust Section */}
      <section ref={trustRef} className={`w-full py-8 sm:py-12 lg:py-20 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700/50 ${trustVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <h2 className="text-center text-xl sm:text-2xl lg:text-3xl font-semibold text-neutral-900 dark:text-white mb-6 sm:mb-8 lg:mb-16 px-4">
            Trusted by Researchers Worldwide
          </h2>
          <p className="text-center text-sm sm:text-base lg:text-xl text-neutral-600 dark:text-neutral-400 mb-6 sm:mb-8 lg:mb-12 px-4">
            5,000+ papers beautifully transformed
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-16 max-w-5xl mx-auto">
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
      <section ref={testimonialsRef} className={`w-full py-8 sm:py-12 lg:py-24 transition-colors dark:bg-neutral-900 ${testimonialsVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`} style={{backgroundImage: 'linear-gradient(to bottom, white 0%, rgb(229 229 229) 15%, rgb(163 163 163) 35%, rgb(115 115 115) 55%, rgb(64 64 64) 75%, rgb(23 23 23) 100%)'}}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.author} className={`relative animate-fade-in-up ${index === 0 ? 'animation-delay-200' : index === 1 ? 'animation-delay-400' : 'animation-delay-600'}`}>
                <Card className="border-2 border-neutral-300 dark:border-neutral-700 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-visible h-full flex flex-col bg-white dark:bg-neutral-800/50">
                  <CardContent className="p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-5 lg:space-y-6 flex flex-col h-full min-h-[400px]">
                    <div className="flex gap-1 mb-2 sm:mb-3 flex-shrink-0">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="space-y-3 sm:space-y-4 lg:space-y-5 flex-grow">
                      <p className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-900 dark:text-white leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <p className="text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        {testimonial.detail}
                      </p>
                    </blockquote>
                    <div className="pt-3 sm:pt-4 lg:pt-5 border-t border-neutral-200 dark:border-neutral-700 flex items-center justify-between gap-3 sm:gap-4 flex-shrink-0">
                      <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                        <img 
                          src={testimonial.profilePic} 
                          alt={testimonial.author}
                          className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-primary/20 flex-shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <div className="font-bold text-neutral-900 dark:text-white text-base sm:text-lg truncate">
                            {testimonial.author}
                          </div>
                          <div className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 line-clamp-2">
                            {testimonial.title}
                          </div>
                        </div>
                      </div>
                      <img 
                        src={testimonial.schoolLogo} 
                        alt="University Logo"
                        className="h-8 sm:h-10 lg:h-12 object-contain opacity-70 flex-shrink-0"
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
