import React from "react";
import StickyNav from "@/components/catherine/StickyNav";
import HeroSection from "@/components/catherine/HeroSection";
import CredentialCards from "@/components/catherine/CredentialCards";
import ToolsSection from "@/components/catherine/ToolsSection";
import ReviewSection from "@/components/catherine/ReviewSection";
import ContactSection from "@/components/catherine/ContactSection";

export default function Home() {
  return (
    <div className="catherine-page min-h-screen">
      <StickyNav />
      <div className="pt-14 md:pt-16">
        <HeroSection />
        <CredentialCards />
        <ToolsSection />
        <ReviewSection />
        <ContactSection />
      </div>
    </div>
  );
}