import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Utensils,
  Star,
  Search,
  Calendar,
  MessageSquare,
  ArrowLeft,
  ArrowUpRight,
  Printer,
} from 'lucide-react';
import { InstagramIcon } from '../components/InstagramIcon';
import { NarrowGaugeRestaurantLogo } from '../components/Logos';
import { RatingBadge } from '../components/RatingBadge';
import {
  BRAND_INFO,
  OFFICIAL_BEVERAGES_MENU,
  RESTAURANT_FOOD_ITEMS,
} from '../data/brandData';
import { useTheme } from '../context/ThemeContext';

interface RestaurantPageProps {
  onBackToHome: () => void;
  onOpenReserve: () => void;
}

export const RestaurantPage: React.FC<RestaurantPageProps> = ({
  onBackToHome,
  onOpenReserve,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Combined menu
  const fullMenu = [...OFFICIAL_BEVERAGES_MENU, ...RESTAURANT_FOOD_ITEMS];

  const filteredMenu = fullMenu.filter((item) => {
    const matchesCategory =
      activeCategory === 'all' ||
      (activeCategory === 'beverages' &&
        (item.category === 'beverages' ||
          item.category === 'shakes' ||
          item.category === 'coffee')) ||
      item.category === activeCategory;

    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handlePrintMenu = () => {
    window.print();
  };

  return (
    <div
      className={`min-h-screen pt-24 pb-20 transition-colors duration-300 ${
        isDark ? 'bg-[#0B0B0B] text-[#F5F2EA]' : 'bg-[#FAF7F2] text-[#141210]'
      }`}
    >
      {/* Top Breadcrumb & Return Nav */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-8 no-print">
        <button
          onClick={onBackToHome}
          className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest transition-colors group cursor-pointer ${
            isDark ? 'text-[#9B9B9B] hover:text-accent-champagne' : 'text-[#6E665B] hover:text-[#8C571E]'
          }`}
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Experiences</span>
        </button>
      </div>

      {/* Hero Banner with Train Signboard Logo */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-16 no-print">
        <div
          className={`relative border overflow-hidden p-8 sm:p-12 lg:p-16 transition-colors ${
            isDark
              ? 'bg-[#121212] border-white/[0.1]'
              : 'bg-white border-[#E2D9CC] shadow-md'
          }`}
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D99B59]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7">
              {/* Logo Presentation */}
              <div className="mb-6">
                <NarrowGaugeRestaurantLogo showTrainImage={true} className="scale-105 origin-left" />
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight mb-4">
                Narrow Gauge Restaurant
              </h1>

              <p className="font-serif italic text-xl sm:text-2xl text-[#D99B59] font-light mb-6">
                “Good food. Good company. No occasion required.”
              </p>

              <p
                className={`text-sm sm:text-base font-light leading-relaxed max-w-xl mb-8 ${
                  isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
                }`}
              >
                Sheopur’s beloved family dining destination, serving aromatic North Indian curries, hand-tossed Chinese noodles, crisp fast food favourites, and comforting pizzas alongside chilled handcrafted beverages.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenReserve}
                  className="px-6 py-3.5 bg-accent-champagne text-[#0B0B0B] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#D8BE9A] transition-all flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Table</span>
                </button>

                <a
                  href={`https://wa.me/${BRAND_INFO.contact.whatsapp}?text=Hello%20Narrow%20Gauge%20Restaurant,%20I%20would%20like%20to%20order%20or%20reserve%20a%20table`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-3.5 border text-xs uppercase tracking-[0.18em] font-medium transition-all flex items-center gap-2 ${
                    isDark
                      ? 'border-white/[0.15] text-[#F5F2EA] hover:border-green-400 hover:text-green-400'
                      : 'border-stone-300 text-[#141210] hover:border-green-600 hover:text-green-700 bg-white'
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5 text-green-500" />
                  <span>WhatsApp Host</span>
                </a>

                <a
                  href="https://www.instagram.com/narrowgaugeofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-5 py-3.5 border text-xs uppercase tracking-[0.18em] font-medium transition-all flex items-center gap-2 group ${
                    isDark
                      ? 'border-white/[0.15] text-[#F5F2EA] hover:border-[#E1306C] hover:text-[#E1306C]'
                      : 'border-stone-300 text-[#141210] hover:border-[#E1306C] hover:text-[#E1306C] bg-white'
                  }`}
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#E1306C] group-hover:scale-110 transition-transform" />
                  <span>@narrowgaugeofficial</span>
                </a>

                {/* Print / Save PDF Button (Replacing Plain Text Download) */}
                <button
                  type="button"
                  onClick={handlePrintMenu}
                  className={`px-5 py-3.5 border text-xs uppercase tracking-[0.18em] font-mono transition-all flex items-center gap-2 cursor-pointer ${
                    isDark
                      ? 'border-white/[0.1] text-[#9B9B9B] hover:text-[#F5F2EA] hover:border-accent-champagne/40 bg-[#161616]'
                      : 'border-[#D4C3A3] text-[#5C564D] hover:text-[#141210] hover:border-[#8C571E] bg-white shadow-sm'
                  }`}
                  title="Print or Save Menu as PDF"
                  aria-label="Print or Save Menu as PDF"
                >
                  <Printer className="w-3.5 h-3.5 text-[#D99B59]" />
                  <span>Print / Save PDF</span>
                </button>
              </div>
            </div>

            {/* Right: Key Verified Details Card */}
            <div
              className={`lg:col-span-5 border p-6 sm:p-8 space-y-6 ${
                isDark ? 'bg-[#161616] border-white/[0.08]' : 'bg-[#FAF7F2] border-[#E2D9CC] shadow-sm'
              }`}
            >
              <div
                className={`flex items-center justify-between border-b pb-4 ${
                  isDark ? 'border-white/[0.08]' : 'border-stone-200'
                }`}
              >
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D99B59] font-medium">
                  Verified Information
                </span>
                <RatingBadge compact={true} />
              </div>

              <div className="space-y-4 text-xs font-light">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D99B59] shrink-0 mt-0.5" />
                  <div>
                    <strong className={`block font-medium mb-0.5 ${isDark ? 'text-[#F5F2EA]' : 'text-[#141210]'}`}>
                      Location
                    </strong>
                    <a
                      href={BRAND_INFO.contact.googleMapsDirectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`underline decoration-current underline-offset-2 transition-colors leading-relaxed block ${
                        isDark ? 'text-[#9B9B9B] hover:text-accent-champagne' : 'text-[#5C564D] hover:text-[#8C571E]'
                      }`}
                    >
                      Opposite Badminton Court, Shivpuri Road, Sheopur, Madhya Pradesh ↗
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#D99B59] shrink-0 mt-0.5" />
                  <div>
                    <strong className={`block font-medium mb-0.5 ${isDark ? 'text-[#F5F2EA]' : 'text-[#141210]'}`}>
                      Service Hours
                    </strong>
                    <span className={isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'}>
                      Daily: 11:00 AM – 10:45 PM
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Utensils className="w-4 h-4 text-[#D99B59] shrink-0 mt-0.5" />
                  <div>
                    <strong className={`block font-medium mb-0.5 ${isDark ? 'text-[#F5F2EA]' : 'text-[#141210]'}`}>
                      Cuisine
                    </strong>
                    <span className={isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'}>
                      North Indian, Chinese, Fast Food, Pizza & more
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className={`block font-medium mb-0.5 ${isDark ? 'text-[#F5F2EA]' : 'text-[#141210]'}`}>
                      Google Rating
                    </strong>
                    <span className={isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'}>
                      4.1 / 5.0 based on 364 customer reviews
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Menu Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-20 print-page">
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b ${
            isDark ? 'border-white/[0.08]' : 'border-stone-200'
          }`}
        >
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D99B59] block mb-2 font-medium">
              Authentic Kitchen Selection
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight">
              Restaurant Menu & Prices
            </h2>
          </div>

          {/* Search bar & Print Shortcut */}
          <div className="flex items-center gap-3 w-full sm:w-auto no-print">
            <div className="relative w-full sm:w-72">
              <Search
                className={`w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 ${
                  isDark ? 'text-[#9B9B9B]' : 'text-[#6E665B]'
                }`}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes, shakes, lassi..."
                className={`w-full pl-9 pr-4 py-2.5 border text-xs focus:outline-none transition-colors ${
                  isDark
                    ? 'bg-[#141414] border-white/[0.1] text-[#F5F2EA] focus:border-[#D99B59]'
                    : 'bg-white border-stone-300 text-stone-900 focus:border-[#8C571E]'
                }`}
              />
            </div>
            <button
              onClick={handlePrintMenu}
              className={`p-2.5 border transition-colors cursor-pointer ${
                isDark
                  ? 'border-white/[0.1] bg-[#141414] text-[#F5F2EA] hover:border-[#D99B59]'
                  : 'border-stone-300 bg-white text-stone-900 hover:border-[#8C571E]'
              }`}
              title="Print Menu"
              aria-label="Print Menu"
            >
              <Printer className="w-4 h-4 text-[#D99B59]" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10 no-print">
          {[
            { id: 'all', label: `All Items (${fullMenu.length})` },
            { id: 'beverages', label: 'Beverages & Shakes (21)' },
            { id: 'mains', label: 'North Indian Mains' },
            { id: 'chinese', label: 'Chinese Specialties' },
            { id: 'starters', label: 'Starters & Fast Food' },
            { id: 'pizza-cafe', label: 'Pizzas & Sandwiches' },
          ].map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-mono border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#D99B59] text-[#0B0B0B] border-[#D99B59] font-semibold'
                    : isDark
                    ? 'bg-[#141414] text-[#9B9B9B] border-white/[0.08] hover:text-[#F5F2EA]'
                    : 'bg-white text-[#5C564D] border-stone-300 hover:text-[#141210]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Items Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredMenu.map((item) => (
            <div
              key={item.id}
              className={`p-6 border transition-all flex flex-col justify-between group ${
                isDark
                  ? 'bg-[#141414] border-white/[0.06] hover:border-[#D99B59]/40'
                  : 'bg-white border-[#E2D9CC] hover:border-[#D99B59] shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3
                    className={`font-serif text-xl font-normal transition-colors ${
                      isDark
                        ? 'text-[#F5F2EA] group-hover:text-accent-champagne'
                        : 'text-[#141210] group-hover:text-[#8C571E]'
                    }`}
                  >
                    {item.name}
                  </h3>
                  {item.price && (
                    <span className="font-mono text-base font-semibold text-[#D99B59] px-2 py-0.5 bg-[#D99B59]/10 border border-[#D99B59]/30 shrink-0">
                      {item.price}
                    </span>
                  )}
                </div>

                <p
                  className={`text-xs font-light leading-relaxed mb-4 ${
                    isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
                  }`}
                >
                  {item.description}
                </p>
              </div>

              <div
                className={`pt-3 border-t flex items-center justify-between text-[10px] font-mono ${
                  isDark ? 'border-white/[0.06] text-[#9B9B9B]' : 'border-stone-200 text-[#6E665B]'
                }`}
              >
                <span className="text-[#D99B59] uppercase">
                  {item.tags && item.tags[0] ? item.tags[0] : 'Freshly Prepared'}
                </span>
                <span className="text-green-600 font-medium">● Pure Veg</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Location & Directions Map */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 no-print">
        <div
          className={`border p-8 sm:p-12 transition-colors ${
            isDark ? 'bg-[#121212] border-white/[0.08]' : 'bg-white border-[#E2D9CC] shadow-md'
          }`}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D99B59] block mb-1 font-medium">
                Find Us on Shivpuri Road
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal">
                Visit Narrow Gauge Restaurant
              </h3>
              <p className={`text-xs mt-1 ${isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'}`}>
                Opposite Badminton Court, Shivpuri Road, Sheopur, MP · Open Daily 11:00 AM – 10:45 PM
              </p>
            </div>

            <a
              href={BRAND_INFO.contact.googleMapsDirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#D99B59] text-[#0B0B0B] text-xs uppercase tracking-wider font-semibold hover:bg-[#e6a868] transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Get Directions</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="h-80 w-full overflow-hidden border border-white/[0.06]">
            <iframe
              src={BRAND_INFO.contact.googleMapsEmbedUrl}
              title="Narrow Gauge Restaurant Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
