import React, { useEffect, useRef, useState } from "react";
import { Trophy, Star, GraduationCap, Users } from "lucide-react";

const RATEMYAGENT_LOGO = "https://media.base44.com/images/public/6a4debb0a43c7fcb232e54e1/9a6f58caf_generated_c8529f02.png";

const credentials = [
  {
    icon: Trophy,
    ghostChar: "🏆",
    title: "WESTPAC PLATINUM BROKER",
    text: "Recognised for outstanding performance, customer outcomes and professional excellence.",
    extra: null
  },
  {
    icon: Star,
    ghostChar: "★",
    title: "RATEMYAGENT AWARD",
    text: "Ranked among the best in West Melbourne with 5.0 average client reviews.",
    extra: "ratemyagent"
  },
  {
    icon: GraduationCap,
    ghostChar: "🎓",
    title: "ADVANCED DIPLOMA OF CONVEYANCING (VICTORIA)",
    text: "Formal legal knowledge to better understand property transactions and protect your interests.",
    extra: null
  },
  {
    icon: Users,
    ghostChar: "👥",
    title: "10+ YEARS EXPERIENCE",
    text: "Across mortgage finance and residential real estate.",
    extra: null
  }
];

function AnimatedCard({ credential, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const Icon = credential.icon;

  return (
    <div
      ref={ref}
      className="credential-card relative bg-white rounded-2xl p-7 md:p-8 overflow-hidden"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.6s ease ${index * 0.15}s`,
        boxShadow: "0 10px 30px rgba(7, 27, 51, 0.05), 0 1px 8px rgba(7, 27, 51, 0.02)"
      }}
    >
      <span className="ghost-icon select-none" aria-hidden="true">{credential.ghostChar}</span>
      
      <div className="w-12 h-12 rounded-xl bg-[#F8F4EE] flex items-center justify-center mb-5">
        <Icon className="w-6 h-6 text-[#C79245]" strokeWidth={1.5} />
      </div>
      
      <h3 className="font-playfair font-bold text-[#071B33] text-base md:text-lg mb-3 leading-snug">
        {credential.title}
      </h3>
      
      <p className="font-inter text-[#1D2433] text-sm md:text-[15px] leading-relaxed opacity-80">
        {credential.text}
      </p>

      {credential.extra === "ratemyagent" && (
        <img
          src={RATEMYAGENT_LOGO}
          alt="RateMyAgent logo"
          className="w-10 h-10 mt-4 rounded-lg object-contain"
        />
      )}
    </div>
  );
}

export default function CredentialCards() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <p className="font-inter text-sm tracking-[0.3em] text-[#C79245] font-medium mb-3">CREDENTIALS</p>
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#071B33]">
            Qualifications & Recognition
          </h2>
          <div className="golden-thread mx-auto mt-5" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((cred, i) => (
            <AnimatedCard key={cred.title} credential={cred} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}