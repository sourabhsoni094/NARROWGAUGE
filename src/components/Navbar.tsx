import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { BRAND_INFO } from '../data/brandData';
import { ParentBrandLogo } from './Logos';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

export type PageRoute = 'home' | 'restaurant' | 'catering' | 'cafe' | 'about' | 'contact';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenReserve: (experience?: 'restaurant' | 'catering' | 'cafe') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenReserve,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: PageRoute }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Restaurant', page: 'restaurant' },
    { label: 'NG Catters', page: 'catering' },
    { label: 'Uknow Café', page: 'cafe' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageRoute) => {
    setMobileMenuOpen(false);
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 py-3.5 ${
          isDark
            ? 'bg-[#0A0A0B]/90 backdrop-blur-md border-b border-white/[0.08]'
            : 'bg-[#FAF9F6]/90 backdrop-blur-md border-b border-neutral-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="group flex items-center gap-3 text-left focus:outline-none cursor-pointer"
            aria-label="Narrow Gauge Home"
          >
            <ParentBrandLogo compact={true} />
          </button>

          {/* Desktop Navigation Links - Completely Unified on All Pages */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.page)}
                  className={`text-[12px] tracking-[0.16em] uppercase font-mono transition-all duration-200 relative py-1 focus:outline-none cursor-pointer ${
                    isDark
                      ? isActive
                        ? 'text-[#F5F2EA] font-semibold'
                        : 'text-[#9B9B9B] hover:text-[#F5F2EA]'
                      : isActive
                      ? 'text-[#141210] font-bold'
                      : 'text-[#5C564D] hover:text-[#141210] font-medium'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[2px] animate-fade-in ${
                        isDark ? 'bg-accent-champagne' : 'bg-[#8C571E]'
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden sm:flex items-center gap-3 sm:gap-4">
            {/* Day / Dark Mode Switch */}
            <ThemeToggle />

            {/* Direct Call Button */}
            <a
              href={`tel:${BRAND_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
              className={`p-2.5 rounded-none border transition-colors focus:outline-none ${
                isDark
                  ? 'border-white/[0.08] hover:border-accent-champagne/50 text-[#9B9B9B] hover:text-[#F5F2EA] bg-[#141414]'
                  : 'border-[#DED5C7] hover:border-[#8C571E] text-[#4A443C] hover:text-[#141210] bg-white shadow-sm'
              }`}
              title="Call Narrow Gauge"
              aria-label="Call Narrow Gauge"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>

            {/* Primary Action Button */}
            <button
              onClick={() => onOpenReserve()}
              className={`px-5 py-2.5 text-xs font-medium tracking-[0.16em] uppercase transition-all duration-300 flex items-center gap-2 group focus:outline-none cursor-pointer ${
                isDark
                  ? 'border border-accent-champagne/40 bg-accent-champagne/10 text-accent-champagne hover:bg-accent-champagne hover:text-[#0B0B0B]'
                  : 'bg-[#8C571E] text-white hover:bg-[#734415] shadow-sm'
              }`}
            >
              <span>Reserve / Enquire</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Header Actions with 44px+ touch targets */}
          <div className="flex sm:hidden items-center gap-1.5">
            <ThemeToggle />
            <button
              onClick={() => onOpenReserve()}
              className={`min-h-[44px] px-3 text-[11px] font-medium tracking-wider uppercase flex items-center justify-center cursor-pointer transition-colors ${
                isDark
                  ? 'border border-accent-champagne/40 text-accent-champagne bg-accent-champagne/10'
                  : 'bg-[#8C571E] text-white shadow-sm'
              }`}
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`min-w-[44px] min-h-[44px] flex items-center justify-center p-2 focus:outline-none cursor-pointer ${
                isDark ? 'text-[#F5F2EA]' : 'text-[#141210]'
              }`}
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 z-30 backdrop-blur-xl flex flex-col justify-between pt-24 pb-8 px-6 sm:hidden animate-fade-in ${
            isDark
              ? 'bg-[#0B0B0B]/98 text-[#F5F2EA]'
              : 'bg-[#FAF7F2]/98 text-[#141210]'
          }`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col space-y-4">
            <div
              className={`text-[10px] tracking-[0.25em] uppercase border-b pb-2 font-mono flex items-center justify-between ${
                isDark
                  ? 'text-[#9B9B9B] border-white/[0.08]'
                  : 'text-[#6E665B] border-stone-200'
              }`}
            >
              <span>Navigation & Services</span>
              <ThemeToggle />
            </div>
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.page)}
                className={`text-left font-serif text-2xl tracking-wide py-2 border-b flex items-center justify-between cursor-pointer ${
                  isDark
                    ? currentPage === item.page
                      ? 'text-accent-champagne font-medium border-white/[0.04]'
                      : 'text-[#F5F2EA] border-white/[0.04]'
                    : currentPage === item.page
                    ? 'text-[#8C571E] font-medium border-stone-200'
                    : 'text-[#141210] border-stone-200'
                }`}
              >
                <span>{item.label}</span>
                <span
                  className={`text-xs font-mono ${
                    isDark ? 'text-[#9B9B9B]' : 'text-[#6E665B]'
                  }`}
                >
                  {currentPage === item.page ? '● Current' : 'Open Page →'}
                </span>
              </button>
            ))}
          </div>

          <div
            className={`space-y-4 pt-6 border-t ${
              isDark ? 'border-white/[0.08]' : 'border-stone-200'
            }`}
          >
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReserve();
              }}
              className={`w-full py-3.5 text-center text-xs tracking-[0.2em] uppercase font-medium flex items-center justify-center gap-2 cursor-pointer ${
                isDark
                  ? 'bg-accent-champagne text-[#0B0B0B] hover:bg-accent-champagne/90'
                  : 'bg-[#8C571E] text-white hover:bg-[#734415] shadow-sm'
              }`}
            >
              <span>Reserve / Enquire</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={`tel:${BRAND_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                className={`py-2.5 px-3 border text-xs text-center flex items-center justify-center gap-2 ${
                  isDark
                    ? 'border-white/[0.08] text-[#F5F2EA] bg-[#141414]'
                    : 'border-stone-300 text-[#141210] bg-white'
                }`}
              >
                <Phone
                  className={`w-3.5 h-3.5 ${
                    isDark ? 'text-accent-champagne' : 'text-[#8C571E]'
                  }`}
                />
                <span>Call Us</span>
              </a>
              <a
                href={`https://wa.me/${BRAND_INFO.contact.whatsapp}?text=Hello%20Narrow%20Gauge,%20I%20would%20like%20to%20enquire`}
                target="_blank"
                rel="noopener noreferrer"
                className={`py-2.5 px-3 border text-xs text-center flex items-center justify-center gap-2 ${
                  isDark
                    ? 'border-white/[0.08] text-[#F5F2EA] bg-[#141414]'
                    : 'border-stone-300 text-[#141210] bg-white'
                }`}
              >
                <span className="text-green-600 font-bold">💬</span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
