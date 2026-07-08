import React from "react";
import { motion } from "framer-motion";
import PROFILE_IMG from "../../../assets/images/catherine-hero.png";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
          <motion.div
            className="text-center lg:text-left"
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
            className="w-full"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div
              className="mx-auto overflow-hidden rounded-[32px] bg-white shadow-2xl"
              style={{
                maxWidth: "620px",
                boxShadow:
                  "0 30px 70px rgba(7,27,51,.10), 0 8px 20px rgba(7,27,51,.05)",
              }}
            >
              <img
                src={PROFILE_IMG}
                alt="Catherine Sheo, Sales Consultant"
                className="w-full h-auto block"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}