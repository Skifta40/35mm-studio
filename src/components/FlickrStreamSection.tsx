import React, { useState, useMemo } from 'react';
import { FLICKR_PHOTOS, Photo, STUDIO_INFO } from '../data/portfolioData';
import { Camera, ExternalLink, Filter, Grid3X3, StretchHorizontal, Maximize2 } from 'lucide-react';

interface FlickrStreamSectionProps {
  onSelectPhoto: (photo: Photo) => void;
}

export const FlickrStreamSection: React.FC<FlickrStreamSectionProps> = ({
  onSelectPhoto,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [layoutView, setLayoutView] = useState<'masonry' | 'grid'>('masonry');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Street', 'Automotive', 'Architectural', 'Landscape'];

  const filteredPhotos = useMemo(() => {
    return FLICKR_PHOTOS.filter((photo) => {
      const matchesCategory =
        selectedCategory === 'All' || photo.category === selectedCategory;
      const matchesSearch =
        photo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        photo.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (photo.description && photo.description.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="flickr-archive" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-neutral-900/60">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 font-poppins mb-2">
            <Camera className="w-3.5 h-3.5 text-neutral-300" />
            <span>Official Photostream Archive</span>
            <span aria-hidden="true">·</span>
            <span className="text-white">25 Photographs</span>
          </div>
          <h2 className="font-aktura text-5xl sm:text-7xl md:text-8xl text-neutral-100">
            Flickr Photostream
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-poppins max-w-2xl mt-3 font-light">
            Directly from <a href={STUDIO_INFO.flickrUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-200 underline hover:text-white">flic.kr/ps/46iTo7</a>. Uncompressed full-frame 35mm captures featuring portraits, street life, and Mediterranean atmospheres.
          </p>
        </div>

        {/* Flickr Profile external link button */}
        <a
          href={STUDIO_INFO.flickrUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2 text-xs font-poppins uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 rounded-md transition-colors"
        >
          <span>Open on Flickr</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Filter and View Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-neutral-900">
        {/* Category Filter tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const count = cat === 'All' 
              ? FLICKR_PHOTOS.length 
              : FLICKR_PHOTOS.filter(p => p.category === cat).length;
            const isActive = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-poppins rounded-md transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-neutral-200 text-neutral-950 font-medium'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] ${isActive ? 'text-neutral-700' : 'text-neutral-500'}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Search & Layout View switch */}
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search photos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-3 py-1.5 text-xs font-poppins bg-neutral-900 border border-neutral-800 rounded-md text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 w-36 sm:w-44"
          />

          <div className="flex items-center bg-neutral-900 p-0.5 rounded-md border border-neutral-800">
            <button
              onClick={() => setLayoutView('masonry')}
              className={`p-1.5 rounded transition-colors ${
                layoutView === 'masonry' ? 'bg-neutral-800 text-white' : 'text-neutral-500 hover:text-neutral-300'
              }`}
              title="Masonry Gallery"
            >
              <StretchHorizontal className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setLayoutView('grid')}
              className={`p-1.5 rounded transition-colors ${
                layoutView === 'grid' ? 'bg-neutral-800 text-white' : 'text-neutral-500 hover:text-neutral-300'
              }`}
              title="Uniform Grid"
            >
              <Grid3X3 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Empty State */}
      {filteredPhotos.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-sm text-neutral-400 font-poppins">No photographs match your query "{searchQuery}".</p>
          <button
            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
            className="mt-4 px-4 py-2 text-xs text-white bg-neutral-900 border border-neutral-800 rounded-md hover:bg-neutral-800"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Photography Cards Display */}
      {layoutView === 'masonry' ? (
        /* Dynamic Multi-Column Responsive Masonry */
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => onSelectPhoto(photo)}
              className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-xl bg-neutral-950 border border-neutral-800/80 hover:border-neutral-600 transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              {/* Image Frame */}
              <div className="relative overflow-hidden bg-neutral-900">
                <img
                  src={photo.thumbnailUrl || photo.url}
                  alt={photo.title}
                  className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Overlay Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <h4 className="font-poppins text-sm font-semibold tracking-wide text-white">
                        {photo.title}
                      </h4>
                      <p className="text-xs text-neutral-300 font-poppins mt-0.5 line-clamp-2">
                        {photo.description}
                      </p>
                    </div>
                    <span className="p-2 bg-white/20 backdrop-blur-md rounded-lg text-white">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-3 bg-neutral-950 flex items-center justify-between text-xs font-poppins border-t border-neutral-900">
                <div>
                  <span className="text-neutral-200 font-medium">{photo.title}</span>
                  <div className="flex items-center gap-2 text-[11px] text-neutral-500 mt-0.5">
                    <span>{photo.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{photo.dateTaken || '35mm'}</span>
                  </div>
                </div>

                <a
                  href={photo.flickrUrl || STUDIO_INFO.flickrUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`View ${photo.title} on Flickr`}
                  className="p-1.5 text-neutral-500 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Uniform Grid View */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => onSelectPhoto(photo)}
              className="group cursor-pointer overflow-hidden rounded-xl bg-neutral-950 border border-neutral-800/80 hover:border-neutral-600 transition-all duration-300 shadow-xl hover:-translate-y-1 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden bg-neutral-900 relative">
                <img
                  src={photo.thumbnailUrl || photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-xs text-white font-poppins font-medium flex items-center gap-1">
                    <Maximize2 className="w-3.5 h-3.5" /> Tap to view high-res
                  </span>
                </div>
              </div>

              <div className="p-3.5 flex items-center justify-between text-xs font-poppins border-t border-neutral-900">
                <div>
                  <h4 className="text-neutral-200 font-medium">{photo.title}</h4>
                  <div className="flex items-center gap-1.5 text-[11px] text-neutral-500 mt-0.5">
                    <span>{photo.category}</span>
                    <span>·</span>
                    <span>{photo.width ? `${photo.width}×${photo.height}` : 'High-Res'}</span>
                  </div>
                </div>
                <a
                  href={photo.flickrUrl || STUDIO_INFO.flickrUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 text-neutral-500 hover:text-white"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
