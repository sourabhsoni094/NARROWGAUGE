import React from 'react';
import { ArrowDown, Calendar, Star, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/brandData';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onExploreClick: () => void;
  onOpenReserve: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onOpenReserve }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="hero"
      className={`relative min-h-[90vh] sm:min-h-screen w-full flex flex-col justify-between overflow-hidden pt-28 pb-10 transition-colors duration-300 ${
        isDark ? 'bg-[#0B0B0B]' : 'bg-[#FAF7F2]'
      }`}
    >
      {/* Background Image with subtle cinematic zoom */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div
          className={`w-full h-full bg-cover bg-center transition-transform duration-[10000ms] ease-out scale-105 will-change-transform ${
            isDark ? 'opacity-100' : 'opacity-40 filter saturate-150'
          }`}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=2000&q=85')`,
          }}
        />

        {/* Dynamic Theme Gradient Overlays */}
        {isDark ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/75 to-[#0B0B0B]/60" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(11,11,11,0.6)_100%)]" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/96 via-[#FAF7F2]/85 to-[#FAF7F2]" />
        )}
      </div>

      {/* Top spacing badge & Social Proof Bar */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 pt-6 relative z-10 flex flex-wrap items-center gap-3">
        <div
          className={`inline-flex items-center gap-2 px-3 py-1.5 border text-[11px] uppercase tracking-[0.2em] font-mono ${
            isDark
              ? 'border-white/[0.08] bg-black/50 backdrop-blur-md text-[#9B9B9B]'
              : 'border-[#E2D9CC] bg-white/95 backdrop-blur-md text-[#5C564D] shadow-sm'
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isDark ? 'bg-accent-champagne' : 'bg-[#8C571E]'
            }`}
          />
          <span>Family Restaurant · Event Catering · Café · Sheopur</span>
        </div>

        {/* Direct Social Proof in Hero Header */}
        <a
          href={BRAND_INFO.contact.googleMapsDirectLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-3 py-1.5 border text-[11px] font-mono transition-colors group cursor-pointer ${
            isDark
              ? 'border-white/[0.08] bg-black/40 text-[#F5F2EA] hover:border-accent-champagne/40'
              : 'border-[#E2D9CC] bg-white text-[#141210] hover:border-[#8C571E] shadow-sm'
          }`}
        >
          <div className="flex text-amber-500">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-current" />
            ))}
            <Star className="w-3 h-3 fill-amber-500/40" />
          </div>
          <span className="font-semibold">4.1 ★ on Google</span>
          <span className={isDark ? 'text-[#9B9B9B]' : 'text-[#6E665B]'}>
            (364+ Reviews) · Shivpuri Road
          </span>
        </a>
      </div>

      {/* Main Center Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10 sm:py-14 relative z-10 w-full">
        <div className="max-w-3xl">
          <p
            className={`text-xs uppercase tracking-[0.25em] mb-4 font-mono font-medium ${
              isDark ? 'text-accent-champagne' : 'text-[#8C571E]'
            }`}
          >
            NARROW GAUGE HOSPITALITY · SHEOPUR
          </p>

          <h1
            className={`font-serif text-4xl sm:text-6xl md:text-7xl lg:text-7xl tracking-tight leading-[1.12] font-normal mb-6 text-balance ${
              isDark ? 'text-[#F5F2EA]' : 'text-[#141210]'
            }`}
          >
            Delicious Dining, Grand Catering &amp;{' '}
            <span
              className={`italic font-light ${
                isDark ? 'text-accent-champagne/95' : 'text-[#8C571E]'
              }`}
            >
              Relaxed Café Vibes
            </span>
          </h1>

          <p
            className={`text-base sm:text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-10 ${
              isDark ? 'text-[#9B9B9B]' : 'text-[#4A443C]'
            }`}
          >
            Experience rich North Indian feasts at Narrow Gauge Restaurant, celebrated wedding catering by NG Catters, and signature shakes at Uknow Café.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onExploreClick}
              className={`px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg cursor-pointer ${
                isDark
                  ? 'bg-accent-champagne text-[#0B0B0B] hover:bg-[#D8BE9A]'
                  : 'bg-[#8C571E] text-white hover:bg-[#734415]'
              }`}
            >
              <span>Explore Food Menus</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={onOpenReserve}
              className={`px-8 py-4 border text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer ${
                isDark
                  ? 'border-white/[0.14] bg-white/[0.03] hover:bg-white/[0.08] text-[#F5F2EA]'
                  : 'border-[#D5CABE] bg-white hover:bg-[#F2ECE1] text-[#141210] shadow-sm'
              }`}
            >
              <Calendar className="w-3.5 h-3.5 text-accent-champagne" />
              <span>Book Table / WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator & Experience Quick Bar */}
      <div
        className={`max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pt-6 border-t ${
          isDark ? 'border-white/[0.06]' : 'border-[#E5DDD0]'
        }`}
      >
        <div
          className={`flex items-center gap-6 text-[11px] uppercase tracking-[0.2em] font-mono ${
            isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
          }`}
        >
          <span className={isDark ? 'text-[#F5F2EA]' : 'text-[#141210] font-semibold'}>
            01. Restaurant
          </span>
          <span className="opacity-30">/</span>
          <span>02. NG Catters</span>
          <span className="opacity-30">/</span>
          <span>03. Uknow Café</span>
        </div>

        <button
          onClick={onExploreClick}
          className={`flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] transition-colors group cursor-pointer focus:outline-none ${
            isDark
              ? 'text-[#9B9B9B] hover:text-[#F5F2EA]'
              : 'text-[#5C564D] hover:text-[#141210]'
          }`}
          aria-label="Scroll to explore services"
        >
          <span>Scroll to explore</span>
          <div
            className={`h-[1px] transition-all duration-300 ${
              isDark
                ? 'w-8 bg-accent-champagne/40 group-hover:w-12'
                : 'w-8 bg-[#8C571E]/50 group-hover:w-12'
            }`}
          />
          <ArrowDown
            className={`w-3.5 h-3.5 group-hover:translate-y-1 transition-transform ${
              isDark ? 'text-accent-champagne' : 'text-[#8C571E]'
            }`}
          />
        </button>
      </div>
    </section>
  );
};
