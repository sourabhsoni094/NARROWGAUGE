import React from 'react';
import { ArrowDown, MapPin, Star, Clock } from 'lucide-react';
import { BRAND_INFO } from '../data/brandData';

interface HeroProps {
  onExploreClick: () => void;
  onOpenReserve: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onOpenReserve }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center pt-32 pb-20 sm:pt-36 sm:pb-24 border-b border-white/[0.08] overflow-hidden text-[#F5F2EA] bg-[#0B0B0B]"
    >
      {/* Cinematic Background Image matching Image 1 */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-[10000ms] ease-out scale-105 will-change-transform"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=2000&q=85')`,
          }}
        />

        {/* Cinematic Gradient Overlays for crisp readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/75 to-[#0B0B0B]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(11,11,11,0.65)_100%)]" />
      </div>

      {/* Main Content with Existing Text Exactly Preserved */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 w-full">
        {/* Location & Rating Header Line */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs font-mono uppercase tracking-[0.2em] mb-8 text-[#D4D4D8]">
          <span>Sheopur, MP</span>
          <span className="opacity-40">/</span>
          <div className="flex items-center gap-1.5 text-amber-400">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="font-semibold">4.1</span>
            <span className="text-[#D4D4D8] font-normal">(364 Reviews)</span>
          </div>
          <span className="opacity-40">/</span>
          <div className="flex items-center gap-1.5 text-[#D4D4D8]">
            <Clock className="w-3.5 h-3.5" />
            <span>11:00 AM – 10:45 PM</span>
          </div>
        </div>

        {/* Main Title */}
        <div className="mb-8">
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal tracking-tight leading-[1.05] mb-4 text-[#F5F2EA] drop-shadow-sm">
            Narrow Gauge
          </h1>
          <p className="text-lg sm:text-2xl font-serif italic text-amber-200/90">
            Restaurant · NG Catters · Uknow Café
          </p>
        </div>

        {/* Existing Description */}
        <p className="text-base sm:text-lg text-[#E4E4E7] font-light max-w-2xl leading-relaxed mb-10 drop-shadow-sm">
          Sheopur’s hallmark for authentic multi-cuisine family dining, bespoke banquet catering, and contemporary café culture.
        </p>

        {/* Action Row */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            onClick={onExploreClick}
            className="px-6 py-3.5 text-xs font-mono uppercase tracking-[0.16em] bg-[#D99B59] hover:bg-[#c48849] text-[#0A0A0B] font-semibold transition-all cursor-pointer flex items-center gap-2 shadow-lg"
          >
            <span>Explore Services</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onOpenReserve}
            className="px-6 py-3.5 text-xs font-mono uppercase tracking-[0.16em] border border-white/20 hover:border-white text-[#F5F2EA] bg-white/[0.06] backdrop-blur-md hover:bg-white/[0.12] transition-all cursor-pointer"
          >
            Reserve Table
          </button>

          <a
            href={BRAND_INFO.contact.googleMapsDirectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3.5 text-xs font-mono uppercase tracking-[0.16em] text-[#D4D4D8] hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Opp. Badminton Court</span>
          </a>
        </div>
      </div>
    </section>
  );
};
