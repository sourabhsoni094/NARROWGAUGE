import React from 'react';
import { ArrowUp, MapPin } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { BRAND_INFO } from '../data/brandData';
import { PageRoute } from './Navbar';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  onNavigate?: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { label: string; page: PageRoute }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Restaurant', page: 'restaurant' },
    { label: 'NG Catters', page: 'catering' },
    { label: 'Uknow Café', page: 'cafe' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleLinkClick = (page: PageRoute) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      window.location.hash = page === 'home' ? '/' : `/${page}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className={`border-t pt-16 pb-28 sm:py-20 transition-colors duration-300 ${
      isDark
        ? 'bg-[#080808] border-white/[0.08] text-[#9B9B9B]'
        : 'bg-[#F5EFE6] border-[#E2D9CC] text-[#5C564D]'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Row: Brand Info + Nav Links + Socials */}
        <div className={`flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 pb-12 border-b ${
          isDark ? 'border-white/[0.06]' : 'border-[#E2D9CC]'
        }`}>
          {/* Logo & Subtitle */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className={`w-7 h-7 rounded-none border flex items-center justify-center font-serif text-xs ${
                isDark
                  ? 'border-accent-champagne/40 text-accent-champagne'
                  : 'border-[#8C571E] text-[#8C571E]'
              }`}>
                NG
              </span>
              <span className={`font-serif text-2xl tracking-[0.2em] font-normal uppercase ${
                isDark ? 'text-[#F5F2EA]' : 'text-[#141210]'
              }`}>
                {BRAND_INFO.name}
              </span>
            </div>
            <p className={`text-xs tracking-[0.25em] uppercase font-mono ${
              isDark ? 'text-accent-champagne/80' : 'text-[#8C571E]'
            }`}>
              Restaurant · Catering · Café · Sheopur
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.page)}
                className={`text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                  isDark
                    ? 'text-[#9B9B9B] hover:text-[#F5F2EA]'
                    : 'text-[#5C564D] hover:text-[#141210]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Map Link & Scroll to Top */}
          <div className="flex items-center gap-3">
            <a
              href={BRAND_INFO.contact.googleMapsDirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-3 py-2 border text-xs font-mono flex items-center gap-2 transition-colors ${
                isDark
                  ? 'border-white/[0.08] hover:border-accent-champagne/50 hover:text-[#F5F2EA] bg-[#121212]'
                  : 'border-[#D4C3A3] hover:border-[#8C571E] hover:text-[#141210] bg-white'
              }`}
              title="Open Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-accent-champagne" />
              <span>Google Maps</span>
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className={`w-9 h-9 border flex items-center justify-center transition-colors cursor-pointer ${
                isDark
                  ? 'border-white/[0.08] hover:border-accent-champagne text-[#9B9B9B] hover:text-accent-champagne bg-[#121212]'
                  : 'border-[#D4C3A3] hover:border-[#8C571E] text-[#5C564D] hover:text-[#8C571E] bg-white'
              }`}
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Middle Row: Official Instagram Accounts */}
        <div className={`py-8 border-b ${
          isDark ? 'border-white/[0.06]' : 'border-[#E2D9CC]'
        }`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <InstagramIcon className={`w-4 h-4 ${isDark ? 'text-accent-champagne' : 'text-[#8C571E]'}`} />
              <span className={`text-xs font-mono uppercase tracking-[0.2em] font-semibold ${
                isDark ? 'text-[#F5F2EA]' : 'text-[#141210]'
              }`}>
                Connect on Instagram
              </span>
            </div>
            <span className={`text-[11px] font-mono ${
              isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
            }`}>
              Follow each experience for daily specials, catering stories & vibes
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {BRAND_INFO.instagramAccounts.map((acc) => (
              <a
                key={acc.handle}
                href={acc.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3.5 border transition-all flex items-center justify-between group ${
                  isDark
                    ? 'bg-[#121212] border-white/[0.08] hover:border-accent-champagne/40'
                    : 'bg-white border-[#E2D9CC] hover:border-[#8C571E] shadow-sm'
                }`}
              >
                <div>
                  <span className={`text-xs font-medium block group-hover:text-accent-champagne transition-colors ${
                    isDark ? 'text-[#F5F2EA]' : 'text-[#141210]'
                  }`}>
                    {acc.name}
                  </span>
                  <span className="text-[11px] font-mono text-accent-champagne block">
                    {acc.handle}
                  </span>
                </div>
                <span className={`text-xs opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all ${
                  isDark ? 'text-accent-champagne' : 'text-[#8C571E]'
                }`}>
                  Follow ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light ${
          isDark ? 'text-white/40' : 'text-stone-500'
        }`}>
          <p>© {new Date().getFullYear()} Narrow Gauge. All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6 text-[11px] font-mono">
            <span>Narrow Gauge Restaurant</span>
            <span>·</span>
            <span>NG Catters</span>
            <span>·</span>
            <span>Uknow Café</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
