import React from "react";
import { motion } from "framer-motion";
import PROFILE_IMG from "../../../assets/images/catherine-hero.png";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left order-1"
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

          {/* Right Image */}
          <motion.div
            className="order-2 w-full"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="max-w-xl mx-auto overflow-hidden rounded-[2rem] bg-white shadow-2xl">
              <img
                src={PROFILE_IMG}
                alt="Catherine Sheo, Sales Consultant"
                className="w-full h-auto object-contain block"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>

        {/* Quote Card Under Hero */}
        <motion.div
          className="mt-12 md:mt-16 max-w-3xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
        >
          <div className="golden-thread mx-auto mb-5" />

          <p className="font-inter text-[#1D2433] text-base md:text-lg leading-relaxed italic mb-4">
            “I'm passionate about helping sellers achieve the best possible
            outcome through honest advice, strong communication and a
            client-first approach.”
          </p>

          <p className="font-inter text-[#1D2433] text-base md:text-lg leading-relaxed italic">
            “I combine local market knowledge with proven negotiation skills
            and dedication to deliver results you can trust.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}