import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { EXPERIENCES } from '../data/brandData';
import { ExperienceInfo } from '../types';

interface ExperiencesProps {
  onSelectExperience: (sectionId: string) => void;
}

export const Experiences: React.FC<ExperiencesProps> = ({ onSelectExperience }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="experiences" className="py-28 sm:py-36 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-champagne mb-3 flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-accent-champagne" />
              <span>Three Distinct Portals</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#F5F2EA] font-normal tracking-tight">
              Our Experiences
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#9B9B9B] max-w-md font-light leading-relaxed">
            Each concept represents a unique atmosphere and culinary vision, united under Narrow Gauge's commitment to warmth and craft.
          </p>
        </div>

        {/* 3 Large Experience Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {EXPERIENCES.map((exp: ExperienceInfo, index: number) => {
            const isHovered = hoveredId === exp.id;
            const indexStr = `0${index + 1}`;

            return (
              <article
                key={exp.id}
                onMouseEnter={() => setHoveredId(exp.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onSelectExperience(exp.sectionId)}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-none border transition-all duration-500 cursor-pointer min-h-[580px] p-8 sm:p-10 ${
                  isHovered
                    ? 'border-white/30 bg-[#161616] shadow-2xl'
                    : 'border-white/[0.08] bg-[#121212]/90'
                }`}
                style={{
                  borderColor: isHovered ? exp.accentColor : undefined,
                }}
              >
                {/* Background Image with subtle zoom & dark cinematic gradient */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-700 ease-out transform group-hover:scale-105 group-hover:opacity-45 opacity-30"
                  />
                  {/* Subtle darkening vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/80 to-[#0B0B0B]/40" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 100%, ${exp.accentBg}, transparent 70%)`
                    }}
                  />
                </div>

                {/* Top: Index & Category */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono text-xs text-[#9B9B9B] tracking-[0.2em]">
                    EXPERIENCE {indexStr}
                  </span>

                  <span
                    className="text-[10px] tracking-[0.25em] uppercase font-mono px-2.5 py-1 border transition-colors duration-400"
                    style={{
                      borderColor: isHovered ? exp.accentColor : 'rgba(255, 255, 255, 0.12)',
                      color: isHovered ? exp.accentColor : '#9B9B9B',
                      backgroundColor: isHovered ? 'rgba(0,0,0,0.5)' : 'transparent',
                    }}
                  >
                    {exp.category}
                  </span>
                </div>

                {/* Bottom Content & Interactive Shift */}
                <div className="relative z-10 mt-auto pt-16">
                  {/* Highlight pill */}
                  <div className="mb-4">
                    <span
                      className="text-xs uppercase tracking-[0.2em] font-sans font-medium transition-colors duration-400 block"
                      style={{
                        color: isHovered ? exp.accentColor : '#9B9B9B',
                      }}
                    >
                      {exp.highlight}
                    </span>
                  </div>

                  {/* Title with subtle shift (4-8px) on hover */}
                  <h3
                    className="font-serif text-3xl sm:text-4xl text-[#F5F2EA] font-normal mb-4 tracking-tight leading-snug transition-transform duration-500 ease-out"
                    style={{
                      transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                    }}
                  >
                    {exp.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#9B9B9B] font-light leading-relaxed mb-8 max-w-sm line-clamp-3 group-hover:text-[#C5A880]/90 transition-colors duration-300">
                    {exp.description}
                  </p>

                  {/* Clean CTA with arrow movement */}
                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#F5F2EA] group-hover:text-accent-champagne transition-colors">
                      {exp.ctaText}
                    </span>
                    <div
                      className="w-9 h-9 rounded-none border border-white/[0.12] flex items-center justify-center text-[#F5F2EA] transition-all duration-400"
                      style={{
                        borderColor: isHovered ? exp.accentColor : undefined,
                        backgroundColor: isHovered ? exp.accentBg : 'transparent',
                        color: isHovered ? exp.accentColor : '#F5F2EA',
                      }}
                    >
                      <ArrowRight
                        className="w-4 h-4 transition-transform duration-400 ease-out"
                        style={{
                          transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
