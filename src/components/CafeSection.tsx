import React, { useState } from 'react';
import { Coffee, MapPin, Sparkles, ArrowRight, Heart } from 'lucide-react';
import { CAFE_CATEGORIES, BRAND_INFO } from '../data/brandData';

interface CafeSectionProps {
  onOpenMenu: () => void;
  onGetDirections: () => void;
}

export const CafeSection: React.FC<CafeSectionProps> = ({
  onOpenMenu,
  onGetDirections,
}) => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="cafe" className="py-28 sm:py-36 bg-[#0D0D0D] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#C89666]/40 bg-[#C89666]/10 text-[#C89666] text-[11px] font-mono uppercase tracking-[0.2em] mb-4">
              <span>Experience 03 · Artisan Café & Lounge</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl text-[#F5F2EA] font-normal tracking-tight mb-4">
              Uknow Café
            </h2>

            <p className="font-serif italic text-xl sm:text-2xl text-accent-champagne/90 font-light mb-6">
              “A place for coffee, conversations & cravings.”
            </p>

            <p className="text-[#9B9B9B] text-base leading-relaxed max-w-2xl font-light">
              Designed for slow mornings, animated catchups and cozy evening unwindings. Sip specialty roasts, artisanal thick shakes and handcrafted cafe savouries in a warm, relaxed space.
            </p>
          </div>

          {/* Quick CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenMenu}
              className="px-6 py-3.5 bg-[#C89666] text-[#0B0B0B] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#d8a87b] transition-all flex items-center gap-2"
            >
              <Coffee className="w-3.5 h-3.5" />
              <span>Discover Uknow Café</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onGetDirections}
              className="px-6 py-3.5 border border-white/[0.12] hover:border-[#C89666] text-[#F5F2EA] hover:text-[#C89666] text-xs uppercase tracking-[0.18em] font-medium transition-all flex items-center gap-2"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Get Directions</span>
            </button>
          </div>
        </div>

        {/* Café Categories Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {CAFE_CATEGORIES.map((category, idx) => {
            const isSelected = activeCategory === idx;

            return (
              <div
                key={category.name}
                onClick={() => setActiveCategory(idx)}
                className={`p-8 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#181818] border-[#C89666]/60 shadow-lg'
                    : 'bg-[#121212] border-white/[0.06] hover:border-white/[0.18]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C89666]">
                      0{idx + 1} // CAFE
                    </span>
                    <span className="text-xs text-[#9B9B9B] font-mono">
                      {category.items.length} Offerings
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#F5F2EA] font-normal mb-2">
                    {category.name}
                  </h3>

                  <p className="text-xs text-[#9B9B9B] font-light leading-relaxed mb-6">
                    {category.subtitle}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-white/[0.06]">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="text-xs text-[#F5F2EA]/90 flex items-center justify-between font-light"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#C89666]" />
                          <span>{item.name}</span>
                        </div>
                        <span className="font-mono text-[11px] text-[#C89666] font-medium">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.05] flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-[#9B9B9B] font-mono">
                    Uknow Daily
                  </span>
                  <span className="text-xs text-[#C89666] font-medium font-serif italic">
                    Fresh Brewed
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lifestyle & Ambient Photography Layout */}
        <div className="relative border border-white/[0.08] bg-[#121212] overflow-hidden p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Lifestyle Image Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-56 sm:h-64 overflow-hidden relative group">
                  <img
                    src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
                    alt="Latte Art at Uknow Café"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>

                <div className="h-44 sm:h-52 overflow-hidden relative group">
                  <img
                    src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
                    alt="Pastries & Desserts"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="h-44 sm:h-52 overflow-hidden relative group">
                  <img
                    src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80"
                    alt="Artisan Sandwiches"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>

                <div className="h-56 sm:h-64 overflow-hidden relative group">
                  <img
                    src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80"
                    alt="Warm Café Ambiance"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
              </div>
            </div>

            {/* Editorial Lifestyle Story */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C89666] mb-3">
                Atmosphere & Community
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F2EA] font-normal mb-4">
                The Slow Pour Lifestyle
              </h3>
              <p className="text-sm text-[#9B9B9B] font-light leading-relaxed mb-6">
                We believe coffee tastes best when accompanied by unhurried time. Whether you come to brainstorm, read a novel, catch up with an old confidant or treat yourself to a midnight dessert craving — Uknow Café is shaped for you.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-xs text-[#F5F2EA]/90 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C89666]" />
                  <span>Single-origin and house espresso blends pulled to perfection</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#F5F2EA]/90 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C89666]" />
                  <span>Generous power outlets, high-speed Wi-Fi, and ambient playlists</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#F5F2EA]/90 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C89666]" />
                  <span>Late-night dessert and specialty beverage service</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={onGetDirections}
                  className="px-6 py-3 border border-white/[0.15] hover:border-[#C89666] text-xs uppercase tracking-wider text-[#F5F2EA] hover:text-[#C89666] transition-colors flex items-center gap-2"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Visit Uknow Café</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
