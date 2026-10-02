import React from 'react';
import { Utensils, Sparkles, MessageCircle, Coffee } from 'lucide-react';
import { WHY_NARROW_GAUGE } from '../data/brandData';
import { useTheme } from '../context/ThemeContext';

export const WhyNarrowGauge: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const getFeatureIcon = (code: string) => {
    switch (code) {
      case 'DINE':
        return <Utensils className="w-5 h-5" />;
      case 'CELEBRATE':
        return <Sparkles className="w-5 h-5" />;
      case 'CONNECT':
        return <MessageCircle className="w-5 h-5" />;
      case 'INDULGE':
        return <Coffee className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section
      className={`py-24 sm:py-32 border-t transition-colors duration-300 ${
        isDark ? 'bg-[#0D0D0D] border-white/[0.06]' : 'bg-[#FAF7F2] border-[#E5DDD0]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className={`text-[10px] font-mono uppercase tracking-[0.25em] block mb-3 ${
              isDark ? 'text-accent-champagne' : 'text-[#8C571E]'
            }`}
          >
            One Umbrella · Every Occasion
          </span>
          <h2
            className={`font-serif text-3xl sm:text-5xl font-normal tracking-tight mb-4 ${
              isDark ? 'text-[#F5F2EA]' : 'text-[#141210]'
            }`}
          >
            Made for Every Kind of Moment
          </h2>
          <div
            className={`w-12 h-[1px] mx-auto ${
              isDark ? 'bg-accent-champagne/40' : 'bg-[#8C571E]/40'
            }`}
          />
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_NARROW_GAUGE.map((item, index) => (
            <div
              key={item.code}
              className={`p-8 border transition-all duration-300 flex flex-col justify-between group ${
                isDark
                  ? 'bg-[#121212] border-white/[0.06] hover:border-accent-champagne/30'
                  : 'bg-white border-[#E2D9CC] hover:border-[#8C571E] shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div
                    className={`w-10 h-10 border flex items-center justify-center transition-colors ${
                      isDark
                        ? 'border-white/[0.08] group-hover:border-accent-champagne/60 text-accent-champagne bg-[#161616]'
                        : 'border-[#E2D9CC] group-hover:border-[#8C571E] text-[#8C571E] bg-stone-50'
                    }`}
                  >
                    {getFeatureIcon(item.code)}
                  </div>
                  <span
                    className={`font-mono text-xs tracking-[0.2em] ${
                      isDark ? 'text-[#9B9B9B]' : 'text-[#6E665B]'
                    }`}
                  >
                    0{index + 1}
                  </span>
                </div>

                <div
                  className={`text-[10px] font-mono uppercase tracking-[0.25em] mb-2 font-medium ${
                    isDark ? 'text-accent-champagne/90' : 'text-[#8C571E]'
                  }`}
                >
                  {item.code}
                </div>

                <h3
                  className={`font-serif text-2xl font-normal mb-2 transition-colors ${
                    isDark
                      ? 'text-[#F5F2EA] group-hover:text-accent-champagne'
                      : 'text-[#141210] group-hover:text-[#8C571E]'
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`text-sm font-medium mb-3 ${
                    isDark ? 'text-[#F5F2EA]/90' : 'text-[#2D2823]'
                  }`}
                >
                  {item.subtitle}
                </p>

                <p
                  className={`text-xs font-light leading-relaxed ${
                    isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
                  }`}
                >
                  {item.description}
                </p>
              </div>

              <div
                className={`pt-6 mt-6 border-t flex items-center justify-between text-[11px] ${
                  isDark
                    ? 'border-white/[0.06] text-[#9B9B9B]'
                    : 'border-stone-200 text-[#6E665B]'
                }`}
              >
                <span className="font-mono uppercase tracking-wider">{item.tag}</span>
                <span
                  className={`font-serif italic text-xs ${
                    isDark ? 'text-accent-champagne' : 'text-[#8C571E]'
                  }`}
                >
                  Explore
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
