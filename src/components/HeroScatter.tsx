import React, { useState, useId } from 'react';
import { HERO_SCATTER_PHOTOS, Photo } from '../data/portfolioData';
import { Shuffle, LayoutGrid, Eye, Sparkles } from 'lucide-react';

interface HeroScatterProps {
  onPhotoClick: (photo: Photo) => void;
  onExploreProjects: () => void;
}

interface ScatterPosition {
  x: number;
  y: number;
  rotation: number;
  zIndex: number;
}

export const HeroScatter: React.FC<HeroScatterProps> = ({
  onPhotoClick,
  onExploreProjects
}) => {
  const [layoutMode, setLayoutMode] = useState<'scatter' | 'grid'>('scatter');
  const [seed, setSeed] = useState(1);

  // Deterministic positions based on seed
  const positions: ScatterPosition[] = HERO_SCATTER_PHOTOS.map((_, i) => {
    // Generate calculated natural offsets for desktop scatter
    const col = i % 4;
    const row = Math.floor(i / 4);
    const jitterX = Math.sin(i * 13 + seed) * 35;
    const jitterY = Math.cos(i * 17 + seed) * 25;
    const rot = ((Math.sin(i * 7 + seed) * 8)).toFixed(1);

    return {
      x: col * 260 + jitterX,
      y: row * 160 + jitterY,
      rotation: parseFloat(rot),
      zIndex: i + 1,
    };
  });

  const handleShuffle = () => {
    setSeed((prev) => prev + 1);
  };

  return (
    <section className="relative w-full pt-10 pb-16 sm:pb-24 overflow-hidden border-b border-neutral-900/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-neutral-800/20 blur-[120px] pointer-events-none rounded-full" />

      {/* Main Title - The iconic Aktura 35mm */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center select-none">
        <span className="inline-block text-xs uppercase tracking-[0.3em] text-neutral-400 font-poppins mb-2">
          Editorial Portfolio & Archive
        </span>
        <h1 className="font-aktura text-7xl sm:text-9xl md:text-[10rem] lg:text-[12rem] tracking-tight text-white leading-none drop-shadow-sm transition-all duration-300">
          35mm
        </h1>
        <p className="mt-2 sm:mt-4 text-xs sm:text-sm text-neutral-400 font-poppins max-w-xl mx-auto tracking-wide">
          Analog Aesthetics · Full Frame Primes · Prishtina & Adriatic Coastline
        </p>
      </div>

      {/* Interactive Controls Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-neutral-400 font-poppins">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Interactive Film Strip · {HERO_SCATTER_PHOTOS.length} Selected Works</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLayoutMode(layoutMode === 'scatter' ? 'grid' : 'scatter')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-300 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 rounded-md transition-colors"
            title="Toggle between scattered prints and contact sheet grid"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {layoutMode === 'scatter' ? 'Contact Sheet Grid' : 'Scattered Prints'}
            </span>
            <span className="sm:hidden">{layoutMode === 'scatter' ? 'Grid' : 'Scatter'}</span>
          </button>

          {layoutMode === 'scatter' && (
            <button
              onClick={handleShuffle}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-300 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 rounded-md transition-colors"
              title="Shuffle photograph placement"
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Shuffle Stack</span>
              <span className="sm:hidden">Shuffle</span>
            </button>
          )}
        </div>
      </div>

      {/* MOBILE EXPERIENCE: Fluid Horizontal Touch-Scroll Carousel with Film Borders */}
      <div className="block md:hidden w-full px-4">
        <div className="flex gap-4 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-none -mx-4 px-4">
          {HERO_SCATTER_PHOTOS.map((photo, index) => (
            <div
              key={`mobile-hero-${photo.id}`}
              onClick={() => onPhotoClick(photo)}
              className="snap-center shrink-0 w-[260px] xs:w-[290px] bg-neutral-950 p-2.5 rounded-xl border border-neutral-800/80 shadow-2xl transition-transform active:scale-95 cursor-pointer group"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-900">
                <img
                  src={photo.thumbnailUrl || photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white">
                  <div>
                    <p className="font-poppins text-xs font-medium tracking-wide">
                      {photo.title}
                    </p>
                    <p className="text-[10px] text-neutral-400 font-poppins">
                      {photo.category}
                    </p>
                  </div>
                  <span className="p-1.5 bg-white/20 backdrop-blur-sm rounded-full">
                    <Eye className="w-3.5 h-3.5 text-white" />
                  </span>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between text-[11px] text-neutral-500 font-mono px-1">
                <span>35mm EXP #{String(index + 1).padStart(2, '0')}</span>
                <span>ISO 100</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-[11px] text-neutral-500 font-poppins mt-1">
          ← Swipe to explore prints · Tap any image to expand →
        </p>
      </div>

      {/* DESKTOP EXPERIENCE: Scattered Interactive 35mm Prints OR Grid */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6">
        {layoutMode === 'scatter' ? (
          <div className="relative w-full h-[520px] lg:h-[560px] rounded-2xl bg-neutral-950/40 border border-neutral-900/80 overflow-hidden flex items-center justify-center">
            
            {/* Subtle background grid markers */}
            <div className="absolute inset-0 film-grain opacity-40 pointer-events-none" />
            <div className="absolute top-4 left-6 text-[10px] font-mono text-neutral-600 tracking-wider">
              35MM PRODUCTION · DARKROOM PROOF SHEET
            </div>
            <div className="absolute bottom-4 right-6 text-[10px] font-mono text-neutral-600 tracking-wider">
              HOVER TO ENLARGE · CLICK TO INSPECT
            </div>

            {/* Scattered Cards Container */}
            <div className="relative w-[1050px] h-[460px]">
              {HERO_SCATTER_PHOTOS.map((photo, index) => {
                const pos = positions[index] || { x: 0, y: 0, rotation: 0, zIndex: 1 };
                return (
                  <div
                    key={`scatter-${photo.id}`}
                    onClick={() => onPhotoClick(photo)}
                    style={{
                      left: `${pos.x}px`,
                      top: `${pos.y}px`,
                      transform: `rotate(${pos.rotation}deg)`,
                      zIndex: pos.zIndex,
                    }}
                    className="absolute cursor-pointer p-2 bg-neutral-900 border border-neutral-700/60 rounded-md shadow-2xl transition-all duration-300 ease-out hover:scale-125 hover:z-[999] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.85),0_0_20px_rgba(255,255,255,0.1)] hover:border-neutral-400 group"
                  >
                    <div className="w-[180px] h-[125px] overflow-hidden bg-neutral-950 rounded-sm relative">
                      <img
                        src={photo.thumbnailUrl || photo.url}
                        alt={photo.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    </div>
                    <div className="pt-1.5 pb-0.5 px-1 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                      <span className="truncate max-w-[110px] text-neutral-200 group-hover:text-white font-medium">
                        {photo.title}
                      </span>
                      <span className="text-[9px] text-neutral-500">#{index + 1}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-6 rounded-2xl bg-neutral-950/40 border border-neutral-900/80">
            {HERO_SCATTER_PHOTOS.map((photo, index) => (
              <div
                key={`grid-${photo.id}`}
                onClick={() => onPhotoClick(photo)}
                className="group relative cursor-pointer bg-neutral-900 p-2 rounded-lg border border-neutral-800 hover:border-neutral-600 transition-all hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden rounded bg-neutral-950 relative">
                  <img
                    src={photo.thumbnailUrl || photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute bottom-1.5 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-[11px] font-medium truncate font-poppins">{photo.title}</p>
                  </div>
                </div>
                <div className="mt-1.5 flex justify-between text-[10px] font-mono text-neutral-500">
                  <span className="truncate">{photo.category}</span>
                  <span>#{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Editorial Prompt Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left pt-6 border-t border-neutral-900/60">
        <div>
          <h3 className="font-aktura text-2xl sm:text-3xl text-neutral-200">
            Capturing the pulse of light and machine.
          </h3>
          <p className="text-xs text-neutral-400 font-poppins mt-0.5">
            Full-frame photography by Skifter Bytyqi · Founded in 2022
          </p>
        </div>
        <button
          onClick={onExploreProjects}
          className="px-5 py-2.5 text-xs font-poppins tracking-wider uppercase text-black bg-white hover:bg-neutral-200 rounded-md font-medium transition-all shadow-lg hover:shadow-white/10"
        >
          View Selected Projects →
        </button>
      </div>
    </section>
  );
};
