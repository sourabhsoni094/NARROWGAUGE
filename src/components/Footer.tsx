import React from 'react';
import { ArrowUp, MapPin } from 'lucide-react';
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
    <footer
      className={`border-t py-14 transition-colors duration-200 ${
        isDark
          ? 'bg-[#09090A] border-white/[0.08] text-neutral-400'
          : 'bg-[#F4F1EA] border-neutral-200 text-neutral-600'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Top: Brand & Nav */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-neutral-200/60 dark:border-white/5">
          <div>
            <span className="font-serif text-xl font-normal text-neutral-900 dark:text-neutral-100 uppercase tracking-widest block mb-1">
              Narrow Gauge
            </span>
            <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
              Restaurant · Catering · Café · Sheopur, MP
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-6 text-xs font-mono uppercase tracking-wider">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.page)}
                className="hover:text-black dark:hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-8 h-8 border border-neutral-300 dark:border-white/10 flex items-center justify-center hover:border-black dark:hover:border-white transition-colors cursor-pointer self-start md:self-center"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Middle: Instagram & Location Direct */}
        <div className="py-6 border-b border-neutral-200/60 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-neutral-500">
            <MapPin className="w-3.5 h-3.5" />
            <span>Opposite Badminton Court, Shivpuri Road, Sheopur, MP</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-neutral-700 dark:text-neutral-300">
            <a
              href="https://www.instagram.com/narrowgaugeofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @narrowgaugeofficial
            </a>
            <span>·</span>
            <a
              href="https://www.instagram.com/ngcaterers/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @ngcaterers
            </a>
            <span>·</span>
            <a
              href="https://www.instagram.com/cafeuknow/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @cafeuknow
            </a>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-neutral-400">
          <p>© {new Date().getFullYear()} Narrow Gauge. All rights reserved.</p>
          <a
            href={BRAND_INFO.contact.googleMapsDirectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Directions on Google Maps (⭐ 4.1 Rating)
          </a>
        </div>
      </div>
    </footer>
  );
};
