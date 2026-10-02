import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/brandData';
import { GalleryItem } from '../types';
import { useTheme } from '../context/ThemeContext';

interface PhotoGalleryProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ onOpenLightbox }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filters = ['All', 'Restaurant', 'NG Catters', 'Uknow Café'];

  const filteredItems =
    selectedFilter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedFilter);

  return (
    <section
      id="gallery"
      className={`py-28 sm:py-36 border-t relative transition-colors duration-300 ${
        isDark ? 'bg-[#0B0B0B] border-white/[0.06]' : 'bg-[#FDFCFA] border-[#E5DDD0]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span
              className={`text-[10px] font-mono uppercase tracking-[0.25em] mb-2 block ${
                isDark ? 'text-accent-champagne' : 'text-[#8C571E]'
              }`}
            >
              Visual Chronicles
            </span>
            <h2
              className={`font-serif text-3xl sm:text-5xl font-normal tracking-tight ${
                isDark ? 'text-[#F5F2EA]' : 'text-[#141210]'
              }`}
            >
              Cinematic Moments
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => {
              const isActive = selectedFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? isDark
                        ? 'bg-accent-champagne text-[#0B0B0B]'
                        : 'bg-[#8C571E] text-white shadow-sm'
                      : isDark
                      ? 'bg-[#141414] text-[#9B9B9B] hover:text-[#F5F2EA] border border-white/[0.08]'
                      : 'bg-white text-[#5C564D] hover:text-[#141210] border border-[#E2D9CC] shadow-sm'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Masonry Grid with Accessible Button Elements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => {
            const isFeatured = index === 0 || index === 4;

            return (
              <button
                type="button"
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                aria-label={`View photo: ${item.title}`}
                className={`group relative overflow-hidden text-left border cursor-pointer focus-visible:ring-2 focus-visible:ring-accent-champagne focus:outline-none transition-all duration-300 ${
                  isDark
                    ? 'bg-[#121212] border-white/[0.08]'
                    : 'bg-stone-100 border-[#E2D9CC] shadow-sm'
                } ${
                  isFeatured
                    ? 'sm:col-span-2 sm:row-span-2 h-[440px] sm:h-[520px]'
                    : 'h-[320px] sm:h-[380px]'
                }`}
              >
                {/* Background image with gentle hover scale */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Vignette Overlay for Image Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300" />

                {/* Top Corner Badge */}
                <div className="absolute top-4 left-4 z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] px-2 py-1 bg-black/70 backdrop-blur-md border border-white/15 text-accent-champagne">
                    {item.experienceTag}
                  </span>
                </div>

                {/* Lightbox Trigger Icon */}
                <div className="absolute top-4 right-4 z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-none bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-[#F5F2EA]">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom Content / Caption Reveal */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif text-lg sm:text-xl text-white font-normal mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/80 font-light line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
