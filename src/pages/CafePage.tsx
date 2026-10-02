import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  Search,
  Calendar,
  MessageSquare,
  Clock,
  MapPin,
  Star,
} from 'lucide-react';
import { UknowCafeLogo } from '../components/Logos';
import { BRAND_INFO, OFFICIAL_BEVERAGES_MENU } from '../data/brandData';
import { useTheme } from '../context/ThemeContext';

interface CafePageProps {
  onBackToHome: () => void;
  onOpenReserve: () => void;
}

export const CafePage: React.FC<CafePageProps> = ({ onBackToHome, onOpenReserve }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allCafeItems = [
    ...OFFICIAL_BEVERAGES_MENU,
    {
      id: 'cb-1',
      name: 'Farmhouse Cheesy Pizza',
      description: 'Thin crisp base topped with melted mozzarella, sweet corn, bell peppers and herbs.',
      category: 'bites' as const,
      dietary: 'veg' as const,
      experience: 'cafe' as const,
      price: '₹240',
      tags: ['Café Favourite'],
    },
    {
      id: 'cb-2',
      name: 'Grilled Cheese Sandwich',
      description: 'Crisp buttered artisanal bread stuffed with cheese and seasoned herbs.',
      category: 'bites' as const,
      dietary: 'veg' as const,
      experience: 'cafe' as const,
      price: '₹120',
      tags: ['Comfort Bite'],
    },
    {
      id: 'cb-3',
      name: 'Peri-Peri French Fries',
      description: 'Crispy fried potato batons tossed in zesty peri-peri masala.',
      category: 'bites' as const,
      dietary: 'veg' as const,
      experience: 'cafe' as const,
      price: '₹100',
      tags: ['Crunchy'],
    },
  ];

  const filteredItems = allCafeItems.filter((item) => {
    const matchesFilter =
      activeFilter === 'all' ||
      (activeFilter === 'shakes' && item.category === 'shakes') ||
      (activeFilter === 'coffee' && item.category === 'coffee') ||
      (activeFilter === 'coolers' && item.category === 'beverages') ||
      (activeFilter === 'bites' && item.category === 'bites');

    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div
      className={`min-h-screen pt-28 pb-20 transition-colors duration-200 ${
        isDark ? 'bg-[#0A0A0B] text-[#EDEDED]' : 'bg-[#FAF9F6] text-[#171717]'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
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

        {/* Minimal Cafe Header */}
        <header className="pb-10 border-b border-neutral-200 dark:border-white/10 mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="mb-4">
                <UknowCafeLogo compact={true} />
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight mb-2">
                Uknow Café
              </h1>
              <p className="text-sm font-light text-neutral-600 dark:text-neutral-400 max-w-xl">
                A vibrant café space by Narrow Gauge for thick handcrafted shakes, cold brews with ice cream, refreshing coolers, and casual bites.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${BRAND_INFO.contact.whatsapp}?text=Hello%20Uknow%20Café,%20I%20would%20like%20to%20order%20or%20reserve%20a%20table`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-white bg-neutral-900 hover:bg-black dark:bg-neutral-100 dark:text-black dark:hover:bg-white transition-all inline-flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Order via WhatsApp</span>
              </a>

              <a
                href="https://www.instagram.com/cafeuknow/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 border border-neutral-300 dark:border-white/10 text-xs font-mono uppercase tracking-wider hover:border-black dark:hover:border-white transition-colors inline-flex items-center gap-1.5"
              >
                <span>@cafeuknow</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Minimal Metadata Strip */}
          <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-neutral-200/60 dark:border-white/5 text-xs font-mono text-neutral-500">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>11:00 AM – 10:45 PM Daily</span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Opp. Badminton Court, Shivpuri Rd</span>
            </span>
            <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>4.1 Rating (364 Reviews)</span>
            </span>
          </div>
        </header>

        {/* Minimal Search & Filter Bar */}
        <section className="mb-10">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: 'All Items' },
                { id: 'shakes', label: 'Milkshakes' },
                { id: 'coffee', label: 'Coffee' },
                { id: 'coolers', label: 'Mojitos & Coolers' },
                { id: 'bites', label: 'Bites & Pizzas' },
              ].map((filter) => {
                const isActive = activeFilter === filter.id;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-black font-semibold'
                        : 'border border-neutral-300 dark:border-white/10 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search shakes & treats..."
                className="w-full pl-9 pr-3 py-1.5 border border-neutral-300 dark:border-white/10 bg-transparent text-xs focus:outline-none focus:border-black dark:focus:border-white transition-colors"
              />
            </div>
          </div>
        </section>

        {/* Minimal Item List */}
        <section>
          <div className="divide-y divide-neutral-200/60 dark:divide-white/5">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="py-4 flex items-start justify-between gap-6 hover:bg-neutral-50/50 dark:hover:bg-white/[0.01] transition-colors px-2"
              >
                <div className="max-w-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-400 shrink-0" />
                    <h3 className="font-serif text-lg font-normal text-neutral-900 dark:text-neutral-100">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <span className="font-mono text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="py-16 text-center text-xs font-mono text-neutral-400">
              No items match your search.
            </div>
          )}
        </section>

        {/* Minimal Directions Footer */}
        <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
          <span className="text-neutral-500">
            Opposite Badminton Court, Shivpuri Road, Sheopur, MP
          </span>
          <a
            href={BRAND_INFO.contact.googleMapsDirectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center gap-1.5"
          >
            <span>Open Directions on Google Maps</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
