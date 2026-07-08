import React from "react";

export default function FooterSection() {
  return (
    <footer className="bg-[#071B33] py-10 md:py-12">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 text-center">
        <p className="font-playfair font-bold text-white text-lg mb-1">Catherine Sheo</p>
        <p className="font-inter text-[#C79245] text-xs tracking-[0.2em] mb-6">SALES CONSULTANT</p>
        
        <div className="w-8 h-px bg-[#C79245] mx-auto mb-6 opacity-40" />
        
        <p className="font-inter text-[#F8F4EE] text-xs opacity-50 leading-relaxed">
          © {new Date().getFullYear()} Catherine Sheo. All rights reserved.
        </p>
        <p className="font-inter text-[#F8F4EE] text-xs opacity-40 mt-1">
          Melbourne, Victoria, Australia
        </p>
      </div>
    </footer>
  );
}