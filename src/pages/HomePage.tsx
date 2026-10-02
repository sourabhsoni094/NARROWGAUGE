import React from 'react';
import { Hero } from '../components/Hero';
import { NarrowGaugeRestaurantLogo, UknowCafeLogo, NGCattersLogo } from '../components/Logos';
import { PhotoGallery } from '../components/PhotoGallery';
import { ArrowUpRight, MapPin, Clock, Phone, MessageSquare, Star } from 'lucide-react';
import { BRAND_INFO } from '../data/brandData';
import { PageRoute } from '../components/Navbar';
import { GalleryItem } from '../types';
import { useTheme } from '../context/ThemeContext';

interface HomePageProps {
  onNavigateToPage: (page: PageRoute) => void;
  onOpenReserve: (exp?: 'restaurant' | 'catering' | 'cafe') => void;
  onOpenLightbox?: (item: GalleryItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigateToPage,
  onOpenReserve,
  onOpenLightbox = () => {},
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex-1">
      {/* 1. Hero with Background Image matching Image 1 and Existing Text */}
      <Hero
        onExploreClick={scrollToServices}
        onOpenReserve={() => onOpenReserve('restaurant')}
      />

      {/* 2. The Three Services (Minimal Triptych) */}
      <section
        id="services"
        className={`py-20 sm:py-24 border-b transition-colors duration-300 ${
          isDark ? 'bg-[#0E0E0F] border-white/[0.08]' : 'bg-[#FAF9F6] border-neutral-200'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 mb-2">
                Our Services
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal">
                Three Distinct Concepts
              </h2>
            </div>
            <p className="text-xs text-neutral-500 font-mono">
              Select any service to view dedicated menu & details
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1: Restaurant */}
            <div
              onClick={() => onNavigateToPage('restaurant')}
              className={`p-6 border transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                isDark
                  ? 'bg-[#121214] border-white/10 hover:border-white/30'
                  : 'bg-white border-neutral-200 hover:border-black/40 shadow-sm'
              }`}
            >
              <div>
                <div className="h-14 flex items-center mb-4">
                  <NarrowGaugeRestaurantLogo compact={true} />
                </div>
                <h3 className="font-serif text-xl mb-2">Narrow Gauge Restaurant</h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 font-light leading-relaxed mb-6">
                  Fine family dining. North Indian curries, Chinese woks, pizzas, cooling lassi, and fresh shakes.
                </p>
                <div className="text-[11px] font-mono text-neutral-500 space-y-1 mb-8">
                  <p>• 11:00 AM – 10:45 PM Daily</p>
                  <p>• Dine-in & Family Seating</p>
                  <p>• Opp. Badminton Court, Shivpuri Rd</p>
                </div>
              </div>
              <div className="pt-4 border-t border-inherit flex items-center justify-between text-xs font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-200 group-hover:underline">
                <span>View Menu & Table</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>

            {/* 2: NG Catters */}
            <div
              onClick={() => onNavigateToPage('catering')}
              className={`p-6 border transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                isDark
                  ? 'bg-[#121214] border-white/10 hover:border-white/30'
                  : 'bg-white border-neutral-200 hover:border-black/40 shadow-sm'
              }`}
            >
              <div>
                <div className="h-14 flex items-center mb-4">
                  <NGCattersLogo compact={true} />
                </div>
                <h3 className="font-serif text-xl mb-2">NG Catters</h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 font-light leading-relaxed mb-6">
                  Grand banquet catering for weddings, receptions, and corporate galas across Madhya Pradesh.
                </p>
                <div className="text-[11px] font-mono text-neutral-500 space-y-1 mb-8">
                  <p>• Weddings & Royal Banquets</p>
                  <p>• Live Gourmet Counters</p>
                  <p>• 50 to 2,000+ Guest Capacity</p>
                </div>
              </div>
              <div className="pt-4 border-t border-inherit flex items-center justify-between text-xs font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-200 group-hover:underline">
                <span>Catering Packages</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>

            {/* 3: Uknow Café */}
            <div
              onClick={() => onNavigateToPage('cafe')}
              className={`p-6 border transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                isDark
                  ? 'bg-[#121214] border-white/10 hover:border-white/30'
                  : 'bg-white border-neutral-200 hover:border-black/40 shadow-sm'
              }`}
            >
              <div>
                <div className="h-14 flex items-center mb-4">
                  <UknowCafeLogo compact={true} />
                </div>
                <h3 className="font-serif text-xl mb-2">Uknow Café</h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 font-light leading-relaxed mb-6">
                  Contemporary café culture. Thick dessert shakes, cold coffees with ice cream, mojitos, and quick bites.
                </p>
                <div className="text-[11px] font-mono text-neutral-500 space-y-1 mb-8">
                  <p>• Handcrafted Milkshakes</p>
                  <p>• Cold Brews & Artisan Coffee</p>
                  <p>• 11:00 AM – 10:45 PM Daily</p>
                </div>
              </div>
              <div className="pt-4 border-t border-inherit flex items-center justify-between text-xs font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-200 group-hover:underline">
                <span>Café Highlights</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Visual Chronicles / Cinematic Moments (Replacing Curated Menu) */}
      <PhotoGallery onOpenLightbox={onOpenLightbox} />

      {/* 4. Minimal Story & Philosophy with background image like Image 1 */}
      <section
        className="relative py-20 sm:py-24 border-b border-white/[0.08] text-[#F5F2EA] overflow-hidden bg-[#0B0B0B]"
      >
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center opacity-40 scale-105"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=2000&q=85')`,
            }}
          />
          <div className="absolute inset-0 bg-[#0B0B0B]/80" />
        </div>
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center relative z-10">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400 mb-3">
            Heritage & Roots
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal mb-6 text-[#F5F2EA]">
            Named after Sheopur’s Historic Railway
          </h2>
          <p className="text-sm sm:text-base font-light text-[#D4D4D8] leading-relaxed mb-6">
            Narrow Gauge honors the heritage of the historic narrow-gauge railway line that connected Sheopur to the world. We bring people together over honest recipes, authentic hospitality, and a welcoming atmosphere.
          </p>
          <button
            onClick={() => onNavigateToPage('about')}
            className="text-xs font-mono uppercase tracking-wider text-amber-300 underline hover:opacity-75 cursor-pointer"
          >
            Read Our Full Story →
          </button>
        </div>
      </section>

      {/* 5. Minimal Location, Hours & Direct Contact */}
      <section
        id="contact"
        className={`py-16 sm:py-20 transition-colors duration-300 ${
          isDark ? 'bg-[#0A0A0B]' : 'bg-white'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-neutral-200 dark:border-white/10">
            {/* Location */}
            <div>
              <div className="flex items-center gap-2 mb-2 text-neutral-500 text-xs font-mono uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Location</span>
              </div>
              <p className="text-sm font-medium mb-1">
                Opposite Badminton Court
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-4">
                Shivpuri Road, Sheopur, Madhya Pradesh
              </p>
              <a
                href={BRAND_INFO.contact.googleMapsDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono uppercase tracking-wider underline hover:opacity-75"
              >
                Open Google Maps ↗
              </a>
            </div>

            {/* Timings */}
            <div>
              <div className="flex items-center gap-2 mb-2 text-neutral-500 text-xs font-mono uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Operating Hours</span>
              </div>
              <p className="text-sm font-medium mb-1">
                11:00 AM – 10:45 PM
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-4">
                Monday to Sunday (Open 7 Days)
              </p>
              <div className="flex items-center gap-1.5 text-xs font-mono text-amber-600 dark:text-amber-400">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>4.1 Rating on Google (364 Reviews)</span>
              </div>
            </div>

            {/* Direct Contact */}
            <div>
              <div className="flex items-center gap-2 mb-2 text-neutral-500 text-xs font-mono uppercase tracking-wider">
                <Phone className="w-4 h-4" />
                <span>Direct Contact</span>
              </div>
              <p className="text-sm font-mono font-medium mb-1">
                <a href={`tel:${BRAND_INFO.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:underline">
                  {BRAND_INFO.contact.phone}
                </a>
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-4">
                Table bookings, catering inquiries & takeaway
              </p>
              <a
                href={`https://wa.me/${BRAND_INFO.contact.whatsapp}?text=Hello%20Narrow%20Gauge%20team!`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp ↗</span>
              </a>
            </div>
          </div>

          {/* Minimal Instagram Connect Row */}
          <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500">
              Follow Us On Instagram:
            </span>
            <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
              <a
                href="https://www.instagram.com/narrowgaugeofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-neutral-800 dark:text-neutral-200"
              >
                @narrowgaugeofficial (Restaurant)
              </a>
              <a
                href="https://www.instagram.com/ngcaterers/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-neutral-800 dark:text-neutral-200"
              >
                @ngcaterers (Catering)
              </a>
              <a
                href="https://www.instagram.com/cafeuknow/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-neutral-800 dark:text-neutral-200"
              >
                @cafeuknow (Café)
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
