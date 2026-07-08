import React from "react";
import { motion } from "framer-motion";
import PROFILE_IMG from "../../../assets/images/catherine-hero.png";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          <motion.div
            className="text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="font-script text-4xl md:text-5xl text-[#C79245] mb-2">
              Meet
            </p>

            <h1 className="font-playfair font-bold text-5xl md:text-6xl lg:text-7xl text-[#071B33] tracking-tight leading-none">
              CATHERINE
            </h1>

            <p className="font-inter text-sm md:text-base tracking-[0.3em] text-[#C79245] font-medium mt-3 mb-6">
              SALES CONSULTANT
            </p>

            <div className="golden-thread mx-auto lg:mx-0 mb-8" />

            <p className="font-inter text-[#1D2433] text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-5">
              With over 10 years of experience across mortgage finance and
              residential real estate, I bring a well-rounded understanding of
              the property journey.
            </p>

            <p className="font-inter text-[#1D2433] text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              I'm passionate about helping sellers achieve the best possible
              outcome through honest advice, strong communication and a
              client-first approach.
            </p>

            <p className="font-script text-2xl md:text-3xl text-[#A67836] italic">
              Your goals. My priority. ♡
            </p>
          </motion.div>

          <motion.div
            className="relative order-1 lg:order-2 w-full"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative max-w-xl mx-auto">
              <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl">
                <img
                  src={PROFILE_IMG}
                  alt="Catherine Sheo, Sales Consultant"
                  className="w-full h-auto object-contain block"
                  loading="eager"
                />
              </div>

              <div className="relative lg:absolute lg:left-[-2rem] lg:bottom-[-2rem] mt-6 lg:mt-0 bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-md mx-auto lg:mx-0 shadow-xl">
                <div className="golden-thread mb-4" />

                <p className="font-inter text-[#1D2433] text-sm md:text-[15px] leading-relaxed italic">
                  “I'm passionate about helping sellers achieve the best
                  possible outcome through honest advice, strong communication
                  and a client-first approach.”
                </p>

                <p className="font-inter text-[#1D2433] text-sm md:text-[15px] leading-relaxed italic mt-3">
                  “I combine local market knowledge with proven negotiation
                  skills and dedication to deliver results you can trust.”
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}