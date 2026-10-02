import React from 'react';
import { Star, MapPin, Clock } from 'lucide-react';
import { BRAND_INFO } from '../data/brandData';
import { useTheme } from '../context/ThemeContext';

export const RatingBadge: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      className={`inline-flex flex-wrap items-center gap-2 sm:gap-3 p-2.5 sm:px-4 sm:py-2 border rounded-none transition-colors ${
        isDark
          ? 'bg-[#141414] border-white/[0.1] text-[#F5F2EA] shadow-lg'
          : 'bg-white border-[#E2D9CC] text-[#141210] shadow-sm'
      }`}
    >
      {/* Google 'G' & Stars */}
      <div
        className={`flex items-center gap-1.5 border-r pr-3 ${
          isDark ? 'border-white/[0.1]' : 'border-[#E2D9CC]'
        }`}
      >
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.15z"
          />
          <path
            fill="#34A853"
            d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.27 21.36 7.35 24 12 24z"
          />
          <path
            fill="#FBBC05"
            d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.98 0 12s.46 3.84 1.26 5.42l4.02-3.15z"
          />
          <path
            fill="#EA4335"
            d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.27 2.64 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
          />
        </svg>

        <div className="flex items-center gap-1">
          <span
            className={`font-semibold text-sm ${
              isDark ? 'text-[#F5F2EA]' : 'text-[#141210]'
            }`}
          >
            {BRAND_INFO.stats.googleRating}
          </span>
          <div className="flex text-amber-500">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
            <Star className="w-3.5 h-3.5 fill-amber-500/40" />
          </div>
        </div>
      </div>

      <div
        className={`flex items-center gap-2 text-xs font-mono ${
          isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
        }`}
      >
        <span
          className={`font-medium ${
            isDark ? 'text-[#F5F2EA]' : 'text-[#141210]'
          }`}
        >
          ({BRAND_INFO.stats.reviewsCount} Reviews)
        </span>
        {!compact && (
          <>
            <span className={isDark ? 'text-white/20' : 'text-stone-300'}>|</span>
            <span
              className={`flex items-center gap-1 ${
                isDark ? 'text-accent-champagne' : 'text-[#8C571E]'
              }`}
            >
              <MapPin className="w-3 h-3" />
              <span>Sheopur, MP</span>
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export const LocationNoticeBar: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      className={`border-y py-3 px-4 sm:px-8 text-xs transition-colors duration-300 ${
        isDark
          ? 'bg-[#121212] border-white/[0.08] text-[#9B9B9B]'
          : 'bg-[#F5EFE6] border-[#E2D9CC] text-[#5C564D]'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-[11px] font-mono">
          <a
            href={BRAND_INFO.contact.googleMapsDirectLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 transition-colors group cursor-pointer ${
              isDark
                ? 'text-[#F5F2EA] hover:text-accent-champagne'
                : 'text-[#141210] hover:text-[#8C571E]'
            }`}
            title="Open in Google Maps"
          >
            <MapPin
              className={`w-3.5 h-3.5 group-hover:scale-110 transition-transform ${
                isDark ? 'text-accent-champagne' : 'text-[#8C571E]'
              }`}
            />
            <span className="underline decoration-current underline-offset-2">
              {BRAND_INFO.contact.address}
            </span>
          </a>
          <span className={isDark ? 'hidden sm:inline text-white/20' : 'hidden sm:inline text-stone-300'}>
            •
          </span>
          <span
            className={`flex items-center gap-1.5 ${
              isDark ? 'text-accent-champagne' : 'text-[#8C571E]'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Open Daily: {BRAND_INFO.stats.hours}</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <RatingBadge compact={true} />
        </div>
      </div>
    </div>
  );
};
