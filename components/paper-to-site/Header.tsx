"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

import { START_FOR_FREE_URL } from "./constants";

const KAEL_LOGO = "/paper-to-site/kael-logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-700/40 bg-white shadow-md transition-colors animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex h-14 sm:h-16 lg:h-20 items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center animate-fade-in-right overflow-visible">
            <img src={KAEL_LOGO} alt="Kael" className="h-14 sm:h-16 lg:h-24 object-contain hover:scale-105 transition-transform duration-300" />
          </div>

          {/* Navigation Links - Desktop */}
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
          </nav>

          {/* Right Section - CTA & Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Button
              asChild
              variant="hero"
              size="default"
              className="rounded-full hover:scale-105 transition-all duration-300 px-3 py-1.5 sm:px-4 sm:py-2 lg:px-8 lg:py-6 text-xs sm:text-sm lg:text-lg hidden sm:flex"
            >
              <a href={START_FOR_FREE_URL} target="_blank" rel="noopener noreferrer">
                Start Free Conversion
              </a>
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-700 hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-200 py-4 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a 
                href="#features" 
                className="text-neutral-700 hover:text-primary transition-colors font-medium px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="text-neutral-700 hover:text-primary transition-colors font-medium px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#faq" 
                className="text-neutral-700 hover:text-primary transition-colors font-medium px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <Button
                asChild
                variant="hero"
                size="default"
                className="rounded-full mt-2 mx-2 w-auto"
                onClick={() => setMobileMenuOpen(false)}
              >
                <a href={START_FOR_FREE_URL} target="_blank" rel="noopener noreferrer">
                  Start Free Conversion
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
