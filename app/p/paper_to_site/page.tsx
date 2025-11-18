import type { Metadata } from "next";

import Header from "@/components/paper-to-site/Header";
import Hero from "@/components/paper-to-site/Hero";
import Features from "@/components/paper-to-site/Features";
import HowItWorks from "@/components/paper-to-site/HowItWorks";
import UseCases from "@/components/paper-to-site/UseCases";
import SocialProof from "@/components/paper-to-site/SocialProof";
import FAQ from "@/components/paper-to-site/FAQ";
import FinalCTA from "@/components/paper-to-site/FinalCTA";
import Footer from "@/components/paper-to-site/Footer";

const pageTitle = "Paper to Site | Kael";
const pageDescription = "Upload a paper PDF and Kael turns it into a responsive, interactive website with pristine formulas, images, and analytics.";
const pageUrl = "https://www.kael.im/p/paper_to_site";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/p/paper_to_site",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

export default function PaperToSitePage() {
  return (
    <>
      
      <div className="paper-to-site-theme min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <UseCases />
          <SocialProof />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
