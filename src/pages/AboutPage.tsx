import React from 'react';
import { ArrowLeft, Sparkles, Award, Heart, Compass, ShieldCheck, Utensils, Coffee, Truck, ArrowUpRight } from 'lucide-react';
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
  onOpenReserve,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen pt-28 pb-24 transition-colors duration-300 ${
      isDark ? 'bg-[#0B0B0B] text-[#F5F2EA]' : 'bg-[#FAF7F2] text-[#141210]'
    }`}>
      {/* Top Breadcrumb & Return Banner */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-8">
        <button
          onClick={onBackToHome}
          className={`inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase transition-colors group cursor-pointer ${
            isDark ? 'text-accent-champagne hover:text-white' : 'text-[#8C571E] hover:text-[#5C350D]'
          }`}
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Hero Header Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-20 sm:mb-28">
        <div className="max-w-3xl">
          <div className={`inline-flex items-center gap-2 px-3 py-1 border text-[11px] font-mono uppercase tracking-[0.2em] mb-4 ${
            isDark
              ? 'border-accent-champagne/40 bg-accent-champagne/10 text-accent-champagne'
              : 'border-[#D4C3A3] bg-[#EFE8DC] text-[#7A4B13]'
          }`}>
            <Sparkles className="w-3 h-3" />
            <span>Origin · Philosophy · Heritage</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight mb-6 leading-[1.08]">
            The Journey Behind <span className="italic">Narrow Gauge</span>
          </h1>

          <p className={`text-lg sm:text-xl font-light leading-relaxed ${
            isDark ? 'text-[#9B9B9B]' : 'text-[#4A443C]'
          }`}>
            Born in the heart of Sheopur, Madhya Pradesh, Narrow Gauge was founded with a singular conviction: to create dining and gathering destinations where community, genuine warmth, and culinary honesty converge.
          </p>
        </div>
      </section>

      {/* Heritage & Editorial Story Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-24 sm:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Imagery */}
          <div className="lg:col-span-6 relative">
            <div className={`relative overflow-hidden border shadow-2xl ${
              isDark ? 'border-white/[0.08]' : 'border-[#E2D9CC]'
            }`}>
              <img
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80"
                alt="Narrow Gauge Hospitality Craft"
                loading="lazy"
                className="w-full h-[520px] object-cover filter contrast-110"
              />
              <div className={`absolute inset-0 ${
                isDark
                  ? 'bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent'
                  : 'bg-gradient-to-t from-[#FAF7F2]/80 via-transparent to-transparent'
              }`} />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[11px] font-mono tracking-[0.2em] uppercase">
                <span className={isDark ? 'text-white/80' : 'text-[#141210]/80'}>Sheopur Heritage</span>
                <span className={isDark ? 'text-accent-champagne' : 'text-[#8C571E]'}>Est. Sheopur, MP</span>
              </div>
            </div>

            {/* Floating Ethos Card */}
            <div className={`hidden sm:block absolute -bottom-8 -right-6 p-6 border max-w-xs shadow-2xl backdrop-blur-md ${
              isDark
                ? 'bg-[#161616]/95 border-white/[0.1] text-[#F5F2EA]'
                : 'bg-white/95 border-[#E2D9CC] text-[#141210]'
            }`}>
              <p className="font-serif italic text-base leading-relaxed">
                “Hospitality is not just what we serve — it is how people feel when they are here.”
              </p>
              <span className={`block text-[10px] uppercase font-mono tracking-widest mt-3 ${
                isDark ? 'text-accent-champagne' : 'text-[#8C571E]'
              }`}>
                The Narrow Gauge Ethos
              </span>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-6 lg:pl-6">
            <div className={`inline-flex items-center gap-2 px-3 py-1 border text-[11px] font-mono uppercase tracking-[0.2em] mb-4 ${
              isDark
                ? 'border-white/[0.08] bg-white/[0.02] text-accent-champagne'
                : 'border-[#D4C3A3] bg-white text-[#7A4B13]'
            }`}>
              <span>The Train Connection</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight mb-6 leading-tight">
              Inspired by the historic railway line that connected towns and stories.
            </h2>

            <p className={`text-base font-light leading-relaxed mb-6 ${
              isDark ? 'text-[#9B9B9B]' : 'text-[#4A443C]'
            }`}>
              Sheopur is celebrated for its legendary Gwalior–Sheopur Kalan narrow-gauge railway line — a historic symbol of connection, steady rhythm, and shared journeys across the Chambal and Malwa heartlands.
            </p>

            <p className={`text-base font-light leading-relaxed mb-6 ${
              isDark ? 'text-[#9B9B9B]' : 'text-[#4A443C]'
            }`}>
              Drawing on that heritage, <strong className={isDark ? 'text-[#F5F2EA]' : 'text-[#141210]'}>Narrow Gauge</strong> was created as a collective of spaces where journeys slow down, conversations flourish over rich gravies and sizzling sizzlers, and celebrations are treated like royal banquets.
            </p>

            <p className={`text-base font-light leading-relaxed mb-8 ${
              isDark ? 'text-[#9B9B9B]' : 'text-[#4A443C]'
            }`}>
              Today, with over 360+ verified reviews and a 4.1⭐ rating on Shivpuri Road, we stand proud as Sheopur’s foremost culinary home for families, friends, and special milestones.
            </p>

            {/* Quick Metrics */}
            <div className={`grid grid-cols-3 gap-4 pt-6 border-t ${
              isDark ? 'border-white/[0.08]' : 'border-[#E2D9CC]'
            }`}>
              <div>
                <span className="font-serif text-3xl sm:text-4xl block text-accent-champagne">4.1★</span>
                <span className={`text-[11px] font-mono tracking-wider uppercase ${
                  isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
                }`}>364 Google Reviews</span>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl block text-accent-champagne">3</span>
                <span className={`text-[11px] font-mono tracking-wider uppercase ${
                  isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
                }`}>Unique Brands</span>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl block text-accent-champagne">100%</span>
                <span className={`text-[11px] font-mono tracking-wider uppercase ${
                  isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
                }`}>Fresh Kitchen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Dedicated Pillars / Experiences */}
      <section className={`py-20 border-y ${
        isDark ? 'bg-[#101010] border-white/[0.06]' : 'bg-[#F2ECE1] border-[#E2D9CC]'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className={`text-[11px] font-mono uppercase tracking-[0.25em] ${
              isDark ? 'text-accent-champagne' : 'text-[#8C571E]'
            }`}>
              One Brand · Three Expressions
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight mt-2 mb-4">
              Our Three Hospitality Worlds
            </h2>
            <p className={`text-sm font-light ${
              isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
            }`}>
              Each concept has its own personality, signature menu, and ambience, united by the high standards of Narrow Gauge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1: Restaurant */}
            <div className={`p-8 border flex flex-col justify-between transition-all duration-300 ${
              isDark
                ? 'bg-[#141414] border-white/[0.08] hover:border-accent-champagne/40'
                : 'bg-white border-[#E2D9CC] hover:border-[#8C571E] shadow-sm'
            }`}>
              <div>
                <div className="mb-6 h-16 flex items-center">
                  <NarrowGaugeRestaurantLogo compact={true} />
                </div>
                <h3 className="font-serif text-2xl mb-3">Narrow Gauge Restaurant</h3>
                <p className={`text-sm font-light leading-relaxed mb-6 ${
                  isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
                }`}>
                  A premier fine family dining restaurant featuring rich North Indian gravies, authentic Chinese sizzlers, handcrafted pizzas, cooling shakes, and refreshing beverages.
                </p>
                <div className={`text-xs font-mono space-y-1 mb-8 ${
                  isDark ? 'text-[#F5F2EA]/70' : 'text-[#141210]/70'
                }`}>
                  <p>• 11:00 AM – 10:45 PM Daily</p>
                  <p>• Dine-in & Family Tables</p>
                  <p>• Opposite Badminton Court, Shivpuri Rd</p>
                </div>
              </div>
              <button
                onClick={() => onNavigateToService('restaurant')}
                className={`w-full py-3 text-xs font-mono uppercase tracking-[0.16em] flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                  isDark
                    ? 'border-accent-champagne/40 bg-accent-champagne/10 text-accent-champagne hover:bg-accent-champagne hover:text-[#0B0B0B]'
                    : 'border-[#8C571E] bg-[#8C571E] text-white hover:bg-[#734415]'
                }`}
              >
                <span>Explore Restaurant & Menu</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 2: NG Catters */}
            <div className={`p-8 border flex flex-col justify-between transition-all duration-300 ${
              isDark
                ? 'bg-[#141414] border-white/[0.08] hover:border-accent-gold/40'
                : 'bg-white border-[#E2D9CC] hover:border-[#8A6008] shadow-sm'
            }`}>
              <div>
                <div className="mb-6 h-16 flex items-center">
                  <NGCattersLogo compact={true} />
                </div>
                <h3 className="font-serif text-2xl mb-3">NG Catters</h3>
                <p className={`text-sm font-light leading-relaxed mb-6 ${
                  isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
                }`}>
                  Outdoor banquet catering and royal wedding feasts across Sheopur & Madhya Pradesh. Live counters, customized regional menus, and seamless event execution.
                </p>
                <div className={`text-xs font-mono space-y-1 mb-8 ${
                  isDark ? 'text-[#F5F2EA]/70' : 'text-[#141210]/70'
                }`}>
                  <p>• Weddings, Receptions & Banquets</p>
                  <p>• Corporate Galas & Private Parties</p>
                  <p>• Tailored 50 to 2000+ Guest Capacity</p>
                </div>
              </div>
              <button
                onClick={() => onNavigateToService('catering')}
                className={`w-full py-3 text-xs font-mono uppercase tracking-[0.16em] flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                  isDark
                    ? 'border-accent-gold/40 bg-accent-gold/10 text-accent-gold hover:bg-accent-gold hover:text-[#0B0B0B]'
                    : 'border-[#8A6008] bg-[#8A6008] text-white hover:bg-[#6D4C06]'
                }`}
              >
                <span>Explore NG Catters</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 3: Uknow Café */}
            <div className={`p-8 border flex flex-col justify-between transition-all duration-300 ${
              isDark
                ? 'bg-[#141414] border-white/[0.08] hover:border-accent-terracotta/40'
                : 'bg-white border-[#E2D9CC] hover:border-[#B24F10] shadow-sm'
            }`}>
              <div>
                <div className="mb-6 h-16 flex items-center">
                  <UknowCafeLogo compact={true} />
                </div>
                <h3 className="font-serif text-2xl mb-3">Uknow Café</h3>
                <p className={`text-sm font-light leading-relaxed mb-6 ${
                  isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
                }`}>
                  A chic contemporary café vibe featuring thick decadent milkshakes (Kitkat, Oreo, Kesar Pista), cold coffees with ice cream, refreshing coolers, and café treats.
                </p>
                <div className={`text-xs font-mono space-y-1 mb-8 ${
                  isDark ? 'text-[#F5F2EA]/70' : 'text-[#141210]/70'
                }`}>
                  <p>• Cold Brews, Shakes & Mocktails</p>
                  <p>• Youth Hangouts & Work Corners</p>
                  <p>• Music, Aesthetic Spaces & Boardgames</p>
                </div>
              </div>
              <button
                onClick={() => onNavigateToService('cafe')}
                className={`w-full py-3 text-xs font-mono uppercase tracking-[0.16em] flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                  isDark
                    ? 'border-accent-terracotta/40 bg-accent-terracotta/10 text-accent-terracotta hover:bg-accent-terracotta hover:text-[#0B0B0B]'
                    : 'border-[#B24F10] bg-[#B24F10] text-white hover:bg-[#8F3D0B]'
                }`}
              >
                <span>Explore Uknow Café</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our 4 Core Commitments */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className={`text-[11px] font-mono uppercase tracking-[0.25em] ${
            isDark ? 'text-accent-champagne' : 'text-[#8C571E]'
          }`}>
            Principles
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight mt-2 mb-4">
            How We Serve Sheopur
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: ShieldCheck,
              title: 'Culinary Purity',
              desc: 'Every dish starts with fresh, quality ingredients. From rich dairy for our lassis and shakes to hand-ground spices.',
            },
            {
              icon: Heart,
              title: 'Heartfelt Hospitality',
              desc: 'Whether stopping by for an afternoon chaas or hosting 1000 wedding guests, you receive attentive, respectful warmth.',
            },
            {
              icon: Award,
              title: 'Consistent Excellence',
              desc: 'Proven through over 360+ genuine Google reviews with a 4.1⭐ rating, maintaining quality year after year.',
            },
            {
              icon: Compass,
              title: 'Local Connection',
              desc: 'Deeply anchored opposite the Badminton Court on Shivpuri Road, proud to be a landmark gathering point in Sheopur.',
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`p-6 border ${
                  isDark
                    ? 'bg-[#141414] border-white/[0.08]'
                    : 'bg-white border-[#E2D9CC] shadow-sm'
                }`}
              >
                <div className={`w-10 h-10 flex items-center justify-center mb-4 ${
                  isDark ? 'bg-accent-champagne/10 text-accent-champagne' : 'bg-[#8C571E]/10 text-[#8C571E]'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg mb-2">{item.title}</h4>
                <p className={`text-xs font-light leading-relaxed ${
                  isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
                }`}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className={`p-10 sm:p-14 border text-center flex flex-col items-center justify-center ${
          isDark
            ? 'bg-gradient-to-b from-[#141414] to-[#0D0D0D] border-white/[0.08]'
            : 'bg-gradient-to-b from-white to-[#F5EFE6] border-[#E2D9CC] shadow-md'
        }`}>
          <h3 className="font-serif text-3xl sm:text-4xl font-normal mb-4">
            Experience Narrow Gauge Today
          </h3>
          <p className={`max-w-xl text-sm font-light mb-8 ${
            isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
          }`}>
            We invite you to join us on Shivpuri Road or get in touch for custom event catering.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenReserve('restaurant')}
              className={`px-6 py-3 text-xs font-mono uppercase tracking-[0.16em] transition-all cursor-pointer ${
                isDark
                  ? 'bg-accent-champagne text-[#0B0B0B] hover:bg-white'
                  : 'bg-[#8C571E] text-white hover:bg-[#734415] shadow-sm'
              }`}
            >
              Book a Table / Inquire
            </button>
            <button
              onClick={onBackToHome}
              className={`px-6 py-3 text-xs font-mono uppercase tracking-[0.16em] border transition-all cursor-pointer ${
                isDark
                  ? 'border-white/[0.15] text-[#F5F2EA] hover:bg-white/[0.05]'
                  : 'border-[#D4C3A3] text-[#141210] hover:bg-stone-100'
              }`}
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
