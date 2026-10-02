import React from 'react';

export interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'color';
  showSubtitle?: boolean;
  compact?: boolean;
}

// 1. Narrow Gauge Restaurant Logo (with authentic Train sign & refined typography)
export const NarrowGaugeRestaurantLogo: React.FC<LogoProps & { showTrainImage?: boolean }> = ({
  className = 'h-10',
  showSubtitle = true,
  showTrainImage = true,
  compact = false,
}) => {
  const displaySubtitle = compact ? false : showSubtitle;
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {showTrainImage && (
        <div className="relative overflow-hidden rounded border border-white/10 bg-[#161616] p-1 flex-shrink-0 shadow-md">
          <img
            src="/logos/narrow-gauge-train.jpg"
            alt="Narrow Gauge Restaurant Train Logo"
            className="h-10 w-auto object-contain max-w-[130px]"
            onError={(e) => {
              // Fallback if image path has issue
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        </div>
      )}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="font-serif text-lg tracking-[0.2em] text-[#F5F2EA] font-semibold uppercase leading-tight">
            Narrow Gauge
          </span>
          <span className="text-[10px] px-1.5 py-0.5 bg-[#D99B59]/20 text-[#D99B59] font-mono border border-[#D99B59]/40 tracking-wider">
            RESTAURANT
          </span>
        </div>
        {displaySubtitle && (
          <span className="text-[10px] tracking-[0.25em] text-[#9B9B9B] uppercase font-sans">
            North Indian · Chinese · Pizza
          </span>
        )}
      </div>
    </div>
  );
};

// 2. Uknow Café Logo (Faithfully reproducing the uploaded logo: Café with steam, terracotta U, coffee cup latte art for 'O', 'by Narrow Gauge')
export const UknowCafeLogo: React.FC<LogoProps> = ({
  className = 'h-10',
  showSubtitle = true,
  compact = false,
}) => {
  const displaySubtitle = compact ? false : showSubtitle;
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Visual Logo mark matching user's image */}
      <div className="flex flex-col items-center select-none">
        <div className="flex items-end">
          {/* "Café" with aroma steam lines */}
          <div className="flex flex-col items-center mr-1">
            <div className="flex items-center gap-0.5 mb-0.5">
              <span className="w-0.5 h-1.5 bg-[#C87A38] rotate-[-20deg] rounded-full inline-block" />
              <span className="w-0.5 h-2 bg-[#C87A38] rounded-full inline-block" />
              <span className="w-0.5 h-1.5 bg-[#C87A38] rotate-[20deg] rounded-full inline-block" />
            </div>
            <span className="text-[9px] font-sans font-medium text-[#7D4F27] leading-none">
              Café
            </span>
          </div>

          {/* Terracotta 'U' */}
          <span className="text-3xl font-black text-[#D06927] leading-none -mb-0.5 font-sans tracking-tight">
            U
          </span>

          {/* 'kn' */}
          <span className="text-3xl font-bold text-[#4A2E1B] dark:text-[#E2D9C8] leading-none -mb-0.5 font-sans tracking-tight">
            kn
          </span>

          {/* 'o' styled as a coffee cup with rosetta latte art */}
          <div className="relative inline-flex items-center justify-center mx-0.5">
            <svg
              className="w-7 h-7"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Cup Rim & Body */}
              <circle cx="45" cy="50" r="38" stroke="#4A2E1B" strokeWidth="9" fill="#2E1B10" />
              {/* Cup Handle */}
              <path
                d="M78 40 C95 40, 95 60, 78 60"
                stroke="#4A2E1B"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
              />
              {/* Crema Base */}
              <circle cx="45" cy="50" r="30" fill="#693B1E" />
              {/* Latte Art Foam (Rosetta / Leaf in froth) */}
              <path
                d="M45 70 C45 70, 32 55, 45 42 C45 42, 30 35, 45 28 C45 28, 58 35, 45 42 C58 55, 45 70, 45 70 Z"
                fill="#F7EDE2"
              />
              <path
                d="M45 26 L45 72"
                stroke="#693B1E"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Little side heart leaves */}
              <circle cx="39" cy="46" r="3" fill="#F7EDE2" />
              <circle cx="51" cy="46" r="3" fill="#F7EDE2" />
              <circle cx="40" cy="56" r="3" fill="#F7EDE2" />
              <circle cx="50" cy="56" r="3" fill="#F7EDE2" />
            </svg>
          </div>

          {/* 'w' */}
          <span className="text-3xl font-bold text-[#4A2E1B] dark:text-[#E2D9C8] leading-none -mb-0.5 font-sans tracking-tight">
            w
          </span>
        </div>

        {/* Subtitle: "— by Narrow Gauge —" */}
        {displaySubtitle && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="w-3 h-[1px] bg-[#9B9B9B]" />
            <span className="text-[9px] font-sans tracking-widest uppercase text-[#9B9B9B]">
              by Narrow Gauge
            </span>
            <span className="w-3 h-[1px] bg-[#9B9B9B]" />
          </div>
        )}
      </div>
    </div>
  );
};

// 3. NG Catters Logo (With authentic Locomotive Engine & Track emblem uploaded by user)
export const NGCattersLogo: React.FC<LogoProps & { showImage?: boolean }> = ({
  className = 'h-10',
  showSubtitle = true,
  showImage = true,
  compact = false,
}) => {
  const displaySubtitle = compact ? false : showSubtitle;
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {/* Official NG Caterers Emblem Image */}
      {showImage && (
        <div className="relative overflow-hidden rounded border border-white/10 dark:border-white/10 bg-white p-1 flex-shrink-0 shadow-md">
          <img
            src="/logos/ng-caterers.jpg"
            alt="NG Caterers Logo"
            className="h-11 w-11 object-contain"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        </div>
      )}

      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="font-serif text-lg tracking-[0.2em] text-[#F5F2EA] font-semibold uppercase leading-tight">
            NG Catters
          </span>
          <span className="text-[10px] px-1.5 py-0.5 bg-accent-gold/20 text-accent-gold font-mono border border-accent-gold/40 tracking-wider">
            CATERING
          </span>
        </div>
        {displaySubtitle && (
          <span className="text-[10px] tracking-[0.25em] text-[#9B9B9B] uppercase font-sans">
            by Narrow Gauge · Events & Banquets
          </span>
        )}
      </div>
    </div>
  );
};

// 4. Parent Brand Logo
export const ParentBrandLogo: React.FC<LogoProps> = ({
  compact = false,
  className = '',
  showSubtitle = true,
}) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 border border-[#8C571E]/40 dark:border-accent-champagne/40 bg-[#8C571E]/10 dark:bg-white/[0.03] flex items-center justify-center font-serif text-[#8C571E] dark:text-accent-champagne text-xs font-bold tracking-widest shadow-sm">
        NG
      </div>
      <div className="flex flex-col">
        <span className="font-serif text-lg tracking-[0.22em] text-[#141210] dark:text-[#F5F2EA] font-semibold leading-none uppercase">
          NARROW GAUGE
        </span>
        {!compact && (
          <span className="text-[9px] tracking-[0.25em] text-[#5C564D] dark:text-[#9B9B9B] uppercase font-sans mt-1 font-medium">
            Restaurant · Catering · Café
          </span>
        )}
      </div>
    </div>
  );
};
