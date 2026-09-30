import React from "react";
import { Home, Calculator, FileText, ArrowUpRight } from "lucide-react";
import BUYER_IMG from "../../../assets/images/tools-buyer.webp";
import FINANCE_IMG from "../../../assets/images/tools-finance.webp";
import KNOWLEDGE_IMG from "../../../assets/images/tools-knowledge.webp";

// Link destinations — update here if tool pages move.
const toolsLinks = {
  buyer: "https://www.originconcierge.com.au/tools/borrowing-capacity-planner",
  finance: "https://www.originconcierge.com.au/tools/rent-vs-buy-calculator",
  knowledge: "https://www.originconcierge.com.au/knowledge-centre",
};

const TOOLS_HUB_URL = "https://www.originconcierge.com.au/tools";

const tools = [
  {
    icon: Home,
    title: "Buyer Tools",
    feature: "Borrowing Capacity Planner",
    text: "Get an indication of your borrowing position and explore what may be achievable before you start your property search.",
    href: toolsLinks.buyer,
    image: BUYER_IMG,
    imagePosition: "70% 70%",
  },
  {
    icon: Calculator,
    title: "Finance Tools",
    feature: "Rent vs Buy Calculator",
    text: "Compare the financial considerations of renting versus buying and explore which option may suit your circumstances.",
    href: toolsLinks.finance,
    image: FINANCE_IMG,
    imagePosition: "55% 70%",
  },
  {
    icon: FileText,
    title: "Knowledge Centre",
    feature: "Property Guides & Insights",
    text: "Explore practical property, finance and home ownership information at your own pace.",
    href: toolsLinks.knowledge,
    image: KNOWLEDGE_IMG,
    imagePosition: "60% 65%",
  },
];

function ToolCard({ tool }) {
  const Icon = tool.icon;

  return (
    <a
      href={tool.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${tool.title}: ${tool.feature} — opens Origin Concierge in a new tab`}
      className="group relative flex h-full flex-col overflow-hidden bg-white rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(7,27,51,0.05),0_1px_8px_rgba(7,27,51,0.02)] hover:shadow-[0_20px_40px_rgba(7,27,51,0.09),0_4px_12px_rgba(7,27,51,0.05)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C79245] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F4EE]"
    >
      <div className="relative z-10 flex flex-1 flex-col p-7 md:p-8 md:pr-[40%] lg:pr-[36%]">
        <div className="w-12 h-12 rounded-xl bg-[#F8F4EE] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#C79245]/15">
          <Icon
            className="w-6 h-6 text-[#C79245] transition-transform duration-300 group-hover:scale-110"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </div>

        <h3 className="font-playfair font-bold text-[#071B33] text-lg md:text-xl mb-1.5 leading-snug">
          {tool.title}
        </h3>

        <p className="font-inter text-sm font-medium tracking-wide text-[#C79245] mb-3">
          {tool.feature}
        </p>

        <p className="font-inter text-[#1D2433] text-sm md:text-[15px] leading-relaxed opacity-80 flex-1">
          {tool.text}
        </p>

        <span className="mt-6 inline-flex items-center gap-1.5 font-inter text-sm font-medium text-[#C79245] opacity-80 transition-opacity duration-300 group-hover:opacity-100">
          Explore
          <ArrowUpRight
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </span>
      </div>

      {/* Supporting image: shallow strip below the text on mobile, faded into the right side of the card from md up */}
      <div
        className="relative h-36 w-full overflow-hidden md:absolute md:inset-y-0 md:right-0 md:h-auto md:w-[38%]"
        aria-hidden="true"
      >
        <img
          src={tool.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          style={{ objectPosition: tool.imagePosition }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#fff_0%,rgba(255,255,255,0.7)_25%,rgba(255,255,255,0)_70%)] md:bg-[linear-gradient(to_right,#fff_0%,rgba(255,255,255,0.75)_25%,rgba(255,255,255,0)_65%)]" />
      </div>
    </a>
  );
}

export default function ToolsSection() {
  return (
    <section className="pb-16 md:pb-24" aria-labelledby="property-tools-heading">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <div
          className="h-px w-full bg-gradient-to-r from-transparent via-[#C79245]/40 to-transparent mb-16 md:mb-24"
          aria-hidden="true"
        />

        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="font-inter text-sm tracking-[0.3em] text-[#C79245] font-medium mb-3">
            PROPERTY RESOURCES
          </p>

          <h2
            id="property-tools-heading"
            className="font-playfair font-bold text-3xl md:text-4xl text-[#071B33] leading-tight"
          >
            Tools to Help You Make Better Property Decisions
          </h2>

          <div className="golden-thread mx-auto mt-5 mb-6" />

          <p className="font-inter text-[#1D2433] text-base md:text-lg leading-relaxed opacity-80">
            Explore practical tools and resources for buying, financing and
            understanding property — available anytime, with no obligation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.title} tool={tool} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={TOOLS_HUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-catherine focus-gold !inline-flex items-center justify-center gap-2"
          >
            Explore All Property Tools
            <ArrowUpRight className="w-4 h-4" strokeWidth={1.8} aria-hidden="true" />
          </a>
          <p className="font-inter text-xs text-[#1D2433] opacity-60 mt-3">
            Opens Origin Concierge tools
          </p>
        </div>
      </div>
    </section>
  );
}
