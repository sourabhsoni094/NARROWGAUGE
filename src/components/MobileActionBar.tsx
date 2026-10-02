import React from 'react';
import { Phone, MessageSquare, Compass, Utensils } from 'lucide-react';
import { BRAND_INFO } from '../data/brandData';
import { PageRoute } from './Navbar';
import { useTheme } from '../context/ThemeContext';

interface MobileActionBarProps {
  onNavigate: (page: PageRoute) => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onNavigate }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const cleanPhone = BRAND_INFO.contact.phone.replace(/[^0-9+]/g, '');

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      'Hello Narrow Gauge team! I want to inquire about dining / catering / café orders.'
    );
    window.open(`https://wa.me/${BRAND_INFO.contact.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <nav
      aria-label="Mobile quick actions"
      className={`block sm:hidden fixed bottom-0 left-0 right-0 z-40 border-t backdrop-blur-xl transition-colors duration-300 ${
        isDark
          ? 'bg-[#0E0E0E]/95 border-white/[0.1] text-[#F5F2EA]'
          : 'bg-[#FAF7F2]/95 border-[#E2D9CC] text-[#141210] shadow-[0_-4px_20px_rgba(0,0,0,0.08)]'
      }`}
    >
      <div className="grid grid-cols-4 divide-x divide-inherit">
        {/* 1. Call Now */}
        <a
          href={`tel:${cleanPhone}`}
          className={`flex flex-col items-center justify-center min-h-[50px] py-2 transition-colors active:scale-95 ${
            isDark ? 'hover:bg-white/[0.05]' : 'hover:bg-stone-100'
          }`}
          aria-label="Call Narrow Gauge at +91 97534 84848"
        >
          <Phone
            className={`w-4 h-4 mb-0.5 ${
              isDark ? 'text-accent-champagne' : 'text-[#8C571E]'
            }`}
          />
          <span className="text-[10px] font-mono tracking-wider uppercase font-semibold">
            Call
          </span>
        </a>

        {/* 2. WhatsApp */}
        <button
          type="button"
          onClick={openWhatsApp}
          className={`flex flex-col items-center justify-center min-h-[50px] py-2 transition-colors active:scale-95 cursor-pointer ${
            isDark ? 'hover:bg-white/[0.05]' : 'hover:bg-stone-100'
          }`}
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 mb-0.5 text-[#25D366]" />
          <span className="text-[10px] font-mono tracking-wider uppercase font-semibold text-[#25D366]">
            WhatsApp
          </span>
        </button>

        {/* 3. Directions */}
        <a
          href={BRAND_INFO.contact.googleMapsDirectLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex flex-col items-center justify-center min-h-[50px] py-2 transition-colors active:scale-95 ${
            isDark ? 'hover:bg-white/[0.05]' : 'hover:bg-stone-100'
          }`}
          aria-label="Open location directions in Google Maps"
        >
          <Compass
            className={`w-4 h-4 mb-0.5 ${
              isDark ? 'text-accent-champagne' : 'text-[#8C571E]'
            }`}
          />
          <span className="text-[10px] font-mono tracking-wider uppercase font-semibold">
            Map
          </span>
        </a>

        {/* 4. View Menu */}
        <button
          type="button"
          onClick={() => {
            onNavigate('restaurant');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center min-h-[50px] py-2 transition-colors active:scale-95 cursor-pointer ${
            isDark
              ? 'bg-accent-champagne/15 text-accent-champagne hover:bg-accent-champagne/25'
              : 'bg-[#8C571E] text-white hover:bg-[#734415]'
          }`}
          aria-label="View Restaurant Menu and Prices"
        >
          <Utensils className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-mono tracking-wider uppercase font-bold">
            Menu
          </span>
        </button>
      </div>
    </nav>
  );
};
