import React from 'react';
import { ArrowLeft, ArrowUpRight, MapPin, Clock, Star } from 'lucide-react';
import { BRAND_INFO } from '../data/brandData';
import { NarrowGaugeRestaurantLogo, UknowCafeLogo, NGCattersLogo, ParentBrandLogo } from '../components/Logos';
import { useTheme } from '../context/ThemeContext';

interface AboutPageProps {
  onBackToHome: () => void;
  onNavigateToService: (service: 'restaurant' | 'catering' | 'cafe') => void;
  onOpenReserve: (experience?: 'restaurant' | 'catering' | 'cafe') => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onBackToHome,
  onNavigateToService,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-screen pt-28 pb-20 transition-colors duration-200 ${
        isDark ? 'bg-[#0A0A0B] text-[#EDEDED]' : 'bg-[#FAF9F6] text-[#171717]'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Minimal Header */}
        <header className="pb-10 border-b border-neutral-200 dark:border-white/10 mb-12">
          <div className="mb-4">
            <ParentBrandLogo compact={true} />
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight mb-4">
            About Narrow Gauge
          </h1>
          <p className="text-base sm:text-lg font-light text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Honoring Sheopur’s historic railway heritage through three hospitality destinations built on honest culinary traditions and generous service.
          </p>
        </header>

        {/* Story & Heritage */}
        <section className="space-y-6 text-sm sm:text-base font-light text-neutral-700 dark:text-neutral-300 leading-relaxed mb-16">
          <h2 className="font-serif text-2xl font-normal text-neutral-900 dark:text-neutral-100">
            The Railway Heritage &amp; Inspiration
          </h2>
          <p>
            For decades, Sheopur was celebrated for its historic narrow-gauge railway line — one of the longest surviving 610 mm narrow-gauge systems in the world, carrying generations across scenic forests and quiet rural landscapes.
          </p>
          <p>
            We named Narrow Gauge in tribute to this rich heritage. Just as the railway connected towns and carried travelers together, our venues bring families, friends, and community together over great food and unhurried conversations.
          </p>
        </section>

        {/* The 3 Core Pillars */}
        <section className="mb-16 pb-12 border-b border-neutral-200 dark:border-white/10">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 mb-6">
            Our Guiding Philosophy
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 border border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-white/[0.02]">
              <h3 className="font-serif text-lg mb-2">Uncompromising Freshness</h3>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">
                From fresh dairy curds and churned lassi to whole ground spices, we prepare our dishes daily without artificial shortcuts.
              </p>
            </div>
            <div className="p-6 border border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-white/[0.02]">
              <h3 className="font-serif text-lg mb-2">Generous Hospitality</h3>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">
                Whether dining with family or hosting an event of 2,000 guests, every visitor is welcomed like an honored personal guest.
              </p>
            </div>
            <div className="p-6 border border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-white/[0.02]">
              <h3 className="font-serif text-lg mb-2">Deep Community Roots</h3>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">
                Proudly rooted in Sheopur, MP. We cherish our local patrons and travelers visiting the Kuno national park circuit.
              </p>
            </div>
          </div>
        </section>

        {/* The Three Concepts */}
        <section className="mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 mb-6">
            Three Experiences Under One Vision
          </p>
          <div className="space-y-4">
            <div
              onClick={() => onNavigateToService('restaurant')}
              className="p-6 border border-neutral-200 dark:border-white/10 hover:border-black dark:hover:border-white cursor-pointer transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
            >
              <div>
                <h3 className="font-serif text-xl mb-1">Narrow Gauge Restaurant</h3>
                <p className="text-xs text-neutral-500 font-light">
                  Multi-cuisine dining: North Indian curries, Chinese woks, pizzas, and fresh beverages. (11 AM – 10:45 PM)
                </p>
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-200 group-hover:underline shrink-0">
                View Restaurant →
              </span>
            </div>

            <div
              onClick={() => onNavigateToService('catering')}
              className="p-6 border border-neutral-200 dark:border-white/10 hover:border-black dark:hover:border-white cursor-pointer transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
            >
              <div>
                <h3 className="font-serif text-xl mb-1">NG Catters</h3>
                <p className="text-xs text-neutral-500 font-light">
                  Outdoor banquet catering for royal weddings, receptions, and corporate galas across Madhya Pradesh.
                </p>
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-200 group-hover:underline shrink-0">
                View Catering →
              </span>
            </div>

            <div
              onClick={() => onNavigateToService('cafe')}
              className="p-6 border border-neutral-200 dark:border-white/10 hover:border-black dark:hover:border-white cursor-pointer transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
            >
              <div>
                <h3 className="font-serif text-xl mb-1">Uknow Café</h3>
                <p className="text-xs text-neutral-500 font-light">
                  Aesthetic café culture: thick Kitkat & Oreo shakes, cold coffees with ice cream, mojitos, and quick bites.
                </p>
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-200 group-hover:underline shrink-0">
                View Café →
              </span>
            </div>
          </div>
        </section>

        {/* Minimal Location & Rating Strip */}
        <div className="pt-8 border-t border-neutral-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <span>Opposite Badminton Court, Shivpuri Road, Sheopur, MP</span>
          <div className="flex items-center gap-4">
            <span className="text-amber-600 dark:text-amber-400">⭐ 4.1 (364 Reviews)</span>
            <a
              href={BRAND_INFO.contact.googleMapsDirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1"
            >
              <span>Map Directions</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
