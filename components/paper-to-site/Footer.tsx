"use client";

import { Twitter, Mail, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-6 sm:py-8 lg:py-12 bg-black dark:bg-black border-t border-neutral-800 dark:border-neutral-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-4 lg:gap-6">
            {/* Contact */}
            <div className="text-center md:text-left order-2 md:order-1 w-full md:w-auto">
              <p className="text-xs sm:text-sm lg:text-base text-neutral-400 mb-2">
                <span className="font-medium text-white">Stay Connected</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 justify-center md:justify-start">
                <a href="mailto:hello@papertosite.ai" className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm lg:text-base text-neutral-400 hover:text-primary transition-colors justify-center md:justify-start">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="break-all">hello@papertosite.ai</span>
                </a>
                <a href="https://twitter.com/PaperToSite" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm lg:text-base text-neutral-400 hover:text-primary transition-colors justify-center md:justify-start">
                  <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>@PaperToSite</span>
                </a>
                <a href="https://github.com/papertosite" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm lg:text-base text-neutral-400 hover:text-primary transition-colors justify-center md:justify-start">
                  <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="break-all">github.com/papertosite</span>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-neutral-800 pt-4 sm:pt-5 lg:pt-6">
            <p className="text-[10px] sm:text-xs lg:text-sm text-neutral-400">
              © 2025 Kael.im — All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
