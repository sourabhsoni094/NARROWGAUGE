import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  showLabel = false,
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative inline-flex items-center justify-center gap-2 min-h-[44px] min-w-[44px] px-3 py-2 border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-champagne cursor-pointer ${
        isDark
          ? 'bg-[#161616] border-white/[0.14] text-[#F5F2EA] hover:border-accent-champagne'
          : 'bg-[#FFFFFF] border-stone-300 text-stone-900 hover:border-amber-700 shadow-sm'
      } ${className}`}
      title={isDark ? 'Switch to Day Mode' : 'Switch to Dark Mode'}
      aria-label={isDark ? 'Switch to Day Mode' : 'Switch to Dark Mode'}
    >
      {/* Icon with smooth rotate/scale transition */}
      <div className="relative w-4 h-4 flex items-center justify-center">
        <Sun
          className={`w-3.5 h-3.5 text-amber-500 absolute transition-all duration-400 transform ${
            isDark
              ? 'opacity-0 rotate-90 scale-50 pointer-events-none'
              : 'opacity-100 rotate-0 scale-100'
          }`}
        />
        <Moon
          className={`w-3.5 h-3.5 text-accent-champagne absolute transition-all duration-400 transform ${
            isDark
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 -rotate-90 scale-50 pointer-events-none'
          }`}
        />
      </div>

      {/* Optional Label */}
      <span className="text-[11px] font-mono uppercase tracking-wider select-none font-medium">
        {isDark ? 'Night' : 'Day'}
      </span>

      {/* Status indicator dot */}
      <span
        className={`w-1.5 h-1.5 rounded-full transition-colors ${
          isDark ? 'bg-accent-champagne' : 'bg-amber-600'
        }`}
      />
    </button>
  );
};
