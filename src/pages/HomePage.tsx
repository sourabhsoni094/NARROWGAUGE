import React from 'react';
import { Hero } from '../components/Hero';
import { Introduction } from '../components/Introduction';
import { BrandStory } from '../components/BrandStory';
import { WhyNarrowGauge } from '../components/WhyNarrowGauge';
import { PhotoGallery } from '../components/PhotoGallery';
import { ContactSection } from '../components/ContactSection';
import { LocationNoticeBar } from '../components/RatingBadge';
import { NarrowGaugeRestaurantLogo, UknowCafeLogo, NGCattersLogo } from '../components/Logos';
import { ArrowRight, Sparkles, MapPin, Clock, Utensils } from 'lucide-react';
import { GalleryItem } from '../types';
import { PageRoute } from '../components/Navbar';
import { useTheme } from '../context/ThemeContext';

interface HomePageProps {
  onNavigateToPage: (page: PageRoute) => void;
  onOpenReserve: (exp?: 'restaurant' | 'catering' | 'cafe') => void;
  onOpenLightbox: (item: GalleryItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigateToPage,
  onOpenReserve,
  onOpenLightbox,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCardKeyDown = (
    e: React.KeyboardEvent,
    page: PageRoute
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onNavigateToPage(page);
    }
  };

