import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const Introduction: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      className={`relative py-20 sm:py-28 border-y transition-colors duration-300 ${
        isDark
          ? 'bg-[#0D0D0D] border-white/[0.06]'
          : 'bg-[#FDFCFA] border-[#E5DDD0]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12">
          {/* Label / Index */}
          <div className="w-full md:w-1/4">
            <span
              className={`text-[11px] font-mono uppercase tracking-[0.25em] flex items-center gap-3 ${
                isDark ? 'text-accent-champagne' : 'text-[#8C571E]'
              }`}
            >
              <span
                className={`w-6 h-[1px] ${
                  isDark ? 'bg-accent-champagne/60' : 'bg-[#8C571E]/60'
                }`}
              />
              <span>Our Promise</span>
            </span>
          </div>

          {/* Heading and Hospitable Copy */}
          <div className="w-full md:w-3/4 max-w-3xl">
            <h2
              className={`font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.15] mb-6 tracking-tight ${
                isDark ? 'text-[#F5F2EA]' : 'text-[#141210]'
              }`}
            >
              More Than Just Food.<br />
              <span className="italic font-light">An Experience in Every Bite.</span>
            </h2>

            <div
              className={`w-16 h-[1px] mb-8 ${
                isDark ? 'bg-accent-champagne/40' : 'bg-[#8C571E]/40'
              }`}
            />

            <p
              className={`text-base sm:text-lg font-light leading-relaxed mb-6 ${
                isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
              }`}
            >
              Narrow Gauge was created for the love of wholesome food, heartfelt service, and meaningful connections. From family dinners over rich North Indian curries and crispy pizzas, to wedding catering managed with precision, to quiet afternoon cold coffees — we take pride in serving Sheopur with uncompromising hospitality.
            </p>

            {/* Practical Hospitable Pillars */}
            <div
              className={`mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t ${
                isDark ? 'border-white/[0.06]' : 'border-stone-200'
              }`}
            >
              <div>
                <span
                  className={`block font-serif text-xl sm:text-2xl mb-1 ${
                    isDark ? 'text-[#F5F2EA]' : 'text-[#141210]'
                  }`}
                >
                  01. Fresh Ingredients
                </span>
                <span
                  className={`text-xs tracking-wider uppercase font-mono ${
                    isDark ? 'text-[#9B9B9B]' : 'text-[#6E665B]'
                  }`}
                >
                  Pure Dairy, Spices & Produce
                </span>
              </div>
              <div>
                <span
                  className={`block font-serif text-xl sm:text-2xl mb-1 ${
                    isDark ? 'text-[#F5F2EA]' : 'text-[#141210]'
                  }`}
                >
                  02. Family Hospitality
                </span>
                <span
                  className={`text-xs tracking-wider uppercase font-mono ${
                    isDark ? 'text-[#9B9B9B]' : 'text-[#6E665B]'
                  }`}
                >
                  Warm Service & Comfy Seating
                </span>
              </div>
              <div>
                <span
                  className={`block font-serif text-xl sm:text-2xl mb-1 ${
                    isDark ? 'text-[#F5F2EA]' : 'text-[#141210]'
                  }`}
                >
                  03. Grand Catering
                </span>
                <span
                  className={`text-xs tracking-wider uppercase font-mono ${
                    isDark ? 'text-[#9B9B9B]' : 'text-[#6E665B]'
                  }`}
                >
                  Weddings & Banquets Across MP
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
