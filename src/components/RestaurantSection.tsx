import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, Utensils, Download, MapPin, Calendar, ShoppingBag } from 'lucide-react';
import { RESTAURANT_CATEGORIES, RESTAURANT_MENU_ITEMS, BRAND_INFO } from '../data/brandData';
import { MenuItem } from '../types';

interface RestaurantSectionProps {
  onOpenMenu: (category?: string) => void;
  onOpenReserve: () => void;
}

export const RestaurantSection: React.FC<RestaurantSectionProps> = ({
  onOpenMenu,
  onOpenReserve,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('mains');

  // Filter items for the selected category preview
  const filteredItems = RESTAURANT_MENU_ITEMS.filter(
    (item: MenuItem) => item.category === activeCategory
  );

  return (
    <section id="restaurant" className="py-28 sm:py-36 bg-[#0D0D0D] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#D99B59]/30 bg-[#D99B59]/10 text-[#D99B59] text-[11px] font-mono uppercase tracking-[0.2em] mb-4">
            <span>Experience 01 · Dining Destination</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl text-[#F5F2EA] font-normal tracking-tight mb-4">
            Narrow Gauge Restaurant
          </h2>

          <p className="font-serif italic text-xl sm:text-2xl text-accent-champagne/90 font-light mb-6">
            “Good food. Good company. No occasion required.”
          </p>

          <p className="text-[#9B9B9B] text-base leading-relaxed max-w-2xl font-light">
            Crafted for slow conversations and hearty feasts. Our kitchen celebrates classic and contemporary recipes prepared with meticulous technique, aromatic spices, and warm hospitality.
          </p>
        </div>

        {/* Visual Category Navigation Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-12 border-b border-white/[0.08] pb-4">
          {RESTAURANT_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-3 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 relative focus:outline-none ${
                  isActive
                    ? 'text-[#F5F2EA] bg-[#181818] border border-[#D99B59]/60'
                    : 'text-[#9B9B9B] hover:text-[#F5F2EA] border border-white/[0.05] hover:border-white/[0.15] bg-[#121212]'
                }`}
              >
                <span>{cat.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D99B59]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Dishes Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((item: MenuItem) => (
            <div
              key={item.id}
              className="p-7 bg-[#141414] border border-white/[0.06] hover:border-white/[0.18] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#D99B59] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D99B59]" />
                    {item.dietary === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
                  </span>
                  {item.tags && item.tags[0] && (
                    <span className="text-[10px] text-[#9B9B9B] border border-white/[0.08] px-2 py-0.5 font-mono">
                      {item.tags[0]}
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-2xl text-[#F5F2EA] font-normal mb-3 group-hover:text-accent-champagne transition-colors">
                  {item.name}
                </h3>

                <p className="text-xs text-[#9B9B9B] font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] text-[#9B9B9B]">
                <span className="tracking-wider uppercase font-mono">Chef Curated</span>
                <span className="text-accent-champagne/80 font-serif italic">Prepared Fresh</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Bar (Menu PDF, Online Ordering, Reservation, Directions) */}
        <div className="p-8 sm:p-10 bg-[#161616] border border-white/[0.08] mb-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F2EA] font-normal mb-2">
              Ready to Explore the Kitchen?
            </h3>
            <p className="text-sm text-[#9B9B9B] font-light max-w-xl">
              Browse our comprehensive à la carte menu, reserve your table ahead of time, or order directly to your doorstep.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenMenu(activeCategory)}
              className="px-6 py-3.5 bg-accent-champagne text-[#0B0B0B] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#D8BE9A] transition-all flex items-center gap-2 group"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>View Full Menu</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={onOpenReserve}
              className="px-6 py-3.5 border border-white/[0.15] hover:border-accent-champagne text-[#F5F2EA] hover:text-accent-champagne text-xs uppercase tracking-[0.18em] font-medium transition-all flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve a Table</span>
            </button>

            <a
              href="#contact"
              className="px-5 py-3.5 border border-white/[0.08] hover:border-white/30 text-[#9B9B9B] hover:text-[#F5F2EA] text-xs uppercase tracking-[0.18em] font-medium transition-all flex items-center gap-2"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Location & Hours</span>
            </a>
          </div>
        </div>

        {/* Asymmetric Editorial Food Gallery */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/[0.06]">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#9B9B9B]">
                Culinary Atmosphere
              </span>
              <h3 className="font-serif text-2xl text-[#F5F2EA] font-normal">
                Scenes from the Dining Room
              </h3>
            </div>
            <span className="text-xs text-[#9B9B9B] font-mono">05 Editorial Vignettes</span>
          </div>

          {/* Asymmetric grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Image 1: Large Feature */}
            <div className="md:col-span-7 h-[420px] relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=80"
                alt="Narrow Gauge Plated Food"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#D99B59] block mb-1">
                  Plated Artistry
                </span>
                <p className="font-serif text-xl text-[#F5F2EA]">
                  Classic slow-simmered dishes perfected on gentle embers
                </p>
              </div>
            </div>

            {/* Image 2: Stack Top */}
            <div className="md:col-span-5 h-[420px] relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
                alt="Narrow Gauge Dining Room"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#D99B59] block mb-1">
                  Ambience
                </span>
                <p className="font-serif text-xl text-[#F5F2EA]">
                  Warm, intimate corners for family gatherings and celebrations
                </p>
              </div>
            </div>

            {/* Image 3: Sizzling starters */}
            <div className="md:col-span-4 h-[300px] relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                alt="Starters & Sizzlers"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-serif text-lg text-[#F5F2EA]">Tandoor & Starters</p>
              </div>
            </div>

            {/* Image 4: High flame oriental wok */}
            <div className="md:col-span-4 h-[300px] relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80"
                alt="Wok Tossed Chinese"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-serif text-lg text-[#F5F2EA]">Wok Specialties</p>
              </div>
            </div>

            {/* Image 5: Artisan wood-fired pizza */}
            <div className="md:col-span-4 h-[300px] relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
                alt="Artisan Pizzas & Comfort Favourites"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-serif text-lg text-[#F5F2EA]">Wood-Fired Pizza</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
