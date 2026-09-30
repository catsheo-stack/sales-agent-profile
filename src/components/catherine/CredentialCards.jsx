import React, { useEffect, useRef, useState } from "react";
import { Trophy, Star, GraduationCap, Users, ExternalLink } from "lucide-react";
import FINANCE_IMG from "../../../assets/images/recognition-finance.webp";
import RATEMYAGENT_IMG from "../../../assets/images/recognition-ratemyagent.webp";
import CONVEYANCING_IMG from "../../../assets/images/recognition-conveyancing.webp";
import EXPERIENCE_IMG from "../../../assets/images/recognition-experience.webp";

const RATEMYAGENT_URL =
  "https://www.ratemyagent.com.au/real-estate-agent/catherine-sheo-iw388/sales/overview";

const credentials = [
  {
    icon: Trophy,
    ghostChar: "🏆",
    title: "WESTPAC PLATINUM BROKER",
    text: "Recognised for outstanding performance, customer outcomes and professional excellence.",
    extra: null,
    image: FINANCE_IMG,
    imagePosition: "65% 70%",
  },
  {
    icon: Star,
    ghostChar: "★",
    title: "RATEMYAGENT AWARD",
    text: "Ranked among the best in West Melbourne with 5.0 average client reviews.",
    extra: "ratemyagent",
    image: RATEMYAGENT_IMG,
    imagePosition: "55% 55%",
  },
  {
    icon: GraduationCap,
    ghostChar: "🎓",
    title: "ADVANCED DIPLOMA OF CONVEYANCING (VICTORIA)",
    text: "Formal legal knowledge to better understand property transactions and protect your interests.",
    extra: null,
    image: CONVEYANCING_IMG,
    imagePosition: "50% 45%",
  },
  {
    icon: Users,
    ghostChar: "👥",
    title: "10+ YEARS EXPERIENCE",
    text: "Across mortgage finance and residential real estate.",
    extra: null,
    image: EXPERIENCE_IMG,
    imagePosition: "40% 60%",
  },
];

function AnimatedCard({ credential, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const Icon = credential.icon;
  const isRateMyAgent = credential.extra === "ratemyagent";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const cardContent = (
    <>
      <span className="ghost-icon select-none" aria-hidden="true">
        {credential.ghostChar}
      </span>

      <div className="relative z-10 p-7 md:p-8 sm:pr-[36%] lg:pr-[32%]">
      <div className="w-12 h-12 rounded-xl bg-[#F8F4EE] flex items-center justify-center mb-5">
        <Icon className="w-6 h-6 text-[#C79245]" strokeWidth={1.5} />
      </div>

      <h3 className="font-playfair font-bold text-[#071B33] text-base md:text-lg mb-3 leading-snug">
        {credential.title}
      </h3>

      <p className="font-inter text-[#1D2433] text-sm md:text-[15px] leading-relaxed opacity-80">
        {credential.text}
      </p>

      {isRateMyAgent && (
        <div className="mt-6">
          <div className="flex items-center gap-1 text-[#C79245] text-lg mb-3">
            ★★★★★
          </div>

          <span className="inline-flex items-center gap-2 rounded-full bg-[#071B33] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 group-hover:bg-[#C79245]">
            View My Reviews
            <ExternalLink className="w-4 h-4" strokeWidth={1.8} />
          </span>
        </div>
      )}
      </div>

      {/* Supporting image: shallow strip below the text on mobile, faded into the right side of the card from sm up */}
      <div
        className="relative h-36 w-full overflow-hidden sm:absolute sm:inset-y-0 sm:right-0 sm:h-auto sm:w-[38%] lg:w-[36%]"
        aria-hidden="true"
      >
        <img
          src={credential.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
          style={{ objectPosition: credential.imagePosition }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#fff_0%,rgba(255,255,255,0.7)_25%,rgba(255,255,255,0)_70%)] sm:bg-[linear-gradient(to_right,#fff_0%,rgba(255,255,255,0.75)_25%,rgba(255,255,255,0)_65%)]" />
      </div>
    </>
  );

  const commonClass =
    "credential-card group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl";

  const commonStyle = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(30px)",
    transition: `all 0.6s ease ${index * 0.15}s`,
    boxShadow:
      "0 10px 30px rgba(7, 27, 51, 0.05), 0 1px 8px rgba(7, 27, 51, 0.02)",
  };

  if (isRateMyAgent) {
    return (
      <a
        ref={ref}
        href={RATEMYAGENT_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Catherine Sheo reviews on RateMyAgent"
        className={`${commonClass} block`}
        style={commonStyle}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div ref={ref} className={commonClass} style={commonStyle}>
      {cardContent}
    </div>
  );
}

export default function CredentialCards() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <p className="font-inter text-sm tracking-[0.3em] text-[#C79245] font-medium mb-3">
            CREDENTIALS
          </p>

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