  return (
    <div className="flex-1">
      {/* Cinematic Hero */}
      <Hero
        onExploreClick={() => scrollToSection('services-hub')}
        onOpenReserve={() => onOpenReserve('restaurant')}
      />

      {/* Verified Location & Rating Strip */}
      <LocationNoticeBar />

      {/* Brand Introduction */}
      <Introduction />

      {/* THREE SERVICES PORTAL HUB (Single primary source of truth, no duplicate experiences section) */}
      <section
        id="services-hub"
        className={`py-20 sm:py-28 border-b transition-colors duration-300 ${
          isDark
            ? 'bg-[#0D0D0D] border-white/[0.06]'
            : 'bg-[#FAF7F2] border-[#E5DDD0]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 border text-[11px] font-mono uppercase tracking-[0.2em] mb-3 ${
                  isDark
                    ? 'border-accent-champagne/40 bg-accent-champagne/10 text-accent-champagne'
                    : 'border-[#D4C3A3] bg-[#EFE8DC] text-[#7A4B13]'
                }`}
              >
                <Sparkles className="w-3 h-3" />
                <span>Our 3 Dedicated Services</span>
              </div>
              <h2
                className={`font-serif text-3xl sm:text-5xl font-normal tracking-tight ${
                  isDark ? 'text-[#F5F2EA]' : 'text-[#141210]'
                }`}
              >
                Explore the Three Worlds
              </h2>
            </div>
            <p
              className={`text-sm max-w-md font-light ${
                isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
              }`}
            >
              Select below to open dedicated portals for each service — featuring full menus, verified pricing, photos, and direct booking.
            </p>
          </div>

          {/* 3 Accessible, Keyboard-Navigable Service Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 1. Narrow Gauge Restaurant */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => onNavigateToPage('restaurant')}
              onKeyDown={(e) => handleCardKeyDown(e, 'restaurant')}
              aria-label="Narrow Gauge Restaurant - Multi-cuisine dining, menus, and reservations"
              className={`group p-8 border transition-all duration-300 cursor-pointer flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-accent-champagne focus:outline-none ${
                isDark
                  ? 'bg-[#141414] border-white/[0.08] hover:border-[#D99B59] hover:bg-[#181818]'
                  : 'bg-white border-[#E2D9CC] hover:border-[#D99B59] hover:bg-[#FDFBF7] shadow-sm'
              }`}
            >
              <div>
                {/* Logo Area */}
                <div
                  className={`mb-6 p-3 border flex items-center justify-between ${
                    isDark ? 'bg-[#0B0B0B] border-white/[0.06]' : 'bg-[#F7F2E8] border-[#E2D9CC]'
                  }`}
                >
                  <NarrowGaugeRestaurantLogo showTrainImage={true} />
                </div>

                <div className="space-y-3 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D99B59] font-medium block">
                    Multi-Cuisine Dining
                  </span>
                  <h3
                    className={`font-serif text-2xl transition-colors ${
                      isDark ? 'text-[#F5F2EA] group-hover:text-white' : 'text-[#141210] group-hover:text-[#8C571E]'
                    }`}
                  >
                    Narrow Gauge Restaurant
                  </h3>
                  <p
                    className={`text-xs font-light leading-relaxed ${
                      isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
                    }`}
                  >
                    Fine dining for families and friends. Rich North Indian curries, hand-tossed Chinese noodles, crisp fast food, and chilled beverages.
                  </p>
                </div>

                {/* Info Pills */}
                <div
                  className={`space-y-2 mb-8 text-[11px] font-mono border-t pt-4 ${
                    isDark ? 'text-[#9B9B9B] border-white/[0.06]' : 'text-[#5C564D] border-[#E2D9CC]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-[#D99B59] shrink-0" />
                    <span>Opp. Badminton Court, Shivpuri Rd</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3 text-[#D99B59] shrink-0" />
                    <span>11:00 AM – 10:45 PM Daily</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Utensils className="w-3 h-3 text-[#D99B59] shrink-0" />
                    <span>Lassi ₹80 · Shakes ₹90–₹130</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div
                className={`pt-4 border-t flex items-center justify-between ${
                  isDark ? 'border-white/[0.08]' : 'border-[#E2D9CC]'
                }`}
              >
                <span
                  className={`text-xs uppercase tracking-wider font-mono font-medium transition-colors ${
                    isDark
                      ? 'text-[#F5F2EA] group-hover:text-[#D99B59]'
                      : 'text-[#141210] group-hover:text-[#8C571E]'
                  }`}
                >
                  Open Dedicated Page
                </span>
                <div
                  className={`w-8 h-8 rounded-none border flex items-center justify-center transition-all ${
                    isDark
                      ? 'border-white/[0.12] text-[#F5F2EA] group-hover:border-[#D99B59] group-hover:bg-[#D99B59] group-hover:text-[#0B0B0B]'
                      : 'border-[#D4C3A3] text-[#141210] group-hover:border-[#8C571E] group-hover:bg-[#8C571E] group-hover:text-white'
                  }`}
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>

            {/* 2. NG Catters */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => onNavigateToPage('catering')}
              onKeyDown={(e) => handleCardKeyDown(e, 'catering')}
              aria-label="NG Catters - Catering for weddings, receptions, and banquets"
              className={`group p-8 border transition-all duration-300 cursor-pointer flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-accent-gold focus:outline-none ${
                isDark
                  ? 'bg-[#141414] border-white/[0.08] hover:border-accent-gold hover:bg-[#181818]'
                  : 'bg-white border-[#E2D9CC] hover:border-[#8A6008] hover:bg-[#FDFBF7] shadow-sm'
              }`}
            >
              <div>
                {/* Logo Area */}
                <div
                  className={`mb-6 p-3 border flex items-center justify-between ${
                    isDark ? 'bg-[#0B0B0B] border-white/[0.06]' : 'bg-[#F7F2E8] border-[#E2D9CC]'
                  }`}
                >
                  <NGCattersLogo />
                </div>

                <div className="space-y-3 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent-gold font-medium block">
                    Events & Banquets
                  </span>
                  <h3
                    className={`font-serif text-2xl transition-colors ${
                      isDark ? 'text-[#F5F2EA] group-hover:text-white' : 'text-[#141210] group-hover:text-[#8A6008]'
                    }`}
                  >
                    NG Catters
                  </h3>
                  <p
                    className={`text-xs font-light leading-relaxed ${
                      isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
                    }`}
                  >
                    Celebrated catering for grand weddings, intimate engagements, corporate banquets, and family celebrations across Madhya Pradesh.
                  </p>
                </div>

                {/* Info Pills */}
                <div
                  className={`space-y-2 mb-8 text-[11px] font-mono border-t pt-4 ${
                    isDark ? 'text-[#9B9B9B] border-white/[0.06]' : 'text-[#5C564D] border-[#E2D9CC]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent-gold rounded-full shrink-0" />
                    <span>Live Gourmet Counters & Banquets</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent-gold rounded-full shrink-0" />
                    <span>Capacity: 50 to 2,000+ Guests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent-gold rounded-full shrink-0" />
                    <span>Custom Menus & Royal Presentation</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div
                className={`pt-4 border-t flex items-center justify-between ${
                  isDark ? 'border-white/[0.08]' : 'border-[#E2D9CC]'
                }`}
              >
                <span
                  className={`text-xs uppercase tracking-wider font-mono font-medium transition-colors ${
                    isDark
                      ? 'text-[#F5F2EA] group-hover:text-accent-gold'
                      : 'text-[#141210] group-hover:text-[#8A6008]'
                  }`}
                >
                  Open Dedicated Page
                </span>
                <div
                  className={`w-8 h-8 rounded-none border flex items-center justify-center transition-all ${
                    isDark
                      ? 'border-white/[0.12] text-[#F5F2EA] group-hover:border-accent-gold group-hover:bg-accent-gold group-hover:text-[#0B0B0B]'
                      : 'border-[#D4C3A3] text-[#141210] group-hover:border-[#8A6008] group-hover:bg-[#8A6008] group-hover:text-white'
                  }`}
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>

            {/* 3. Uknow Café */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => onNavigateToPage('cafe')}
              onKeyDown={(e) => handleCardKeyDown(e, 'cafe')}
              aria-label="Uknow Café - Artisan coffee, thick shakes, burgers, and hangout space"
              className={`group p-8 border transition-all duration-300 cursor-pointer flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-[#C89666] focus:outline-none ${
                isDark
                  ? 'bg-[#141414] border-white/[0.08] hover:border-[#C89666] hover:bg-[#181818]'
                  : 'bg-white border-[#E2D9CC] hover:border-[#B24F10] hover:bg-[#FDFBF7] shadow-sm'
              }`}
            >
              <div>
                {/* Logo Area */}
                <div
                  className={`mb-6 p-3 border flex items-center justify-between ${
                    isDark ? 'bg-[#0B0B0B] border-white/[0.06]' : 'bg-[#F7F2E8] border-[#E2D9CC]'
                  }`}
                >
                  <UknowCafeLogo />
                </div>

                <div className="space-y-3 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C89666] font-medium block">
                    Hangouts & Shakes
                  </span>
                  <h3
                    className={`font-serif text-2xl transition-colors ${
                      isDark ? 'text-[#F5F2EA] group-hover:text-white' : 'text-[#141210] group-hover:text-[#B24F10]'
                    }`}
                  >
                    Uknow Café
                  </h3>
                  <p
                    className={`text-xs font-light leading-relaxed ${
                      isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
                    }`}
                  >
                    A vibrant haven with decadent milkshakes, iced cold coffees, mocktails, pizzas, and cozy seating designed for unhurried conversations.
                  </p>
                </div>

                {/* Info Pills */}
                <div
                  className={`space-y-2 mb-8 text-[11px] font-mono border-t pt-4 ${
                    isDark ? 'text-[#9B9B9B] border-white/[0.06]' : 'text-[#5C564D] border-[#E2D9CC]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#C89666] rounded-full shrink-0" />
                    <span>Cold Coffee w/ Ice Cream ₹110</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#C89666] rounded-full shrink-0" />
                    <span>Kitkat & Oreo Shakes ₹120–₹130</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#C89666] rounded-full shrink-0" />
                    <span>Mojitos & Coolers ₹70–₹90</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div
                className={`pt-4 border-t flex items-center justify-between ${
                  isDark ? 'border-white/[0.08]' : 'border-[#E2D9CC]'
                }`}
              >
                <span
                  className={`text-xs uppercase tracking-wider font-mono font-medium transition-colors ${
                    isDark
                      ? 'text-[#F5F2EA] group-hover:text-[#C89666]'
                      : 'text-[#141210] group-hover:text-[#B24F10]'
                  }`}
                >
                  Open Dedicated Page
                </span>
                <div
                  className={`w-8 h-8 rounded-none border flex items-center justify-center transition-all ${
                    isDark
                      ? 'border-white/[0.12] text-[#F5F2EA] group-hover:border-[#C89666] group-hover:bg-[#C89666] group-hover:text-[#0B0B0B]'
                      : 'border-[#D4C3A3] text-[#141210] group-hover:border-[#B24F10] group-hover:bg-[#B24F10] group-hover:text-white'
                  }`}
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story & Heritage */}
      <BrandStory onReadMore={() => onNavigateToPage('about')} />

      {/* Why Narrow Gauge */}
      <WhyNarrowGauge />

      {/* Masonry Photo Gallery */}
      <PhotoGallery onOpenLightbox={onOpenLightbox} />

      {/* Comprehensive Contact Section */}
      <ContactSection
        onOpenReserve={() => onOpenReserve('restaurant')}
        onPlanEvent={() => onNavigateToPage('catering')}
      />
    </div>
  );
};
