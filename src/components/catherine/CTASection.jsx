import React from "react";
import { ExternalLink, Mail } from "lucide-react";

const RATEMYAGENT_URL = "https://www.ratemyagent.com.au/real-estate-agent/catherine-sheo-iw388/sales/overview";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <div className="golden-thread mx-auto mb-8" />
          
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#071B33] leading-snug mb-5">
            Thinking of selling or reviewing your property options?
          </h2>
          
          <p className="font-inter text-[#1D2433] text-base md:text-lg leading-relaxed opacity-80 mb-10">
            I'm happy to provide honest guidance, market insight and a clear strategy tailored to your goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:catsheo@gmail.com"
              className="btn-primary-catherine focus-gold inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Email Catherine
            </a>
            <a
              href={RATEMYAGENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-catherine focus-gold inline-flex items-center justify-center gap-2 border-[#071B33] text-[#071B33] hover:bg-[#071B33]/5"
            >
              View My Reviews
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}