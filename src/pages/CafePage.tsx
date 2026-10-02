import React, { useState } from 'react';
import {
  Coffee,
  MapPin,
  Clock,
  Sparkles,
  ArrowLeft,
  ArrowUpRight,
  MessageSquare,
  Search,
  Heart,
  Calendar,
} from 'lucide-react';
import { InstagramIcon } from '../components/InstagramIcon';
import { UknowCafeLogo } from '../components/Logos';
import { RatingBadge } from '../components/RatingBadge';
import { BRAND_INFO, CAFE_CATEGORIES, OFFICIAL_BEVERAGES_MENU } from '../data/brandData';

interface CafePageProps {
  onBackToHome: () => void;
  onOpenReserve: () => void;
}

export const CafePage: React.FC<CafePageProps> = ({ onBackToHome, onOpenReserve }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Collect all drinks & bites with prices
  const allCafeItems = [
    ...OFFICIAL_BEVERAGES_MENU,
    {
      id: 'cb-1',
      name: 'Farmhouse Cheesy Pizza',
      description: 'Thin crisp base topped with melted mozzarella, sweet corn, bell peppers and herbs.',
      category: 'pizza-cafe' as const,
      dietary: 'veg' as const,
      experience: 'cafe' as const,
      price: '₹240',
      tags: ['Café Favourite']
    },
    {
      id: 'cb-2',
      name: 'Grilled Cheese Sandwich',
      description: 'Crisp buttered artisanal bread stuffed with cheese and seasoned herbs.',
      category: 'sandwiches' as const,
      dietary: 'veg' as const,
      experience: 'cafe' as const,
      price: '₹120',
      tags: ['Comfort Bite']
    },
    {
      id: 'cb-3',
      name: 'Peri-Peri French Fries',
      description: 'Crispy fried potato batons tossed in zesty peri-peri masala.',
      category: 'bites' as const,
      dietary: 'veg' as const,
      experience: 'cafe' as const,
      price: '₹100',
      tags: ['Crunchy']
    },
    {
      id: 'cb-4',
      name: 'Veg Hakka Noodles',
      description: 'Wok tossed spring noodles with julienne veggies and subtle pepper.',
      category: 'bites' as const,
      dietary: 'veg' as const,
      experience: 'cafe' as const,
      price: '₹140',
      tags: ['Quick Bite']
    }
  ];

  const filteredItems = allCafeItems.filter((item) => {
    const matchesFilter =
      activeFilter === 'all' ||
      (activeFilter === 'shakes' && item.category === 'shakes') ||
      (activeFilter === 'coffee' && item.category === 'coffee') ||
      (activeFilter === 'coolers' && (item.category === 'beverages' && !item.name.toLowerCase().includes('shake'))) ||
      (activeFilter === 'bites' && (item.category === 'pizza-cafe' || item.category === 'sandwiches' || item.category === 'bites'));

    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F5F2EA] pt-24 pb-20">
      {/* Return Nav */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#9B9B9B] hover:text-[#C89666] transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Experiences</span>
        </button>
      </div>

      {/* Hero Banner with Uknow Café Logo */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-16">
        <div className="relative border border-white/[0.1] bg-[#121212] overflow-hidden p-8 sm:p-12 lg:p-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C89666]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7">
              {/* Exact Uknow Logo */}
              <div className="mb-6 p-3 inline-block bg-cream-50/5 border border-white/10">
                <UknowCafeLogo showSubtitle={true} className="scale-110 origin-left" />
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl text-[#F5F2EA] font-normal tracking-tight mb-4">
                Uknow Café
              </h1>

              <p className="font-serif italic text-xl sm:text-2xl text-[#C89666] font-light mb-6">
                “A place for coffee, conversations & cravings.”
              </p>

              <p className="text-sm sm:text-base text-[#9B9B9B] font-light leading-relaxed max-w-xl mb-8">
                By Narrow Gauge — welcoming you to Sheopur’s coziest coffee & shake lounge. Indulge in artisanal cold coffees, rich KitKat and Oreo shakes, refreshing mojitos, and oven-fresh pizzas made for slow conversations.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/${BRAND_INFO.contact.whatsapp}?text=Hello%20Uknow%20Café,%20I%20would%20like%20to%20order%20or%20reserve%20a%20table`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#C89666] text-[#0B0B0B] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#d8a87b] transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Order via WhatsApp</span>
                </a>

                <button
                  onClick={onOpenReserve}
                  className="px-6 py-3.5 border border-white/[0.15] hover:border-[#C89666] text-[#F5F2EA] hover:text-[#C89666] text-xs uppercase tracking-[0.18em] font-medium transition-all flex items-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve a Booth</span>
                </button>

                <a
                  href="https://www.instagram.com/cafeuknow/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 border border-white/[0.15] hover:border-[#C89666] text-[#F5F2EA] hover:text-[#C89666] text-xs uppercase tracking-[0.18em] font-medium transition-all flex items-center gap-2 group"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#C89666] group-hover:scale-110 transition-transform" />
                  <span>@cafeuknow</span>
                </a>
              </div>
            </div>

            {/* Verified Info Card */}
            <div className="lg:col-span-5 bg-[#161616] border border-white/[0.08] p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C89666]">
                  Café & Shake Lounge
                </span>
                <RatingBadge compact={true} />
              </div>

              <div className="space-y-4 text-xs font-light">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C89666] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#F5F2EA] font-medium mb-0.5">Location</strong>
                    <a
                      href={BRAND_INFO.contact.googleMapsDirectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#9B9B9B] hover:text-[#C89666] underline decoration-white/20 transition-colors block"
                    >
                      Opposite Badminton Court, Shivpuri Road, Sheopur, MP ↗
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#C89666] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#F5F2EA] font-medium mb-0.5">Lounge Hours</strong>
                    <span className="text-[#9B9B9B]">Daily: 11:00 AM – 10:45 PM</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Coffee className="w-4 h-4 text-[#C89666] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#F5F2EA] font-medium mb-0.5">Specialties</strong>
                    <span className="text-[#9B9B9B]">
                      Cold Coffee, KitKat & Oreo Shakes, Mojitos, Pizzas & Paninis
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu & Beverage Specials */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/[0.08]">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C89666] block mb-2">
              Uknow Creations
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F2EA] font-normal tracking-tight">
              Café Menu & Shake Bar
            </h2>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#9B9B9B] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search shakes, coffee, bites..."
              className="w-full pl-9 pr-4 py-2.5 bg-[#141414] border border-white/[0.1] text-xs text-[#F5F2EA] focus:border-[#C89666] focus:outline-none"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 text-xs uppercase tracking-wider font-mono border transition-all ${
              activeFilter === 'all'
                ? 'bg-[#C89666] text-[#0B0B0B] border-[#C89666] font-medium'
                : 'bg-[#141414] text-[#9B9B9B] border-white/[0.08] hover:text-[#F5F2EA]'
            }`}
          >
            All Items
          </button>
          <button
            onClick={() => setActiveFilter('shakes')}
            className={`px-4 py-2 text-xs uppercase tracking-wider font-mono border transition-all ${
              activeFilter === 'shakes'
                ? 'bg-[#C89666] text-[#0B0B0B] border-[#C89666] font-medium'
                : 'bg-[#141414] text-[#9B9B9B] border-white/[0.08] hover:text-[#F5F2EA]'
            }`}
          >
            Thick Shakes (₹90 – ₹130)
          </button>
          <button
            onClick={() => setActiveFilter('coffee')}
            className={`px-4 py-2 text-xs uppercase tracking-wider font-mono border transition-all ${
              activeFilter === 'coffee'
                ? 'bg-[#C89666] text-[#0B0B0B] border-[#C89666] font-medium'
                : 'bg-[#141414] text-[#9B9B9B] border-white/[0.08] hover:text-[#F5F2EA]'
            }`}
          >
            Cold Coffee Specials
          </button>
          <button
            onClick={() => setActiveFilter('coolers')}
            className={`px-4 py-2 text-xs uppercase tracking-wider font-mono border transition-all ${
              activeFilter === 'coolers'
                ? 'bg-[#C89666] text-[#0B0B0B] border-[#C89666] font-medium'
                : 'bg-[#141414] text-[#9B9B9B] border-white/[0.08] hover:text-[#F5F2EA]'
            }`}
          >
            Mojitos, Coolers & Lassi
          </button>
          <button
            onClick={() => setActiveFilter('bites')}
            className={`px-4 py-2 text-xs uppercase tracking-wider font-mono border transition-all ${
              activeFilter === 'bites'
                ? 'bg-[#C89666] text-[#0B0B0B] border-[#C89666] font-medium'
                : 'bg-[#141414] text-[#9B9B9B] border-white/[0.08] hover:text-[#F5F2EA]'
            }`}
          >
            Pizzas, Sandwiches & Fries
          </button>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-[#141414] border border-white/[0.06] hover:border-[#C89666]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-serif text-xl text-[#F5F2EA] font-normal group-hover:text-accent-champagne transition-colors">
                    {item.name}
                  </h3>
                  {item.price && (
                    <span className="font-mono text-base font-semibold text-[#C89666] px-2 py-0.5 bg-[#C89666]/10 border border-[#C89666]/30 shrink-0">
                      {item.price}
                    </span>
                  )}
                </div>

                <p className="text-xs text-[#9B9B9B] font-light leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-[#9B9B9B]">
                <span className="text-[#C89666]">Uknow Signature</span>
                <span className="text-green-400 font-medium">● Vegetarian</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Relaxed Space Highlight */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="border border-white/[0.08] bg-[#121212] p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C89666] block mb-2">
                Cozy Atmosphere
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F2EA] mb-4">
                The Sheopur Hangout
              </h3>
              <p className="text-sm text-[#9B9B9B] font-light leading-relaxed mb-6">
                Equipped with comfortable seating, ambient lighting and welcoming hospitality. Bring your friends, celebrate small milestones, or just enjoy an unhurried Kitkat shake after hours.
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-[#9B9B9B]">
                <span className="flex items-center gap-1.5 text-[#F5F2EA]">
                  <MapPin className="w-3.5 h-3.5 text-[#C89666]" />
                  Opposite Badminton Court, Sheopur
                </span>
              </div>
            </div>

            <div className="h-64 sm:h-80 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
                alt="Uknow Café Ambience"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-serif text-lg text-[#F5F2EA]">Uknow Café by Narrow Gauge</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
