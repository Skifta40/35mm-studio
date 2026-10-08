import React from 'react';
import { GENRE_SECTIONS, Photo } from '../data/portfolioData';
import { Maximize2, Compass } from 'lucide-react';

interface GenreGalleryProps {
  onSelectPhoto: (photo: Photo) => void;
  onExploreGenre: (genre: string) => void;
}

export const GenreGallery: React.FC<GenreGalleryProps> = ({
  onSelectPhoto,
  onExploreGenre,
}) => {
  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Editorial Section Header */}
      <div className="mb-14 sm:mb-20 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-poppins">
          Specialized Disciplines
        </span>
        <h2 className="font-aktura text-5xl sm:text-7xl md:text-8xl text-neutral-100 mt-2">
          Featured Genres
        </h2>
        <div className="w-12 h-[1px] bg-neutral-700 mx-auto mt-4" />
      </div>

      {/* Alternating Genre Showcases */}
      <div className="space-y-24 sm:space-y-36">
        {GENRE_SECTIONS.map((genre, idx) => {
          const isEven = idx % 2 === 0;

          // Synthetic Photo object for Lightbox modal
          const photoObj: Photo = {
            id: `genre-${genre.id}`,
            title: genre.title,
            category: (genre.title === 'Land-scape' ? 'Landscape' : genre.title) as any,
            url: genre.image,
            thumbnailUrl: genre.image,
            description: genre.description,
            cameraInfo: genre.specs.join(' · ')
          };

          return (
            <div
              key={genre.id}
              className={`flex flex-col ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-10 lg:gap-16`}
            >
              {/* Text Narrative Column */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs text-neutral-500 font-poppins mb-3">
                  <span className="font-mono text-neutral-400">{genre.kicker}</span>
                  <span aria-hidden="true">/</span>
                  <span>35mm Production</span>
                </div>

                <h3 className="font-aktura text-5xl sm:text-6xl md:text-7xl text-white tracking-wide mb-6">
                  {genre.title}
                </h3>

                <p className="text-sm sm:text-base text-neutral-300 font-poppins leading-relaxed mb-6 font-light">
                  {genre.description}
                </p>

                {/* Editorial Quote */}
                <blockquote className="border-l border-neutral-700 pl-4 py-1 my-2 text-xs sm:text-sm text-neutral-400 italic font-poppins">
                  "{genre.quote}"
                </blockquote>

                {/* Specs / Tags - Anti-pill clean typographic separator */}
                <div className="flex flex-wrap items-center gap-2 mt-6 text-xs text-neutral-400 font-poppins">
                  {genre.specs.map((spec, sIdx) => (
                    <React.Fragment key={spec}>
                      {sIdx > 0 && <span aria-hidden="true" className="text-neutral-600">·</span>}
                      <span className="text-neutral-300">{spec}</span>
                    </React.Fragment>
                  ))}
                </div>

                {/* Action button */}
                <div className="mt-8">
                  <button
                    onClick={() => onExploreGenre(genre.title)}
                    className="inline-flex items-center gap-2 text-xs font-poppins uppercase tracking-widest text-neutral-300 hover:text-white border-b border-neutral-700 hover:border-white pb-1 transition-colors"
                  >
                    <Compass className="w-3.5 h-3.5" />
                    <span>Explore {genre.title} Gallery</span>
                  </button>
                </div>
              </div>

              {/* Image Frame Column */}
              <div className="w-full lg:w-1/2">
                <div
                  onClick={() => onSelectPhoto(photoObj)}
                  className="group relative cursor-pointer overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800 shadow-2xl transition-all duration-300 hover:border-neutral-500"
                >
                  <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-neutral-950">
                    <img
                      src={genre.image}
                      alt={genre.alt}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Measured contrast scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Corner affordance */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white pointer-events-none">
                    <div className="text-xs font-poppins font-medium tracking-wide">
                      <span className="text-neutral-300">Click to view full 35mm print</span>
                    </div>
                    <span className="p-2 bg-neutral-900/80 backdrop-blur-md rounded-lg text-neutral-200 group-hover:text-white group-hover:bg-neutral-800 transition-colors">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
