import React from "react";
import { Phone, Mail } from "lucide-react";

const PHONE_DISPLAY = "+61 455 436 122";
const PHONE_HREF = "tel:+61455436122";
const EMAIL = "catsheo@gmail.com";
const EMAIL_HREF = "mailto:catsheo@gmail.com";

export default function ContactSection() {
  return (
    <>
      <section className="py-12 md:py-16" aria-labelledby="contact-heading">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10">
          <div className="max-w-2xl mx-auto text-center">
            <p
              id="contact-heading"
              className="font-inter text-sm tracking-[0.3em] text-[#C79245] font-medium mb-3"
            >
              GET IN TOUCH
            </p>

            <div className="golden-thread mx-auto" />

            <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 font-inter text-[#071B33]">
              <a
                href={PHONE_HREF}
                className="focus-gold rounded px-2 py-2 transition-colors duration-300 hover:text-[#C79245]"
              >
                {PHONE_DISPLAY}
              </a>
              <span className="hidden sm:inline text-[#C79245]" aria-hidden="true">
                ·
              </span>
              <a
                href={EMAIL_HREF}
                className="focus-gold rounded px-2 py-2 break-all transition-colors duration-300 hover:text-[#C79245]"
              >
                {EMAIL}
              </a>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <a
                href={PHONE_HREF}
                className="btn-primary-catherine focus-gold !inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" strokeWidth={1.8} aria-hidden="true" />
                Call Catherine
              </a>
              <a
                href={EMAIL_HREF}
                className="btn-ghost-catherine focus-gold !inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" strokeWidth={1.8} aria-hidden="true" />
                Email Catherine
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#C79245]/20">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10 py-6 text-center">
          <p className="font-inter text-xs tracking-wide text-[#1D2433] opacity-60">
            Catherine Sheo · Melbourne
          </p>
        </div>
      </footer>
    </>
  );
}
