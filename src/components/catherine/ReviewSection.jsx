import React, { useEffect, useRef, useState } from "react";
import { Star, ExternalLink } from "lucide-react";

const QR_CODE = "https://media.base44.com/images/public/6a4debb0a43c7fcb232e54e1/10cddf20a_generated_86c939dd.png";
const RATEMYAGENT_URL = "https://www.ratemyagent.com.au/real-estate-agent/catherine-sheo-iw388/sales/overview";

const testimonials = [
  {
    quote: "Catherine is professional, reliable and goes above and beyond for her clients. Her market knowledge and negotiation skills are outstanding. Highly recommend!",
    author: "Vendor, West Melbourne"
  },
  {
    quote: "Great communication, honest advice and a clear strategy. Catherine achieved an excellent result for our sale. We couldn't be happier.",
    author: "Seller, West Melbourne"
  }
];

function Stars() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#C79245] text-[#C79245]" />
      ))}
    </div>
  );
}

export default function ReviewSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-24" ref={ref}>
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <div 
          className="bg-[#071B33] rounded-3xl overflow-hidden p-8 md:p-12 lg:p-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease"
          }}
        >
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Left — Rating & QR */}
            <div className="flex-1">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-playfair font-bold text-5xl md:text-6xl text-[#C79245]">5.0</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-[#C79245] text-[#C79245]" />
                  ))}
                </div>
              </div>
              
              <h2 className="font-playfair font-bold text-2xl md:text-3xl text-white mt-4 mb-3">
                OUTSTANDING — RATED BY CLIENTS
              </h2>
              
              <p className="font-inter text-[#F8F4EE] text-sm md:text-base opacity-70 mb-8">
                Based on 28 verified reviews on RateMyAgent
              </p>
              
              <a
                href={RATEMYAGENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-catherine focus-gold inline-flex items-center gap-2 mb-10"
              >
                READ MY REVIEWS
                <ExternalLink className="w-4 h-4" />
              </a>

              <div className="flex items-start gap-5 mt-4">
                <div className="bg-white rounded-xl p-2 flex-shrink-0">
                  <img
                    src={QR_CODE}
                    alt="QR code — scan to view Catherine's verified RateMyAgent reviews"
                    className="w-20 h-20 md:w-24 md:h-24 rounded-lg"
                  />
                </div>
                <p className="font-inter text-[#F8F4EE] text-xs md:text-sm opacity-60 leading-relaxed pt-2">
                  Scan the QR code to see my verified client reviews on RateMyAgent.
                </p>
              </div>
            </div>

            {/* Right — Testimonials */}
            <div className="flex-1 flex flex-col gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="testimonial-card">
                  <Stars />
                  <p className="font-inter text-white text-sm md:text-[15px] leading-relaxed mt-4 italic">
                    "{t.quote}"
                  </p>
                  <p className="font-inter text-[#C79245] text-sm mt-4 font-medium">
                    – {t.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}