import React, { useState, useEffect } from "react";

export default function StickyNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(199,146,69,0.2)" : "1px solid transparent"
      }}
    >
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 flex items-center justify-between h-14 md:h-16">
        <div className="flex items-baseline gap-2">
          <span className="font-playfair font-bold text-[#071B33] text-base md:text-lg">Catherine Sheo</span>
          <span className="hidden sm:inline font-inter text-[10px] tracking-[0.2em] text-[#C79245] font-medium">
            SALES CONSULTANT
          </span>
        </div>
        <span className="font-inter text-xs md:text-sm font-medium text-[#C79245] hidden sm:inline tracking-[0.2em]">
          MELBOURNE
        </span>
      </div>
    </nav>
  );
}