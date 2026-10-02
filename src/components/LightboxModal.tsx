import React, { useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-[#121212] border border-white/[0.1] overflow-hidden shadow-2xl flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/60 text-[#9B9B9B] hover:text-[#F5F2EA] border border-white/[0.1] transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Image Frame */}
        <div className="md:w-7/12 relative min-h-[340px] md:min-h-[520px] bg-black">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details Column */}
        <div className="md:w-5/12 p-8 sm:p-10 flex flex-col justify-between">
          <div>
            <div className="inline-block px-2.5 py-1 border border-accent-champagne/40 bg-accent-champagne/10 text-accent-champagne text-[10px] font-mono uppercase tracking-[0.2em] mb-4">
              {item.experienceTag}
            </div>

            <h3 className="font-serif text-3xl text-[#F5F2EA] font-normal mb-4">
              {item.title}
            </h3>

            <div className="w-12 h-[1px] bg-accent-champagne/40 mb-6" />

            <p className="text-sm text-[#9B9B9B] font-light leading-relaxed mb-6">
              {item.caption}
            </p>
          </div>

          <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
            <span className="text-xs font-mono text-[#9B9B9B] uppercase tracking-wider">
              Category: {item.category}
            </span>
            <button
              onClick={onClose}
              className="text-xs text-accent-champagne hover:underline flex items-center gap-1 font-mono uppercase"
            >
              <span>Dismiss</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
