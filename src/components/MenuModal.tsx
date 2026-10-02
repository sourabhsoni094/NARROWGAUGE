import React, { useState } from 'react';
import { X, Download, Calendar, Search } from 'lucide-react';
import { RESTAURANT_MENU_ITEMS, CAFE_CATEGORIES } from '../data/brandData';
import { MenuItem } from '../types';

interface MenuModalProps {
  isOpen: boolean;
  initialTab?: 'restaurant' | 'cafe';
  onClose: () => void;
  onOpenReserve: () => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({
  isOpen,
  initialTab = 'restaurant',
  onClose,
  onOpenReserve,
}) => {
  const [activeTab, setActiveTab] = useState<'restaurant' | 'cafe'>(initialTab);
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');

  if (!isOpen) return null;

  const filteredRestaurantItems = RESTAURANT_MENU_ITEMS.filter((item: MenuItem) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDietary =
      dietaryFilter === 'all' || item.dietary === dietaryFilter;
    return matchesSearch && matchesDietary;
  });

  const downloadPdfPlaceholder = () => {
    const text = `Narrow Gauge Hospitality - Digital Menu\n\nExperience: ${
      activeTab === 'restaurant' ? 'Narrow Gauge Restaurant' : 'Uknow Café'
    }\n\nFor updated daily specials and seasonal tastings, please inquire at the host desk or call us.`;
    const element = document.createElement('a');
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `Narrow-Gauge-${activeTab}-Menu.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-4xl bg-[#121212] border border-white/[0.12] shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header Bar */}
        <div className="p-6 border-b border-white/[0.08] flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent-champagne block mb-1">
              Curated À La Carte Selection
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F2EA] font-normal">
              Explore Our Menus
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={downloadPdfPlaceholder}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 border border-white/[0.1] text-xs font-mono text-[#9B9B9B] hover:text-[#F5F2EA] hover:border-white/30 transition-colors"
              title="Download Menu"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Menu PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-[#9B9B9B] hover:text-[#F5F2EA] border border-white/[0.08] transition-colors"
              aria-label="Close Menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Toggle: Restaurant vs Uknow Café */}
        <div className="px-6 pt-4 pb-2 border-b border-white/[0.06] bg-[#0E0E0E] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setActiveTab('restaurant')}
              className={`pb-2 text-xs uppercase tracking-wider font-medium transition-colors relative ${
                activeTab === 'restaurant'
                  ? 'text-[#F5F2EA] border-b-2 border-accent-champagne'
                  : 'text-[#9B9B9B] hover:text-[#F5F2EA]'
              }`}
            >
              Narrow Gauge Restaurant
            </button>
            <button
              onClick={() => setActiveTab('cafe')}
              className={`pb-2 text-xs uppercase tracking-wider font-medium transition-colors relative ${
                activeTab === 'cafe'
                  ? 'text-[#F5F2EA] border-b-2 border-[#C89666]'
                  : 'text-[#9B9B9B] hover:text-[#F5F2EA]'
              }`}
            >
              Uknow Café
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-[#9B9B9B] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes or drinks..."
              className="w-full pl-9 pr-3 py-1.5 bg-[#161616] border border-white/[0.08] text-xs text-[#F5F2EA] focus:border-accent-champagne focus:outline-none"
            />
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          {activeTab === 'restaurant' ? (
            <div>
              {/* Dietary Filter Buttons */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-[11px] font-mono text-[#9B9B9B] uppercase mr-2">Filter:</span>
                <button
                  onClick={() => setDietaryFilter('all')}
                  className={`px-3 py-1 text-[11px] font-mono border transition-colors ${
                    dietaryFilter === 'all'
                      ? 'border-accent-champagne bg-accent-champagne/10 text-accent-champagne'
                      : 'border-white/[0.08] text-[#9B9B9B]'
                  }`}
                >
                  All Dishes
                </button>
                <button
                  onClick={() => setDietaryFilter('veg')}
                  className={`px-3 py-1 text-[11px] font-mono border transition-colors ${
                    dietaryFilter === 'veg'
                      ? 'border-green-500 bg-green-500/10 text-green-400'
                      : 'border-white/[0.08] text-[#9B9B9B]'
                  }`}
                >
                  Vegetarian
                </button>
                <button
                  onClick={() => setDietaryFilter('non-veg')}
                  className={`px-3 py-1 text-[11px] font-mono border transition-colors ${
                    dietaryFilter === 'non-veg'
                      ? 'border-red-500 bg-red-500/10 text-red-400'
                      : 'border-white/[0.08] text-[#9B9B9B]'
                  }`}
                >
                  Non-Vegetarian
                </button>
              </div>

              {/* Items List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredRestaurantItems.map((dish: MenuItem) => (
                  <div
                    key={dish.id}
                    className="p-5 bg-[#161616] border border-white/[0.06] hover:border-white/[0.15] transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="font-serif text-lg text-[#F5F2EA] font-normal">
                        {dish.name}
                      </h4>
                      <div className="flex items-center gap-2">
                        {dish.price && (
                          <span className="text-xs font-mono font-semibold text-accent-champagne px-1.5 py-0.5 bg-accent-champagne/10 border border-accent-champagne/30">
                            {dish.price}
                          </span>
                        )}
                        <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 border border-white/[0.1] text-accent-champagne/90">
                          {dish.dietary === 'veg' ? 'Veg' : 'Non-Veg'}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-[#9B9B9B] font-light leading-relaxed mb-3">
                      {dish.description}
                    </p>
                    <div className="flex items-center gap-2">
                      {dish.tags?.map((tag: string) => (
                        <span key={tag} className="text-[10px] text-white/40 font-mono">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Uknow Café Menu */
            <div className="space-y-8">
              {CAFE_CATEGORIES.map((cat) => (
                <div key={cat.name} className="border-b border-white/[0.06] pb-6 last:border-b-0">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-serif text-2xl text-[#F5F2EA]">{cat.name}</h3>
                    <span className="text-xs text-accent-champagne font-mono">Uknow Specialty</span>
                  </div>
                  <p className="text-xs text-[#9B9B9B] font-light mb-4">{cat.subtitle}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cat.items.map((item) => (
                      <div
                        key={item.name}
                        className="p-3 bg-[#161616] border border-white/[0.05] flex items-center justify-between text-xs text-[#F5F2EA]"
                      >
                        <span>{item.name}</span>
                        <span className="text-[11px] text-[#C89666] font-mono font-medium">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-white/[0.08] bg-[#0E0E0E] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-[#9B9B9B] font-mono text-center sm:text-left">
            * All prices in INR inclusive of applicable taxes.
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenReserve();
              }}
              className="px-5 py-2.5 bg-accent-champagne text-[#0B0B0B] text-xs uppercase tracking-wider font-medium hover:bg-[#D8BE9A] transition-colors flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve a Table</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
