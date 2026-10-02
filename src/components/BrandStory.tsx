import React from 'react';
import { BRAND_INFO } from '../data/brandData';
import { ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface BrandStoryProps {
  onReadMore?: () => void;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ onReadMore }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="about" className={`py-28 sm:py-36 border-t relative transition-colors duration-300 ${
      isDark ? 'bg-[#0B0B0B] border-white/[0.06]' : 'bg-[#FDFCFA] border-[#E5DDD0]'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Muted / B&W Photograph with Editorial Details */}
          <div className="lg:col-span-6 relative">
            <div className={`relative overflow-hidden border shadow-2xl ${
              isDark ? 'border-white/[0.08]' : 'border-[#E2D9CC]'
            }`}>
              <img
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80"
                alt="Narrow Gauge Kitchen and Hospitality"
                loading="lazy"
                className="w-full h-[520px] object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700 ease-out"
              />
              <div className={`absolute inset-0 ${
                isDark
                  ? 'bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent'
                  : 'bg-gradient-to-t from-[#FAF7F2]/80 via-transparent to-transparent'
              }`} />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[11px] font-mono tracking-[0.2em] uppercase">
                <span className={isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'}>Narrow Gauge Hospitality</span>
                <span className={isDark ? 'text-accent-champagne' : 'text-[#8C571E]'}>Craft & People</span>
              </div>
            </div>

            {/* Floating Subtle Quote Card */}
            <div className={`hidden sm:block absolute -bottom-8 -right-6 p-6 border max-w-xs shadow-2xl backdrop-blur-md ${
              isDark
                ? 'bg-[#161616] border-white/[0.1] text-[#F5F2EA]'
                : 'bg-white border-[#E2D9CC] text-[#141210]'
            }`}>
              <p className="font-serif italic text-base leading-relaxed">
                “Hospitality is not just what we serve — it is how people feel when they are here.”
              </p>
              <span className={`block text-[10px] uppercase font-mono tracking-widest mt-3 ${
                isDark ? 'text-accent-champagne' : 'text-[#8C571E]'
              }`}>
                The Narrow Gauge Ethos
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Brand Story Copy */}
          <div className="lg:col-span-6 lg:pl-6">
            <div className={`inline-flex items-center gap-2 px-3 py-1 border text-[11px] font-mono uppercase tracking-[0.2em] mb-4 ${
              isDark
                ? 'border-white/[0.08] bg-white/[0.02] text-accent-champagne'
                : 'border-[#D4C3A3] bg-white text-[#7A4B13]'
            }`}>
              <span>Origin & Purpose</span>
            </div>

            <h2 className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight mb-8 leading-[1.12] ${
              isDark ? 'text-[#F5F2EA]' : 'text-[#141210]'
            }`}>
              {BRAND_INFO.storyHeading}
            </h2>

            <blockquote className={`font-serif italic text-xl sm:text-2xl font-light border-l-2 pl-6 mb-8 ${
              isDark
                ? 'text-accent-champagne border-accent-champagne/60'
                : 'text-[#8C571E] border-[#8C571E]'
            }`}>
              “{BRAND_INFO.storyQuote}”
            </blockquote>

            <p className={`text-base font-light leading-relaxed mb-6 ${
              isDark ? 'text-[#9B9B9B]' : 'text-[#4A443C]'
            }`}>
              {BRAND_INFO.storyText1}
            </p>

            <p className={`text-base font-light leading-relaxed mb-8 ${
              isDark ? 'text-[#9B9B9B]' : 'text-[#4A443C]'
            }`}>
              {BRAND_INFO.storyText2}
            </p>

            {/* Read Dedicated About Page Link */}
            {onReadMore && (
              <div className="mb-10">
                <button
                  onClick={onReadMore}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-[0.16em] border transition-all cursor-pointer ${
                    isDark
                      ? 'border-accent-champagne/40 bg-accent-champagne/10 text-accent-champagne hover:bg-accent-champagne hover:text-[#0B0B0B]'
                      : 'border-[#8C571E] bg-[#8C571E] text-white hover:bg-[#734415] shadow-sm'
                  }`}
                >
                  <span>Read Full Heritage & Story</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* 3 Core Pillars */}
            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t ${
              isDark ? 'border-white/[0.08]' : 'border-[#E2D9CC]'
            }`}>
              <div>
                <span className={`text-[10px] font-mono uppercase tracking-[0.2em] block mb-1 ${
                  isDark ? 'text-accent-champagne' : 'text-[#8C571E]'
                }`}>
                  Pillar I
                </span>
                <h4 className={`font-serif text-lg mb-1 ${isDark ? 'text-[#F5F2EA]' : 'text-[#141210]'}`}>
                  Honest Flavours
                </h4>
                <p className={`text-xs font-light ${isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'}`}>
                  Rooted in quality ingredients, respect for culinary heritage and clean preparation.
                </p>
              </div>

              <div>
                <span className={`text-[10px] font-mono uppercase tracking-[0.2em] block mb-1 ${
                  isDark ? 'text-accent-champagne' : 'text-[#8C571E]'
                }`}>
                  Pillar II
                </span>
                <h4 className={`font-serif text-lg mb-1 ${isDark ? 'text-[#F5F2EA]' : 'text-[#141210]'}`}>
                  Warm Hospitality
                </h4>
                <p className={`text-xs font-light ${isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'}`}>
                  Attentive yet unpretentious care that treats every visitor as a personal guest.
                </p>
              </div>

              <div>
                <span className={`text-[10px] font-mono uppercase tracking-[0.2em] block mb-1 ${
                  isDark ? 'text-accent-champagne' : 'text-[#8C571E]'
                }`}>
                  Pillar III
                </span>
                <h4 className={`font-serif text-lg mb-1 ${isDark ? 'text-[#F5F2EA]' : 'text-[#141210]'}`}>
                  Shared Moments
                </h4>
                <p className={`text-xs font-light ${isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'}`}>
                  Environments thoughtfully arranged to nurture lasting memories and conversations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
