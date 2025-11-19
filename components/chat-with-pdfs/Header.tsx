import { Button } from "@/components/ui/button";
import { START_FOR_FREE_URL } from "./constants";
import { Globe } from "lucide-react";

const KAEL_LOGO = "/chat-with-pdfs/kael-logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-700/40 bg-white shadow-md transition-colors animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center animate-fade-in-right overflow-visible p-2">
            <img src={KAEL_LOGO} alt="Kael" className="h-16 sm:h-24 lg:h-32 object-contain hover:scale-105 transition-transform duration-300" />
          </div>

          {/* Navigation Links - Centered */}
          <nav className="hidden lg:flex items-center gap-10 flex-1">
            <a href="#features" className="text-neutral-700 hover:text-primary transition-colors font-medium text-lg">
              Features
            </a>
            <a href="#how-it-works" className="text-neutral-700 hover:text-primary transition-colors font-medium text-lg">
              How It Works
            </a>
            <a href="#faq" className="text-neutral-700 hover:text-primary transition-colors font-medium text-lg">
              FAQ
            </a>
            <a href="#pricing" className="text-neutral-700 hover:text-primary transition-colors font-medium text-lg">
              Pricing
            </a>
          </nav>

          {/* Right Section - Language & CTA */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="hidden md:flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium text-sm sm:text-lg">English</span>
            </button>
            
            <Button asChild variant="hero" size="default" className="rounded-full hover:scale-105 transition-all duration-300 px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-6 text-sm sm:text-base lg:text-lg">
              <a href={START_FOR_FREE_URL} target="_blank" rel="noopener noreferrer">
                Get 1 month Pro Plan for free
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
