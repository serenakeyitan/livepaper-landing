import type { Metadata } from "next";

import Header from "@/components/livepaper/Header";
import Hero from "@/components/livepaper/Hero";
import Features from "@/components/livepaper/Features";
import HowItWorks from "@/components/livepaper/HowItWorks";
import SocialProof from "@/components/livepaper/SocialProof";
import UseCases from "@/components/livepaper/UseCases";
import FAQ from "@/components/livepaper/FAQ";
import FinalCTA from "@/components/livepaper/FinalCTA";
import Footer from "@/components/livepaper/Footer";

const pageTitle = "LivePaper — Turn Your Research Paper Into Motion";
const pageDescription =
  "Upload a PDF and LivePaper transforms static research into an animated, interactive experience with interactive charts, motion diagrams, and multimedia.";
const pageUrl = "https://www.kael.im";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/",
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

export default function Home() {
  return (
    <div className="livepaper-theme min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <SocialProof />
        <UseCases />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
